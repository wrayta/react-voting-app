const song = (state = [], action) => {
	console.log("song Action: ");
	console.log(action);

	switch(action.type) {
		case 'ADD_SONG':
			return {
				id: action.id,
				title: action.title,
				votes: 0
			};
		case 'UPVOTE':
			if (state.id !== action.id) {
				return state;
			}

			return {
				...state,
				votes: state.votes + 1
			}; 
		default:
			return state;
	}
};

export default function songs (state = [], action) {
	console.log("songs Action: ");
	console.log(action);

	switch(action.type) {
		case 'ADD_SONG':
			return [
				...state,
				song(undefined, action)
			];
		case 'UPVOTE':
				return state.map(s => song(s, action));
		default:
			return state;
	}
};