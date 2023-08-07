import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = UserAuth();
  const navigate = useNavigate();

  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      navigate("/#home");
      goTop();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="login-section ">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Sign Up
          </h1>
        </div>
        {/* form  */}
        <div className="py-[10rem] flex justify-center page-padding">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col py-40 px-20 bg-black w-[55rem] min450:w-full  shadow-xl"
          >
            <label className="text-[2rem] text-white mb-3 font-medium ">
              Email
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#eab308] "
              placeholder="gymate@gymail.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <label className="text-[2rem] text-white mb-3 font-medium outline-[#eab308] outline-2">
              Password
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#eab308] "
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button
              type="submit"
              className="bg-[#eab308] text-white py-4 font-medium text-[2rem] w-full mt-10"
            >
              Sign Up
            </button>
            <div className="flex gap-4 items-center mt-16 min450:flex-col">
              <p className="text-white text-[1.5rem]">Already have account?</p>
              <Link
                to="/login"
                className="text-[#eab308] font-bold text-[1.5rem]"
              >
                Sign In
              </Link>
            </div>
            <p className="text-[#ffffffbc] text-[1.3rem] mt-5">
              ( Make <span className="text-[#eab308]">new Accout</span> or go to
              <span className="text-[#eab308]"> Sign In</span> Page for Test
              Account )
            </p>
          </form>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Signup;
