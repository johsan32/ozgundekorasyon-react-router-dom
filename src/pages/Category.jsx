import { Link } from "react-router-dom";
import { categories } from "../helpers/CategoryList";

const Category = () => {
  return (
    <div>
      <h5 className="text-3xl mt-3 mb-2 ">Hizmetlerimiz</h5>
      <div className="container m-auto flex items-center md-justify-between flex-wrap gap-3 justify-center ">
        {categories.map((item, i) => {
          return (
            <div key={i}  >
              <div className="max-w-sm rounded overflow-hidden shadow-2xl shadow-gray-200 m-w-[250px] h-[400px] border p-2">
                <img
                  className="w-full h-48 rounded-lg cursor-pointer hover:scale-105"
                  src={item.image}
                  alt="Sunset in the mountains"
                />
                <div className="px-3 py-2">
                  <div className="font-bold text-xl mb-1">{item.name}</div>
                  <p className="text-white text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-2 pt-2 pb-2 cursor-pointer">
                  <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2 hover:bg-teal-200 hover:scale-110">
                    Teklif Al
                  </span>
                  <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2 hover:bg-teal-200 hover:scale-110">
                    Yorumlar
                  </span>
                  <Link to="/resimler" className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2 hover:bg-teal-200 hover:scale-110 hover:text-black">
                    Örnekler
                  </Link>
                  <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2 hover:bg-teal-200 hover:scale-110">
                    İncele
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
