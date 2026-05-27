// ─── CAROUSEL ───
        (function() {
            const track = document.getElementById('carouselTrack');
            const dotsContainer = document.getElementById('carouselDots');
            const prevBtn = document.getElementById('carouselPrev');
            const nextBtn = document.getElementById('carouselNext');
            if (!track) return;

            const cards = Array.from(track.children);
            let currentIndex = 0;

            function getVisibleCount() {
                const w = window.innerWidth;
                if (w >= 1100) return 3;
                if (w >= 700) return 2;
                return 1;
            }

            function totalSlides() {
                return Math.ceil(cards.length / getVisibleCount());
            }

            function buildDots() {
                dotsContainer.innerHTML = '';
                const n = totalSlides();
                for (let i = 0; i < n; i++) {
                    const d = document.createElement('button');
                    d.className = 'carousel-dot' + (i === currentIndex ? ' active' : '');
                    d.setAttribute('aria-label', 'Ir para slide ' + (i + 1));
                    d.addEventListener('click', () => goTo(i));
                    dotsContainer.appendChild(d);
                }
            }

            function goTo(idx) {
                const n = totalSlides();
                currentIndex = Math.max(0, Math.min(idx, n - 1));
                const visCount = getVisibleCount();
                const gap = 25;
                const containerW = track.parentElement.offsetWidth;
                const cardW = (containerW - gap * (visCount - 1)) / visCount;
                const offset = currentIndex * visCount * (cardW + gap);
                track.style.transform = `translateX(-${offset}px)`;
                prevBtn.disabled = currentIndex === 0;
                nextBtn.disabled = currentIndex >= n - 1;
                dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
                    d.classList.toggle('active', i === currentIndex);
                });
            }

            prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
            nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

            // Touch swipe support
            let touchStartX = 0;
            track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
            track.addEventListener('touchend', e => {
                const diff = touchStartX - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 50) diff > 0 ? goTo(currentIndex + 1) : goTo(currentIndex - 1);
            });

            function init() {
                currentIndex = 0;
                // Set card widths via CSS custom property
                const visCount = getVisibleCount();
                const gap = 25;
                const containerW = track.parentElement.offsetWidth;
                const cardW = (containerW - gap * (visCount - 1)) / visCount;
                cards.forEach(c => { c.style.minWidth = cardW + 'px'; c.style.maxWidth = cardW + 'px'; });
                buildDots();
                goTo(0);
            }

            window.addEventListener('resize', init);
            // Wait for layout
            setTimeout(init, 50);
        })();
