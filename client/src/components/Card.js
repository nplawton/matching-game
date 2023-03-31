import React from "react";
import "../App.css"

const emblem = '../image/DnD-Emblem.png';

const Card = ({card}) =>{
//    console.table(card.mon_img);

    function handleCardClick (){
        console.log('click');
    }

    return (
        <button className="card" onClick={handleCardClick}>
            <div className="side cardFront">
                <img id="frontImage" src='https://logos-world.net/wp-content/uploads/2021/12/DnD-Emblem.png' alt={emblem} />
            </div>
            <div className="side cardBack">
                <h1 id="cardText">{card.mon_name}</h1>
                <img id="backImage" src={card.mon_img} />
            </div>
        </button>
    );
};

export default Card;