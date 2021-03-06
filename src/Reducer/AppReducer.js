export default (state, payload) => {
	switch (payload.action) {
		case 'ADD_CARD':
			let newCard = payload.data.newCard;
			let userID = payload.data.userID;
			console.log('New Card = ', newCard);
			console.log('Trainer id = ', userID);
			// Add the new card to the current trainer and return updates
			// Use the PUT method, see example from crash course

			var currTrainer;
			fetch(`http://localhost:5000/trainers/${userID}`)
				.then((res) => res.json())
				.then((data) => {
					console.log('Data', data);
					currTrainer = { ...data, pokemon: [...data.pokemon, newCard] };
				})
				.then(() => {
					console.log(currTrainer);
					fetch(`http://localhost:5000/trainers/${userID}`, {
						method: 'PUT',
						headers: { 'Content-type': 'application/json' },
						body: JSON.stringify(currTrainer),
					})
						.then((res) => res.json())
						.then((data) => {
							return [...state.trainers, data];
						});
				});
			break;
		default:
			break;
	}
};
