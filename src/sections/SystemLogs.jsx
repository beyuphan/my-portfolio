import React from 'react';

const SystemLogs = () => {
  const logs = [
    {
      date: "2022_Q3",
      error: "İYTE Makine Mühendisliği'ne başlandı. Beklenen akademik tutku ve yazılım mimarilerine olan yönelim eksik kaldı.",
      resolution: "İlk yılın sonunda sistem çekirdeği yeniden yapılandırıldı. OMÜ Bilgisayar Mühendisliği'ne yatay geçiş yapıldı. [STATUS: HEDEFE HİZALANDI]"
    },
    {
      date: "2024_Q1",
      error: "JulardzijaSmile projesinde anlık veri akışı için standart REST API mimarisi zorlandı, yoğun trafikte darboğaz (bottleneck) oluştu.",
      resolution: "REST API terk edildi. WebSocket ve NestJS Gateway mimarisine geçilerek gerçek zamanlı iletişim mikroservis standartlarında ayağa kaldırıldı."
    },
    {
      date: "2024_Q4",
      error: "Mobil e-ticaret uygulamasında API'nin favoriler özelliğini desteklememesi UX'i tamamen statik hale getirdi.",
      resolution: "DataStore kullanılarak cihaz tabanlı yerel favori sistemi kuruldu ve ViewModel seviyesinde Swipe-to-Action mekanizmaları yazılarak kısıtlama aşıldı."
    }
  ];

  return (
    <section className="py-32 px-8 max-w-6xl mx-auto border-t border-gray-100 reveal">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#1d1d1f] mb-4">
          System Logs & <span className="italic text-gray-400">Reroutes</span>
        </h2>
        <p className="text-xl text-gray-500 max-w-2xl font-light">
          İşler her zaman ilk seferinde mükemmel çalışmaz. Önemli olan hatayı erken fark edip (fail fast), sistemi daha güçlü bir şekilde yeniden inşa etmektir.
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
                    {log.error}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 mt-0.5">[{'>'}]</span>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="text-black font-bold mr-2">RESOLUTION:</span>
                    {log.resolution}
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