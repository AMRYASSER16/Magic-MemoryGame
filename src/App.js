import { useState, useEffect } from 'react';
import Card from './components/Card';
import './App.css';

const cardImages = [
	{ "src": '/Magic-MemoryGame/img/helmet-1.png', matched: false },
	{ "src": '/Magic-MemoryGame/img/potion-1.png', matched: false },
	{ "src": '/Magic-MemoryGame/img/ring-1.png', matched: false },
	{ "src": '/Magic-MemoryGame/img/scroll-1.png', matched: false },
	{ "src": '/Magic-MemoryGame/img/shield-1.png', matched: false },
	{ "src": '/Magic-MemoryGame/img/sword-1.png', matched: false }
];

function App() {
	const [ cards, setCards ] = useState([]);
	const [ turns, setTurns ] = useState(0);
	const [ choiceOne, setChoiceOne ] = useState(null);
	const [ choiceTwo, setChoiceTwo ] = useState(null);
	const [ disabled, setDisabled ] = useState(false);

	const shuffleCards = () => {
		const shuffledCards = [ ...cardImages, ...cardImages ]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		setChoiceOne(null);
		setChoiceTwo(null);
		setCards(shuffledCards);
		setTurns(0);
	};

	const handleChoice = (card) => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

	// comparing 2 choices
	useEffect(
		() => {
			if (choiceOne && choiceTwo) {
				setDisabled(true);
				if (choiceOne.src === choiceTwo.src) {
					setCards((prevCards) => {
						return prevCards.map((card) => {
							if (card.src === choiceOne.src) {
								return {
									...card,
									matched: true
								};
							} else {
								return card;
							}
						});
					});
					resetTurn();
				} else {
					setTimeout(() => resetTurn(), 1000);
				}
			}
		},
		[ choiceOne, choiceTwo, cards ]
	);

	const resetTurn = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns((prevTurns) => prevTurns + 1);
		setDisabled(false);
	};

	useEffect(() => {
		shuffleCards();
	}, []);

	return (
		<div className="App">
			<h1>Magic Match</h1>
			<button onClick={shuffleCards}>New Game</button>

			<div className="card-grid">
				{cards.map((card) => (
					<Card
						key={card.id}
						card={card}
						flipped={card === choiceOne || card === choiceTwo || card.matched}
						handleChoice={handleChoice}
						disabled={disabled}
					/>
				))}
			</div>

			<p>Turns: {turns}</p>
		</div>
	);
}

export default App;