Post = new Mongo.Collection('post');

Meteor.methods({
	addPost: function(content){
		
		if(!Meteor.userId()){
			throw new Meteor.Error('Not Authorized','You are not Signed in');
		}

		var usr = Meteor.user().username;
		Post.insert({
			content: content, 
			created: new Date(),
			username: usr 
		});
			

	},
	follow: function(post){
	//get current user
	var user = Meteor.user();

	if(!user){
		throw new Meteor.Error('Not Authorized','You are not Signed in');
	}

	//you cant follow yourself and you cant follow a user twice

	if(user.username != post.username && user.profile.follow.indexOf(post.username) == -1){
		Meteor.users.update({ _id : user._id},
			{$push: {'profile.follow': post.username}
		});		
	}

	}
});
