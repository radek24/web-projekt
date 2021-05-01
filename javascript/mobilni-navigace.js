function zobrazNavigaci() {
    const navigace = document.querySelector("nav ul");
    var img_burger = document.getElementById("burger_img");
    if (navigace.style.display == "block") {
        navigace.style.display = ""; // lepší než "none"
        img_burger.style.filter = " grayscale(100)";
    } else {
        navigace.style.display = "block";
        img_burger.style.filter = " grayscale(0)";
    }
}