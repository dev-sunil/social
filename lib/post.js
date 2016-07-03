Post = new Mongo.Collection('post');

Meteor.methods({
	addPost: function(content){
		
		if(!Meteor.userId()){
			throw new Meteor.Error('Not Authorized','You are not Signed in');
		}

		var usr = Meteor.user().username;
		Post.insert({
			content: fet, 
			created: new Date(),
			username: usr 
		});
			

	}
});
