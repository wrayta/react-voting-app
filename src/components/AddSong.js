import React from 'react';
import { connect } from 'react-redux';
import addSong from '../actions/add-song';

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

export default AddSong;