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
      <section className="login-section">
        <div className="login-banner relative flex justify-center">
          <h1 className="absolute bottom-[25px] text-[3rem] font-bold text-white">
            Sign Up
          </h1>
        </div>
        {/* form  */}
        <div className="page-padding flex justify-center py-[10rem]">
          <form
            onSubmit={handleSubmit}
            className="flex w-[55rem] flex-col bg-black px-20 py-40 shadow-xl min450:w-full"
          >
            <label className="mb-3 text-[2rem] font-medium text-white">
              Email
            </label>
            <input
              className="mb-10 w-full px-8 py-4 text-[1.7rem] outline-[#eab308]"
              placeholder="yourName@gymail.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <label className="mb-3 text-[2rem] font-medium text-white outline-2 outline-[#eab308]">
              Password
            </label>
            <input
              className="mb-10 w-full px-8 py-4 text-[1.7rem] outline-[#eab308]"
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button
              type="submit"
              className="mt-10 w-full bg-[#eab308] py-4 text-[2rem] font-medium text-white"
            >
              Sign Up
            </button>
            <div className="mt-16 flex items-center gap-4 min450:flex-col">
              <p className="text-[1.5rem] text-white">Already have account?</p>
              <Link
                to="/login"
                className="text-[1.5rem] font-bold text-[#eab308]"
              >
                Sign In
              </Link>
            </div>
            <p className="mt-5 text-[1.3rem] text-[#ffffffbc]">
              ( Make <span className="text-[#eab308]">new Accout</span>)
            </p>
          </form>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Signup;
