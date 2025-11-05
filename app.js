// tiny vanilla JS – keeps the year dynamic
document.getElementById('year').textContent = new Date().getFullYear();

// optional: smooth-scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});