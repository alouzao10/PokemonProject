import React, { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import { AppProvider } from './Context/AppContext';

import Header from './Components/Header';
import Home from './Components/Home';
import Cards from './Components/Cards/Cards';
import Trainers from './Components/Trainers/Trainers';
import About from './Components/About';

// Search for a card by name
// Have ability to sort on year released on the search or added filter after retrieval
// Have ability to add to your collection
// Each trainer will have their own collection
// Each trainer will have their own "password" to show their collection in the Trainers tab

function App() {
	const API_KEY = 'b6c2b7ee-d320-415b-a555-704d886be6cc';
	const API_URL = 'https://api.pokemontcg.io/v2/cards?q=name:';

	return (
		<div className='App'>
			<AppProvider>
				<Router>
					<Header />
					<Route exact path='/' component={Home} />
					<Route exact path='/cards' render={() => <Cards apiUrl={API_URL}/>} />
					<Route exact path='/trainers' component={Trainers} />
					<Route exact path='/about' component={About} />
				</Router>
			</AppProvider>
		</div>
	);
}

export default App;
