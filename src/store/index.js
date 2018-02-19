import {createStore} from 'redux';
import songs from '../reducers/song-reducer';

const data = 
[
	{
		id: 0,
		title: "Im Waiting for the Man",
		votes: 0
	},
	{
		id: 1,
		title: "Sunday Morning",
		votes: 0
	},
	{
		id: 2,
		title: "Ill Be Your Mirror",
		votes: 0
	}
];

const store = createStore(songs, data);
console.log("Store: ")
console.log(store.getState());

export default store;