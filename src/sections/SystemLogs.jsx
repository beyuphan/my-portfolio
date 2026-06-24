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
