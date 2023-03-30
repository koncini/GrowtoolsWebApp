var abrirLog = function() {
  	var win = window.open('https://docs.google.com/spreadsheets/d/1dM2E6egfzHq52BsvH8IEzCmZjI_3IuWLIqhbqVnmHLI/edit?usp=sharing', '_blank');
	if (win) {
	    //Browser has allowed it to be opened
	    win.focus();
	} else {
	    //Browser has blocked it
	    alert('Please allow popups for this website');
	}
}

$(document).ready(function(){
	var url = "https://script.google.com/macros/s/AKfycbyp0E16bZP6V6m_4nfbb_hSeFJhsZfoKZGCRnE7CwmbTnO3psVy4Rrrv8Hh1zBLb3fq9Q/exec?deh=temp3";
    $.ajaxSetup({ cache: false }); 
    setInterval(function() {
        $.get(url, function(result){
        	var data = JSON.parse(result);
        	generateGraph(data);
        });
    },10000);
});

function generateGraph(DATA){
  var ctx = document.getElementById('chartTempD3').getContext('2d');
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        {
          label: 'Temperatura',
          borderColor: '#FF0000',
          data: DATA,
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
            labelString: '[°C]'
          }
        }]
      },
    }
  });
}  