import { useEffect, useRef } from "react";
import card_data from "../../assets/card/card_data";
import "./Titlecards.css";




const Titlecards = ({title,category}) => {
  const cardRef = useRef();

  const handlewheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollleft += event.deltaY;
  };
  useEffect(() => {
    cardRef.current.addEventListener("wheel", handlewheel);
  }, []);
  
  return (
    <div className="titlecards">
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {card_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Titlecards;
