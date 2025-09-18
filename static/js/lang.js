
// ✅ Accessibility menu toggle
document.getElementById('accessibility-btn').addEventListener('click', () => {
    const panel = document.getElementById('accessibility-panel');
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
});

// ✅ Accessibility features
let fontSize = 100;

function adjustFontSize(change) {
    fontSize += change * 10;
    document.body.style.fontSize = fontSize + '%';
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

function toggleLinkHighlight() {
    document.body.classList.toggle('highlight-links');
}

function toggleDyslexiaFont() {
    document.body.classList.toggle('dyslexia-font');
}