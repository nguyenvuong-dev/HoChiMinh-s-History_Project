function goToDetail() {
  window.location.href = "detail.html";
}
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // Handle click events
    timelineItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const link = item.querySelector('.timeline-link');
            if (link) {
                window.location.href = link.href;
            }
        });
    });
});
// 3D Mouse Movement Effect
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card3d');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    cards.forEach(card => {
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
});

// Initialize Tilt.js
$(document).ready(function(){
    $('.transform3d-hover').tilt({
        maxTilt: 15,
        perspective: 1000,
        scale: 1.05,
        speed: 1000,
        glare: true,
        maxGlare: 0.3
    });
});

// Parallax Scroll Effect
window.addEventListener('scroll', () => {
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    const scrolled = window.pageYOffset;
    
    parallaxLayers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const yPos = -(scrolled * speed);
        layer.style.transform = `translateY(${yPos}px)`;
    });
});

// 3D Depth Effect for Images
const images = document.querySelectorAll('.image-container img');
images.forEach(img => {
    img.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = img.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100;
        const y = (e.pageY - top) / height * 100;
        
        img.style.transform = `
            perspective(1000px)
            rotateX(${(y - 50) / 5}deg)
            rotateY(${(x - 50) / 5}deg)
            translateZ(50px)
        `;
    });
    
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'none';
    });
});
