import { useState } from "react";
import Logo from "../../images/logo/logo2.png";
import NavList from "../Nav/NavList";
import { Link } from "react-router-dom";
import LogoSide from "../../images/logo/logo.png";
import SideImg1 from "../../images/sidebar/1.jpg";
import SideImg2 from "../../images/sidebar/2.jpg";
import SideImg3 from "../../images/sidebar/3.jpg";
import SideImg4 from "../../images/sidebar/4.jpg";
import SideImg5 from "../../images/sidebar/5.jpg";
import SideImg6 from "../../images/sidebar/6.jpg";

function Navbar() {
  const [spin, setSpin] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [sidebar, setSideBar] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const joinSpin = () => {
    setSpin(true);
  };

  const stopSpin = () => {
    setSpin(false);
  };

  // sticky navbar - bg black
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  // logo
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // sidebar
  const sideBar = () => {
    setSideBar((prev) => !prev);
  };

  // hamburger menu
  const hamburgerMenu = () => {
    setHamburger((prev) => !prev);
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex w-full flex-row items-center justify-between bg-transparent px-12 py-8 ${
          sticky ? "!bg-black shadow-xl" : ""
        }`}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo_img"
            onClick={goTop}
            className="h-auto max-h-full w-[5rem] max-w-full rounded-full bg-clip-text text-transparent"
          />
        </Link>
        <NavList />
        <div className="flex items-center gap-10">
          <div className="flex gap-10">
            {/* mobile menu -------------- */}
            {/* hamburger menu */}
            <div
              className={`fixed top-0 z-[100] flex h-screen w-full flex-col bg-white px-[40px] py-[60px] duration-500 ease-in-out ${
                hamburger ? "!left-0" : "!-left-[150%]"
              }`}
            >
              <i
                onClick={hamburgerMenu}
                className="fa-solid fa-xmark cursor-pointer self-end text-[3.3rem] text-[#eab308]"
              ></i>

              {/* links */}
              <ul className="absolute left-[50%] top-[50%] flex -translate-x-[50%] -translate-y-[50%] flex-col gap-10 text-center">
                <li onClick={hamburgerMenu}>
                  <a
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium duration-200 ease-in hover:text-[#eab308]"
                    href="/#home"
                  >
                    Home
                  </a>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium duration-200 ease-in hover:text-[#eab308]"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium duration-200 ease-in hover:text-[#eab308]"
                    to="/schedule/monday"
                  >
                    Schedule
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium duration-200 ease-in hover:text-[#eab308]"
                    to="/gallery/page-1"
                  >
                    Gallery
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium duration-200 ease-in hover:text-[#eab308]"
                    to="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium duration-200 ease-in hover:text-[#eab308]"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium duration-200 ease-in hover:text-[#eab308]"
                    to="/pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium duration-200 ease-in hover:text-[#eab308]"
                    to="/classes"
                  >
                    Classes
                  </Link>
                </li>
              </ul>
            </div>
            {/* sidebar */}
            <div>
              <div
                className={`fixed top-0 z-[50] flex h-[100vh] w-[40rem] flex-col gap-24 overflow-x-hidden bg-white px-[45px] pb-10 duration-[0.5s] ease-in-out min450:w-full ${
                  sidebar ? "!left-0" : "!-left-[150%]"
                }`}
              >
                {/* logo & X */}
                <div className="-mt-20 flex items-center justify-between">
                  <img
                    src={LogoSide}
                    alt="logo_img"
                    className="w-[24rem] rounded-full object-cover"
                  />
                  <i
                    onClick={sideBar}
                    className="fa-solid fa-xmark cursor-pointer text-[3.3rem] text-[#eab308]"
                  ></i>
                </div>
                {/* about us */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">About Us</h3>
                  <p className="text-[1.6rem] font-medium text-[#000000b1]">
                    Find out who we are and what makes us unique. We are a
                    community-driven gym committed to providing personalized
                    fitness experiences for all levels of fitness enthusiasts in
                    a welcoming and supportive environment.
                  </p>
                </div>
                {/* gallery */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Gallery</h3>
                  <div className="grid grid-cols-3 grid-rows-2 gap-4">
                    <img
                      src={SideImg1}
                      alt="sidebar_gallery"
                      className="cursor-pointer rounded-xl"
                    />
                    <img
                      src={SideImg2}
                      alt="sidebar_gallery"
                      className="cursor-pointer rounded-xl"
                    />
                    <img
                      src={SideImg3}
                      alt="sidebar_gallery"
                      className="cursor-pointer rounded-xl"
                    />
                    <img
                      src={SideImg4}
                      alt="sidebar_gallery"
                      className="cursor-pointer rounded-xl"
                    />
                    <img
                      src={SideImg5}
                      alt="sidebar_gallery"
                      className="cursor-pointer rounded-xl"
                    />
                    <img
                      src={SideImg6}
                      alt="sidebar_gallery"
                      className="cursor-pointer rounded-xl"
                    />
                  </div>
                </div>
                {/* contact */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Contact Info</h3>
                  <p className="cursor-pointer text-[1.6rem] font-medium text-[#000000b1] duration-200 ease-in hover:text-[#eab308]">
                    <i className="fa-solid fa-location-dot text-[#eab308]"></i>
                    &nbsp; 5100 Zouila, Mahdia , Mahdia
                  </p>
                  <p className="cursor-pointer text-[1.6rem] font-medium text-[#000000b1] duration-200 ease-in hover:text-[#eab308]">
                    <i className="fa-solid fa-phone text-[#eab308]"></i>&nbsp;
                    +216 29701532
                  </p>
                  <p className="cursor-pointer text-[1.6rem] font-medium text-[#000000b1] duration-200 ease-in hover:text-[#eab308]">
                    <i className="fa-solid fa-envelope text-[#eab308]"></i>
                    &nbsp; fitbox@gymail.com
                  </p>
                </div>
                {/* follow us */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Follow Us</h3>
                  <div className="flex gap-5">
                    <span className="cursor-pointer rounded-full bg-[#eab308] px-[17px] py-[12px]">
                      <i className="fa-brands fa-facebook-f text-[2.2rem] text-white"></i>
                    </span>
                    <span className="cursor-pointer rounded-full bg-[#eab308] px-[12px] py-[12px]">
                      <i className="fa-brands fa-twitter text-[2.2rem] text-white"></i>
                    </span>
                    <span className="cursor-pointer rounded-full bg-[#eab308] px-[13px] py-[10px]">
                      <i className="fa-brands fa-instagram text-[2.2rem] text-white"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* hamburger */}
            <i
              onClick={hamburgerMenu}
              className="fa-bars fa-solid cursor-pointer text-4xl text-white duration-200 ease-in hover:text-[#eab308]"
            ></i>
            {/* account */}
            <Link onClick={goTop} to="/signup" title="signup_button">
              <i className="fa-regular fa-user cursor-pointer text-4xl text-white duration-200 ease-in hover:text-[#eab308]"></i>
            </Link>
            {/* sidebar */}
            <i
              onClick={sideBar}
              className="fa-regular fa-chart-bar cursor-pointer text-4xl text-white duration-200 ease-in hover:text-[#eab308]"
            ></i>
          </div>
          {/* spin box */}
          <div className="rounded-md border-2 border-solid border-[rgb(255,255,255,0.3)] p-2 min620:hidden">
            <Link
              onClick={goTop}
              to={"/contact"}
              onMouseEnter={joinSpin}
              onMouseLeave={stopSpin}
              className="flex items-center"
            >
              <i
                className={`fa-solid fa-plus rounded-md bg-[#eab308] px-4 py-3 text-2xl text-white ${
                  spin ? "nav-btn-hover" : ""
                }`}
              ></i>
              <h3 className="ml-4 mr-8 text-[14px] font-bold uppercase tracking-wider text-white">
                join class now
              </h3>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
