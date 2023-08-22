import ContactImg from "../assets/map.png";
const Contact = () => {
  return (

      <div className="container m-auto grid gap-3 items-start grid-rows lg:grid-cols-2">
        <div className="flex h-[75vh]">
          <img className="img-fluid rounded-lg" src={ContactImg} alt="" />
        </div>
        <div className="flex flex-col ">
          <h2 className="text-2xl mb-5">İletişime Geçin</h2>
          <form 
          className="flex items-center justify-center flex-col w-full gap-2 "
          id="contact-form" method="POST">
            <label htmlFor="name">Ad Soyad</label>
            <input 
            className="rounded-lg ps-3"
              name="name"
              placeholder="Adınızı ve soyadınızı yazınız..."
              type="text"
            />
            <label htmlFor="email">E-mail</label>
            <input
             className="rounded-lg ps-3"
              name="email"
              placeholder="E-mail adresinizi giriniz..."
              type="email"
            />
            <label htmlFor="number">Telefon Numarası</label>
            <input
             className="rounded-lg ps-3"
              name="name"
              placeholder="Telefon numaranızı giriniz..."
              type="phone"
            />
            <label htmlFor="message">Mesajınız</label>
            <textarea
             className="rounded-lg ps-3 mt-2"
              name="message"
              required
              rows="6"
              placeholder="Mesajınızı buraya yazınız..."
            ></textarea>
            <button type="submit"
            className="btn bg-orange-500 mt-2 px-5 py-2 rounded-lg shadow-lg hover:shadow-teal-50"
            >Gönder</button>
          </form>
        </div>
      </div>

  );
};

export default Contact;
