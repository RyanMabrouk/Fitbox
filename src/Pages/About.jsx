import Footer from "../components/Footer/Footer";
import GirlRunning from "../images/who-we-are/girl-run.png";
import GirlRedBg from "../images/who-we-are/girl-redbg.svg";
import GirlText from "../images/who-we-are/girl-side-text.png";
import GirlWind from "../images/who-we-are/wind.png";
import TitleRed from "../images/who-we-are/title-bg.svg";
import MainButton from "../components/MainButton";
import Img3 from "../images/AboutPage/3.jpg";
import Img4 from "../images/AboutPage/4.jpg";
import Target from "../images/AboutPage/target.png";
import Mountain from "../images/AboutPage/mountain.png";

function About() {
  return (
    <>
      <section className="login-section">
        <div className="login-banner relative flex justify-center">
          <h1 className="absolute bottom-[25px] text-[3rem] font-bold text-white">
            About Us
          </h1>
        </div>
        <div className="page-padding container py-[5rem]">
          <div className="grid h-[60rem] grid-cols-[1fr_1fr] md1000:grid-cols-1">
            {/* title div -- */}
            <div className="items-right relative flex flex-col justify-center !text-left md1000:items-center md1000:!text-center">
              <p className="relative z-10 mb-8 ml-20 text-[15px] font-bold uppercase text-white md1000:ml-3">
                who we are
              </p>
              <img
                src={TitleRed}
                alt="text_bg"
                className="absolute top-[120px] w-[21rem] min450:top-[84px] min375:top-[68px]"
              />

              <h2 className="mb-4 max-w-[53rem] text-[3.6rem] font-bold">
                We Will Give You Strength and Health
              </h2>
              <p className="max-w-[50rem] text-[15px] font-medium text-[#646464]">
                At Fitbox, we are dedicated to helping you achieve the body of
                your dreams. Our expert trainers and nutritionists will work
                with you to create a personalized fitness and nutrition plan
                that helps you reach your specific goals.
              </p>
              <MainButton
                color={`!text-white`}
                bg={`bg-[#eab308]`}
                goTo="/contact"
                text="contact us"
                arrowColor={`!text-white`}
                cN="pricing-cta blog-cta"
              />
            </div>
            {/*  */}
            <div className="relative -top-[90px] left-[40px] w-[80%] md1000:hidden">
              <img
                src={GirlRunning}
                alt="girl_running"
                className="girl-running"
              />
              <img src={GirlRedBg} alt="bg-red" className="girl-bg" />
              <img src={GirlText} alt="bg-text" className="girl-text" />
              <img src={GirlWind} alt="bg-wind" className="girl-wind" />
            </div>
          </div>
          {/*  */}
          <div className="mt-[10rem]">
            <div className="grid w-full grid-cols-2 grid-rows-2 min620:grid-cols-1">
              <div className="flex h-[43rem] w-full flex-col items-center justify-center bg-white px-[100px] text-center min800:px-[10px]">
                <img src={Target} alt="target_img" className="w-[9rem]" />
                <h2 className="mt-3 text-[36px] font-bold">Our History</h2>
                <p className="mt-5 text-[16px] font-medium text-[#646464]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit
                  Exercitation veniam consequat.
                </p>
              </div>
              {/*  */}
              <div className="h-[43rem] w-full bg-white">
                <img
                  src={Img3}
                  alt="about_img"
                  className="h-full w-full bg-center object-cover"
                />
              </div>
              {/*  */}
              <div className="h-[43rem] w-full bg-white">
                <img
                  src={Img4}
                  alt="about_img"
                  className="h-full w-full bg-center object-cover"
                />
              </div>
              {/*  */}
              <div className="flex h-[43rem] w-full flex-col items-center justify-center bg-white px-[100px] text-center min800:px-[10px]">
                <img src={Mountain} alt="target_img" className="w-[9rem]" />
                <h2 className="mt-3 text-[36px] font-bold">Our History</h2>
                <p className="mt-5 text-[16px] font-medium text-[#646464]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit
                  Exercitation veniam consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default About;
