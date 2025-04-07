// Particle animation
const particles = document.querySelector('.particles');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: 5px;
        height: 5px;
        background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
        border-radius: 50%;
        animation: float ${Math.random() * 10 + 5}s infinite;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
    `;
    particles.appendChild(particle);
}

const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-${Math.random() * 100 + 50}px); }
        100% { transform: translateY(0); }
    }
`;
document.head.appendChild(styleSheet);

// Toggle light and dark mode
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
});