var $form = $('.form');
var $input = $('.input');
var $list = $('.list');

var $items = $('.list li');


$form.on('submit', function (e) {
	e.preventDefault();

	var $li = $('<li class="js-li">');
	var inputValue = $input.val();
	var $inputA = $('<a href="#" class="js-item">').html($input.val())
	var $close = '<a href="#" class="js-close">X</a>'

	$li.append($inputA).append($close);
	$list.append($li);
	console.log($close);

});
