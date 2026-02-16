// 1) Smooth scrolling for navigation links
for (const link of document.querySelectorAll('nav a')) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
}

// 2) Small click animation for nav/profile buttons
for (const el of document.querySelectorAll('.btn')) {
  el.addEventListener('click', () => {
    el.style.transform = 'scale(0.96)';
    setTimeout(() => { el.style.transform = ''; }, 130);
  });
}
