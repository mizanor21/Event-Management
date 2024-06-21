const Contact = () => {
  return (
    <div
      className="hero min-h-[500px] font-serif"
      style={{
        backgroundImage: "url(https://imtiaz.ae/layout/image/register-bg.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay m-5 md:m-10"></div>
      <div className="hero-content block lg:grid grid-cols-2 ">
        <div className="text-white">
          <h1 className="text-3xl text-balance border-l-4 pl-5 border-green-600">
            REGISTER YOUR <br /> INTEREST
          </h1>
          <p className="my-5 text-lg text-balance text-gray-100 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            officia pariatur consequuntur excepturi! Eius assumenda perspiciatis
            sapiente ex reiciendis corporis dolorem porro architecto eveniet
            modi magnam at esse repudiandae quam molestiae aut id cupiditate
            provident amet fugit velit, eum voluptatem!
          </p>
        </div>
        <div className="card shrink-0 w-full shadow-2xl">
          <form className="card-body border border-black rounded-xl">
            <div className="form-control">
              <label className="label">
                <span className="text-white">
                  Full Name <span className="text-red-600">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input focus:border-gray-50 text-white border-gray-300 bg-transparent rounded-none h-8"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">
                  Email <span className="text-red-600">*</span>
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input focus:border-gray-50 text-white border-gray-300 bg-transparent rounded-none h-8"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">
                  Phone Number <span className="text-red-600">*</span>
                </span>
              </label>
              <input
                type="number"
                placeholder="xx xxx xxx xxx"
                className="input focus:border-gray-50 text-white border-gray-300 bg-transparent rounded-none h-8"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">
                  Message
                  <span className="text-red-600"> *</span>
                </span>
              </label>
              <textarea
                type="number"
                placeholder="Write your messages..."
                className="input focus:border-gray-50 text-white border-gray-300 bg-transparent rounded-none min-h-32"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn  border-none">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
