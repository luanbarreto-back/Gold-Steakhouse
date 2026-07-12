/* =============================================
   GOLD STEAKHOUSE — cart.js + utils.js
   ============================================= */

/* ---- CARRINHO ---- */
const Cart = {
  items: JSON.parse(localStorage.getItem('gs_cart') || '[]'),

  save() {
    localStorage.setItem('gs_cart', JSON.stringify(this.items));
    this.updateBadge();
  },

  add(item) {
    const existing = this.items.find(i => i.id === item.id);
    if (existing) {
      existing.qty++;
    } else {
      this.items.push({ ...item, qty: 1 });
    }
    this.save();
    showToast(`✓ ${item.nome} adicionado ao carrinho`);
  },

  remove(id) {
    this.items = this.items.filter(i => i.id !== id);
    this.save();
  },

  updateQty(id, qty) {
    const item = this.items.find(i => i.id === id);
    if (item) {
      item.qty = qty;
      if (item.qty <= 0) this.remove(id);
      else this.save();
    }
  },

  total() {
    return this.items.reduce((acc, i) => acc + i.preco * i.qty, 0);
  },

  count() {
    return this.items.reduce((acc, i) => acc + i.qty, 0);
  },

  clear() {
    this.items = [];
    this.save();
  },

  updateBadge() {
    const badges = document.querySelectorAll('#cartBadge, .cart-badge');
    const count = this.count();
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count === 0 ? 'none' : 'flex';
    });
  },
};

/* ---- TOAST ---- */
let toastTimer;
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ---- FORMATA PREÇO ---- */
function formatPreco(val) {
  return `R$ ${val.toFixed(2).replace('.', ',')}`;
}

/* ---- NAVBAR SCROLL ---- */
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.gs-navbar');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });
  }
  Cart.updateBadge();
});
