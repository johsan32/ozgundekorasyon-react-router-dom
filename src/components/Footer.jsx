import Facebook2 from "../assets/facebook-social.png";
import Instagram from "../assets/instagram.png";
import Youtube from "../assets/youtube-icon.png";
import Follow from "../assets/follow.png";
import Twitter from "../assets/twitter2.png";

const Footer = () => {
  return (
      <div className="container-md mt-4 rounded-lg shadow-2xl shadow-slate-200 m-w-[250px] border p-2 ">
        <div className="socialMedia">
        <div className="flex items-center justify-center ps-3 gap-4 cursor-pointer">
          <img
            src={Follow}
            className="react w-28 h-20 max-lg:w-16 max-lg:h-16 cursor-nopadding"
          />
          <img src={Facebook2} className="logo max-lg:w-12 max-lg:h-12" />
          <img src={Instagram} className="logo max-lg:w-12 max-lg:h-12" />
          <img src={Twitter} className="logo max-lg:w-12 max-lg:h-12" />
          <img src={Youtube} className="logo max-lg:w-12 max-lg:h-12" />
        </div>
          <p className="mt-3">
            Bildiğiniz gibi tadilat işleri ve dekorasyon uzmanlık, eğitim
            gerektirir. Biz bu işi bilerek ve profesyonelce yapıyoruz. Konusunda
            uzman inşaat teknikeri kadromuz ve deneyimli ustalarımızla
            işlerinizi, istediğiniz doğrultuda vaatlerle değil gerçek kaliteyle
            tamamlayarak sunuyoruz. Afyonkarahisar'da tüm tadilat, tamirat ve
            dekorasyon işlerinizi <br/> Özgün Dekorasyon'a "Güvenle" teslim
            edebilirsiniz...
          </p>
          <p className="mt-3 pt-2 font-thin border-t"> &copy; 2023 Udemig- Eğitim amaçlı hazırlanmıştır.<br/> by <span className="text-orange-400">Hasan ULUSOY</span></p>
        </div>
      </div>
  );
};

export default Footer;
