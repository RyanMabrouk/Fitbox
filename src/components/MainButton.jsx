import { Link } from "react-router-dom";

function MainButton({ color, bg, cN, arrowColor, hover, text, goTo }) {
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Link
      onClick={goTop}
      to={goTo}
      className={`text-[15px] ${color} ${bg} ${cN} hero-cta relative ml-2 h-[5.5rem] w-[20rem] pt-[18px] text-center font-[600] uppercase ${hover} `}
    >
      {text} &nbsp;
      <i className={`fa-solid fa-arrow-right text-[#eab308] ${arrowColor}`}></i>
    </Link>
  );
}

export default MainButton;
