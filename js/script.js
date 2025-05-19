document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const panel = document.getElementById(targetId);

    // Toggle active class on button
    button.classList.toggle('active');

    // Toggle panel open/closed state
    const isActive = panel.classList.toggle('active');
    if (isActive) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      panel.style.opacity = '1';
    } else {
      panel.style.maxHeight = null;
      panel.style.opacity = '0';
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
