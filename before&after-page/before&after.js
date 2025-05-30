document.querySelectorAll('.slider-container').forEach(container => {
  const beforeImage = container.querySelector('.before');
  const slider = container.querySelector('.slider-handle');

  let isDragging = false;

  const updateSlider = (x) => {
    const rect = container.getBoundingClientRect();
    x = Math.max(0, Math.min(x - rect.left, rect.width));
    slider.style.left = `${x}px`;
    beforeImage.style.width = `${x}px`;
  };

  slider.addEventListener('mousedown', () => isDragging = true);
  window.addEventListener('mouseup', () => isDragging = false);
  window.addEventListener('mousemove', e => {
    if (isDragging) updateSlider(e.clientX);
  });

  slider.addEventListener('touchstart', () => isDragging = true);
  window.addEventListener('touchend', () => isDragging = false);
  window.addEventListener('touchmove', e => {
    if (isDragging) updateSlider(e.touches[0].clientX);
  });

  // Start in center
  const rect = container.getBoundingClientRect();
  const centerX = rect.width / 2;
  slider.style.left = `${centerX}px`;
  beforeImage.style.width = `${centerX}px`;
});