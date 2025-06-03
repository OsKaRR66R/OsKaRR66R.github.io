document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    once: true
  });
});

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelectorAll('.side-photo').forEach((img) => {
    img.style.transform = `translateY(${scrollY * 0.3}px)`;
  });
});
