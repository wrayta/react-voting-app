let nextSongId = 0;

const addSong = (title) => {
	return {
		type: 'ADD_SONG',
		id: nextSongId++,
		title
	};
};

export default addSong;