function toggleTheme() {
    html_element = document.getElementById("theme")
    if (html_element.classList == 'theme-dark') {
        html_element.classList.remove('theme-dark');
        html_element.classList.add('theme-light');
    } else {
        html_element.classList.remove('theme-light');
        html_element.classList.add('theme-dark');
    }
}