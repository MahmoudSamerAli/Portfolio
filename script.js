document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // 2. Mobile Navigation Toggle
    const navToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // 3. Smooth Scroll & Active Nav Highlight
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });

        // Header background opacity on scroll
        const header = document.getElementById('navbar');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(5, 5, 7, 0.95)';
        } else {
            header.style.background = 'rgba(5, 5, 7, 0.8)';
        }
    });

    // 4. Scroll Reveal Animations (Intersection Observer)
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-fade, .animate-fade-up').forEach(el => observer.observe(el));

    // 5. Project Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => card.classList.remove('hidden'), 10);
                } else {
                    card.classList.add('hidden');
                    setTimeout(() => card.style.display = 'none', 300); // Match CSS transition
                }
            });
        });
    });

    // 6. Contact Form Validation
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        const inputs = form.querySelectorAll('input, textarea');

        // Clear previous errors
        form.querySelectorAll('.form-group').forEach(g => g.classList.remove('invalid'));

        inputs.forEach(input => {
            const group = input.closest('.form-group');
            if (!input.value.trim() || (input.type === 'email' && !validateEmail(input.value))) {
                group.classList.add('invalid');
                isValid = false;
            }
        });

        if (isValid) {
            formStatus.textContent = 'Sending...';
            formStatus.className = 'form-status';
            
            // Simulate network request
            setTimeout(() => {
                formStatus.textContent = '✓ Message sent successfully! I will get back to you soon.';
                formStatus.className = 'form-status success';
                form.reset();
            }, 1500);
        } else {
            formStatus.textContent = '✗ Please fix the errors above.';
            formStatus.className = 'form-status error';
        }
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});