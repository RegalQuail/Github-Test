var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction1() {
    points.sort();
    document.getElementById("demo").innerHTML = points;
}

function myFunction2() {
    points.sort(function(a, b){return a - b;});
    document.getElementById("demo").innerHTML = points;
}

console.log("Hello World");

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(200, 200, 250, 250);
