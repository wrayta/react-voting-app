import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import upVote from './actions/up-vote';
import addSong from './actions/add-song';
import store from './store/index';

const App = () => {
	
	return (

		<div>
			<SongTable />

			<AddSong />
		</div>
	);
};

let SongTable = ({ 
	songs,
	onSongClick
 }) => {

	console.log("Songs: ");
	console.log(songs);

	console.log("Store: ");
	console.log(store.getState());

	let rows = [];

	let sortedSongs = songs.sort((a, b) => {
      let aVotes = a.votes;
      let bVotes = b.votes;

      if (aVotes >= bVotes) { return 1; }
      if (aVotes < bVotes) { return -1; }
      return 0;

    });

    sortedSongs.reverse().map(song => {
		rows.push(<tr>
			<td>
				{song.title}
			</td>
			<td>
				<button onClick={() => onSongClick(song.id)}>
					{song.votes}
				</button>
			</td>
		</tr>);
	});
	
	return (
		<table>
	    	<tbody>
	      		{rows}
	    	</tbody>
	  	</table>
	);
};

const mapStateToSongTableProps = (
	state
) => {
	return {
		songs: store.getState()
	};
};

const mapDispatchToSongTableProps = (
	dispatch
) => {
	return {
		onSongClick: (id) => {
			dispatch(
				upVote(id)
			);
		}
	};
};
SongTable = connect(
	mapStateToSongTableProps,
	mapDispatchToSongTableProps
)(SongTable);

let AddSong = ({ dispatch }) => {
	let input;

	return(
		<div>
			<input ref={node => {
				input = node;
			}} />
			<button onClick={() => {
				dispatch(
					addSong(input.value)
				);

				input.value = '';
			}}>
			Add Song
			</button>
		</div>
	);
};
AddSong = connect()(AddSong);

ReactDOM.render(<Provider store = {store}>
					<App />
				</Provider>, 
				document.getElementById('root')
);