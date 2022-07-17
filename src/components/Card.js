import React from 'react';
import './Card.css';

const card = ({ card, handleChoice, flipped, disabled }) => {
    const handlerBackClick = () => {
        if(!disabled) {
            handleChoice(card);
        }
    };

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt="front-img" />
                <img className="back" src="/img/cover.png" alt="back-img" onClick={handlerBackClick} />
            </div>
        </div>
    );
};

export default card;