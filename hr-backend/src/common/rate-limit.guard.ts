import { CanActivate, ExecutionContext, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Request } from 'express';

/**
 * Basit in-memory rate limiter. Gemini kotasını ve spam'i korumak için
 * IP başına hem kısa pencere (spam) hem günlük limit uygular.
 * Tek instance için yeterli; çok-instance deploy'da Redis'e taşınmalı.
 */
@Injectable()
export class RateLimitGuard implements CanActivate {
  private readonly windowMs = 60_000; // 1 dakika
  private readonly maxPerWindow = 8; // dakikada 8 istek
  private readonly dayMs = 24 * 60 * 60 * 1000;
  private readonly maxPerDay = 100; // günde 100 istek

  private hits = new Map<string, number[]>();
  private daily = new Map<string, { count: number; resetAt: number }>();

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>();
    const ip = (req.ip || req.socket?.remoteAddress || 'unknown').toString();
    const now = Date.now();

    // Günlük limit
    const day = this.daily.get(ip);
    if (!day || now > day.resetAt) {
      this.daily.set(ip, { count: 1, resetAt: now + this.dayMs });
    } else {
      if (day.count >= this.maxPerDay) {
        throw new HttpException(
          'Günlük soru limitine ulaşıldı. Lütfen yarın tekrar deneyin.',
          HttpStatus.TOO_MANY_REQUESTS,
        );
      }
      day.count += 1;
    }

    // Kısa pencere limiti
    const recent = (this.hits.get(ip) || []).filter((t) => now - t < this.windowMs);
    if (recent.length >= this.maxPerWindow) {
      throw new HttpException(
        'Çok hızlı soru gönderiyorsunuz. Lütfen biraz bekleyin.',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }
    recent.push(now);
    this.hits.set(ip, recent);

    return true;
  }
}
