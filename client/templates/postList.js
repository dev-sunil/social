Template.postList.helpers({
	posts(){
		return Post.find({}, {sort : {created: -1}});
	}
});

Template.postList.events({
	'click .follow-link'(e){
		e.preventDefault();
	}
});