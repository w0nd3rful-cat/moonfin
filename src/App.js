import Navbar from './components/layout/Navbar';
import Addtrade from './components/trades/Addtrade';
import List from './components/trades/List';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<List />
			<Addtrade />
		</div>
	);
}

export default App;
