import { Link } from "react-router-dom"
const Loading = () => {
    return ( 
<div className="fixed left-0 top-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 z-30">
  <div className="max-h-full w-full max-w-xl  sm:rounded-2xl bg-white">
    <div className="w-full">
      <div className="m-8 my-20 max-w-[400px] mx-auto">
        <div className="mb-2">
          <h1 className="mb-4 text-3xl font-extrabold text-black">Resimler yükleniyor...</h1>
        </div>
        <div className="space-y-4">
            <Link to="/">
          <button className="p-3 bg-green-500 rounded-full text-white w-full font-semibold">Anasayfa</button>
        </Link>
        </div>
      </div>
    </div>
  </div>
</div>
     );
}
 
export default Loading;