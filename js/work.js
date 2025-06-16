if (window.innerWidth > 1024) {
    const links = document.querySelectorAll("#sec6 a");
    const sections = document.querySelectorAll("#conteudo section");

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            sections.forEach(section => section.style.display = 'none');

            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
} else {
    document.addEventListener("DOMContentLoaded", () => {
        const sections = document.querySelectorAll("#conteudo section");
        sections.forEach(section => section.style.display = 'block');
    });
}
