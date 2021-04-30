window.onscroll = function() { scrollFunction() };
var podnadpis = document.getElementsByTagName("h3")[0];
var nadpis = document.getElementsByClassName("main_header")[0];

/*
var isMobile;

function myFunction(x) {

    if (x.matches) { // If media query matches
        isMobile = true;
        scrollFunction()
    } else {
        isMobile = false;
        scrollFunction()
    }
}

var x = window.matchMedia("(max-width: 800px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
*/
function scrollFunction() {

    //if (isMobile == false) {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        nadpis.style.fontSize = "1.5em";
        nadpis.style.paddingTop = "10px";
        podnadpis.style.fontSize = "0px";
    } else {
        nadpis.style.fontSize = "2em";
        nadpis.style.paddingTop = "30px";
        podnadpis.style.fontSize = "0.8em";
    }
    //}
    /*
        if (isMobile == true) {
            if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
                nadpis.style.fontSize = "1.5em";
                nadpis.style.paddingTop = "10px";
                podnadpis.style.fontSize = "0px";
            } else {
                nadpis.style.fontSize = "2em";
                nadpis.style.paddingTop = "30px";
                podnadpis.style.fontSize = "0.8em";
            }
        }*/
}