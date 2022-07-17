import React from 'react';
import './Card.css';

const card = ({ cards, handleChoice }) => {
	const handlerBackClick = (card) => {
        handleChoice(card)
    };

	return (
		<div className="card-grid">
			{cards.map((card) => (
				<div className="card" key={card.id}>
					<div>
						<img className="card-front" src={card.src} alt="card-front" />
						<img className="card-back" src="/img/cover.png" alt="card-back" onClick={() => handlerBackClick(card)} />
					</div>
				</div>
			))}
		</div>
	);
};

export default card;