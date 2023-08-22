import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Banner1 from "../assets/banner.jpg";
import Banner2 from "../assets/banner2.jpg";
import Banner3 from "../assets/banner3.jpg";

const Home2 = () =>{
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-[75vh] w-full">
        <img
          src={Banner1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Dekorasyon Bizim İşimiz
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Dekorasyon hizmetleri ekonomik fiyatlarıyla Özgün Dekorasyon'da.
            </Typography>
            <div className="flex justify-center gap-2 ">
              <Link to="/hizmetlerimiz"> 
              <Button size="lg" color="blue"  className="capitalize text-xs shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/60 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Hizmetlerimiz
              </Button>
              </Link >
              <Link to="/resimler">
              <Button size="lg" color="white" variant="text" className="bg-red-400 shadow-lg capitalize text-xs">
                Gallery
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[75vh]  w-full">
        <img
          src={Banner2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
          <div className="w-3/4 text-center pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Tadilat İşleri
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
             Yaşam alanınızın hayallerinizdeki gibi bir hale gelmesi için sizde tadilat sürecini 
             bizimle başlatabilirsiniz. 
            </Typography>
            <div className="flex gap-2 items-center justify-center">
              <Button size="lg" color="green" className="hover:bg-teal-300 text-xs">
                Teklif Al
              </Button>
              <Button size="lg" color="white" variant="text" className="bg-green-200 text-xs"> 
                Keşif Talep Et
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[75vh]  w-full">
        <img
          src={Banner3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/60">
          <div className="w-3/4 text-center pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-md lg:text-4xl"
            >
              Hayallerinizi Gerçekleştirelim
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-8 opacity-80 text-md lg:text-lg"
            >
              Afyonkarahisar'da tadilat dekorasyon firmaları arasında pek çok kişi, kurum ve firmaya hizmet vermeye devam ediyoruz. 
              Tadilat dekorasyon denince ilk akla gelen firmalardan biri olarak ekonomik 
              tadilat dekorasyon fiyatlarını siz değerli müşterileriyle buluşturmaya devam ediyoruz.
            </Typography>
            <div className="flex gap-2 items-center justify-center ">
              <Button size="md" color="blue" className="text-xs">
                Keşfet
              </Button>
              <Button size="md" color="orange" variant="text" className="bg-gray-200 text-xs">
                Örneklere Göz At
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default Home2;