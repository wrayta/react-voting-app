import { createStore } from 'redux';
import songApp from '../reducers/song-reducer';
import { loadState, saveState } from './local-storage';
import _throttle from 'lodash/throttle';

// const data = 
// [
// 	{
// 		id: 0,
// 		title: "Im Waiting for the Man",
// 		votes: 0
// 	},
// 	{
// 		id: 1,
// 		title: "Sunday Morning",
// 		votes: 0
// 	},
// 	{
// 		id: 2,
// 		title: "Ill Be Your Mirror",
// 		votes: 0
// 	}
// ];


const configureStore = () => {
	const persistedState = loadState();

	const store = createStore(
		songApp,
		persistedState
	);

	store.subscribe(_throttle(() => {
		saveState(
			store.getState()
		);
	}, 1000));

	return store;
};

export default configureStore;