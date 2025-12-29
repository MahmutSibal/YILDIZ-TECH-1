import React from 'react';
import { motion } from 'framer-motion';

const stacks = [
  { name: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS'], img: 'https://cdn-icons-png.flaticon.com/512/919/919851.png' },
  { name: 'Backend & Cloud', items: ['Node.js', 'Python', 'FastAPI', 'AWS/GCP/Azure'], img: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png' },
  { name: 'AI / ML', items: ['PyTorch', 'TensorFlow', 'Transformers', 'ONNX'], img: 'https://cdn-icons-png.flaticon.com/512/3059/3059199.png' },
  { name: 'Embedded & Firmware', items: ['C/C++', 'RTOS (FreeRTOS/Zephyr)', 'OTA', 'Hardware-in-the-loop'], img: 'https://cdn-icons-png.flaticon.com/512/2922/2922563.png' },
  { name: 'DevOps & Infra', items: ['Docker', 'Kubernetes', 'CI/CD', 'Observability'], img: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
  { name: 'Security & Compliance', items: ['KVKK / GDPR', 'Secure Boot', 'SAST/DAST'], img: 'https://cdn-icons-png.flaticon.com/512/2917/2917242.png' },
];

const Technologies = () => {
  return (
    <section className="relative py-28 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold gradient-text">Teknoloji Yelpazemiz</h2>
        <p className="mt-4 text-gray-300">Modern, güvenilir ve sürdürülebilir teknoloji yığınları.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {stacks.map((t,i)=>(
          <motion.div key={t.name} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="glass rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <img src={t.img} alt={t.name} className="w-10 h-10 object-contain" />
              <h3 className="font-semibold text-white">{t.name}</h3>
            </div>
            <p className="text-sm text-gray-300 mt-4">{t.items.join(' • ')}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {t.items.map(it=>(<span key={it} className="text-xs bg-white/5 px-2 py-1 rounded">{it}</span>))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Technologies;
