Template.postForm.events({
	'click button'(e){
		e.preventDefault();
		content = document.getElementById('content').value;
		Meteor.call('addPost', content);



		$('#content').val(" ");
		
	}
});