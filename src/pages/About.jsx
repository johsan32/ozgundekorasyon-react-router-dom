import About from "../assets/about.jpg"

const Abouts = () => {
  return (
    <div className="container grid gap-3 items-center grid-row lg:grid-cols-2 ">        
      <div className="flex">
        <img className="img-fluid rounded-lg" src={About}/>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl align-center" >Hakkımızda</h1>
        <p className="flex text-justify">
        Afyonkarahisar'da Komple ev tadilatı, dekorasyon ve tasarımı denilince herkesin 
        bütçesine göre etkili çözümler üretebilen firmamız, bu sayede bir çok evin içini 
        yeniden kurgulayarak imzasını atmıştır. 
        Bugüne değin bize güvenen ve çözüm ortağı olarak kabul eden yüzlerce müşterimize teşekkür ederiz. 
        Hedefimiz, bu çalışma sistemimizi prensip haline getirerek sürekli kılarak ve ilimizde sektörümüzün duayeni olmaktır.
        <br/>  
        <br/>
        Eskiden ustalarla tek tek uğraşmak zorunda kalıyordunuz. Şimdi tek bir
          telefonla işinizin tüm yükünden kurtuluyorsunuz. Tadilat ve onarım
          işleri can sıkıcı, sorunlu işler olmaktan çıkıyor. Birebir yerinde tüm
          işlerinizi bize gönül rahatlığıyla teslim edebilirsiniz. İster
          evinizin boya badanası olsun ister anahtar teslim tadilat işleri olsun
          sizin ihtiyacınız hangisi ise arayınız. İşi yaparken hangi malzemeyi
          nekadar kullandığımızı, malzeme seçimlerimizi birebir
          görebileceksiniz. Sadece işin karşılığında fiyat söyleyenlerden
          değiliz, Komple iç tadilat işleri, mağaza tadilatı, ev tadilatı, ofis
          tadilatı, anahtar teslim tadilat işleri, dekorasyon, ev dekorasyonu,
          ofis dekorasyonu, sıva ve boya işleri, mantolama, ses yalıtımı, mutfak
          ve banyo tasarımı, çatı yalıtımı , kartonpiyer, asma tavan, bölme
          duvar, fayans seramik döşeme işleri, iç cephe mantolama, dış cephe
          mantolama... Kısaca aklınıza tadilat ve dekorasyon hakkında ne
          geliyorsa uyguluyoruz.
        </p>
      </div>
    </div>
  );
};

export default Abouts;
