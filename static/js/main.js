function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = body.getAttribute('data-theme');

    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
    } else {
        body.setAttribute('data-theme', 'light');
        themeIcon.className = 'fas fa-moon';
    }
}


document.querySelectorAll('#inviteModal a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.stopPropagation(); // stop bubbling to modal
    });
});




