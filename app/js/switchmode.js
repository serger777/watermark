var switchModeCatcher = (function () {
	console.log('SWICTH MODE CATCHER');

	var init = _listener;

	var submit = $('#submitBtn', '.watermark-right');
	var singleMode = $('.form__view-link_single');
	var tileMode = $('.form__view-link_tile');
	var viewMode = $('.form__view-link');
	var positionRadios = $('.position__adjust-radio');
	var labelX = $('.label-x', '.position__adjust-sett');
	var labelY = $('.label-y', '.position__adjust-sett');
	var _linePositions = $('.linePositions', '.watermark-right');

	function _listener(actionplace) {
		singleMode.on('click', _setServerData);
		tileMode.on('click', _setServerData);
		if(actionplace === 'single') {
			console.log('SINGLE MODE');
		}
		else {
			console.log('TILE MODE OR FIRST INIT');
		}
	}

	function _setServerData() {
		var serve = $(this).find('input[type=radio]').val();
		
		$.each(viewMode, function (index, value) {
			$(value).removeClass('active');
		});

		$(this).addClass('active');

		//Инициализируем нужное состояние модуля позишена, меняем CSS-стили у элементов
		switch(serve) {
			case 'tile':
				position.init('tile');
				positionRadios.addClass('disabled');
				labelX.addClass('label-x_tile');
				labelY.addClass('label-y_tile');
				_linePositions.fadeIn(300);
				break;
			case 'single':
				position.init('single');
				positionRadios.removeClass('disabled');
				labelX.removeClass('label-x_tile');
				labelY.removeClass('label-y_tile');
				_linePositions.fadeOut(300);
				break;
			}
	}

	return {
		init: init
	}
})();

if($('.form__view-link_tile').length > 0) {
	switchModeCatcher.init();
}