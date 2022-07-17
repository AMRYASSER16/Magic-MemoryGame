import React from 'react';
import './Card.css'

const card = ({ cards }) => {
	return (
		<div className="card-grid">
			{cards.map(({ id, src }) => (
				<div className="card" key={id}>
					<div>
						<img className="card-front" src={src} alt="card-front" />
						<img className="card-back" src="/img/cover.png" alt="card-back" />
					</div>
				</div>
			))}
		</div>
	);
};

export default card;