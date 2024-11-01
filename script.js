document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section, footer');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('fade-in');
        }, index * 1000); // Adjust the timing for staggered effect
    });
});