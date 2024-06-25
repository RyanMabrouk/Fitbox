import FooterLogo from "../../images/logo/logo.png";

function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="page-padding container py-[10rem]">
          {/* footer div all */}
          <div className="flex justify-between !text-left min620:flex-col min620:items-center min620:gap-[5rem] min620:text-center">
            {/* logo side */}
            <div className="flex w-1/3 flex-col gap-8">
              <img
                src={FooterLogo}
                alt="footer_logo"
                className="-mb-[5rem] -mt-[5rem] w-[25rem] rounded-full"
              />
              <p className="text-[15px] font-medium text-[#646464]">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] min540:justify-center">
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-facebook-f cursor-pointer rounded-full bg-[#efefef] p-4 px-[14px] hover:bg-[#eab308] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-twitter cursor-pointer rounded-full bg-[#efefef] p-4 hover:bg-[#eab308] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-pinterest-p cursor-pointer rounded-full bg-[#efefef] p-4 px-[14px] hover:bg-[#eab308] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-youtube cursor-pointer rounded-full bg-[#efefef] p-4 hover:bg-[#eab308] hover:text-white"
                ></i>
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} Fitbox <br />{" "}
                Design by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.rayen-mabrouk.com/"
                >
                  Rayen Mabrouk
                </a>
              </p>
            </div>

            {/* middle div */}
            <div className="relative flex flex-col gap-8">
              <p className="footer-main text-[22px] font-bold">Our Classes</p>

              <span className="absolute top-[33px] h-[4px] w-[7rem] bg-[#eab308]"></span>

              <p className="cursor-pointer text-[16px] font-medium text-[#646464] hover:font-bold hover:text-[#eab308]">
                Fitness Classes
              </p>
              <p className="cursor-pointer text-[16px] font-medium text-[#646464] hover:font-bold hover:text-[#eab308]">
                Aerobics Classes
              </p>
              <p className="cursor-pointer text-[16px] font-medium text-[#646464] hover:font-bold hover:text-[#eab308]">
                Power Yoga
              </p>
              <p className="cursor-pointer text-[16px] font-medium text-[#646464] hover:font-bold hover:text-[#eab308]">
                Learn Machines
              </p>
              <p className="cursor-pointer text-[16px] font-medium text-[#646464] hover:font-bold hover:text-[#eab308]">
                Full-body Strength
              </p>
            </div>

            {/* right div */}
            <div className="relative flex flex-col gap-8">
              <p className="footer-main text-[22px] font-bold">Working Hours</p>

              <span className="absolute top-[33px] h-[4px] w-[7rem] bg-[#eab308]"></span>

              <p className="text-[16px] font-bold text-[#646464]">
                Monday - Friday:
              </p>
              <p className="text-[16px] font-medium text-[#646464]">
                7:00am - 21:00pm
              </p>
              <p className="text-[16px] font-bold text-[#646464]">Saturday:</p>
              <p className="text-[16px] font-medium text-[#646464]">
                7:00am - 19:00pm
              </p>
              <p className="text-[16px] font-bold text-[#646464]">
                Sunday - Closed
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
