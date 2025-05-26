// storyControls, buttons which pop out with accordian
const storyControls = document.getElementById("storyControls");
let isFrozen = false;
let fontSize = 16;

function changeFontSize(delta) {
  fontSize += delta;

  document.querySelectorAll('.story-embed').forEach(embed => {
    try {
      const doc = embed.contentDocument || embed.contentWindow.document;
      if (!doc) return;

      // Change the body font size
      doc.body.style.fontSize = fontSize + 'px';

      // Also explicitly change all paragraphs with class "storytext"
      doc.querySelectorAll('.storytext').forEach(p => {
        p.style.fontSize = fontSize + 'px';
      });
    } catch (e) {
      console.warn("Font size change failed due to cross-origin iframe or timing.", e);
    }
  });
}

function toggleFreeze() {
  isFrozen = !isFrozen;

  if (isFrozen) {
    cancelAnimationFrame(animationFrameId);
  } else {
    animateBackground();
  }

  const freezeButton = document.querySelector(
    "#storyControls button:last-child"
  );
  freezeButton.textContent = isFrozen ? "🔥 Melt" : "🧊 Freeze";
}

// Existing accordion logic:
document.querySelectorAll(".accordion").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const panel = document.getElementById(targetId);
    const isActive = panel.classList.contains("active");

    document
      .querySelectorAll(".accordion")
      .forEach((btn) => btn.classList.remove("active"));
    document.querySelectorAll(".panel").forEach((p) => {
      p.classList.remove("active");
      p.style.maxHeight = null;
      p.style.opacity = "0";
    });

    if (!isActive) {
      panel.classList.add("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.opacity = "1";
      button.classList.add("active");
      storyControls.style.display = "flex";
    } else {
      storyControls.style.display = "none";
    }
  });
});

// Background animation
let x = Math.random() * 100;
let y = Math.random() * 100;
let vx = (Math.random() * 0.05 + 0.005) * (Math.random() < 0.5 ? -1 : 1);
let vy = (Math.random() * 0.05 + 0.005) * (Math.random() < 0.5 ? -1 : 1);
let animationFrameId = null;

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

  document.body.style.backgroundPosition = `${x}% ${y}%`;
  animationFrameId = requestAnimationFrame(animateBackground);
}

animateBackground();
