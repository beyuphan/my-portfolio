import React from 'react';
import { useApp } from '../context/AppContext';

const Contact = () => {
  const { t } = useApp();
  const titleLines = t('contact.title').split('\n');

  return (
    <section id="contact" className="max-w-7xl mx-auto px-8 py-32 border-t border-gray-100">
      <div className="text-center">
        <span className="mono-detail block mb-8">{t('contact.label')}</span>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-16 hover:text-blue-600 transition-colors cursor-default">
          {titleLines.map((line, i) => (
            <React.Fragment key={i}>
              {line}{i < titleLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <a href="mailto:eyuphan546@gmail.com" className="nav-link text-black text-lg underline decoration-gray-200 underline-offset-8">
            Email
          </a>
          <a href="https://linkedin.com/in/eyuphanbinici" target="_blank" rel="noreferrer" className="nav-link text-black text-lg underline decoration-gray-200 underline-offset-8">
            LinkedIn
          </a>
          <a href="https://github.com/beyuphan" target="_blank" rel="noreferrer" className="nav-link text-black text-lg underline decoration-gray-200 underline-offset-8">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
