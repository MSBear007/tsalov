function resizeText(fsize){
	// функция изменения размера шрифта на странице
	var selector = document.getElementById('fontSel'); //установка значения селектора
	selector.value = fsize;
	var paras = document.querySelectorAll('.para'); //изменение размера шрифта
	paras.forEach(function(item) {
	  item.style.fontSize = fsize;
	});
}

function fontSizeChange(selectObject) { 
  // функция вызывается при изменении селектора шрифта
  var value = selectObject.value;  
  document.cookie = "fontSize="+value+";max-age=31556926";
  resizeText(value);
}

window.onload = function() { 
	// функция вызывается после загрузки страницы
	// проверяется сохранённое значение шрифта, выставляется соответствующий размер
	var fontSize = '17px';
	var results = document.cookie.match(/fontSize=(.+?)(;|$)/);
	if (results == null) {
		document.cookie = "fontSize=17px";
	} else {
		fontSize = results[1];
	}
	resizeText(fontSize);
};