document.addEventListener('DOMContentLoaded', function() {
    // Interactive elements on load
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.animationDelay = `${index * 0.2}s`;
        }, 100);
    });
});
