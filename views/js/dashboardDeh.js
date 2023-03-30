var abrirLog = function() {
  	var win = window.open('https://docs.google.com/spreadsheets/d/10VKNkT25-FNhzgkY4EC4vE7pY0r6qtsANeq6rnuiMzo/edit?usp=sharing', '_blank');
	if (win) {
	    //Browser has allowed it to be opened
	    win.focus();
	} else {
	    //Browser has blocked it
	    alert('Please allow popups for this website');
	}
}

$(document).ready(function(){
	var url = "https://script.google.com/macros/s/AKfycbyDcKU2bTxEtGuBwL-A-yfVsYIolUla2FnUkkY2XFREMba4XwWSuLIh5LZHIWjQiHkowA/exec?room=deshidratadores"
    $.ajaxSetup({ cache: false }); 
    setInterval(function() {
        $.get(url, function(result){
        	var data = JSON.parse(result);
        	generateGraph(data[0], data[1]);
        });
    },10000);
});

function generateGraph(DATA, DATB){
  var ctx = document.getElementById('chartHumTempDeh').getContext('2d');
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        {
          label: 'Humedad',
          borderColor: '#0000FF',
          data: DATA,
          type: 'line',
          pointRadius: 0,
          fill: false,
          lineTension: 0,
          borderWidth: 2
        },
        {
          label: 'Temperatura',
          borderColor: '#FF0000',
          data: DATB,
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
              labelString: 'Hora'
            }
          }],
          yAxes: [{
            type: 'linear',
            scaleLabel: {
              display: true,
              labelString: '[%H - °C]'
            }
        }]
      }
    }
  });
}        