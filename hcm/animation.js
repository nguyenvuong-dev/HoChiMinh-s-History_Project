
// Particle.js configuration
particlesJS('particles-container', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#D4AF37'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            out_mode: 'out'
        }
    }
});

// Enhanced Timeline Animations
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timeline = document.querySelector('.timeline');
    
    // Intersection Observer for timeline items
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });

    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // Timeline line animation on scroll
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const timelineTop = timeline.offsetTop;
        const timelineHeight = timeline.offsetHeight;
        const windowHeight = window.innerHeight;
        
        if (scrollTop + windowHeight > timelineTop && scrollTop < timelineTop + timelineHeight) {
            const progress = (scrollTop + windowHeight - timelineTop) / (timelineHeight + windowHeight);
            const line = timeline.querySelector('::before');
            if (line) {
                line.style.background = `linear-gradient(180deg, 
                    #D4AF37 0%, 
                    #8B4513 ${progress * 100}%, 
                    rgba(139, 69, 19, 0.3) ${progress * 100}%, 
                    rgba(139, 69, 19, 0.3) 100%
                )`;
            }
        }
    });

    // Historical effects for timeline items
    timelineItems.forEach(item => {
        const content = item.querySelector('.timeline-content');
        
        content.addEventListener('mouseenter', () => {
            // Add historical glow effect
            const glow = document.createElement('div');
            glow.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                animation: historicalGlow 0.8s ease-out;
                pointer-events: none;
                box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
            `;
            
            content.appendChild(glow);
            
            setTimeout(() => {
                glow.remove();
            }, 800);
        });

        // Add historical click effect
        content.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Create historical seal effect
            const sealEffect = document.createElement('div');
            sealEffect.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                background: radial-gradient(circle, rgba(139, 0, 0, 0.4) 0%, transparent 70%);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                animation: historicalSeal 0.6s ease-out;
                pointer-events: none;
                box-shadow: 0 0 30px rgba(139, 0, 0, 0.6);
            `;
            
            content.appendChild(sealEffect);
            
            setTimeout(() => {
                sealEffect.remove();
                // Navigate to link after animation
                const link = item.querySelector('.timeline-link');
                if (link && link.href) {
                    window.location.href = link.href;
                }
            }, 600);
        });
    });
}

// Add CSS animations dynamically
function addTimelineAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes historicalGlow {
            0% {
                width: 0;
                height: 0;
                opacity: 1;
            }
            100% {
                width: 200px;
                height: 200px;
                opacity: 0;
            }
        }
        
        @keyframes historicalSeal {
            0% {
                width: 0;
                height: 0;
                opacity: 1;
            }
            100% {
                width: 250px;
                height: 250px;
                opacity: 0;
            }
        }
        
        .timeline-item.animate-in {
            animation-play-state: running;
        }
        
        .timeline-item.animate-in .timeline-content {
            animation: historicalContentIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes historicalContentIn {
            0% {
                opacity: 0;
                transform: scale(0.7) rotateY(-15deg);
            }
            50% {
                opacity: 0.7;
                transform: scale(0.9) rotateY(-5deg);
            }
            100% {
                opacity: 1;
                transform: scale(1) rotateY(0deg);
            }
        }
        
        /* Add historical floating animation */
        @keyframes historicalFloat {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-10px);
            }
        }
        
        .timeline-content:hover {
            animation: historicalFloat 2s ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);
}

// Wait for document to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        once: true,
        offset: 100
    });

    // Initialize Tilt.js
    $('.transform3d-hover').tilt({
        maxTilt: 15,
        perspective: 1000,
        scale: 1.05,
        speed: 1000,
        glare: true,
        maxGlare: 0.3
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

    // Initialize enhanced timeline animations
    addTimelineAnimations();
    initTimelineAnimations();
});