Template.profileArea.helpers({
	following: function () {
		var user = Meteor.user();
		return user.profile.follow;
	},
	followers: function() {
		var user = Meteor.user(),
		    followers = Meteor.users.find({
		    	'profile.follow': {
		    		$in: [user.username]
		    	}
		    });
		    return followers;

	}
});

Template.profileArea.events({
	'click .filter-user': function(e) {
		e.preventDefault();
		var sltUsr = e.target.text;
		Session.set('username',sltUsr);
	},
	'click .community': function(e) {
		e.preventDefault();
		Session.set('username',null);
	}
});