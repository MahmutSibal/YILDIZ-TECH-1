import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../../Photos/bos.jpg';

const Hero = () => {
  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Decorative background shapes that replace the heavy three.js sphere bubble. */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <svg className="w-[70%] max-w-4xl opacity-40 -z-10" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="g1" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#1d7eff" stopOpacity="0.18" />
              <stop offset="60%" stopColor="#1d7eff" stopOpacity="0.09" />
              <stop offset="100%" stopColor="#1d7eff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="g2" cx="60%" cy="60%" r="40%">
              <stop offset="0%" stopColor="#5fb0ff" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#5fb0ff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g1)" />
          <circle cx="560" cy="160" r="180" fill="url(#g2)" />
        </svg>
      </div>
  <div className="relative z-10 px-6 max-w-4xl text-center code-font">
        <motion.img
          initial={{opacity:0, y:-20}}
          animate={{opacity:1, y:0}}
          transition={{delay:0.2}}
          src={logo}
          alt="YildizTech Logo"
          className="mx-auto mb-4 w-28 h-28 md:w-36 md:h-36 object-contain"
        />
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4}} className="text-5xl md:text-6xl font-bold gradient-text leading-tight">
          YildizTech
        </motion.h1>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.55}} className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-300">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Yazılım Geliştirme</span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Yapay Zeka</span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Gömülü Sistemler</span>
        </motion.div>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.7}} className="mt-4 text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
          İhtiyacı netleştirip, doğru çözümü hızlıca hayata geçiriyoruz: prototip, MVP ve üretim kalitesinde teslimat için uçtan uca teknoloji partneriniz.
        </motion.p>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/services" className="px-10 py-4 rounded-xl bg-brand-500 hover:bg-brand-400 font-medium shadow-lg shadow-brand-500/20 text-white transition transform hover:scale-105 active:scale-95 text-center">Hizmetlerimiz</Link>
          <Link to="/contact" className="px-10 py-4 rounded-xl border border-white/10 hover:border-white/20 font-medium backdrop-blur-md bg-white/5 text-white transition transform hover:scale-105 active:scale-95 text-center">Teklif / İletişim</Link>
        </motion.div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-brand-300"> 
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto opacity-90">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </header>
  );
};

export default Hero;
