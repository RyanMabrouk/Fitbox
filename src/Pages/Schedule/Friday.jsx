import React from "react";
import { Link } from "react-router-dom";

function Friday() {
  return (
    <>
      {/* fiter buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/schedule/monday"
          className="rounded-[23px] border border-solid border-[#d7d7d7] px-[32px] py-[9px] text-[15px] font-bold duration-200 ease-in hover:bg-[#eab308] hover:text-white hover:shadow-2xl"
        >
          Monday
        </Link>

        <Link
          to="/schedule/tuesday"
          className="rounded-[23px] border border-solid border-[#d7d7d7] px-[32px] py-[9px] text-[15px] font-bold duration-200 ease-in hover:bg-[#eab308] hover:text-white hover:shadow-2xl"
        >
          Tuesday
        </Link>

        <Link
          to="/schedule/wednesday"
          className="rounded-[23px] border border-solid border-[#d7d7d7] px-[32px] py-[9px] text-[15px] font-bold duration-200 ease-in hover:bg-[#eab308] hover:text-white hover:shadow-2xl"
        >
          Wednesday
        </Link>

        <Link
          to="/schedule/thursday"
          className="rounded-[23px] border border-solid border-[#d7d7d7] px-[32px] py-[9px] text-[15px] font-bold duration-200 ease-in hover:bg-[#eab308] hover:text-white hover:shadow-2xl"
        >
          Thursday
        </Link>

        <Link
          to="/schedule/friday"
          className="rounded-[23px] border border-solid border-[#d7d7d7] bg-[#eab308] px-[32px] py-[9px] text-[15px] font-bold text-white duration-200 ease-in hover:shadow-2xl"
        >
          Friday
        </Link>

        <Link
          to="/schedule/saturday"
          className="rounded-[23px] border border-solid border-[#d7d7d7] px-[32px] py-[9px] text-[15px] font-bold duration-200 ease-in hover:bg-[#eab308] hover:text-white hover:shadow-2xl"
        >
          Saturday
        </Link>

        <Link
          to="/schedule/sunday"
          className="rounded-[23px] border border-solid border-[#d7d7d7] px-[32px] py-[9px] text-[15px] font-bold duration-200 ease-in hover:bg-[#eab308] hover:text-white hover:shadow-2xl"
        >
          Sunday
        </Link>
      </div>

      {/* ---- */}

      {/* boxes */}
      <div className="mt-[5rem]">
        {/* monday */}
        <div className="flex flex-col gap-3">
          {/* row */}
          <ul className="flex w-full justify-between min800:flex-col min800:text-center">
            {/* class name */}
            <li className="w-full bg-[#f2f2f2] px-[55px] py-[25px]">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <p className="mt-3 text-[18px] font-bold text-black">Crossfit</p>
            </li>
            {/* time */}
            <li className="w-full bg-[#f2f2f2] p-[25px] text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="mt-3 text-[18px] font-bold text-black">
                9:00am - 10:00am
              </p>
            </li>
            {/* trainer */}
            <li className="w-full bg-[#f2f2f2] p-[25px] text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="mt-3 text-[18px] font-bold text-black">Mike Mich</p>
            </li>
            <li className="w-full bg-[#f2f2f2] px-[55px] py-[25px] text-right min800:text-center">
              <button className="mt-3 rounded-[30px] bg-[#555] px-[20px] py-[10px] text-[15px] font-medium text-white duration-200 ease-in hover:bg-[#eab308]">
                Join Now
              </button>
            </li>
          </ul>
          {/* row */}
          <ul className="flex w-full justify-between min800:flex-col min800:text-center">
            {/* class name */}
            <li className="w-full bg-[#f2f2f2] px-[55px] py-[25px]">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <p className="mt-3 text-[18px] font-bold text-black">Karate</p>
            </li>
            {/* time */}
            <li className="w-full bg-[#f2f2f2] p-[25px] text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="mt-3 text-[18px] font-bold text-black">
                10:00pm - 11:00pm
              </p>
            </li>
            {/* trainer */}
            <li className="w-full bg-[#f2f2f2] p-[25px] text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="mt-3 text-[18px] font-bold text-black">
                John Jones
              </p>
            </li>
            <li className="w-full bg-[#f2f2f2] px-[55px] py-[25px] text-right min800:text-center">
              <button className="mt-3 rounded-[30px] bg-[#555] px-[20px] py-[10px] text-[15px] font-medium text-white duration-200 ease-in hover:bg-[#eab308]">
                Join Now
              </button>
            </li>
          </ul>
          {/* row */}
          <ul className="flex w-full justify-between min800:flex-col min800:text-center">
            {/* class name */}
            <li className="w-full bg-[#f2f2f2] px-[55px] py-[25px]">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <p className="mt-3 text-[18px] font-bold text-black">
                Meditation
              </p>
            </li>
            {/* time */}
            <li className="w-full bg-[#f2f2f2] p-[25px] text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="mt-3 text-[18px] font-bold text-black">
                4:00pm - 5:00pm
              </p>
            </li>
            {/* trainer */}
            <li className="w-full bg-[#f2f2f2] p-[25px] text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="mt-3 text-[18px] font-bold text-black">
                Lara Croft
              </p>
            </li>
            <li className="w-full bg-[#f2f2f2] px-[55px] py-[25px] text-right min800:text-center">
              <button className="mt-3 rounded-[30px] bg-[#555] px-[20px] py-[10px] text-[15px] font-medium text-white duration-200 ease-in hover:bg-[#eab308]">
                Join Now
              </button>
            </li>
          </ul>
          {/* row */}
          <ul className="flex w-full justify-between min800:flex-col min800:text-center">
            {/* class name */}
            <li className="w-full bg-[#f2f2f2] px-[55px] py-[25px]">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <p className="mt-3 text-[18px] font-bold text-black">Workout</p>
            </li>
            {/* time */}
            <li className="w-full bg-[#f2f2f2] p-[25px] text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="mt-3 text-[18px] font-bold text-black">
                6:00pm - 7:00pm
              </p>
            </li>
            {/* trainer */}
            <li className="w-full bg-[#f2f2f2] p-[25px] text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="mt-3 text-[18px] font-bold text-black">
                Lary Wheels
              </p>
            </li>
            <li className="w-full bg-[#f2f2f2] px-[55px] py-[25px] text-right min800:text-center">
              <button className="mt-3 rounded-[30px] bg-[#555] px-[20px] py-[10px] text-[15px] font-medium text-white duration-200 ease-in hover:bg-[#eab308]">
                Join Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Friday;
