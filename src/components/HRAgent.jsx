import React, { useState, useRef, useEffect } from 'react';

const HRAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logs, setLogs] = useState([
    { type: 'system', text: 'HR_AGENT.exe initialized...' },
    { type: 'system', text: 'Awaiting recruiter input.' }
  ]);
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs, isOpen]);

  const handleCommand = (cmd, response) => {
    // Önce kullanıcının tıkladığı komutu ekrana bas
    setLogs(prev => [...prev, { type: 'user', text: `> ${cmd}` }]);
    
    // Ufak bir gecikme ile (gerçekçi hissettirmesi için) cevabı bas
    setTimeout(() => {
      setLogs(prev => [...prev, { type: 'agent', text: response }]);
    }, 600);
  };

  const commands = [
    {
      id: 'whoami',
      cmd: 'tell_me_about_yourself()',
      response: 'OMÜ Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. İYTE Makine geçmişimden gelen analitik disiplini, modern yazılım mimarileriyle birleştiriyorum. Sadelikten yanayım.'
    },
    {
      id: 'whyhire',
      cmd: 'why_should_we_hire_you()',
      response: 'Sadece kod yazmıyorum; ürünün mimarisini, veri akışını ve İK süreçlerini (örneğin şu an bu botu okuyor olmanız gibi) bir bütün olarak ele alıyorum. Fail-fast felsefesini benimsiyorum.'
    },
    {
      id: 'hobbies',
      cmd: 'execute_beyond_the_code()',
      response: 'Kod dışında ETS2\'de uzun yol stresini atar, Football Manager\'da taktik denerim. Bordo-mavi renklere sempatim vardır.'
    }
  ];

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
    <div className="fixed bottom-8 right-8 w-[350px] sm:w-[400px] bg-[#1d1d1f] rounded-xl shadow-2xl overflow-hidden flex flex-col z-50 border border-gray-800">
      {/* Terminal Header */}
      <div className="bg-[#2d2d2f] px-4 py-3 flex justify-between items-center border-b border-gray-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-600" onClick={() => setIsOpen(false)}></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="mono-detail text-[10px] text-gray-400">recruiter_session_01</span>
      </div>

      {/* Terminal Body */}
      <div className="p-5 h-[300px] overflow-y-auto flex flex-col gap-3 text-xs sm:text-sm font-mono">
        {logs.map((log, index) => (
          <div key={index} className={`flex ${log.type === 'user' ? 'text-gray-400' : log.type === 'system' ? 'text-gray-500' : 'text-green-400'}`}>
            <span className="leading-relaxed whitespace-pre-wrap">{log.text}</span>
          </div>
        ))}
        <div ref={endOfMessagesRef} />
      </div>

      {/* Terminal Footer / Controls */}
      <div className="p-3 bg-[#151516] border-t border-gray-800 flex flex-col gap-2">
        {commands.map((c) => (
          <button
            key={c.id}
            onClick={() => handleCommand(c.cmd, c.response)}
            className="text-left px-3 py-2 text-[10px] sm:text-xs font-mono text-gray-400 hover:text-white hover:bg-blue-600/20 rounded transition-colors"
          >
            <span className="text-blue-500 mr-2">[run]</span>{c.cmd}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HRAgent;