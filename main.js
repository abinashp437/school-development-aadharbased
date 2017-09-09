$(document).ready(function() {
    var name = [];
    var id = [];
    var q = [];
    $.getJSON('https://raw.githubusercontent.com/praabi/school-development-aadharbased/master/main.json', function(data) {
        name = data.name;
        id = data.id;
        console.log(name);
        console.log(id);
        date = function() {
            q = [];
            var f = Number(document.getElementById("dd").innerHTML) + 1;
            document.getElementById("dd").innerHTML = f;
            for (var w = 0; w < name.length; w++) {
                q.push(0);
            }
        }
        check = function() {
            var n = document.getElementById("name").value;
            var i = document.getElementById("id").value;
            if (id.indexOf(i) == -1) {
                document.getElementById("demo").innerHTML = "no such id";
            } else {
                if (id.indexOf(i) == name.indexOf(n)) {
                    if (q[id.indexOf(i)] == 0) {
                        var j = id.indexOf(i) + 1;
                        update(j);
                        document.getElementById("demo").innerHTML = n + " is present";
                        q[id.indexOf(i)] = 1;
                    } else {
                        document.getElementById("demo").innerHTML = "Cannot manipulate";
                    }
                } else {
                    document.getElementById("demo").innerHTML = "incorrect id or name";
                }
            }
            document.getElementById("name").value = "";
            document.getElementById("id").value = "";
        }
    })
});

function update(j) {
    console.log(j);
    var s = Number(document.getElementById(j).innerHTML) + 1;
    console.log(s);
    document.getElementById("tt").innerHTML = Number(document.getElementById("tt").innerHTML) + 1;
    document.getElementById(j).innerHTML = s;

}