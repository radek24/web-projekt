function zobrazNavigaci() {
    const navigace = document.querySelector("nav ul");
    const img_burger = document.getElementById("burger_img");
    if (img_burger.style.filter == "grayscale(0)") {
        navigace.classList.toggle("max-height-class");
        img_burger.style.filter = " grayscale(100)";
    } else {
        navigace.style.display = "block";
        navigace.classList.toggle("max-height-class");
        navigace.style.maxHeight = navigace.scrollHeight + "px";
        img_burger.style.filter = "grayscale(0)";
    }
}