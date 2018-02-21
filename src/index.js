import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import SongTable from './components/SongTable';
import AddSong from './components/AddSong';
import store from './store/index';

const App = () => {
	
	return (

		<div>
			<SongTable />

			<AddSong />
		</div>
	);
};

ReactDOM.render(<Provider store = {store}>
					<App />
				</Provider>, 
				document.getElementById('root')
);