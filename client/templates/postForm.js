Template.postForm.events({
	'click button'(e){
		e.preventDefault();
		fet = document.getElementById('content').value;
		Meteor.call('addPost', content);



		$('#content').val(" ");
		
	}
});