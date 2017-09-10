$(document).ready(function() {
    var name = [];
    var id = [];
    var gender = [];
    var q = [];
    $.getJSON('https://raw.githubusercontent.com/Deepak345/school-development-aadharbased/master/sample.json', function(data) {
        name = data.name;
        id = data.id;
        gender = data.gender;
        console.log(name);
        console.log(id);
        date = function() {
            q = [];
            document.getElementById("demo").innerHTML = " ";
            var f = Number(document.getElementById("dd").innerHTML) + 1;
            document.getElementById("dd").innerHTML = f;
            for (var w = 0; w < name.length; w++) {
                q.push(0);
            }
            console.log(q);
        }
        check = function() {
            var n = document.getElementById("name").value;
            var i = document.getElementById("id").value;
            document.getElementById("demo").innerHTML = " ";
            if (id.indexOf(i) == -1) {
                alert("no such id");
            } else {
                if (id.indexOf(i) == name.indexOf(n)) {
                    if (q[id.indexOf(i)] == 0) {
                        update(n);
                        q[id.indexOf(i)] = 1;
                    } else {
                        alert("Cannot manipulate");
                    }
                } else {
                    alert("incorrect id or name");
                }
            }
            document.getElementById("name").value = "";
            document.getElementById("id").value = "";
        }
    })
});

function update(n) {
    //   console.log(j);
    //   var s = Number(document.getElementById(j).innerHTML) + 1;
    //   console.log(s);
    var x = 0;
    var table = document.getElementById("expense-table");
    for (var r = 1; r <= 10; r++) {
        if (table.rows[r].cells[0].innerHTML == n) {
            document.getElementById(r).innerHTML = Number(document.getElementById(r).innerHTML) + 1;
            document.getElementById("tt").innerHTML = Number(document.getElementById("tt").innerHTML) + 1;
            document.getElementById("demo").innerHTML = n + " is present";
            x = 1;
        }
        //else {
        //    var row = table.insertRow(table.rows.length - 1);
        //    var cell1 = row.insertCell(n);
        //    var cell2 = row.insertCell(1);
        //}
    }
    if (x == 0)
        alert("there is no such student in the school");
}