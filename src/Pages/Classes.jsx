import { useState } from "react";
import ClassesBox from "../components/ClassesBox/ClassesBox";
import Footer from "../components/Footer/Footer";

function Classes() {
  const [load, setLoad] = useState(true);

  const loadMore = () => {
    setLoad(!load);
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="login-section text-center">
        <div className="login-banner relative flex justify-center">
          <h1 className="absolute bottom-[25px] text-[3rem] font-bold text-white">
            Classes
          </h1>
        </div>

        {/* boxes 1*/}
        <div
          className={`page-padding container grid-cols-3 grid-rows-3 gap-12 py-[10rem] text-left md1000:grid-cols-2 min620:grid-cols-1 ${
            load ? "grid" : "hidden"
          }`}
        >
          <ClassesBox
            bgImg="cycling-bg"
            title="Cycling"
            trainer="Dorian Yate"
            date="Wed: 9:00 am"
          />
          <ClassesBox
            bgImg="meditaion-bg"
            title="Meditation"
            trainer="Maria Mich"
            date="Fri: 1:00 pm"
          />
          <ClassesBox
            bgImg="mma-bg"
            title="Boxing"
            trainer="John Flex"
            date="Tue: 4:00 pm"
          />
          <ClassesBox
            bgImg="karate-bg"
            title="Karate"
            trainer="David Rich"
            date="Sat: 9:00 am"
          />
          <ClassesBox
            bgImg="powerlift-bg"
            title="Power Lifting"
            trainer="Larry Wheels"
            date="Mon: 8:00 pm"
          />
          <ClassesBox
            bgImg="workout-bg"
            title="Workout"
            trainer="Shawn Ray"
            date="Sun: 10:00 am"
          />
          <ClassesBox
            bgImg="crossfit-bg"
            title="Crossfit"
            trainer="Jenifer Alex"
            date="Wen: 9:00 pm"
          />
          <ClassesBox
            bgImg="running-bg"
            title="Running"
            trainer="Zinia Zessy"
            date="Fri: 6:00 am"
          />
        </div>

        {/* boxes 2*/}
        <div
          className={`page-padding container grid-cols-3 grid-rows-3 gap-12 py-[10rem] text-left md1000:grid-cols-2 min620:grid-cols-1 ${
            load ? "hidden" : "grid"
          }`}
        >
          <ClassesBox
            bgImg="cycling-bg"
            title="Cycling"
            trainer="Dorian Yate"
            date="Wed: 9:00 am"
          />
          <ClassesBox
            bgImg="meditaion-bg"
            title="Meditation"
            trainer="Maria Mich"
            date="Fri: 1:00 pm"
          />
          <ClassesBox
            bgImg="mma-bg"
            title="Boxing"
            trainer="John Flex"
            date="Tue: 4:00 pm"
          />
          <ClassesBox
            bgImg="karate-bg"
            title="Karate"
            trainer="David Rich"
            date="Sat: 9:00 am"
          />
          <ClassesBox
            bgImg="powerlift-bg"
            title="Power Lifting"
            trainer="Larry Wheels"
            date="Mon: 8:00 pm"
          />
          <ClassesBox
            bgImg="workout-bg"
            title="Workout"
            trainer="Shawn Ray"
            date="Sun: 10:00 am"
          />
          <ClassesBox
            bgImg="crossfit-bg"
            title="Crossfit"
            trainer="Jenifer Alex"
            date="Wen: 9:00 pm"
          />
          <ClassesBox
            bgImg="running-bg"
            title="Running"
            trainer="Zinia Zessy"
            date="Thu: 12:00 am"
          />
          <ClassesBox
            bgImg="bodybuilding-bg"
            title="Body Building"
            trainer="Jake Paul"
            date="Mon: 8:00 pm"
          />
          <ClassesBox
            bgImg="box-bg"
            title="Mma"
            trainer="Becky Lynch"
            date="Fri: 6:00 am"
          />
          <ClassesBox
            bgImg="yoga-bg"
            title="Yoga"
            trainer="Marta Mich"
            date="Wen: 8:00 am"
          />
          <ClassesBox
            bgImg="fitness-bg"
            title="Fitness"
            trainer="Mia Malkova"
            date="Sun: 5:00 pm"
          />
        </div>

        <button
          className="mb-14 bg-slate-600 px-14 py-6 text-[1.5rem] font-medium uppercase text-white shadow-2xl"
          onClick={() => {
            loadMore();
            goTop();
          }}
        >
          {load ? "show more" : "show less"}
        </button>

        <Footer />
      </section>
    </>
  );
}

export default Classes;
