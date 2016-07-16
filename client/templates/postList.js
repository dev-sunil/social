Template.postList.helpers({
	posts(){

		var result;

		if(Session.get('username')){
		 result = Post.find({username: Session.get('username')}, {sort : {created: -1}}); 
		} else {
		 result = Post.find({}, {sort : {created: -1}}); 
		}

		return result;
	}
});

Template.postList.events({
	'click .follow-link'(e){
		e.preventDefault();

		Meteor.call('follow',this)
	}
});