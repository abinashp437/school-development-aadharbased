$(document).ready(function() {
    var name = [];
    var id = [];
    $.getJSON('https://raw.githubusercontent.com/praabi/school-development-aadharbased/master/main.json', function(data) {
        name = data.name;
        id = data.id;
        console.log(name);
        console.log(id);
        date = function() {
          document.getElementById("dd").innerHTML = Number(document.getElementById("dd").innerHTML)+1;
        }
        check = function() {
            var n = document.getElementById("name").value;
            var i = document.getElementById("id").value;
            if (id.indexOf(i) == -1) {
                document.getElementById("demo").innerHTML = "no such id";
            } else {
                  if (id.indexOf(i) == name.indexOf(n)) {
                        document.getElementById("demo").innerHTML = n + " is present";
                        var j = id.indexOf(i)+1;
                        update(j);
                  } else {
                        document.getElementById("demo").innerHTML = "incorrect id or name";
                  }
            }
        }
    })
});

function update(j)
{
  console.log(j);
    var s=Number(document.getElementById(j).innerHTML)+1;
    console.log(s);
    document.getElementById(j).innerHTML=s;
    document.getElementById("tt").innerHTML= Number(document.getElementById("tt").innerHTML)+1;

}
