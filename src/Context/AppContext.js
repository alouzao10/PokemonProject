import React, {createContext, useReducer} from 'react';
import AppReducer from '../Reducer/AppReducer';

import Data from "../Data/db.json";

// Create the initial state
const initialState = {
    trainers: Data.trainers
}

// Create the Context for use with the initial state
export const GlobalContext = createContext(initialState);

// Create the Provider to allow components access to the contenxt
export const AppProvider = ({children}) => {
    // Decalre state that uses the Reducer to modify and return new state
    // state = initial or updated state
    // dispatch = info to pass into the Reducer
    const [state, setState] = useReducer(AppReducer);

    // Define functions for use
    // ...
    function addCard(newCard){
        setState({
            action: 'ADD_CARD',
            data: newCard
        });
    }

    return(
        <GlobalContext.Provider value={{trainers: initialState.trainers}}>
            {children}
        </GlobalContext.Provider>
    )
}
