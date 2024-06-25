import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Schedule() {
  return (
    <>
      <section className="">
        <div className="login-banner relative flex justify-center">
          <h1 className="absolute bottom-[25px] text-[3rem] font-bold text-white">
            Schedule by Day
          </h1>
        </div>
        {/* schedule */}
        <div className="page-padding container py-[10rem]">
          <Outlet />
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Schedule;
