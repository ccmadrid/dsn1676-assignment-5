var $form = $('.form');
var $input = $('.input');
var $list = $('.list');

$form.on('submit', function (e) {
	e.preventDefault();

	var $li = $('<li>').html($input.val());
	var inputValue = $input.val();
	var $close = $('<button class="close">X</button>')

	$close.on('click', function () {
		$li.remove('li');
	})

	if($input.val() != '') {
		$li.append($close);
		$list.prepend($li);
		$input.val('');
	}

});

$list.on('click', 'li', function (e) {
	$(this).toggleClass('finished');
});


