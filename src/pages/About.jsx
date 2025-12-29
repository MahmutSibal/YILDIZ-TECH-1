import React from 'react';
import Testimonials from '../components/Testimonials';

const About = () => {
  return (
    <>
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Hakkımızda</h1>
          <p className="text-gray-300 leading-relaxed">
            YildizTech; yapay zeka destekli yazılım, gömülü sistemler ve bulut/edge entegrasyonlarında uzmanlaşmış bir teknoloji şirketidir.
            Amacımız, fikri hızlıca doğrulayan prototiplerden üretim kalitesinde çözümlere güvenli ve ölçeklenebilir bir yol haritası sunmaktır.
            Disiplinler arası yetkinliklerimizi, yalın süreçler ve şeffaf iletişimle birleştiririz.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-white">Misyon</h3>
            <p className="text-sm text-gray-300 mt-2">İş hedeflerini teknolojiyle hizalayarak ölçülebilir değer üreten, sürdürülebilir çözümler geliştirmek.</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-white">Vizyon</h3>
            <p className="text-sm text-gray-300 mt-2">Endüstriyel kalitede yazılım ve donanım entegrasyonunda güvenilir çözüm ortağı olmak.</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-white">Uzmanlık</h3>
            <p className="text-sm text-gray-300 mt-2">Üretken yapay zeka, gömülü yazılım, OTA ve bulut/edge senkronizasyonu, DevOps & güvenlik.</p>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="px-6 max-w-6xl mx-auto pb-8">
        <h2 className="text-2xl font-semibold">Değerlerimiz</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-white">Şeffaflık</h3>
            <p className="text-sm text-gray-300 mt-2">Net kapsam, görülebilir plan ve düzenli raporlama ile öngörülebilir süreçler.</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-white">Güvenilirlik</h3>
            <p className="text-sm text-gray-300 mt-2">Test odaklı geliştirme, otomasyon ve güvenlik standartlarıyla sürdürülebilir teslimat.</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-white">Sürekli İyileştirme</h3>
            <p className="text-sm text-gray-300 mt-2">Öğrenen organizasyon kültürü ve geribildirim döngüleri ile sürekli gelişim.</p>
          </div>
        </div>
      </section>

      {/* Çalışma Sürecimiz */}
      <section className="px-6 max-w-6xl mx-auto pb-8">
        <h2 className="text-2xl font-semibold">Çalışma Sürecimiz</h2>
        <div className="mt-6 grid md:grid-cols-4 gap-6">
          <div className="glass rounded-2xl p-6">
            <h4 className="font-semibold text-white">1. Keşif</h4>
            <p className="text-sm text-gray-300 mt-2">İhtiyaç analizi, hedefler ve başarı metrikleri.</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h4 className="font-semibold text-white">2. Tasarım</h4>
            <p className="text-sm text-gray-300 mt-2">Mimari, teknoloji seçimi ve uygulama planı.</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h4 className="font-semibold text-white">3. Geliştirme</h4>
            <p className="text-sm text-gray-300 mt-2">Çevik sprint’ler, testler ve sürekli entegrasyon.</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h4 className="font-semibold text-white">4. Canlı & Ölçüm</h4>
            <p className="text-sm text-gray-300 mt-2">Dağıtım, gözlemlenebilirlik ve iteratif iyileştirme.</p>
          </div>
        </div>
      </section>

      {/* Teknoloji Yığını */}
      <section className="px-6 max-w-6xl mx-auto pb-8">
        <h2 className="text-2xl font-semibold">Teknoloji Yığını</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          {['React','Vite','TailwindCSS','Node.js','Python','FastAPI','Docker','PostgreSQL','MQTT','RTOS','TensorFlow','PyTorch','ONNX','Three.js'].map(t=> (
            <span key={t} className="px-3 py-1 rounded bg-white/5 border border-white/10">{t}</span>
          ))}
        </div>
      </section>

      <section className="px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-white">Neden YildizTech?</h3>
            <ul className="list-disc ml-5 mt-3 text-sm text-gray-300 space-y-2">
              <li>İş etkisine odaklı, hızlı doğrulama ve güvenilir ölçekleme yaklaşımı</li>
              <li>Gömülüden buluta uzanan uçtan uca teknik yetkinlik</li>
              <li>Şeffaf süreçler, ölçülebilir hedefler ve sürdürülebilir teslimat</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 flex flex-col justify-center">
            <h3 className="font-semibold text-white">İletişime Geçin</h3>
            <p className="text-sm text-gray-300 mt-2">Birlikte neler başarabileceğimizi konuşalım. 48 saat içinde dönüş yapıyoruz.</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a href="https://wa.me/905521643855?text=Merhaba%2C%20bir%20ke%C5%9Fif%20g%C3%B6r%C3%BC%C5%9Fmesi%20planlamak%20istiyorum." target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-400 text-white">WhatsApp</a>
              <a href="mailto:info.yildiztech@gmail.com" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">E-Posta</a>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10" />
      <Testimonials />
    </>
  );
};

export default About;
