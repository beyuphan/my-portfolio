import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';

const API_URL = import.meta.env.VITE_HR_API_URL || 'http://localhost:3000';

const HRAgent = () => {
  const { language, t } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState([
    { type: 'system', text: language === 'tr' ? 'HR_AGENT.exe başlatılıyor...' : 'HR_AGENT.exe initializing...' },
    { type: 'system', text: language === 'tr' ? 'İK profesyonelinin girişini bekliyor.' : 'Awaiting HR professional input.' }
  ]);
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs, isOpen, language]);

  // Önerilen sorular (tıklanınca gerçek backend'e gider)
  const suggestions = {
    tr: [
      'Kendinden kısaca bahseder misin?',
      'Teknik yetkinliklerin neler?',
      'En güçlü projelerin hangileri?',
      'İş deneyimin var mı?',
      'Neden seni işe almalıyız?'
    ],
    en: [
      'Can you briefly introduce yourself?',
      'What are your technical skills?',
      'Which are your strongest projects?',
      'Do you have work experience?',
      'Why should we hire you?'
    ]
  };
  const suggested = suggestions[language] || suggestions.en;

  const askQuestion = async (question) => {
    const q = question.trim();
    if (!q || loading) return;

    setInput('');
    setLogs(prev => [...prev, { type: 'user', text: `> ${q}` }]);
    setLoading(true);
    setLogs(prev => [...prev, { type: 'system', text: t('hr.thinking') }]);

    try {
      const res = await fetch(`${API_URL}/interview/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q })
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      // "thinking..." satırını cevapla değiştir
      setLogs(prev => {
        const next = [...prev];
        const idx = next.map(l => l.text).lastIndexOf(t('hr.thinking'));
        const answer = { type: 'agent', text: data.answer || '' };
        if (idx !== -1) next[idx] = answer; else next.push(answer);
        return next;
      });
    } catch {
      setLogs(prev => {
        const next = prev.filter(l => l.text !== t('hr.thinking'));
        return [...next, { type: 'error', text: t('hr.error') }];
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    askQuestion(input);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-[#1d1d1f] text-white font-mono text-[10px] sm:text-xs px-5 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-2xl flex items-center gap-3 z-50 group border border-gray-800"
      >
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse group-hover:bg-white"></div>
        <span className="tracking-widest">HR_AGENT.exe</span>
      </button>
    );
  }

  return (
    <div className="fixed z-50 bottom-4 right-4 left-4 sm:left-auto sm:right-8 sm:bottom-8 sm:w-[420px] bg-[#1d1d1f] rounded-xl shadow-2xl overflow-hidden flex flex-col border border-gray-800 max-h-[85vh] sm:max-h-[640px]">
      {/* Terminal Header */}
      <div className="bg-[#2d2d2f] px-4 py-3 flex justify-between items-center border-b border-gray-800">
        <div className="flex gap-2">
          <button
            aria-label="Kapat"
            onClick={() => setIsOpen(false)}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600"
          ></button>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-center gap-3">
          <span className="mono-detail text-[10px] text-gray-400 hidden sm:inline">hr_session_{language}</span>
          <button
            aria-label="Kapat"
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white text-xl leading-none px-1 -mr-1"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 flex-1 min-h-[150px] max-h-[50vh] overflow-y-auto flex flex-col gap-3 text-xs sm:text-sm font-mono bg-[#0f0f11]">
        {logs.map((log, index) => (
          <div
            key={index}
            className={`flex ${
              log.type === 'user'
                ? 'text-gray-400'
                : log.type === 'system'
                ? 'text-gray-500'
                : log.type === 'error'
                ? 'text-red-400'
                : 'text-green-400'
            }`}
          >
            <span className="leading-relaxed whitespace-pre-wrap break-words">{log.text}</span>
          </div>
        ))}
        <div ref={endOfMessagesRef} />
      </div>

      {/* Serbest metin girişi */}
      <form onSubmit={handleSubmit} className="p-3 bg-[#151516] border-t border-gray-800 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t('hr.placeholder')}
          disabled={loading}
          maxLength={300}
          className="flex-1 bg-[#0f0f11] text-gray-200 text-xs font-mono px-3 py-2 rounded border border-gray-800 focus:border-blue-600 outline-none disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="px-3 py-2 text-xs font-mono bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {t('hr.send')}
        </button>
      </form>

      {/* Önerilen sorular */}
      <div className="px-3 pb-3 bg-[#151516] flex flex-col gap-1.5 max-h-[140px] overflow-y-auto">
        <span className="mono-detail text-[9px] text-gray-600 mb-1">{t('hr.suggested')}</span>
        {suggested.map((q, i) => (
          <button
            key={i}
            onClick={() => askQuestion(q)}
            disabled={loading}
            className="text-left px-3 py-1.5 text-[10px] sm:text-xs font-mono text-gray-400 hover:text-white hover:bg-blue-600/20 rounded transition-colors disabled:opacity-40"
          >
            <span className="text-blue-500 mr-2">[?]</span>
            <span>{q}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HRAgent;
