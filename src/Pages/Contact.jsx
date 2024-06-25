import Footer from "../components/Footer/Footer";

function Login() {
  return (
    <>
      <section>
        <div className="login-banner relative flex justify-center">
          <h1 className="absolute bottom-[25px] text-[3rem] font-bold text-white">
            Contact Us
          </h1>
        </div>
        {/* contact */}
        <div className="page-padding container grid grid-cols-2 items-center gap-10 bg-white py-[12rem] md1000:grid-cols-1">
          {/* first col */}
          <div className="md1000:mx-auto md1000:flex md1000:w-[60%] md1000:flex-col min800:w-[90%] min620:w-full">
            <h2 className="text-[36px] font-bold leading-[1.2] text-black">
              We are here for help you! To Shape Your Body.
            </h2>
            <p className="my-[40px] w-[95%] text-[16px] font-medium text-[#646464]">
              At Fitbox, we are dedicated to helping you achieve the body of
              your dreams. Our expert trainers and nutritionists will work with
              you to create a personalized fitness and nutrition plan that helps
              you reach your specific goals.
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:mx-auto min620:grid-cols-1">
              <div className="relative flex flex-col">
                <h3 className="mb-10 text-[2rem] font-bold">Mahdia, Tunisia</h3>
                <span className="absolute top-[33px] h-[4px] w-[50px] bg-[#eab308]"></span>
                <p className="text-[15px] font-medium text-[#646464]">
                  5100 Zouila,
                  <br /> Mahdia, Mahdia
                </p>
              </div>
              {/*  */}
              <div className="relative flex flex-col">
                <h3 className="mb-10 text-[2rem] font-bold">Opening Hours</h3>
                <span className="absolute top-[33px] h-[4px] w-[50px] bg-[#eab308]"></span>
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>Mon to Fri: 7:30 am — 1:00 am</p>
                  <p>Mon to Fri: 7:30 am — 1:00 am</p>
                </div>
              </div>
              {/*  */}
              <div className="relative flex flex-col">
                <h3 className="mb-10 text-[2rem] font-bold">Information</h3>
                <span className="absolute top-[33px] h-[4px] w-[50px] bg-[#eab308]"></span>
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>+216-123-4567</p>
                  <p>&nbsp; fitbox@gymail.com</p>
                </div>
              </div>
              {/*  */}
              <div className="relative flex flex-col">
                <h3 className="mb-10 text-[2rem] font-bold">Follow Us On</h3>
                <span className="absolute top-[33px] h-[4px] w-[50px] bg-[#eab308]"></span>
                <div className="flex gap-5 text-[18px] font-medium text-black">
                  <i className="fa-brands fa-facebook-f cursor-pointer rounded-full bg-[#f4f4f4] px-[16px] py-[13px] duration-200 ease-in hover:bg-[#eab308] hover:text-white"></i>
                  <i className="fa-brands fa-twitter cursor-pointer rounded-full bg-[#f4f4f4] p-[13.5px] duration-200 ease-in hover:bg-[#eab308] hover:text-white"></i>
                  <i className="fa-brands fa-instagram cursor-pointer rounded-full bg-[#f4f4f4] p-[13.5px] duration-200 ease-in hover:bg-[#eab308] hover:text-white"></i>
                  <i className="fa-brands fa-pinterest-p cursor-pointer rounded-full bg-[#f4f4f4] p-[13.5px] duration-200 ease-in hover:bg-[#eab308] hover:text-white"></i>
                </div>
              </div>
            </div>
          </div>

          {/* second col ---*/}
          <form className="relative flex flex-col bg-[#f8f8f8] pb-[50px] pl-[45px] pr-[50px] pt-[30px] md1000:mx-auto md1000:mt-14 md1000:flex md1000:w-[65%] md1000:flex-col min800:w-[90%] min620:w-full">
            <h3 className="mb-14 text-[28px] font-bold">Leave Us Your Info</h3>
            <span className="absolute top-[77px] h-[4px] w-[50px] bg-[#eab308]"></span>
            <input
              className="mb-8 h-[51px] w-full border border-solid border-[#e4e4e4] px-[20px] py-[12px] text-[14px] outline-none"
              placeholder="Full Name *"
              type="text"
            ></input>
            <input
              className="mb-8 h-[51px] w-full border border-solid border-[#e4e4e4] px-[20px] py-[12px] text-[14px] outline-none"
              placeholder="Email Address *"
              type="email"
            ></input>
            <select className="mb-8 h-[51px] w-full border border-solid border-[#e4e4e4] px-[20px] py-[12px] text-[14px] outline-none">
              <option>Select Class</option>
              <option>Body Building</option>
              <option>Boxing</option>
              <option>Running</option>
              <option>Fitness</option>
              <option>Yoga</option>
              <option>Workout</option>
              <option>Katate</option>
              <option>Meditation</option>
              <option>Cycling</option>
            </select>
            <textarea
              placeholder="Comment"
              className="mb-8 h-[140px] w-full border border-solid border-[#e4e4e4] px-[20px] py-[12px] text-[14px] outline-none"
            ></textarea>
            <button
              type="submit"
              className="mt-6 w-fit self-center bg-[#eab308] px-[30px] py-[15px] text-[14px] font-bold uppercase text-white"
            >
              submit now
            </button>
          </form>
        </div>

        {/* map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.1356986910087!2d11.054512584746107!3d35.500922680236755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13022362089f9f2b%3A0x28ac88bba4ed2286!2sFit%20Box%20mahdia!5e0!3m2!1sar!2stn!4v1691383902950!5m2!1sar!2stn"
          allowFullScreen=""
          loading="lazy"
          samesite="Strict"
          title="map"
          style={{ width: "100%", height: "45rem", border: "0px" }}
        ></iframe>
        <Footer />
      </section>
    </>
  );
}

export default Login;
