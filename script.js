document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('copy-email').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText('er.shashankvaish@gmail.com');
    status.textContent = 'Email copied!';
  } catch {
    status.textContent = 'Email: er.shashankvaish@gmail.com';
  }
  setTimeout(() => { status.textContent = ''; }, 5000);
});
const sections = document.querySelectorAll('main section[id]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) document.querySelectorAll('nav a').forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -55% 0px' });
  sections.forEach(section => observer.observe(section));
}
