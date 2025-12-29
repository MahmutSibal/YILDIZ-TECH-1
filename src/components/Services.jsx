import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Ürün Mühendisliği & Müşteri İhtiyaç Analizi',
    desc: 'Fikirden pazara: gereksinim analizi, teknik fizibilite, hızlandırılmış prototipleme ve MVP teslimi. İş hedefleriyle teknik yol haritası oluşturuyoruz.',
    bullets: ['İş ihtiyaç analizi', 'Hızlı prototip & PoC', 'MVP tasarımı'],
    icon: 'https://cdn-icons-png.flaticon.com/512/2921/2921822.png'
  },
  {
    title: 'Yapay Zeka & Üretken Modeller',
    desc: 'Model seçiminden üretime kadar ML/LLM çözümleri: veri işleme, model eğitimi, model optimizasyonu ve güvenli dağıtım.',
    bullets: ['Veri hazırlama & ETL', 'Model eğitimi & değerlendirme', 'Model dağıtımı (ONNX/TF Lite)'],
    icon: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png'
  },
  {
    title: 'Gömülü Sistemler & Firmware',
    desc: 'Gerçek zamanlı işletim sistemleri, enerji-efektif firmware, donanım ile uyumlu test süreçleri ve sahada güncelleme (OTA) çözümleri.',
    bullets: ['RTOS & Bare-metal', 'Firmware test & CI', 'OTA güncellemeler'],
    icon: 'https://cdn-icons-png.flaticon.com/512/2647/2647626.png'
  },
  {
    title: 'Bulut, Edge & Entegrasyon',
    desc: 'Bulut altyapısı, API tasarımı ve edge cihazların güvenli entegrasyonu — izlenebilir, dayanıklı servisler kuruyoruz.',
    bullets: ['Mikroservis mimarileri', 'API & Webhooks', 'Edge-cloud senkronizasyonu'],
    icon: 'https://cdn-icons-png.flaticon.com/512/2907/2907240.png'
  },
  {
    title: 'DevOps, Güvenlik & Uyumluluk',
    desc: 'CI/CD pipeline, güvenlik taramaları, containerization ve üretim güvenliği; ayrıca KVKK ve veri güvenliği uyumluluğu danışmanlığı.',
    bullets: ['CI/CD & otomasyon', 'Containerization (Docker/K8s)', 'Güvenlik & KVKK uyumu'],
    icon: 'https://cdn-icons-png.flaticon.com/512/2859/2859904.png'
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold gradient-text">Hizmetlerimiz</h2>
        <p className="mt-4 text-gray-300">İhtiyaç analizi → prototip/MVP → üretim: uçtan uca teslimat ve sürdürülebilir bakım.</p>
      </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s,i)=>(
              <motion.div key={s.title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.12}} className="glass rounded-2xl p-8 flex flex-col items-start hover:shadow-xl transition">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-white/5">
                    <img src={s.icon} alt={s.title} className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mt-4">{s.desc}</p>
                {s.bullets && (
                  <ul className="mt-4 text-sm text-gray-300 list-disc ml-5">
                    {s.bullets.map(b=>(<li key={b}>{b}</li>))}
                  </ul>
                )}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="https://calendly.com/mahmutsibal9" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded bg-brand-500 hover:bg-brand-400 text-white text-sm font-medium">Keşif Görüşmesi</a>
                  <a href="https://api.whatsapp.com/send?phone=905521643855&text=Merhaba%2C%20hizmetleriniz%20hakk%C4%B1nda%20teklif%20almak%20istiyorum." target="_blank" rel="noreferrer" aria-label="WhatsApp ile teklif al" className="inline-block px-4 py-2 rounded bg-white/5 border border-white/10 hover:border-white/20 text-gray-100 text-sm">WhatsApp</a>
                </div>
              </motion.div>
            ))}
          </div>
    </section>
  );
};

export default Services;
