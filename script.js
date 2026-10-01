//Progress bar

document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.querySelector(".third_block_skills");
  const progressBars = document.querySelectorAll(".progress");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressBars.forEach(bar => {
          const width = bar.getAttribute("data-width");
          bar.style.width = width + "%";
        });
        observer.unobserve(skillsSection);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(skillsSection);
});



//Mobile humburger menu
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.nav-menu');
  const photo = document.querySelector('.photo');

  if (!burger || !menu) return;

  const hideClass = 'burger--hide';

  function openMenu() {
    burger.classList.add('open');
    menu.classList.add('open');
    document.body.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
    burger.classList.remove(hideClass);
  }

  function closeMenu() {
    burger.classList.remove('open');
    menu.classList.remove('open');
    document.body.classList.remove('menu-open');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', () => {
    if (menu.classList.contains('open')) closeMenu();
    else openMenu();
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
      updateBurgerVisibility();
    });
  });

  function updateBurgerVisibility() {
    if (menu.classList.contains('open')) {
      burger.classList.remove(hideClass);
      return;
    }
    if (!photo) return;

    const rect = photo.getBoundingClientRect();
    if (rect.bottom <= 56) burger.classList.add(hideClass);
    else burger.classList.remove(hideClass);
  }

  window.addEventListener('scroll', updateBurgerVisibility, { passive: true });
  window.addEventListener('resize', updateBurgerVisibility);

  updateBurgerVisibility();
});