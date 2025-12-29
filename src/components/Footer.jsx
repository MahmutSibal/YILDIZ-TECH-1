import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/5 text-center text-sm text-gray-300">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div>
            <h4 className="font-semibold">İletişim</h4>
            <p className="text-xs mt-2">
              <a
                href="https://www.google.com/maps?q=Cankatran,+%C3%9C%C3%A7kuyu+39.+Cd.,+21070+Kayap%C4%B1nar%2FDiyarbak%C4%B1r"
                target="_blank"
                rel="noreferrer"
                className="text-brand-300 hover:underline"
                title="Google Haritalar'da aç"
              >
                Cankatran, Üçkuyu 39. Cd., 21070 Kayapınar/Diyarbakır
              </a>
            </p>
            <p className="text-xs mt-1">Telefon: <a href="tel:+905521643855" className="text-brand-300">+90 552 164 38 55</a></p>
            <p className="text-xs mt-1">E-posta: <a href="mailto:info.yildiztech@gmail.com" className="text-brand-300">info.yildiztech@gmail.com</a></p>
            <p className="text-xs mt-1">Çalışma Saatleri: Pazartesi - Cuma, 09:00 - 18:00</p>
          </div>
          <div className="md:col-span-3 mt-4">
            <h4 className="font-semibold">Konum (Google Maps)</h4>
            <div className="mt-2 w-full rounded overflow-hidden border border-white/6">
              <iframe
                title="YildizTech Konum"
                src="https://www.google.com/maps?q=Cankatran,+%C3%9C%C3%A7kuyu+39.+Cd.,+21070+Kayap%C4%B1nar%2FDiyarbak%C4%B1r&output=embed"
                width="100%"
                height="220"
                style={{border:0}}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-xs mt-2">İşletme sayfası: <a href="https://www.google.com/search?q=Y%C4%B1ld%C4%B1zTech" target="_blank" rel="noreferrer" className="text-brand-300">Google arama / işletme</a></p>
          </div>
          <div>
            <h4 className="font-semibold">Hızlı Bağlantılar</h4>
            <ul className="text-xs mt-2 space-y-1">
              <li><Link to="/" className="text-brand-300">Anasayfa</Link></li>
              <li><Link to="/about" className="text-brand-300">Hakkımızda</Link></li>
              <li><Link to="/services" className="text-brand-300">Hizmetler</Link></li>
              <li><Link to="/kvkk" className="text-brand-300">KVKK</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} YildizTech A.Ş. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
