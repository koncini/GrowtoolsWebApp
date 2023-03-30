var abrirLog = function() {
  	var win = window.open('https://docs.google.com/spreadsheets/d/1oOV-yOje6pH9Jl-Iihz9tnWyKbRkuKVGQtVBBVxn4G8/edit?usp=sharing', '_blank');
	if (win) {
	    //Browser has allowed it to be opened
	    win.focus();
	} else {
	    //Browser has blocked it
	    alert('Please allow popups for this website');
	}
}

$(document).ready(function(){
	var url = "https://script.google.com/macros/s/AKfycbyunclBEoO2krhBQE2Pdw_GsmY07rxCF-MdExkmcO44m_2dpgQGd828Qih2TX4HZMtE/exec?deh=hum2"
    $.ajaxSetup({ cache: false }); 
    setInterval(function() {
        $.get(url, function(result){
        	var data = JSON.parse(result);
        	generateGraph(data[0], data[1], data[2]);
        });
    },10000);
});

function generateGraph(DATA, DATB, DATC){
  var ctx = document.getElementById('chartHumD2').getContext('2d');
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        {
          label: 'Nivel 1',
          borderColor: '#0000FF',
          data: DATA,
          type: 'line',
          pointRadius: 0,
          fill: false,
          lineTension: 0,
          borderWidth: 2
        },
        {
          label: 'Nivel 3',
          borderColor: '#0080FF',
          data: DATB,
          type: 'line',
          pointRadius: 0,
          fill: false,
          lineTension: 0,
          borderWidth: 2
        },
        {
          label: 'Nivel 6',
          borderColor: '#00FFFF',
          data: DATC,
          type: 'line',
          pointRadius: 0,
          fill: false,
          lineTension: 0,
          borderWidth: 2
        }
       ]
    },
    options: {
      scales: {
        xAxes: [{
          type: 'time',
          scaleLabel: {
            display: true,
            abelString: 'Hora'
          }
        }],
        yAxes: [{
          type: 'linear',
          scaleLabel: {
            display: true,
            labelString: '[%H]'
          }
        }]
      },
    }
  });
}