import React from "react";
import "../App.css";

const emblem = '../image/DnD-Emblem.png';

const Card = ({card, disabled, handleCardClick}) => {

    return (
        <button 
            className={`card ${card.matchfound ? "matched" : ""}`}
            disabled={disabled} 
            onClick={handleCardClick}
            data-id={card.id}
        >
            <div className="side" id="cardFront">
                <img id="frontImage" src='https://logos-world.net/wp-content/uploads/2021/12/DnD-Emblem.png' alt={emblem} />
            </div>
            <div className="side" id="cardBack">
                <h1 id="cardText">{card.mon_name}</h1>
                <img id="backImage" src={card.mon_img} />
            </div>
        </button>
    );
};

export default Card;