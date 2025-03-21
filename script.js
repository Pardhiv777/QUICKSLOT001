document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle with Local Storage and Particle Update
    const toggleButton = document.querySelector('.theme-toggle');
    const body = document.body;
    let currentTheme = localStorage.getItem('theme') || 'light-theme';
  
    // Apply initial theme
    body.classList.add(currentTheme);
    updateParticles(currentTheme);
  
    toggleButton.addEventListener('click', () => {
      if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
        currentTheme = 'dark-theme';
      } else {
        body.classList.replace('dark-theme', 'light-theme');
        currentTheme = 'light-theme';
      }
      localStorage.setItem('theme', currentTheme);
      updateParticles(currentTheme);
    });
  
    // Particle.js Configuration with Theme Switching
    function updateParticles(theme) {
      const particleColor = theme === 'light-theme' ? '#00d2ff' : '#ff00cc';
      particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: particleColor },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: particleColor, opacity: 0.4, width: 1 },
          move: { enable: true, speed: 2, direction: 'none', random: false, straight: false }
        },
        interactivity: {
          detect_on: 'canvas',
          events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
          modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
      });
    }
  
    // Custom Cursor
    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX - 10}px`;
      cursor.style.top = `${e.clientY - 10}px`;
    });
  
    document.addEventListener('mousedown', () => cursor.style.transform = 'scale(1.5)');
    document.addEventListener('mouseup', () => cursor.style.transform = 'scale(1)');
  });