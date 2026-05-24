        /* ── Mobile menu ── */
        const menuIcon = document.getElementById('menu-icon');
        const navbar = document.querySelector('.navbar');
        menuIcon.addEventListener('click', () => navbar.classList.toggle('open'));
        document.querySelectorAll('.navbar a').forEach(a => a.addEventListener('click', () => navbar.classList.remove('open')));

        /* ── Active nav on scroll ── */
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
        window.addEventListener('scroll', () => {
            const y = window.scrollY + 120;
            sections.forEach(s => {
                if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
                    navLinks.forEach(a => a.classList.remove('active'));
                    const link = document.querySelector(`.navbar a[href="#${s.id}"]`);
                    if (link) link.classList.add('active');
                }
            });
        });

        /* ── About toggle ── */
        function toggleAbout() {
            const panel = document.getElementById('aboutPanel');
            const btn   = document.getElementById('readMoreBtn');
            panel.classList.toggle('visible');
            btn.classList.toggle('open');
            btn.childNodes[0].textContent = panel.classList.contains('visible') ? 'Recolher ' : 'Ler Mais ';
        }

        /* ── Scroll-reveal ── */
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.style.opacity = '1';
                    e.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll('.service-card, .about-card, .testimonial-card, .partner-card, .timeline-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(28px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });