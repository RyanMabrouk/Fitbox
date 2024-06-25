import Footer from "../components/Footer/Footer";
import Pricing from "../components/Pricing/Pricing";

function Price() {
  return (
    <>
      <section className="login-section">
        <div className="login-banner relative flex justify-center">
          <h1 className="absolute bottom-[25px] text-[3rem] font-bold text-white">
            Pricing
          </h1>
        </div>
        <Pricing />
        <Footer />
      </section>
    </>
  );
}

export default Price;
