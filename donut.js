var donut = document.getElementById("donut");
var autocount = document.getElementById("cool");
var abc = document.getElementById("soccer")

var donutcounter = document.getElementById("donutcounter");
var donutTotal = 0;
var autopurchase = 0;
var multiplersr = 1;
function addDonut() {

    donutTotal += multiplersr;
    donutcounter.innerHTML = "donut earned " + donutTotal;

}

var autopurchase = 0;



function autoClicker() {
    if (donutTotal >= 10) {
        donutTotal -= 10;
        donutcounter.innerHTML = "donut earned " + donutTotal;
        autopurchase++;
        autocount.innerHTML = "number purchase" + autopurchase;



        setInterval(function () {
            donutTotal++;
            donutcounter.innerHTML = "donut earned " + donutTotal;

        }, 1000);
    }

}
function multipler() {
    if (donutTotal >= 10) {
        donutTotal -= 10;
        donutcounter.innerHTML = "donut earned " + donutTotal;
        if (multiplersr === 1) {
            multiplersr = 1.2
        }


        abc.innerHTML = "number of multiplers" + multiplersr;
    }
}