import React from 'react';

const Support = () => {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Destek</h1>
      <p className="text-gray-300 leading-relaxed">Ürünlerimiz ve çözümlerimiz için destek taleplerinizi buradan iletebilirsiniz. Lütfen sorununuza ilişkin detay, hata mesajları ve adımları paylaşın; teknik ekip en kısa sürede size dönüş sağlayacaktır.</p>
      <div className="mt-6 glass p-6 rounded-xl">
        <p className="text-sm text-gray-300">Telefon: <a href="tel:+905521643855" className="text-brand-300">+90 552 164 38 55</a></p>
        <p className="text-sm text-gray-300 mt-2">E-posta: <a href="mailto:info.yildiztech@gmail.com" className="text-brand-300">info.yildiztech@gmail.com</a></p>
      </div>
    </section>
  );
};

export default Support;
