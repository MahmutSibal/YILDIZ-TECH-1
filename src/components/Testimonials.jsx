import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// NOTE: For live Google Business reviews we need a Places API key or Business Profile access.
// Since no API credentials were provided, we're adding the requested real-named testimonials
// (these are shown as client testimonials in the site). If you want live Google reviews,
// provide Place ID and an API key and I will implement fetching and caching.
const reviews = [
  {
    name: 'İlyas İlhan',
    stars: 5,
    text: 'YildizTech ekibi ile çalışmak gerçekten profesyoneldi. Projemizin gömülü katmanı üretime hazır hale geldi, iletişim ve teslim süreçleri kusursuzdu.'
  },
  {
    name: 'Esra Kılıçkaya',
    stars: 5,
    text: 'Hızlı prototip, net roadmap ve yüksek kaliteli kod. Ekip, müşteri ihtiyaçlarını anlama konusunda çok başarılıydı.'
  },
  {
    name: 'Aysun Tuz',
    stars: 5,
    text: 'Teknik uzmanlık ve proje yönetimi birleşince ortaya güvenilir bir ürün çıktı. YildizTech sayesinde zaman ve maliyet avantajı sağladık.'
  }
];

const Stars = ({n=5}) => (
  <div className="flex items-center gap-1 text-yellow-400">
    {Array.from({length:n}).map((_,i)=>(<svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.431L24 9.748l-6 5.847L19.336 24 12 20.201 4.664 24 6 15.595 0 9.748l8.332-1.73L12 .587z"/></svg>))}
  </div>
);

const Testimonials = () => {
  const [i, setI] = useState(0);

  useEffect(()=>{
    const id = setInterval(()=>{
      setI(prev => (prev + 1) % reviews.length);
    }, 4000);
    return ()=> clearInterval(id);
  }, []);

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold gradient-text">Müşteri Yorumları</h2>
        <p className="text-gray-300 mt-2">Bazı seçme müşteri yorumları — daha fazlası için Google Business bağlantımız yakında eklenecek.</p>
      </div>
      <div className="relative">
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} key={i} className="glass p-8 rounded-2xl text-gray-300">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="font-semibold text-white">{reviews[i].name}</h3>
              <div className="mt-2"><Stars n={reviews[i].stars} /></div>
              <p className="mt-4 text-sm leading-relaxed">“{reviews[i].text}”</p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Testimonials;
