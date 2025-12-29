import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'cookie-consent-v1';

const defaultPrefs = { necessary: true, analytics: false, marketing: false };

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [openPrefs, setOpenPrefs] = useState(false);
  const [prefs, setPrefs] = useState(defaultPrefs);

  useEffect(()=>{
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setPrefs(JSON.parse(saved));
        setVisible(false);
      } else {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const save = (p) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    setPrefs(p);
    setVisible(false);
    setOpenPrefs(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="max-w-5xl mx-auto glass border border-white/10 rounded-2xl p-4 md:p-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="text-sm text-gray-200">
            Bu site deneyiminizi iyileştirmek için çerezler kullanır. Zorunlu çerezler her zaman aktiftir. Diğer çerezleri tercihlerinizden yönetebilirsiniz.
          </div>
          <div className="flex items-center gap-2">
            <button onClick={()=> save({ necessary: true, analytics: true, marketing: true })} className="px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-400 text-white text-sm">Kabul Et</button>
            <button onClick={()=> setOpenPrefs(true)} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">Tercihleri Yönet</button>
          </div>
        </div>

        {openPrefs && (
          <div className="mt-4 pt-4 border-t border-white/10 text-sm text-gray-200">
            <div className="flex items-center justify-between py-2">
              <div>
                <div className="font-medium">Zorunlu</div>
                <div className="text-xs text-gray-400">Temel işlevler için gereklidir ve kapatılamaz.</div>
              </div>
              <input type="checkbox" checked disabled />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <div className="font-medium">Analitik</div>
                <div className="text-xs text-gray-400">Kullanım istatistikleri, iyileştirme amaçlı.</div>
              </div>
              <input type="checkbox" checked={prefs.analytics} onChange={(e)=> setPrefs(v=> ({...v, analytics: e.target.checked}))} />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <div className="font-medium">Pazarlama</div>
                <div className="text-xs text-gray-400">Kişiselleştirilmiş içerik ve reklam.</div>
              </div>
              <input type="checkbox" checked={prefs.marketing} onChange={(e)=> setPrefs(v=> ({...v, marketing: e.target.checked}))} />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <button onClick={()=> save(prefs)} className="px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-400 text-white">Kaydet</button>
              <button onClick={()=> { setPrefs(defaultPrefs); save(defaultPrefs); }} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">Sadece Zorunlu</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
