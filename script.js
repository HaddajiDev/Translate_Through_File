
var lines_final = [];

function Read_File(file) {
    let reader = new FileReader();

    reader.onload = function(event) {
        let contents = event.target.result;
        let lines = contents.split('\n');
        lines.forEach(function(line) {            
            lines_final.push(line);
        });
        Update_Lines(lines_final);
    };    
    
    reader.readAsText(file);
}


var input = document.getElementById('fileInput');


input.addEventListener('change', function() {
    var file = input.files[0];
    Read_File(file);
});


function Update_Lines() {
    for(let i = 0; i < lines_final.length; i++) {
        var el = document.getElementsByClassName("tx-" + (i + 1));
        if (el) {
            el[0].innerHTML = lines_final[i].split(":")[1];
        }
    }
}

