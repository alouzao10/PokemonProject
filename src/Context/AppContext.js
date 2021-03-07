import React, { createContext, useReducer } from 'react';
import AppReducer from '../Reducer/AppReducer';

import Data from '../Data/db.json';

// Create the initial state
const initialState = {
	trainers: Data.trainers,
};

// Create the Context for use with the initial state
export const GlobalContext = createContext(initialState);

// Create the Provider to allow components access to the contenxt
export const AppProvider = ({ children }) => {
	// Decalre state that uses the Reducer to modify and return new state
	// state = initial or updated state
	// dispatch = info to pass into the Reducer
	const [state, setState] = useReducer(AppReducer, initialState);

	// Define functions for use
	// ...
	function addCard(newCard, userID) {
		setState({
			action: 'ADD_CARD',
			data: { newCard, userID },
		});
	}

	return (
		<GlobalContext.Provider
			value={{ trainers: initialState.trainers, addCard }}>
			{children}
		</GlobalContext.Provider>
	);
};
