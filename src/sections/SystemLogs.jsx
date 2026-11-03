import React from 'react';
import { useApp } from '../context/AppContext';

const SystemLogs = () => {
  const { t, L } = useApp();

  const logs = [
    {
      date: "2022_Q3",
      error: {
        tr: "İYTE Makine Mühendisliği'ne başlandı. Beklenen akademik tutku ve yazılım mimarilerine olan yönelim eksik kaldı.",
        en: "Started Mechanical Engineering at İYTE. The expected academic passion and inclination toward software architecture were missing."
      },
      resolution: {
        tr: "İlk yılın sonunda sistem çekirdeği yeniden yapılandırıldı. OMÜ Bilgisayar Mühendisliği'ne yatay geçiş yapıldı. [STATUS: HEDEFE HİZALANDI]",
        en: "At the end of the first year the system core was restructured. Transferred to Computer Engineering at OMU. [STATUS: ALIGNED TO TARGET]"
      }
    },
    {
      date: "2024_Q1",
      error: {
        tr: "JulardzijaSmile projesinde anlık veri akışı için standart REST API mimarisi zorlandı, yoğun trafikte darboğaz (bottleneck) oluştu.",
        en: "In the JulardzijaSmile project, the standard REST API architecture struggled with real-time data flow, creating a bottleneck under heavy traffic."
      },
      resolution: {
        tr: "REST API terk edildi. WebSocket ve NestJS Gateway mimarisine geçilerek gerçek zamanlı iletişim mikroservis standartlarında ayağa kaldırıldı.",
        en: "REST API was dropped. Migrating to WebSocket and a NestJS Gateway architecture, real-time communication was rebuilt at microservice standards."
      }
    },
    {
      date: "2024_Q4",
      error: {
        tr: "Mobil e-ticaret uygulamasında API'nin favoriler özelliğini desteklememesi UX'i tamamen statik hale getirdi.",
        en: "In the mobile e-commerce app, the API not supporting a favorites feature made the UX entirely static."
      },
      resolution: {
        tr: "DataStore kullanılarak cihaz tabanlı yerel favori sistemi kuruldu ve ViewModel seviyesinde Swipe-to-Action mekanizmaları yazılarak kısıtlama aşıldı.",
        en: "A device-based local favorites system was built with DataStore, and Swipe-to-Action mechanics at the ViewModel level overcame the limitation."
      }
    },
    {
      date: "2025_Q4",
      error: {
        tr: "Görüntü İşleme uygulamasında sabit eşikli belge tespiti, koyu zeminde ve gölgeli telefon fotoğraflarında kâğıdı kaçırdı; OMR ise ters çekilen formları yanlış okudu.",
        en: "In the image-processing app, fixed-threshold document detection missed the paper on dark backgrounds and in shadowed phone photos, and OMR misread forms shot upside down."
      },
      resolution: {
        tr: "Tespit kademeli hale getirildi: parlak bölge adayları, GrabCut ve kenar doğrusu uydurma, olmazsa manuel köşe seçimi. OMR'de kâğıt dört yönde denenip en tutarlı okuma seçildi.",
        en: "Detection became a cascade: bright-region candidates, GrabCut and edge-line fitting, then manual corner selection as a last resort. OMR now tries four orientations and keeps the most consistent reading."
      }
    },
    {
      date: "2026_Q3",
      error: {
        tr: "Mısra'nın ilk kürasyon sürümü tek bir uzun tool-calling sohbetiydi; Groq'un dakikalık token sınırına takıldı. Sonraki sürümde model, listede olmayan şiir başlıkları uydurmaya başladı.",
        en: "Mısra's first curation version was one long tool-calling chat and hit Groq's per-minute token limit. In the next version, the model started inventing poem titles that weren't in the list."
      },
      resolution: {
        tr: "Model artık önce yalnızca şair seçiyor, sonra o şairin doğrulanmış listesinden çoktan seçmeli bir şiir seçiyor. Listede olmayan bir şeyi seçmesi mümkün değil.",
        en: "The model now first picks only a poet, then picks a poem multiple-choice from that poet's verified list. It cannot choose anything that isn't on the list."
      }
    },
    {
      date: "2026_Q4",
      error: {
        tr: "Kıvılcım'daki yangın havası indeksi sezgisel olarak mantıklıydı. Geçmiş tespitlere karşı ölçünce yangın olan ve olmayan yerleri ancak zayıf ayırdı (AUC ≈ 0.7), yangının ertesi gün büyümesiyle ise hiç ilişkisi çıkmadı.",
        en: "Kıvılcım's fire-weather index made intuitive sense. Measured against past detections, it only weakly separated fire from no-fire places (AUC ≈ 0.7) and showed no relation to whether a fire grew the next day."
      },
      resolution: {
        tr: "İndeks \"deneysel\" etiketiyle kaldı, yayılım tahmini olarak sunulmuyor. Ölçüm sonuçları sitede /methodology sayfasında herkese açık ve tekrar üretilebilir.",
        en: "The index stays, labeled experimental, and is never presented as a spread forecast. The measurements are public on the site's /methodology page and reproducible."
      }
    },
    {
      date: "2026_Q4",
      error: {
        tr: "HuggingFace Space'i \"Scheduling failure: unable to schedule\" hatasıyla düştü ve 503 verdi. Kodda bir sorun yoktu.",
        en: "The HuggingFace Space went down with \"Scheduling failure: unable to schedule\" and returned 503. The code was fine."
      },
      resolution: {
        tr: "Önce Space'in durumunu API'den okuyup hatanın altyapıdan geldiğini doğruladım, sonra boş bir commit ile yeniden derlemeyi tetikledim. Space yeniden RUNNING oldu.",
        en: "I first read the Space's status from the API to confirm the failure was infrastructure, then triggered a rebuild with an empty commit. The Space is RUNNING again."
      }
    }
  ];

  return (
    <section className="py-32 px-8 max-w-6xl mx-auto border-t border-gray-100 reveal">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#1d1d1f] mb-4">
          {t('syslogs.title')} <span className="italic text-gray-400">{t('syslogs.reroutes')}</span>
        </h2>
        <p className="text-xl text-gray-500 max-w-2xl font-light">
          {t('syslogs.desc')}
        </p>
      </div>

      <div className="space-y-6">
        {logs.map((log, index) => (
          <div key={index} className="group bg-white border border-gray-200 p-8 hover:border-black transition-colors duration-500">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
              {/* Tarih & Statü */}
              <div className="w-32 flex-shrink-0">
                <span className="mono-detail text-black bg-gray-100 px-3 py-1 text-[10px]">
                  {log.date}
                </span>
              </div>

              {/* Log İçeriği */}
              <div className="flex-1 space-y-4 font-mono text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5">[{'!'}]</span>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="text-black font-bold mr-2">LOG:</span>
                    {L(log.error)}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 mt-0.5">[{'>'}]</span>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="text-black font-bold mr-2">RESOLUTION:</span>
                    {L(log.resolution)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SystemLogs;
