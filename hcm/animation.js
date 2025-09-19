
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

// Vietnamese Traditional Audio Management
class VietnameseAudioManager {
    constructor() {
        this.audio = document.getElementById('traditionalMusic');
        this.toggleBtn = document.getElementById('audioToggle');
        this.isPlaying = false;
        this.init();
    }

    init() {
        if (this.toggleBtn) {
            this.toggleBtn.addEventListener('click', () => this.toggleAudio());
        }
        
        // Create synthetic traditional sounds if audio file not available
        this.createSyntheticSounds();
    }

    toggleAudio() {
        if (this.isPlaying) {
            this.pauseAudio();
        } else {
            this.playAudio();
        }
    }

    playAudio() {
        if (this.audio) {
            this.audio.play().catch(() => {
                // If audio fails, play synthetic sounds
                this.playSyntheticBell();
            });
        } else {
            this.playSyntheticBell();
        }
        
        this.isPlaying = true;
        this.toggleBtn.classList.add('playing');
        this.toggleBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }

    pauseAudio() {
        if (this.audio) {
            this.audio.pause();
        }
        
        this.isPlaying = false;
        this.toggleBtn.classList.remove('playing');
        this.toggleBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    }

    createSyntheticSounds() {
        // Create Web Audio API context for synthetic traditional sounds
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    }

    playSyntheticBell() {
        if (!this.audioContext) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        // Bell-like sound
        oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, this.audioContext.currentTime + 2);
        
        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 2);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 2);
        
        // Repeat every 5 seconds if playing
        if (this.isPlaying) {
            setTimeout(() => {
                if (this.isPlaying) this.playSyntheticBell();
            }, 5000);
        }
    }
}

// Enhanced Vietnamese Decorations Animation
class VietnameseDecorations {
    constructor() {
        this.init();
    }

    init() {
        this.animateDragons();
        this.animateLotus();
        this.animateStars();
        this.animateSmoke();
        this.addInteractiveEffects();
    }

    animateDragons() {
        const dragons = document.querySelectorAll('.dragon-left, .dragon-right');
        dragons.forEach((dragon, index) => {
            dragon.addEventListener('mouseenter', () => {
                dragon.style.transform = 'scale(1.2) translateY(-10px)';
                dragon.style.filter = 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.8))';
            });
            
            dragon.addEventListener('mouseleave', () => {
                dragon.style.transform = 'scale(1) translateY(0px)';
                dragon.style.filter = 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.5))';
            });
        });
    }

    animateLotus() {
        const lotusFlowers = document.querySelectorAll('.lotus');
        lotusFlowers.forEach(lotus => {
            lotus.addEventListener('click', () => {
                lotus.style.animation = 'none';
                setTimeout(() => {
                    lotus.style.animation = 'lotusBloom 2s ease-in-out';
                }, 10);
            });
        });
    }

    animateStars() {
        const stars = document.querySelectorAll('.flag-star');
        stars.forEach(star => {
            star.addEventListener('click', () => {
                this.createStarBurst(star);
            });
        });
    }

    createStarBurst(star) {
        const rect = star.getBoundingClientRect();
        const burst = document.createElement('div');
        burst.style.cssText = `
            position: fixed;
            left: ${rect.left + rect.width/2}px;
            top: ${rect.top + rect.height/2}px;
            width: 4px;
            height: 4px;
            background: #FFD700;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
        `;
        
        document.body.appendChild(burst);
        
        // Animate burst
        burst.animate([
            { transform: 'scale(1)', opacity: 1 },
            { transform: 'scale(20)', opacity: 0 }
        ], {
            duration: 600,
            easing: 'ease-out'
        }).onfinish = () => burst.remove();
    }

    animateSmoke() {
        const smokeElements = document.querySelectorAll('.smoke');
        smokeElements.forEach((smoke, index) => {
            smoke.style.animationDelay = `${index * 1.3}s`;
        });
    }

    addInteractiveEffects() {
        // Add click effects to Vietnamese elements
        document.addEventListener('click', (e) => {
            if (e.target.closest('.vietnamese-decorations')) {
                this.createRippleEffect(e.clientX, e.clientY);
            }
        });
    }

    createRippleEffect(x, y) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%);
            pointer-events: none;
            z-index: 999;
            transform: translate(-50%, -50%);
        `;
        
        document.body.appendChild(ripple);
        
        ripple.animate([
            { width: '0px', height: '0px', opacity: 1 },
            { width: '200px', height: '200px', opacity: 0 }
        ], {
            duration: 800,
            easing: 'ease-out'
        }).onfinish = () => ripple.remove();
    }
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
    
    // Initialize Vietnamese features
    new VietnameseAudioManager();
    new VietnameseDecorations();
    
    // Add calligraphy writing effect
    initCalligraphyEffect();
});

// Calligraphy Writing Effect
function initCalligraphyEffect() {
    const titleLines = document.querySelectorAll('.title-line');
    
    titleLines.forEach((line, index) => {
        // Add writing animation delay
        line.style.animationDelay = `${0.5 + index * 0.5}s`;
        
        // Add typewriter effect
        const text = line.textContent;
        line.textContent = '';
        line.style.opacity = '1';
        
        setTimeout(() => {
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    line.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            typeWriter();
        }, (0.5 + index * 0.5) * 1000);
    });
}

// Scroll-based parallax for Vietnamese decorations
function initVietnameseParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Parallax for dragons
        const dragons = document.querySelectorAll('.dragon-left, .dragon-right');
        dragons.forEach(dragon => {
            dragon.style.transform = `translateY(${rate}px)`;
        });
        
        // Parallax for lotus flowers
        const lotusFlowers = document.querySelectorAll('.lotus');
        lotusFlowers.forEach((lotus, index) => {
            const rate = scrolled * (-0.3 - index * 0.1);
            lotus.style.transform = `translateY(${rate}px) rotate(${scrolled * 0.05}deg)`;
        });
        
        // Parallax for stars
        const stars = document.querySelectorAll('.flag-star');
        stars.forEach((star, index) => {
            const rate = scrolled * (-0.2 - index * 0.05);
            star.style.transform = `translateY(${rate}px)`;
        });
    });
}

document.addEventListener("scroll", () => {
  document.querySelectorAll(".timeline-item").forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add("visible");
    }
  });
});

// Initialize parallax effect
document.addEventListener('DOMContentLoaded', () => {
    initVietnameseParallax();
});
