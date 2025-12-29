import React, { useState } from 'react';
import { motion } from 'framer-motion';

// İşletme WhatsApp sabit numarası
const BUSINESS_WHATSAPP = '905521643855';
const BUSINESS_EMAIL = 'info.yildiztech@gmail.com';
const LINKEDIN_COMPANY_URL = 'https://www.linkedin.com/company/y%C4%B1ld%C4%B1ztech/';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setStatus('submitting');
    const subject = encodeURIComponent('Web sitesi iletişim formu');
    const body = encodeURIComponent(`Ad: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`);
    const mailtoUrl = `mailto:${encodeURIComponent(BUSINESS_EMAIL)}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setStatus('success');
  };
  return (
    <section id="contact" className="relative py-32 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold gradient-text">İletişim</h2>
        <p className="mt-4 text-gray-300">İhtiyaçlarınıza özel bir keşif görüşmesi planlayalım. 48 saat içinde dönüş yapıyoruz.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 flex flex-col gap-5">
          <input value={name} onChange={(e)=>setName(e.target.value)} required placeholder="Ad Soyad" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500" />
          <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="E-posta" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500" />
          <textarea value={message} onChange={(e)=>setMessage(e.target.value)} required rows={5} placeholder="Mesajınız" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500" />
          <button disabled={status==='submitting'} type="submit" className="mt-2 px-6 py-3 rounded-lg bg-brand-500 hover:bg-brand-400 font-medium transition disabled:opacity-60">{status==='submitting' ? 'Gönderiliyor…' : 'Gönder'}</button>
          {status==='success' && <p className="text-xs text-green-400">Teşekkürler! Mesajınız alındı.</p>}
          {error && <p className="text-xs text-red-400">{error}</p>}
        </form>
        <div className="space-y-8">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2">Hızlı Erişim</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><span className="text-white">Genel WhatsApp (İşletme):</span> <a className="text-brand-300 hover:underline" href={`https://api.whatsapp.com/send?phone=${BUSINESS_WHATSAPP}`} target="_blank" rel="noreferrer">+90 552 164 38 55</a></li>
              <li><span className="text-white">E-posta:</span> <a className="text-brand-300 hover:underline" href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a></li>
              <li><span className="text-white">LinkedIn:</span> <a className="text-brand-300 hover:underline" href={LINKEDIN_COMPANY_URL} target="_blank" rel="noreferrer">YildizTech</a></li>
            </ul>
          </motion.div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2">Neden Biz?</h3>
            <p className="text-sm text-gray-300 leading-relaxed">Model tabanlı üretken geliştirme, firmware optimizasyonu ve sistem seviyesi entegrasyon becerilerini aynı çatı altında topluyoruz. Risk azaltıcı hızlı prototip + güvenilir ölçekleme yaklaşımı.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
