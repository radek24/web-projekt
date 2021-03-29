window.onscroll = function() { scrollFunction() };
var podnadpis = document.getElementsByTagName("h3")[0];
var nadpis = document.getElementsByClassName("main_header")[0];

function scrollFunction() {


    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        nadpis.style.fontSize = "1.5em";
        nadpis.style.paddingTop = "10px";
        podnadpis.style.fontSize = "0px";
    } else {
        nadpis.style.fontSize = "2em";
        nadpis.style.paddingTop = "30px";
        podnadpis.style.fontSize = "0.8em";
    }
}