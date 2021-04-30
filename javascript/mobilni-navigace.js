function zobrazNavigaci() {
    const navigace = document.querySelector("nav");
    if (navigace.style.display == "block")
        navigace.style.display = ""; // lepší než "none"
    else
        navigace.style.display = "block";
}