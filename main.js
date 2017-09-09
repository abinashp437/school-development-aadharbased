$(document).ready(function() {
    var name = [];
    var id = [];
    $.getJSON('main.json', function(data) {
        name = data.name;
        id = data.id;
        console.log(name);
        console.log(id);
        check = function() {
            var n = document.getElementById("name").value;
            var i = document.getElementById("id").value;
            for (i = 0; i < id.length; i++) {
                if (id.indexOf(i) == -1) {
                    document.getElementById("demo").innerhtml = "not found";
                    break;
                } else {
                    if (id.indexOf(i) == name.indexOf(n)) {
                        document.getElementById("demo").innerhtml = n + " is present";
                    } else {
                        document.getElementById("demo").innerhtml = "incorrect id or name";
                    }
                }

            }
        }
    })
});