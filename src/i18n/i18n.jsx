import React, { createContext, useContext, useMemo } from 'react';

const I18nContext = createContext({ lang: 'tr', t: (k)=>k, setLang: ()=>{} });

const dict = {
  tr: {
    home: 'Anasayfa',
    about: 'Hakkımızda',
    services: 'Hizmetler',
    contact: 'İletişim',
    kvkk: 'KVKK',
    support: 'Destek'
  }
};

export const I18nProvider = ({ children }) => {
  const value = useMemo(()=> ({
    lang: 'tr',
    setLang: () => {},
    t: (k)=> (dict.tr[k]) || k
  }), []);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);
