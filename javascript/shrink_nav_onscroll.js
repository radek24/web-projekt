window.onscroll = function() { scrollFunction() };
var podnadpis = document.getElementsByTagName("h3")[0];
var nadpis = document.getElementsByClassName("main_header")[0];
var burger_nav = document.getElementsByClassName("burger")[0];
var burger_img = document.getElementById("burger_img");

function scrollFunction() {

    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        nadpis.style.fontSize = "1.5em";
        nadpis.style.paddingTop = "10px";
        podnadpis.style.fontSize = "0px";
        burger_nav.style.top = "17px";
        burger_img.style.height = "20px";
    } else {
        nadpis.style.fontSize = "2em";
        nadpis.style.paddingTop = "30px";
        podnadpis.style.fontSize = "0.8em";
        burger_nav.style.top = "40px";
        burger_img.style.height = "25px";
    }
}