
$(document).ready(function(){
	$.ajaxSetup({ cache: false }); 
	setInterval(function() {
		$.get("../IODehStatus.html", function(result){
			if (result === "1"){
				$('#estadoDeshidratadores').text('encendido');
			} else {
				$('#estadoDeshidratadores').text('apagado');
			}
		});
	},1000);
});

$(document).ready(function(){
	$.ajaxSetup({ cache: false }); 
	setInterval(function() {
		$.get("../IOD1Status.html", function(result){
			if (result === "1"){
				$('#estadoDeshidratador1').text('encendido');
			} else {
				$('#estadoDeshidratador1').text('apagado');
			}
		});
	},1000);
});

$(document).ready(function(){
	$.ajaxSetup({ cache: false }); 
	setInterval(function() {
		$.get("../IOD2Status.html", function(result){
			if (result === "1"){
				$('#estadoDeshidratador2').text('encendido');
			} else {
				$('#estadoDeshidratador2').text('apagado');
			}
		});
	},1000);
});

$(document).ready(function(){
	$.ajaxSetup({ cache: false }); 
	setInterval(function() {
		$.get("../IOD3Status.html", function(result){
			if (result === "1"){
				$('#estadoDeshidratador3').text('encendido');
			} else {
				$('#estadoDeshidratador3').text('apagado');
			}
		});
	},1000);
});

$(document).ready(function(){
	$.ajaxSetup({ cache: false }); 
	setInterval(function() {
		$.get("../IOTempD1Status.html", function(result){
			$('#temperaturaDeshidratador1').text(result);
		});
	},1000);
});

$(document).ready(function(){
	$.ajaxSetup({ cache: false }); 
	setInterval(function() {
		$.get("../IOTempD2Status.html", function(result){
			$('#temperaturaDeshidratador2').text(result);
		});
	},1000);
});

$(document).ready(function(){
	$.ajaxSetup({ cache: false }); 
	setInterval(function() {
		$.get("../IOTempD3Status.html", function(result){
			$('#temperaturaDeshidratador3').text(result);
		});
	},1000);
});

$(document).ready(function(){
	$.ajaxSetup({ cache: false }); 
	setInterval(function() {
		$.get("../IOHumD1Status.html", function(result){
			$('#humedadDeshidratador1').text(result);
		});
	},1000);
});

$(document).ready(function(){
	$.ajaxSetup({ cache: false }); 
	setInterval(function() {
		$.get("../IOHumD2Status.html", function(result){
			$('#humedadDeshidratador2').text(result);
		});
	},1000);
});

$(document).ready(function(){
	$.ajaxSetup({ cache: false }); 
	setInterval(function() {
		$.get("../IOHumD3Status.html", function(result){
			$('#humedadDeshidratador3').text(result);
		});
	},1000);
});

$(document).ready(function(){
	$.ajaxSetup({ cache: false }); 
	setInterval(function() {
		$.get("../IOD1HystStatus.html", function(result){
			$('#hystDeshidratador1').text(result);
		});
	},1000);
});

$(document).ready(function(){
	$.ajaxSetup({ cache: false }); 
	setInterval(function() {
		$.get("../IOD2HystStatus.html", function(result){
			$('#hystDeshidratador2').text(result);
		});
	},1000);
});

$(document).ready(function(){
	$.ajaxSetup({ cache: false }); 
	setInterval(function() {
		$.get("../IOD3HystStatus.html", function(result){
			$('#hystDeshidratador3').text(result);
		});
	},1000);
});	

var mouseDown = function(elementId, formId) {
	document.getElementById(elementId).value = "1";
	document.getElementById(formId).submit();
}

var activarDeshidratadores = function(url, buttonId) {
	name='"Iniciar"';
	val=$('input[id='+ buttonId +']').attr('coilValue');
	sdata=escape(name)+'='+val;
	$.post(url,sdata,function(result){});
}

var detenerDeshidratadores = function(url, buttonId) {
	name='"Detener"';
	val=$('input[id='+ buttonId +']').attr('coilValue');
	sdata=escape(name)+'='+val;
	$.post(url,sdata,function(result){});
}

var pausarDeshidratadores = function(url, buttonId) {
	name='"Pausar"';
	val=$('input[id='+ buttonId +']').attr('coilValue');
	sdata=escape(name)+'='+val;
	$.post(url,sdata,function(result){});
}

var activarDeshidratador1 = function(url, buttonId) {
	name='"Activar_Deshidratador1"';
	val=$('input[id='+ buttonId +']').attr('coilValue');
	sdata=escape(name)+'='+val;
	$.post(url,sdata,function(result){});
}

var desactivarDeshidratador1 = function(url, buttonId) {
	name='"Activar_Deshidratador1"';
	val=$('input[id='+ buttonId +']').attr('coilValue');
	sdata=escape(name)+'='+val;
	$.post(url,sdata,function(result){});
}

var activarDeshidratador2 = function(url, buttonId) {
	name='"Activar_Deshidratador2"';
	val=$('input[id='+ buttonId +']').attr('coilValue');
	sdata=escape(name)+'='+val;
	$.post(url,sdata,function(result){});
}

var desactivarDeshidratador2 = function(url, buttonId) {
	name='"Activar_Deshidratador2"';
	val=$('input[id='+ buttonId +']').attr('coilValue');
	sdata=escape(name)+'='+val;
	$.post(url,sdata,function(result){});
}

var activarDeshidratador3 = function(url, buttonId) {
	name='"Activar_Deshidratador3"';
	val=$('input[id='+ buttonId +']').attr('coilValue');
	sdata=escape(name)+'='+val;
	$.post(url,sdata,function(result){});
}

var desactivarDeshidratador3 = function(url, buttonId) {
	name='"Activar_Deshidratador3"';
	val=$('input[id='+ buttonId +']').attr('coilValue');
	sdata=escape(name)+'='+val;
	$.post(url,sdata,function(result){});
}

var cargarSetPointHumD1 = function(url) {
	name='"Set_Point_Humedad_D1"';
	val=$('input[id=setHumD1]').val();
	sdata=escape(name)+'='+val;
	$.post(url,sdata,function(result){});
}

var cargarSetPointHumD2 = function(url) {
	name='"Set_Point_Humedad_D2"';
	val=$('input[id=setHumD2]').val();
	sdata=escape(name)+'='+val;
	$.post(url,sdata,function(result){});
}

var cargarSetPointHumD3 = function(url) {
	name='"Set_Point_Humedad_D3"';
	val=$('input[id=setHumD3]').val();
	sdata=escape(name)+'='+val;
	$.post(url,sdata,function(result){});
}

var cargarSetPointTempD1 = function(url) {
	name='"Set_Point_Deshidratador1"';
	val=$('input[id=setTempD1]').val();
	sdata=escape(name)+'='+val;
	$.post(url,sdata,function(result){});
}

var cargarSetPointTempD2 = function(url) {
	name='"Set_Point_Deshidratador2"';
	val=$('input[id=setTempD2]').val();
	sdata=escape(name)+'='+val;
	$.post(url,sdata,function(result){});
}

var cargarSetPointTempD3 = function(url) {
	name='"Set_Point_Deshidratador3"';
	val=$('input[id=setTempD3]').val();
	sdata=escape(name)+'='+val;
	$.post(url,sdata,function(result){});
}

var cargarHystD1 = function(url) {
	name='"Tiempo_Histeresis_D1"';
	val=$('input[id=setHystD1]').val();
	sdata=escape(name)+'='+val;
	$.post(url,sdata,function(result){});
}

var cargarHystD2 = function(url) {
	name='"Tiempo_Histeresis_D2"';
	val=$('input[id=setHystD2]').val();
	sdata=escape(name)+'='+val;
	$.post(url,sdata,function(result){});
}

var cargarHystD3 = function(url) {
	name='"Tiempo_Histeresis_D3"';
	val=$('input[id=setHystD3]').val();
	sdata=escape(name)+'='+val;
	$.post(url,sdata,function(result){});
}		