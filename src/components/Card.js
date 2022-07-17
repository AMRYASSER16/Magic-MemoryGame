import React from 'react';
import './Card.css';

const card = ({ card, handleChoice, flipped }) => {
    const handlerBackClick = () => {
        handleChoice(card);
    };

    return (
        <div className="card">
            <div className={flipped ? 'flipped' : ''}>
                <img className="front" src={card.src} alt="front" />
                <img className="back" src="/img/cover.png" alt="back" onClick={handlerBackClick} />
            </div>
        </div>
    );
};

export default card;