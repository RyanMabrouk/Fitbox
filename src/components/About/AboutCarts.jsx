import { cardList } from "./CardList";

function AboutCarts() {
  return (
    <>
      {cardList.map((card, id) => (
        <div
          key={id}
          className="card-item-div mt-12 flex min-h-[340px] w-full cursor-pointer flex-col items-center justify-center rounded-br-[35px] rounded-tl-[35px] bg-white px-10 py-6 text-center shadow-2xl transition-all duration-300 ease-linear md1000:min-h-[260px]"
        >
          <img src={card.img} alt="box_img" className="mb-4 w-[75px]" />
          <p className="mb-7 text-[24px] font-bold uppercase">{card.title}</p>
          <p className="leading-2 w-full text-[15px] font-medium">
            {card.description}
          </p>
        </div>
      ))}
    </>
  );
}

export default AboutCarts;
