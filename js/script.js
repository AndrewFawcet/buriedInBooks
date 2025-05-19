document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const panel = document.getElementById(targetId);
    const isActive = panel.classList.contains('active');

   // Close all panels and deactivate all buttons
    document.querySelectorAll('.accordion').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelectorAll('.panel').forEach(p => {
      p.classList.remove('active');
      p.style.maxHeight = null;
      p.style.opacity = '0';
    });

    // If the clicked panel was not active, activate it
    if (!isActive) {
      panel.classList.add('active');
      panel.style.maxHeight = panel.scrollHeight + 'px';
      panel.style.opacity = '1';
      button.classList.add('active');
    }
  });
});

(function () {
  let x = Math.random() * 100;
  let y = Math.random() * 100;
  let vx = (Math.random() * 0.05 + 0.005) * (Math.random() < 0.5 ? -1 : 1);
  let vy = (Math.random() * 0.05 + 0.005) * (Math.random() < 0.5 ? -1 : 1);

  function animateBackground() {
    x += vx;
    y += vy;

    if (x <= 1) {
      x = 1;
      vx *= -1;
    } else if (x >= 99) {
      x = 99;
      vx *= -1;
    }

    if (y <= 1) {
      y = 1;
      vy *= -1;
    } else if (y >= 99) {
      y = 99;
      vy *= -1;
    }

    // Bounce off edges
    // if (x <= 0 || x >= 100) vx *= -1;
    // if (y <= 0 || y >= 100) vy *= -1;

    document.body.style.backgroundPosition = `${x}% ${y}%`;
    requestAnimationFrame(animateBackground);
  }

  animateBackground();
})();
