import React from 'react';
import './Card.css';

const Card = ({ card, handleChoice, flipped, disabled }) => {
    const handlerBackClick = () => {
        if(!disabled) {
            handleChoice(card);
        }

        console.log(card)
    };

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt="front-img" />
                <img className="back" src="/Magic-MemoryGame/img/cover.png" alt="back-img" onClick={handlerBackClick} />
            </div>
        </div>
    );
};

export default Card;