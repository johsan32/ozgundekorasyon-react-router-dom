import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="container m-auto bg-white text-black flex  mb-2 z-50">
      <div className="container flex items-center justify-center md:justify-between">
        <div className="flex items-center h-8 gap-3 lg:h-20">
          <img className="w-32 h-20 rounded-lg md:flex hidden p-1 " src={Logo} />
          <h2 className="text-3xl hidden lg:flex ">Özgün Dekorasyon</h2>
        </div>
        <div className="flex items-center gap-4 h-8 text-xs lg:text-lg pe-1 lg:pe-5 lg:h-26">
          <Link className="button  px-3 py-1" to="/">Anasayfa</Link>
          <Link className="button  px-3 py-1" to="/hakkimizda">Hakkımızda</Link>
          <Link className="button  px-3 py-1"  to="/hizmetlerimiz">Hizmetlerimiz</Link>
          <Link className="button  px-3 py-1"  to="/iletişim">İletişim</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
