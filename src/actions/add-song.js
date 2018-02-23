import { v4 } from 'node-uuid';

const addSong = (title) => {
	return {
		type: 'ADD_SONG',
		id: v4(),
		title
	};
};

export default addSong;