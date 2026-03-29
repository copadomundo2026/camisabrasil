/* ═══════════════════════════════════════════════════════════
   BRASIL COPA 2026 – JavaScript Principal
   ═══════════════════════════════════════════════════════════ */

// ── STATE ────────────────────────────────────────────────────
const state = {
  model: 'titular',
  name: '',
  number: '10',
  size: 'M',
  shirts: {
    titular: 'images/camisa-amarela.webp',
    reserva: 'images/camisa-azul.webp'
  }
};

// ── PREVIEW ──────────────────────────────────────────────────
function updatePreview() {
  const nameVal = document.getElementById('inputNome').value.toUpperCase() || 'SEU NOME';
  const numVal  = document.getElementById('inputNumero').value || '10';
  document.getElementById('previewName').textContent   = nameVal;
  document.getElementById('previewNumber').textContent = numVal;
  state.name   = nameVal;
  state.number = numVal;
}

function switchModel(model) {
  state.model = model;
  const img = document.getElementById('previewShirtImg');
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = state.shirts[model];
    img.style.opacity = '1';
  }, 250);

  document.getElementById('btnTitular').classList.toggle('active', model === 'titular');
  document.getElementById('btnReserva').classList.toggle('active', model === 'reserva');
}

function setNumber(n) {
  document.getElementById('inputNumero').value = n;
  updatePreview();
}

function selectSize(btn) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active-size'));
  btn.classList.add('active-size');
  state.size = btn.textContent;
}

function selectShirt(model, card) {
  document.querySelectorAll('.camisa-card').forEach(c => c.classList.remove('active'));
  card.classList.add('active');
  switchModel(model);
}

// ── CART ─────────────────────────────────────────────────────
function addToCart() {
  if (!state.size) { alert('Por favor selecione um tamanho!'); return; }
  showToast('🛒 Camisa adicionada ao carrinho!');
  // Aqui você integraria com seu sistema de pagamento (ex: Hotmart, Shopify, etc.)
}

function showToast(msg) {
  const toast = document.getElementById('cartToast');
  toast.querySelector('span').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── HAMBURGER ────────────────────────────────────────────────
document.getElementById('hamburguer').addEventListener('click', () => {
  document.getElementById('navMobile').classList.toggle('open');
});

document.querySelectorAll('.nav-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navMobile').classList.remove('open');
  });
});

// ── SCROLL TOP BUTTON ─────────────────────────────────────────
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 400);
});

// ── COUNTDOWN TIMER ───────────────────────────────────────────
function startCountdown() {
  // Set an end time 12 hours from now (or use a fixed time)
  const stored = localStorage.getItem('brasilPromoEnd');
  let endTime;
  if (stored) {
    endTime = parseInt(stored);
  } else {
    endTime = Date.now() + 12 * 60 * 60 * 1000;
    localStorage.setItem('brasilPromoEnd', endTime);
  }

  function tick() {
    const diff = endTime - Date.now();
    if (diff <= 0) {
      // Reset timer
      localStorage.removeItem('brasilPromoEnd');
      startCountdown();
      return;
    }
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('c-h').textContent = String(h).padStart(2,'0');
    document.getElementById('c-m').textContent = String(m).padStart(2,'0');
    document.getElementById('c-s').textContent = String(s).padStart(2,'0');
  }
  tick();
  setInterval(tick, 1000);
}
startCountdown();

// ── SCROLL REVEAL ─────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.camisa-card, .promo-card, .dep-card, .garantia-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  revealObserver.observe(el);
});

// ── SMOOTH INPUT UPDATE ───────────────────────────────────────
document.getElementById('inputNome').addEventListener('input', function() {
  this.value = this.value.toUpperCase();
  updatePreview();
});
document.getElementById('inputNumero').addEventListener('input', updatePreview);

// ── INIT ──────────────────────────────────────────────────────
updatePreview();
