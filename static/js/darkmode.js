/**
* Called when the dark mode button is clicked. Toggles the theme between light and dark.
* 
*/
function toggleDarkMode() {
    const theme = document.documentElement.getAttribute('data-bs-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        document.getElementById('modeIcon').classList.remove('fa-sun');
        document.getElementById('modeIcon').classList.add('fa-moon');
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        document.getElementById('modeIcon').classList.remove('fa-moon');
        document.getElementById('modeIcon').classList.add('fa-sun');
    }
}