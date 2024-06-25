import BlogBox from "../components/BlogBox/BlogBox";
import Footer from "../components/Footer/Footer";
import Img1 from "../images/blogpage/1.jpg";
import Img2 from "../images/blogpage/2.jpg";
import Img3 from "../images/blogpage/3.jpg";
import Img4 from "../images/blogpage/4.jpg";
import Img5 from "../images/blogpage/5.jpg";
import Img6 from "../images/blogpage/6.jpg";
import Img7 from "../images/blogpage/7.jpg";
import Recent1 from "../images/blogpage/recent1.jpg";
import Recent2 from "../images/blogpage/recent2.jpg";
import Recent3 from "../images/blogpage/recent3.jpg";
import Recent4 from "../images/blogpage/recent4.jpg";
import Recent5 from "../images/blogpage/recent5.jpg";
import Recent6 from "../images/blogpage/recent6.jpg";

function Blog() {
  return (
    <>
      <section>
        <div className="login-banner relative flex justify-center">
          <h1 className="absolute bottom-[25px] text-[3rem] font-bold text-white">
            Blog
          </h1>
        </div>
        {/* blog */}
        <div className="page-padding container grid grid-cols-[64fr_35fr] gap-16 py-[10rem] md1000:grid-cols-1 md1000:gap-32">
          {/* blog */}
          <div className="flex flex-col gap-28">
            <BlogBox img={Img1} title="Yoga For Everyone in 2023" />
            <BlogBox
              img={Img2}
              title="Getting Back Into CrossFit After Vacation"
            />
            <BlogBox img={Img3} title="Meet Fitness Ambassador Grace" />
            <BlogBox img={Img4} title="The Best are European Materls Direct" />
            <BlogBox
              img={Img5}
              title="Give your Fitness a Boost with our Gym"
            />
            <BlogBox
              img={Img6}
              title="How to Get Fit Your Kids Moving Throughout The Summer"
            />
            <BlogBox
              img={Img7}
              title="Give your fitness a boost with our new gym challenge"
            />
          </div>

          {/* sidebar */}
          <div>
            {/* form */}
            <form className="flex">
              <input
                className="h-[60px] w-full rounded-bl-xl rounded-tl-xl border-[1px] border-solid px-[20px] py-[5px] text-[16px] font-medium text-[#444] outline-none"
                type="search"
                placeholder="Search..."
              ></input>
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass h-[60px] w-[60px] rounded-br-xl rounded-tr-xl bg-[#eab308] pt-[18px] text-[23px] text-white"></i>
              </button>
            </form>

            {/* categories */}
            <div className="my-[35px] flex flex-col bg-[#f8f8f8] p-[30px]">
              <p className="mb-5 text-[18px] font-bold text-black">
                Categories
              </p>
              <span className="h-[3.5px] w-[40px] bg-[#eab308]"></span>
              <ul className="mt-10 text-[16px] font-medium text-[#7e7e7e]">
                <li className="mb-10 flex cursor-pointer justify-between border-b border-[#dcd9d9] pb-6 duration-200 ease-in hover:text-[#eab308]">
                  <p>
                    <i className="fa-solid fa-chevron-right text-[13px]"></i>
                    &nbsp; Body Building
                  </p>
                  <span>(4)</span>
                </li>

                <li className="mb-10 flex cursor-pointer justify-between border-b border-[#dcd9d9] pb-6 duration-200 ease-in hover:text-[#eab308]">
                  <p>
                    <i className="fa-solid fa-chevron-right text-[13px]"></i>
                    &nbsp; Boxing
                  </p>
                  <span>(4)</span>
                </li>

                <li className="mb-10 flex cursor-pointer justify-between border-b border-[#dcd9d9] pb-6 duration-200 ease-in hover:text-[#eab308]">
                  <p>
                    <i className="fa-solid fa-chevron-right text-[13px]"></i>
                    &nbsp; Crossfit
                  </p>
                  <span>(4)</span>
                </li>

                <li className="mb-10 flex cursor-pointer justify-between border-b border-[#dcd9d9] pb-6 duration-200 ease-in hover:text-[#eab308]">
                  <p>
                    <i className="fa-solid fa-chevron-right text-[13px]"></i>
                    &nbsp; Fitness
                  </p>
                  <span>(4)</span>
                </li>

                <li className="mb-10 flex justify-between border-b border-[#dcd9d9] pb-6 duration-200 ease-in hover:text-[#eab308]">
                  <p>
                    <i className="fa-solid fa-chevron-right text-[13px]"></i>
                    &nbsp; Meditation
                  </p>
                  <span>(4)</span>
                </li>

                <li className="mb-10 flex cursor-pointer justify-between border-b border-[#dcd9d9] pb-6 duration-200 ease-in hover:text-[#eab308]">
                  <p>
                    <i className="fa-solid fa-chevron-right text-[13px]"></i>
                    &nbsp; Yoga
                  </p>
                  <span>(4)</span>
                </li>
              </ul>
            </div>
            {/* recent posts */}
            <div className="my-[35px] flex flex-col bg-[#f8f8f8] p-[30px]">
              <p className="mb-5 text-[18px] font-bold text-black">
                Recent Posts
              </p>
              <span className="mb-7 h-[3.5px] w-[40px] bg-[#eab308]"></span>
              <div className="flex flex-col gap-7">
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent1} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col justify-center gap-4">
                    <p className="text-[14px] font-medium text-[#646464]">
                      March 22, 2023
                    </p>
                    <p className="cursor-pointer text-[16px] font-bold text-black duration-200 ease-in hover:text-[#eab308]">
                      Yoga For Everyone in 2023
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent2} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col justify-center gap-4">
                    <p className="text-[14px] font-medium text-[#646464]">
                      March 22, 2023
                    </p>
                    <p className="cursor-pointer text-[16px] font-bold text-black duration-200 ease-in hover:text-[#eab308]">
                      Getting Back Into CrossFit
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent3} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col justify-center gap-4">
                    <p className="text-[14px] font-medium text-[#646464]">
                      March 22, 2023
                    </p>
                    <p className="cursor-pointer text-[16px] font-bold text-black duration-200 ease-in hover:text-[#eab308]">
                      Meet Fitness Abassador Grace
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent4} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col justify-center gap-4">
                    <p className="text-[14px] font-medium text-[#646464]">
                      March 22, 2023
                    </p>
                    <p className="cursor-pointer text-[16px] font-bold text-black duration-200 ease-in hover:text-[#eab308]">
                      The best are European Meditation Practitioner
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent5} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col justify-center gap-4">
                    <p className="text-[14px] font-medium text-[#646464]">
                      March 22, 2023
                    </p>
                    <p className="cursor-pointer text-[16px] font-bold text-black duration-200 ease-in hover:text-[#eab308]">
                      Learn Boxing With Our Trainer John
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent6} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col justify-center gap-4">
                    <p className="text-[14px] font-medium text-[#646464]">
                      March 22, 2023
                    </p>
                    <p className="cursor-pointer text-[16px] font-bold text-black duration-200 ease-in hover:text-[#eab308]">
                      How To Get Lean For The Summer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* popular tags */}
            <div className="my-[35px] flex flex-col bg-[#f8f8f8] p-[30px]">
              <p className="mb-5 text-[18px] font-bold text-black">
                Popular Tags
              </p>
              <span className="mb-7 h-[3.5px] w-[40px] bg-[#eab308]"></span>
              <div className="flex flex-wrap gap-3 text-[16px] font-medium text-[#646464]">
                <p className="cursor-pointer bg-white px-[14px] py-[4px] duration-200 ease-in hover:text-[#eab308]">
                  #Crossfit
                </p>
                <p className="cursor-pointer bg-white px-[14px] py-[4px] duration-200 ease-in hover:text-[#eab308]">
                  #Fitness
                </p>
                <p className="cursor-pointer bg-white px-[14px] py-[4px] duration-200 ease-in hover:text-[#eab308]">
                  #Gym
                </p>
                <p className="cursor-pointer bg-white px-[14px] py-[4px] duration-200 ease-in hover:text-[#eab308]">
                  #Meditation
                </p>
                <p className="cursor-pointer bg-white px-[14px] py-[4px] duration-200 ease-in hover:text-[#eab308]">
                  #Running
                </p>
                <p className="cursor-pointer bg-white px-[14px] py-[4px] duration-200 ease-in hover:text-[#eab308]">
                  #Workout
                </p>
                <p className="cursor-pointer bg-white px-[14px] py-[4px] duration-200 ease-in hover:text-[#eab308]">
                  #Yoga
                </p>
                <p className="cursor-pointer bg-white px-[14px] py-[4px] duration-200 ease-in hover:text-[#eab308]">
                  #Boxing
                </p>
              </div>
            </div>
            {/* banner */}
            <div className="blog-banner relative h-[56rem] w-full">
              <p className="absolute left-10 top-16 z-[2] text-[34px] font-bold uppercase">
                gymat
              </p>
              <span className="banner-shape absolute left-0 top-14 z-[1] h-[60px] w-[18rem] bg-white"></span>
              <div className="absolute left-10 top-[10rem] flex flex-col text-white">
                <p className="text-[64px] font-bold">34%</p>
                <p className="-mt-[10px] text-[20px] font-bold">
                  Flat Discount
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

export default Blog;
