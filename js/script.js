const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('is-open');
        navToggle.classList.toggle('is-open', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('is-open');
            navToggle.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

const typedText = document.querySelector('.typed-text');
const roles = [
    'Full-Stack Developer',
    'Data Analyst',
    'Product-minded Builder',
    'Creative Problem Solver'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    if (!typedText) return;

    const currentRole = roles[roleIndex];
    const displayed = currentRole.slice(0, charIndex);

    typedText.textContent = displayed;

    if (!isDeleting && charIndex < currentRole.length) {
        charIndex += 1;
        setTimeout(typeWriter, 120);
        return;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeWriter, 1200);
        return;
    }

    if (isDeleting && charIndex > 0) {
        charIndex -= 1;
        setTimeout(typeWriter, 70);
        return;
    }

    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeWriter, 220);
}

if (typedText) {
    typeWriter();
}

const form = document.getElementById('sheetdb-form');
const msg = document.getElementById('msg');

if (form) {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton ? submitButton.textContent : 'Send Message';

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
        }

        if (form.action && form.action !== window.location.href && form.action !== '#') {
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Request failed');
                }

                if (msg) {
                    msg.textContent = 'Message sent successfully!';
                }
                form.reset();
            } catch (error) {
                if (msg) {
                    msg.textContent = 'Something went wrong. Please email me directly.';
                }
            } finally {
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                }
            }
            return;
        }

        if (msg) {
            msg.textContent = 'Thanks! I will get back to you soon.';
        }

        form.reset();

        if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });
}
