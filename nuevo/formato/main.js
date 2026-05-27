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
  if (!dotsContainer) return;
  dotsContainer.innerHTML = ''; // 🧠 Optimización: Evita que los puntos se dupliquen al recargar
  
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
  if (!dotsContainer) return;
  Array.from(dotsContainer.children).forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
};

const goToSlide = (index) => {
  if (!slides.length) return;
  slides[current].classList.remove('active');
  current = index;
  slides[current].classList.add('active');
  updateDots(current);
};

const nextSlide = () => goToSlide((current + 1) % slides.length);

const restartTimer = () => {
  if (!slides.length) return;
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

/* ==========================================================================
   🔥 CAMBIO CLAVE: REFUERZO PARA TODOS LOS VIDEOS (HERO + GALERÍA)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Ahora seleccionamos TODOS los videos que haya en la página
  const allVideos = document.querySelectorAll("video");
  
  if (allVideos.length > 0) {
    allVideos.forEach((video) => {
      video.muted = true;
      video.playsInline = true;
      video.loop = true; // Asegura el bucle infinito en la galería

      const playVideo = () => {
        video.play().catch(() => {
          // Falla silenciosa si el navegador bloquea temporalmente
        });
      };

      playVideo();

      // Ráfaga de seguridad para asegurar el arranque en Safari/Chrome móvil
      setTimeout(playVideo, 400);
      setTimeout(playVideo, 1200);
    });
  }
});