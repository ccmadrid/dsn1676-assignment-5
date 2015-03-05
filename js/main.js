var $form = $('.form');
var $input = $('.input');
var $list = $('.list');

$form.on('submit', function (e) {
	e.preventDefault();

	var $li = $('<li>').html($name.val());
	var inputValue = $input.val();
	var $close = $('<button class="close">X</button>')

});

$list.on('click', 'li', function (e) {
	e.preventDefault();
	console.log($list);

});


