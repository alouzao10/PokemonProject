import userEvent from '@testing-library/user-event';
import React, { useState, useContext } from 'react';

import { GlobalContext } from '../../Context/AppContext';

function Cards(props) {
	const { trainers } = useContext(GlobalContext);

	const { apiUrl } = props;

	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');
	const [userAuth, setUserAuth] = useState(false);

	const [currUser, setCurrUser] = useState({});

	const [pokeName, setName] = useState('');
	const [cards, setCards] = useState([]);

	const updateFields = (e) => {
		let field = e.target.name;
		let value = e.target.value;
		switch (field) {
			case 'user':
				setUser(value);
				break;
			case 'pass':
				setPass(value);
				break;
			case 'pokeName':
				setName(value);
				break;
			default:
				break;
		}
	};

	const loginTrainer = (e) => {
		e.preventDefault();
		console.log('Login User');
		let loggedInUser = trainers.filter(
			(trainer) => trainer.user === user && trainer.pass === pass
		);
		if (loggedInUser.length > 0) {
			setCurrUser(loggedInUser[0]);
			setUserAuth(true);
		} else {
			alert('Trainer Not Found. Please Try Again.');
			setUserAuth(false);
			setCurrUser({});
			setUser('');
			setPass('');
		}
	};

	const logoutTrainer = () => {
		setUserAuth(false);
		setCurrUser({});
		setUser('');
		setPass('');
	};

	const pokemonSearch = async (e) => {
		e.preventDefault();
		console.log('Pokemon Search');
		let request = apiUrl + pokeName;
		await fetch(request)
			.then((ret) => ret.json())
			.then((result) => setCards(result.data));
	};

	const addToCollection = (card) => {
		let newCard = {
			id: card.id,
			name: card.name,
			images: card.images,
			rarity: card.rarity,
		};
      // Pass the new card to be saved in the db file
      // Pass in the trainer info to save the cards based on the trainer
      addCard(newCard, currUser.id)
	};

	const removeFromCollection = (oldCard) => {
		let oldCardID = oldCard.id;
		// Pass the old card to be removed from the db file
	};

	// Form for signing in as a trainer
	// Form to search for pokemon/cards, hide unless trainer logs in

	return (
		<div>
			<h1>Cards</h1>
			<div>
				{userAuth ? (
					<div>
						<h3>Find Your Cards {currUser.name}</h3>
						<button onClick={logoutTrainer}>Log Out</button>
						<form onSubmit={pokemonSearch}>
							<label>Pokemon Name: </label>
							<input
								type='text'
								name='pokeName'
								value={pokeName}
								onChange={updateFields}
							/>
							<button type='submit'>Search</button>
						</form>
						<br />
						<div className='cardCollection'>
							{cards.map((card, i) => (
								<div id={i}>
									<img src={card.images.small} alt='' />
									<br />
									<button onClick={() => addToCollection(card)}>
										Add
									</button>
									<button onClick={() => removeFromCollection(card)}>
										Remove
									</button>
								</div>
							))}
						</div>
					</div>
				) : (
					<div>
						<h3>Sign In Trainer...</h3>
						<form onSubmit={loginTrainer}>
							<label>Username: </label>
							<input
								type='text'
								name='user'
								value={user}
								onChange={updateFields}
								placeholder='ProfOak123'
							/>
							<label>Password: </label>
							<input
								type='text'
								name='pass'
								value={pass}
								onChange={updateFields}
								placeholder='catchEm@ll'
							/>
							<button type='submit'>Search</button>
						</form>
					</div>
				)}
			</div>
		</div>
	);
}

export default Cards;
