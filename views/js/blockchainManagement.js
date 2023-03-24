
$(document).ready(function(){
    $('#mine_block').click(function(e){
        var url = "https://script.google.com/macros/s/AKfycbyDcKU2bTxEtGuBwL-A-yfVsYIolUla2FnUkkY2XFREMba4XwWSuLIh5LZHIWjQiHkowA/exec?room=deshidratadores"
        $.ajax({
            "url" : url,
            "type" : "GET",
            'success' : function(result) {
                var data = JSON.parse(result);
                addTransaction(data);
            }
        });
    });
});

$(document).ready(function(){
    $('#get_blockchain').click(function(e){
        $.ajax({
            "url" : "https://b2db-35-199-103-50.ngrok.io/get_chain",
            "type" : "GET",
            'success' : function(result) {
                var last_block = (result.chain[result.length-1]);
                var block_data = last_block.transactions[0].payload;
                var number_of_data_sets = block_data.length;
                var data_set2 = block_data[0];
                var data_set1 = block_data[1];
                var html = "";
                for (var i = 0; i < data_set1.length; i++){
                    html += '<tr>'+
                                '<td><center>' + data_set1[i].t + '</center></td>' +
                                '<td><center>' + data_set1[i].y + '</center></td>' +
                                '<td><center>' + data_set2[i].y + '</center></td>' +
                                '<td><center>' + 0 + '</center></td>' +
                                '<td><center>' + 0 + '</center></td>' +
                            '</tr>';
                }
                $("#table_s tbody").append(html); 
            }
        });
    });
});

$(document).ready(function(){
    $('#is_valid').click(function(e){
        $.ajax({
            "url" : "https://b2db-35-199-103-50.ngrok.io/is_valid",
            "type" : "GET",
            'success' : function(result) {
                $("#error").html(result.message);
                $('#myModal').modal("show");
            }
        });
    });
});

function addTransaction(data){
    $.ajax({
        "url" : "https://b2db-35-199-103-50.ngrok.io/add_transaction",
        "type" : "POST",
        "data": JSON.stringify({"sender": "Local",
            "receiver": "remote",
            "payload" : data
        }),
        "contentType": "application/json; charset=utf-8",
        'success' : function(result) {
           mineBlock();
        }
    });
}

function mineBlock(){
    $.ajax({
        "url" : "https://b2db-35-199-103-50.ngrok.io/mine_block",
        "type" : "GET",
        'success' : function(result) {
            $("#error").html(result.message);
            $('#myModal').modal("show");
        }
    });
}

function changeList(){
    var x = document.getElementById("variables").value;
    console.log(x);
}