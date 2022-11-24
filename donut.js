var donut = document.getElementById("donut");
var donutcounter = document.getElementById("donutcounter");
var donutTotal = 0;

donut.addEventListener("click" , e=> {
    donutTotal ++;
    donutcounter.innerHTML = "donut earned " + donutTotal;

    

});



