import React from "react";
import "../App.css"

const emblem = '../image/DnD-Emblem.png';

const Card = ({card}) =>{
   console.table(card.mon_img);

    return (
        <button className="cardContainer">
            <div className="cardFront">
                <img id="frontImage" src='https://logos-world.net/wp-content/uploads/2021/12/DnD-Emblem.png' alt={emblem} />
            </div>
            <div className="cardBack">
                <h1 id="cardText">{card.mon_name}</h1>
                <img id="backImage" src={card.mon_img} />
            </div>
        </button>
    );
};

export default Card;