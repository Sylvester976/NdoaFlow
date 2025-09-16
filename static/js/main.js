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

// Simulate loading for traditions modal
document.getElementById('traditionsModal').addEventListener('show.bs.modal', function() {
    const spinner = this.querySelector('.loading-spinner');
    const content = this.querySelector('#traditionsContent');

    spinner.style.display = 'flex';
    content.style.display = 'none';

    setTimeout(() => {
        spinner.style.display = 'none';
        content.style.display = 'block';
    }, 1500);
});

document.querySelectorAll('#inviteModal a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.stopPropagation(); // stop bubbling to modal
    });
});




