const header = document.getElementById('header');
const nav = document.getElementById('nav');
const menuToggle = document.getElementById('menuToggle');
const slides = Array.from(document.querySelectorAll('.slide'));
const dotsContainer = document.getElementById('sliderDots');
const revealItems = Array.from(document.querySelectorAll('.reveal, .reveal-item'));
const siteSearchForm = document.getElementById('siteSearchForm');
const siteSearchInput = document.getElementById('siteSearchInput');

let current = 0;
let timer;

const setHeaderState = () => {
  if (window.scrollY > 24) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

const renderDots = () => {
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Ir a diapositiva ${index + 1}`);
    dot.addEventListener('click', () => {
      goToSlide(index);
      restartTimer();
    });
    dotsContainer.appendChild(dot);
  });
};

const updateDots = (index) => {
  Array.from(dotsContainer.children).forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
};

const goToSlide = (index) => {
  slides[current].classList.remove('active');
  current = index;
  slides[current].classList.add('active');
  updateDots(current);
};

const nextSlide = () => goToSlide((current + 1) % slides.length);

const restartTimer = () => {
  clearInterval(timer);
  timer = setInterval(nextSlide, 6200);
};

const initRevealAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 40, 220)}ms`;
    observer.observe(item);
  });
};

const clearSearchHit = () => {
  document.querySelectorAll('.search-hit').forEach((el) => {
    el.classList.remove('search-hit');
  });
};

const findOnPage = (query) => {
  if (!query) return;

  const searchable = Array.from(
    document.querySelectorAll('h1, h2, h3, h4, p, figcaption, a, li')
  );
  const term = query.toLowerCase().trim();
  const match = searchable.find((el) => el.textContent.toLowerCase().includes(term));

  clearSearchHit();

  if (!match) {
    alert(`No se encontraron resultados para: "${query}"`);
    return;
  }

  match.classList.add('search-hit');
  match.scrollIntoView({ behavior: 'smooth', block: 'center' });
  setTimeout(() => match.classList.remove('search-hit'), 2800);
};

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open');
});

siteSearchForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  findOnPage(siteSearchInput?.value || '');
});

window.addEventListener('scroll', setHeaderState);
window.addEventListener('load', () => {
  setHeaderState();
  renderDots();
  restartTimer();
  initRevealAnimations();
});

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".hero-video");
  if (video) {
    video.muted = true;
    video.playsInline = true;

    const playVideo = () => {
      video.play().catch(() => {});
    };

    playVideo();

    // refuerzo (por navegadores agresivos)
    setTimeout(playVideo, 500);
    setTimeout(playVideo, 1500);
  }
});