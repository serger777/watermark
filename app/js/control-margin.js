var controlMargin = (function () {
	//Манифест
	console.log('POSITION UP DOWN BUTTONS SWITCHER');

	//Рычаг
	var init = _setListener;

	//Переменные среды
	var _inputY = $('.number__input-y'),
		_inputX = $('.number__input-x'),
		_defY = $('.number__input-y').val(0),
		_defX = $('.number__input-x').val(0),
		_btnXUp = $('#XUp'),
		_btnXDown = $('#XDown'),
		_btnYUp = $('#YUp'),
		_btnYDown = $('#YDown'),
		_posBtns = $('.sett-up, .sett-down', '.position__adjust-sett'),
		_watermark = $('#watermarkInsert');

	//Слушатель
	function _setListener(destroy) {
		if(destroy === 'destroy') {
			console.log('СБРОС ЛОГИКИ КОНТРОЛЯ ПО СТРЕЛКАМ');
		}
		else if(destroy === 'tile') {
			console.log('УСТАНОВКА МАРДЖИНОВ ПО СТРЕЛКАМ ВКЛЮЧЕНА');
			_setPositionByButton(false);
			//_setMarginsToWatermark(true);
		}
		else if(destroy === 'single') {
			//console.log('ВКЛЮЧЕН КОНТРОЛЬ КООРДИНАТ ПО СТРЕЛКАМ');
			//_setMarginsToWatermark(false);
			_setPositionByButton(true);
		}

		//Отменяем событие бай дефолт при клике по button
		_posBtns.on('click', function (event) {
			event.preventDefault();
		});
	}

	//Добавление отступов по клику на кнопки (button слева от инпутов с координатами)
	function _setMarginsToWatermark() {
		var waterImgs = _watermark.find('img');
		var marginRight = waterImgs.css('margin-right');
		console.log(marginRight);
		//console.log(waterImgs);

		$.each(waterImgs, function () {
			$(this).css({
				'margin-right': parseInt(marginRight) + 2,
				'margin-bottom' : parseInt(marginRight) + 2
			});
		});
	}

	//Смещение по клику на кнопки
	function _setPositionByButton(destroy) {
		if(destroy === true) {
			_btnXUp.on('click', function() {_watermark.css({ left: _watermark.position().left + 2 }); _getNewCoordinates(); _setMarginsToWatermark(); });
			_btnXDown.on('click', function() {_watermark.css({ left: _watermark.position().left - 2 }); _getNewCoordinates(); _setMarginsToWatermark(); });
			_btnYUp.on('click', function() {_watermark.css({ top: _watermark.position().top + 2 }); _getNewCoordinates(); _setMarginsToWatermark(); });
			_btnYDown.on('click', function() {_watermark.css({ top: _watermark.position().top - 2 }); _getNewCoordinates(); _setMarginsToWatermark(); });
			console.log('CHECKED TO SINGLE');
		}
	}

	//Установка координат в инпуты
	function _getNewCoordinates(){
		var
			newY = _watermark.position().top,
			newX = _watermark.position().left;

			_inputY.val(Math.round(newY));
  			_inputX.val(Math.round(newX));
	}

	return {
		init: init
	}
})();