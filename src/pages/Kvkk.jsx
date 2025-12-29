import React from 'react';

const Kvkk = () => {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">KVKK - Kişisel Verilerin Korunması</h1>
      <div className="text-gray-300 space-y-4">
        <p className="leading-relaxed">YildizTech (bundan sonra "Şirket") olarak kişisel verilerinizin gizliliğini ve güvenliğini sağlamak temel sorumluluklarımızdandır. Bu KVKK bilgilendirme metni, işlenen kişisel verilerin kapsamını, işlenme amaçlarını, verilerin aktarılabileceği tarafları, saklama sürelerini ve veri sahiplerinin haklarını açık, anlaşılır ve erişilebilir bir şekilde sunar.</p>

        <h3 className="font-semibold">1. Hangi Veriler İşlenir?</h3>
        <p>Kişisel veriler aşağıdaki kategorilerde işlenebilir:
          <ul className="list-disc ml-6 mt-2 text-sm text-gray-300">
            <li>Kimlik bilgileri (ad, soyad, TCKN gibi) — gerektiğinde ve kanuni zorunluluklarda.</li>
            <li>İletişim bilgileri (e-posta, telefon, adres).</li>
            <li>İş ve eğitim bilgileri (özgeçmiş, pozisyon, şirket bilgileri).</li>
            <li>Hizmet kullanım verileri (log, hata raporları, cihaz bilgileri).</li>
            <li>Görsel materyaller (fotoğraf, video) — açık rıza veya sözleşmesel gereklilik halinde.</li>
          </ul>
        </p>

        <h3 className="font-semibold">2. İşlenme Amaçları</h3>
        <p>Kişisel verileriniz, aşağıdaki amaçlarla işlenebilir:</p>
        <ul className="list-disc ml-6 mt-2 text-sm text-gray-300">
          <li>Hizmet ve teklif süreçlerinin yürütülmesi, proje iletişimi ve sözleşme gereklilikleri.</li>
          <li>Müşteri desteği, talep yönetimi ve teknik sorunların giderilmesi.</li>
          <li>Hukuki yükümlülüklerin yerine getirilmesi ve uyum süreçleri.</li>
          <li>Pazarlama ve bilgilendirme faaliyetleri (varsa açık rıza ile).</li>
          <li>Güvenlik, dolandırıcılık önleme ve sistem performans analizleri.</li>
        </ul>

        <h3 className="font-semibold">3. Kişisel Verilerin Aktarılması</h3>
        <p>Kişisel verileriniz, aşağıdaki durumlarda ve taraflara aktarılabilir:
          <ul className="list-disc ml-6 mt-2 text-sm text-gray-300">
            <li>Hizmet tedarikçilerimiz (bulut sağlayıcıları, altyapı partnerleri) — sözleşmeye dayalı ve güvenli aktarım.</li>
            <li>Yasal talepler ve resmi merciler (mahkeme, kamu kurumları) — kanun gereği.</li>
            <li>İş ortakları ve yükleniciler — yalnızca gerekli veri ve amaçla sınırlı olmak üzere.</li>
          </ul>
        </p>

        <h3 className="font-semibold">4. Saklama Süreleri</h3>
        <p>Verileriniz, ilgili yasa ve sözleşmesel yükümlülüklerin gerektirdiği süre kadar veya verinin işlenme amacı devam ettiği sürece saklanır. İlgili süreler sona erdiğinde veriler silinir, anonimleştirilir veya imha edilir.</p>

        <h3 className="font-semibold">5. Veri Sahibinin Hakları</h3>
        <p>KVKK'nın 11. maddesi uyarınca veri sahipleri aşağıdaki haklara sahiptir:
          <ul className="list-disc ml-6 mt-2 text-sm text-gray-300">
            <li>Kişisel verilerin işlenip işlenmediğini öğrenme.</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme.</li>
            <li>İşlenme amacını ve verilerin amacına uygun kullanılıp kullanılmadığını öğrenme.</li>
            <li>Yurt içinde/ dışında aktarılmışsa bunları öğrenme.</li>
            <li>Eksik/ yanlış işlenmişse düzeltilmesini talep etme.</li>
            <li>İşlenme sebepleri ortadan kalkmışsa silinmesini veya yok edilmesini isteme.</li>
            <li>İtiraz etme ve gerekli hallerde zararın giderilmesini isteme.</li>
          </ul>
        </p>

        <h3 className="font-semibold">6. Başvuru Yöntemleri</h3>
        <p>KVKK kapsamındaki taleplerinizi yazılı olarak veya e-posta yoluyla iletebilirsiniz. Başvurular genellikle en geç 30 gün içinde sonuçlandırılır. İletişim:
          <ul className="list-disc ml-6 mt-2 text-sm text-gray-300">
            <li>E-posta: <a href="mailto:info.yildiztech@gmail.com" className="text-brand-300">info.yildiztech@gmail.com</a></li>
            <li>Adres: Cankatran, Üçkuyu 39. Cd., 21070 Kayapınar/Diyarbakır</li>
            <li>Telefon: <a href="tel:+905521643855" className="text-brand-300">+90 552 164 38 55</a></li>
          </ul>
        </p>

        <p className="text-sm text-gray-400">Not: Bu metin bilgilendirme amaçlıdır. Resmi ve bağlayıcı KVKK metni için lütfen hukuki danışmanlık alınız. YildizTech gerekli gördüğünde bu politikayı güncelleme hakkını saklı tutar.</p>
      </div>
    </section>
  );
};

export default Kvkk;
