const upVote = (id) => {
	console.log("upVote!");
	return {
		type: 'UPVOTE',
		id
	};
};

export default upVote;