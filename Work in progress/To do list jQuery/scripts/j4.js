$(document).ready(function() {

	addTodo();

});//$(obekt). metod();

var applyListItemEvents = function() {
var listObj = $('ul');
var listItems = listObj.find('li');

// mouseover
	listItems.mouseover(function() {
		$(this).css('background', 'red');
	});

	listItems.mouseout(function() {
		$(this).css('background', '')
	});

	listItems.unbind('click')
	listItems.bind('click', function() {
		if($(this).hasClass('green')) {
			$(this).removeClass('green');
		} else {
			$(this).addClass('green');
		}

	})
}

var addTodo = function() {
	var listObj = $('ul');
	var todoInput = $('#todoInput');
	var todoAdd = $('#todoAdd');

	applyListItemEvents();


	todoAdd.click(function() {

		var listItems = listObj.find('li');
		var inputValue = todoInput.val().trim();

		for(var i = 0; i < listItems.length; i++) {



			if($(listItems[i]).html() === inputValue) {
				return;
			}

			if(inputValue.length == 0) {
				return false;
			}
		}

		listObj.append('<li>' + inputValue +'</li>');
		applyListItemEvents();
		todoInput.focus().val('');
	})
}
