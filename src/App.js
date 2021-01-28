import Navbar from './components/layout/Navbar';
import Main from './components/Main';

import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />

				<Main />
			</div>
		</Router>
	);
}

export default App;
