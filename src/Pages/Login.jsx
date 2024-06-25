import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = UserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/#home");
      goTop();
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <section className="login-section">
        <div className="login-banner relative flex justify-center">
          <h1 className="absolute bottom-[25px] text-[3rem] font-bold text-white">
            Sign In
          </h1>
        </div>
        {/* form  */}
        <div className="page-padding flex justify-center py-[10rem]">
          <form
            onSubmit={handleSubmit}
            className="flex w-[55rem] flex-col bg-black px-20 py-40 shadow-xl min450:w-full"
          >
            {error ? (
              <p className="mb-10 bg-[#eab308] px-10 py-5 text-center text-[1.6rem] font-bold text-white">
                Wrong email or password
              </p>
            ) : null}
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
              Sign In
            </button>
            <div className="mt-16 flex items-center gap-4 min450:flex-col">
              <p className="text-[1.5rem] text-white">New to Fitbox?</p>
              <Link
                to="/signup"
                className="text-[1.5rem] font-bold text-[#eab308]"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Login;
