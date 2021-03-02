import userEvent from '@testing-library/user-event';
import React, { useState, useContext } from 'react';

import { GlobalContext } from '../../Context/AppContext';

function Cards() {
	const { trainers } = useContext(GlobalContext);

	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');

	const [currUser, setCurrUser] = useState({});

	const [userAuth, setUserAuth] = useState(false);
	const [pokeName, setName] = useState('');

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

	const pokemonSearch = (e) => {
		e.preventDefault();
		console.log('Pokemon Search');
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
