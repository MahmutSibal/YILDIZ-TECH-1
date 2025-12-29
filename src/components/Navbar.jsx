import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/i18n';
import logo from '../../Photos/bos.jpg';

const makeLinks = (t) => ([
  { to: '/', label: t('home') },
  { to: '/about', label: t('about') },
  { to: '/services', label: t('services') },
  { to: '/kvkk', label: t('kvkk') },
  { to: '/contact', label: t('contact') }
]);

const Navbar = () => {
  const [open,setOpen] = useState(false);
  const { t } = useI18n();
  const links = makeLinks(t);
  const calendlyUrl = 'https://calendly.com/mahmutsibal9';
  return (
    <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-xl bg-gray-950/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <Link to="/" onClick={()=>setOpen(false)} className="flex items-center gap-3 md:gap-4 font-semibold tracking-wide py-1">
          <img src={logo} alt="Logo" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
          <span className="gradient-text text-xl md:text-2xl">YildizTech</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map(l=> <Link key={l.to} to={l.to} className="text-gray-300 hover:text-white transition">{l.label}</Link>)}
          <a href={calendlyUrl} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-400 text-white font-medium text-xs">Keşif Görüşmesi</a>
          <a href="https://wa.me/905521643855" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-400 text-white font-medium text-xs">WhatsApp</a>
        </div>
        <button className="md:hidden relative w-10 h-10 flex flex-col justify-center gap-1.5 p-2 rounded-md bg-white/5 border border-white/10" onClick={()=>setOpen(o=>!o)} aria-label="Menu">
          <span className={`h-0.5 w-full bg-white transition ${open?'rotate-45 translate-y-2':''}`}></span>
          <span className={`h-0.5 w-full bg-white transition ${open?'opacity-0':''}`}></span>
            <span className={`h-0.5 w-full bg-white transition ${open?' -rotate-45 -translate-y-2':''}`}></span>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0, opacity:0}} className="md:hidden px-6 pb-6 flex flex-col gap-4 text-sm bg-gray-950/95 border-b border-white/10">
            {links.map(l=> <Link onClick={()=>setOpen(false)} key={l.to} to={l.to} className="text-gray-300 hover:text-white transition py-2 border-b border-white/5">{l.label}</Link>)}
            <a href={calendlyUrl} target="_blank" rel="noreferrer" onClick={()=>setOpen(false)} className="px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-400 text-white font-medium text-xs w-max">Keşif Görüşmesi</a>
            <a href="https://wa.me/905521643855" target="_blank" rel="noreferrer" onClick={()=>setOpen(false)} className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-400 text-white font-medium text-xs w-max">WhatsApp</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
