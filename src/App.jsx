import "./App.css";
import Whatsapp from "./assets/whatsapp-emoji.png";
import Facebook from "./assets/facebook-social.png";
import Instagram from "./assets/instagram-icons.png";
import Header from "./components/Header";
import { BsFillTelephoneFill, BsPinMap } from "react-icons/bs";
import Category from "./pages/Category";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Abouts from "./pages/About";
import Contact from "./pages/Contact";
import Logo from "./assets/logo.png";
import Photo from "./pages/Photo";

function App() {
  return (
    <>
      <div className="container m-auto  flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <h4 className="flex items-center font-medium lg:hidden text-sm text-white ps-2 py-1">
            <img className="w-8 h-8 rounded-lg me-2 py-1" src={Logo}></img>{" "}
            Özgün Dekorasyon
          </h4>
          <div className="flex items-center gap-2 max-lg:ps-2 max-lg:text-xs text-white ps-3">
            <span>
              <BsFillTelephoneFill className="text-green-500" />
            </span>
            <p className="flex items-center text-gray-400">0 553 604 15 05</p>
          </div>
          <div className="items-center gap-2 hidden lg:inline-flex text-white">
            <span>
              <BsPinMap className="text-red-500" />
            </span>
            <h3 className="text-gray-400">Afyonkarahisar</h3>
          </div>
        </div>
        <div className="flex items-center  text-white">
          <p className="text-xl hidden md:flex">
            Kalite ve hizmette doğru adres. Ücretsiz keşif için arayın?
          </p>
        </div>
        <div className="flex ps-3 max-lg:pe-2 cursor-pointer">
          <img src={Whatsapp} className="logo react w-8 h-8 md:w-12 md:h-12" />
          <img src={Instagram} className="logo react w-8 h-8 md:w-12 md:h-12" />
          <img src={Facebook} className="logo react w-8 h-8 md:w-12 md:h-12" />
        </div>
      </div>

      <div className="container m-auto">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hizmetlerimiz" element={<Category />} />
            <Route path="/hakkimizda" element={<Abouts />} />
            <Route path="/iletişim" element={<Contact />} />
            <Route path="/resimler" element={<Photo />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
