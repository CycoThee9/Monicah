// Smooth scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add scroll effect for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and poems
document.querySelectorAll('.quality-card, .magic-item, .poem, .poetry-link').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Create floating particles effect
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = Math.random() > 0.5 ? '#d4a574' : '#f5a3c7';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        particle.style.animation = `float ${Math.random() * 3 + 3}s ease-in-out infinite`;
        hero.appendChild(particle);
    }
}

// Add float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }
`;
document.head.appendChild(style);

// Initialize particles when page loads
window.addEventListener('load', createParticles);

// Add pulse effect to quality cards
document.querySelectorAll('.emoji').forEach(emoji => {
    emoji.style.cursor = 'pointer';
    emoji.addEventListener('mouseenter', () => {
        emoji.style.transform = 'scale(1.2) rotate(10deg)';
        emoji.style.transition = 'transform 0.3s ease';
    });
    emoji.addEventListener('mouseleave', () => {
        emoji.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add interactive poetry reading
const poems = document.querySelectorAll('.poem-text p');
poems.forEach((p, index) => {
    p.style.cursor = 'pointer';
    p.addEventListener('mouseenter', () => {
        p.style.color = '#d4a574';
        p.style.transform = 'scale(1.02)';
        p.style.transition = 'all 0.3s ease';
    });
    p.addEventListener('mouseleave', () => {
        p.style.color = 'inherit';
        p.style.transform = 'scale(1)';
    });
});

// Celebrate button click (optional enhancement)
document.addEventListener('click', (e) => {
    if (e.target.closest('.poetry-link') || e.target.closest('.nav-button')) {
        createConfetti(e);
    }
});

// Confetti effect
function createConfetti(e) {
    const x = e.clientX || window.innerWidth / 2;
    const y = e.clientY || window.innerHeight / 2;

    for (let i = 0; i < 10; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = x + 'px';
        confetti.style.top = y + 'px';
        confetti.style.width = '8px';
        confetti.style.height = '8px';
        confetti.style.background = ['#d4a574', '#f5a3c7', '#ff6b9d', '#ffd700'][Math.floor(Math.random() * 4)];
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';

        const vx = (Math.random() - 0.5) * 8;
        const vy = Math.random() * -8 - 2;

        document.body.appendChild(confetti);

        let px = x;
        let py = y;
        let velocityY = vy;

        const animate = () => {
            px += vx;
            py += velocityY;
            velocityY += 0.2;

            confetti.style.left = px + 'px';
            confetti.style.top = py + 'px';
            confetti.style.opacity = Math.max(0, 1 - (py - y) / 300);

            if (py - y < 300) {
                requestAnimationFrame(animate);
            } else {
                confetti.remove();
            }
        };

        animate();
    }
}

// Log ready state
console.log('%c✨ Monicah Kanini Birthday Website Loaded ✨', 'font-size: 16px; color: #d4a574; font-weight: bold;');
