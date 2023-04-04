import React from "react";
import "../App.css";
import "./levelSelector.css"

const LevelSelector = ({ gameController, resetCards, backendData, setPrevCards, setNextCards }) => {

    let fourCards = backendData.sort(() => Math.random() -0.5)
          .slice(0,4).map((card) => card);

    let eightCards = backendData.sort(() => Math.random() -0.5)
        .slice(0,8).map((card) => card);

    let twelveCards = backendData.sort(() => Math.random() -0.5)
        .slice(0,12).map((card) => card);

    let eighteenCards = backendData.sort(() => Math.random() -0.5)
        .slice(0,18).map((card) => card);
    
    let allCards = backendData.sort(() => Math.random() -0.5)
        .slice(0,28).map((card) => card);


    function Beginner() {
    
        resetCards(fourCards);
        gameController();
        //console.log(fourCards);
        setPrevCards(fourCards);
        setNextCards(eightCards)
        
    }
    
    function Easy() {
        
        //console.log(eightCards);
        resetCards(eightCards);
        gameController();
        setPrevCards(eightCards);
        setNextCards(twelveCards)
    }

    function Medium() {

        //console.log(twelveCards);
        resetCards(twelveCards);
        gameController();
        setPrevCards(twelveCards);
        setNextCards(eightCards)

    }
    

    function Hard() {
        
        //console.log(eighteenCards);
        resetCards(eighteenCards);
        gameController();
        setPrevCards(eighteenCards);
        setNextCards(allCards)

    }

    function clinicallyInsane() {
       
        //console.log(allCards);
        resetCards(allCards);
        gameController();
        setPrevCards(allCards);

    }

    return (
        <div id="levelSelector">
            <h1 id="beginner">4 Cards</h1>
            <img 
                id='beginnerBtn'
                onClick={Beginner}
                src='https://clipartix.com/wp-content/uploads/2017/11/Free-cartoon-baby-dragon-clip-art.png'
                alt=""
            />
            <h1 id='easy'>8 Cards</h1>
            <img
                id='easyBtn'
                onClick={Easy}
                src="http://cdn.shopify.com/s/files/1/0537/1501/products/DragonDie_placeitfile_1200x1200.png?v=1559771685"
                alt=""
            />
            <h1 id='medium'>12 Cards</h1>
            <img 
                id='mediumBtn'
                onClick={Medium}
                src='https://flightrising.com/rendern/350/25390/2538983_350.png'
                alt=""
            />
            <h1 id='hard'>18 Cards</h1>
            <img
                id='hardBtn'
                onClick={Hard}
                src='https://www.gmbinder.com/images/2FWC9yU.png'
                alt=""
            />
            <h1 id='insane'>28 Cards</h1>
            <img
                id='insaneBtn'
                onClick={clinicallyInsane}
                src='https://i.pinimg.com/originals/c8/07/4b/c8074b0c09479065b6fd72d8a866a559.png'
                alt=""
            />
        </div>
    )

};

export default LevelSelector;