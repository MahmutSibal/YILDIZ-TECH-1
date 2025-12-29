import React from 'react';

const PHONE = '905521643855';
const MSG = encodeURIComponent('Merhaba, hizmetleriniz hakkında teklif almak istiyorum.');

const WhatsAppCTA = () => {
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${PHONE}&text=${MSG}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-50 px-4 py-3 rounded-full shadow-lg bg-green-500 hover:bg-green-400 text-white text-sm font-medium flex items-center gap-2"
      aria-label="WhatsApp üzerinden teklif al"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.91 11.91 0 0012.06 0C5.46 0 .1 5.36.1 11.95a11.86 11.86 0 001.58 5.94L0 24l6.27-1.64a11.97 11.97 0 005.79 1.49h.01c6.6 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.49-8.42zM12.06 21.8h-.01a9.85 9.85 0 01-5.02-1.37l-.36-.21-3.72.98.99-3.63-.24-.37A9.86 9.86 0 012.2 11.95C2.19 6.49 6.6 2.09 12.06 2.09c2.63 0 5.1 1.02 6.96 2.88a9.81 9.81 0 012.88 6.98c0 5.46-4.44 9.85-9.84 9.85zm5.6-7.38c-.31-.16-1.83-.9-2.12-1-.29-.1-.5-.16-.72.16-.21.31-.82 1-.99 1.21-.18.21-.36.23-.67.08-.31-.16-1.29-.48-2.46-1.53-.91-.81-1.53-1.81-1.71-2.12-.18-.31-.02-.48.13-.63.13-.12.31-.32.45-.48.15-.16.2-.27.3-.45.1-.18.05-.34-.02-.48-.08-.16-.72-1.73-.99-2.37-.26-.63-.53-.55-.72-.56l-.61-.01c-.2 0-.52.07-.79.34-.27.27-1.04 1.02-1.04 2.49 0 1.46 1.06 2.87 1.21 3.07.15.21 2.09 3.2 5.07 4.48.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.37z"/></svg>
      Teklif Al
    </a>
  );
};

export default WhatsAppCTA;
