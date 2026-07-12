/* =============================================
   GOLD STEAKHOUSE — cardapio.js
   Renderiza o cardápio e gerencia tabs
   ============================================= */

let modalItem = null;
let bebidaFiltroAtivo = 'Todos';

/* ---- TABS ---- */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.cardapio-section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    document.getElementById(`sec-${cat}`)?.classList.add('active');
    // Scroll suave ao topo da seção
    window.scrollTo({ top: document.querySelector('.categoria-tabs').offsetTop - 70, behavior: 'smooth' });
  });
});

/* ---- RENDER ENTRADAS ---- */
function renderEntradas() {
  const grid = document.getElementById('grid-entradas');
  const count = document.getElementById('count-entradas');
  count.textContent = `${CARDAPIO.entradas.length} itens`;
  grid.innerHTML = CARDAPIO.entradas.map(p => `
    <div class="col-sm-6 col-lg-3">
      <div class="prato-card" role="button" onclick="abrirModal('${p.id}','entradas')">
        <div class="prato-img-wrap">
          <img src="${p.img}" alt="${p.nome}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=75'">
          <div class="prato-overlay"></div>
          <span class="prato-tag">Entrada</span>
        </div>
        <div class="prato-body">
          <h3 class="prato-name">${p.nome}</h3>
          <p class="prato-desc">${p.desc}</p>
          <div class="prato-info">
            ${p.peso ? `<span class="prato-info-item"><i class="bi bi-bar-chart"></i> ${p.peso}</span>` : ''}
            ${p.tempo ? `<span class="prato-info-item"><i class="bi bi-clock"></i> ${p.tempo}</span>` : ''}
          </div>
          <div class="prato-footer">
            <div class="prato-preco">
              <small>A partir de</small>
              ${formatPreco(p.preco)}
            </div>
            <button class="btn-add" onclick="event.stopPropagation(); Cart.add({id:'${p.id}',nome:'${p.nome}',preco:${p.preco},img:'${p.img}'})" title="Adicionar">
              <i class="bi bi-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ---- RENDER EXECUTIVO ---- */
function renderExecutivo() {
  const grid = document.getElementById('grid-executivo');
  const count = document.getElementById('count-executivo');
  count.textContent = `${CARDAPIO.executivo.length} opções`;
  grid.innerHTML = CARDAPIO.executivo.map(p => `
    <div class="col-md-6 col-lg-4">
      <div class="executivo-card" role="button" onclick="abrirModal('${p.id}','executivo')">
        <img class="executivo-img" src="${p.img}" alt="${p.nome}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=75'">
        <div class="executivo-body">
          <span class="executivo-badge">🍛 Executivo</span>
          <div class="executivo-name">${p.nome}</div>
          <p class="executivo-desc">${p.desc}</p>
          <p class="executivo-includes">Inclui: <span>${p.inclui}</span></p>
          <div class="executivo-footer">
            <div class="executivo-preco">
              <small>Por pessoa</small>
              ${formatPreco(p.preco)}
            </div>
            <button class="btn-gold" style="padding:10px 20px; font-size:0.68rem;" onclick="event.stopPropagation(); Cart.add({id:'${p.id}',nome:'${p.nome}',preco:${p.preco},img:'${p.img}'})">
              Pedir
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ---- RENDER PRINCIPAL ---- */
function renderPrincipal() {
  const grid = document.getElementById('grid-principal');
  const count = document.getElementById('count-principal');
  count.textContent = `${CARDAPIO.principal.length} pratos`;
  grid.innerHTML = CARDAPIO.principal.map(p => `
    <div class="col-sm-6 col-lg-4 col-xl-3">
      <div class="prato-card" role="button" onclick="abrirModal('${p.id}','principal')">
        <div class="prato-img-wrap">
          <img src="${p.img}" alt="${p.nome}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75'">
          <div class="prato-overlay"></div>
          <span class="prato-tag">Principal</span>
        </div>
        <div class="prato-body">
          <h3 class="prato-name">${p.nome}</h3>
          <p class="prato-desc">${p.desc}</p>
          <div class="prato-info">
            ${p.peso ? `<span class="prato-info-item"><i class="bi bi-bar-chart"></i> ${p.peso}</span>` : ''}
            ${p.tempo ? `<span class="prato-info-item"><i class="bi bi-clock"></i> ${p.tempo}</span>` : ''}
          </div>
          <div class="prato-footer">
            <div class="prato-preco">${formatPreco(p.preco)}</div>
            <button class="btn-add" onclick="event.stopPropagation(); Cart.add({id:'${p.id}',nome:'${p.nome}',preco:${p.preco},img:'${p.img}'})" title="Adicionar">
              <i class="bi bi-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ---- RENDER SOBREMESAS ---- */
function renderSobremesas() {
  const grid = document.getElementById('grid-sobremesas');
  const count = document.getElementById('count-sobremesas');
  count.textContent = `${CARDAPIO.sobremesas.length} opções`;
  grid.innerHTML = CARDAPIO.sobremesas.map(p => `
    <div class="col-sm-6 col-lg-3">
      <div class="sobremesa-card" role="button" onclick="abrirModal('${p.id}','sobremesas')">
        <div class="sobremesa-img-wrap">
          <img src="${p.img}" alt="${p.nome}" loading="lazy">
        </div>
        <div class="sobremesa-body">
          <div class="sobremesa-name">${p.nome}</div>
          <p class="sobremesa-desc">${p.desc}</p>
          <div class="sobremesa-footer">
            <div class="sobremesa-preco">${formatPreco(p.preco)}</div>
            <button class="btn-add" onclick="event.stopPropagation(); Cart.add({id:'${p.id}',nome:'${p.nome}',preco:${p.preco},img:'${p.img}'})" title="Adicionar">
              <i class="bi bi-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ---- RENDER BEBIDAS ---- */
function renderBebidas(filtro = 'Todos') {
  bebidaFiltroAtivo = filtro;
  const grid = document.getElementById('grid-bebidas');
  const count = document.getElementById('count-bebidas');
  const lista = filtro === 'Todos' ? CARDAPIO.bebidas : CARDAPIO.bebidas.filter(b => b.tipo === filtro);
  count.textContent = `${lista.length} itens`;

  // Renderiza filtros
  const tipos = ['Todos', ...new Set(CARDAPIO.bebidas.map(b => b.tipo))];
  const filtrosEl = document.getElementById('bebida-filtros');
  filtrosEl.innerHTML = tipos.map(t => `
    <button class="tab-btn ${t === filtro ? 'active' : ''}" style="border-bottom: 2px solid ${t === filtro ? 'var(--gold)' : 'transparent'}; padding: 0.5rem 1.1rem; font-size:0.62rem;"
      onclick="renderBebidas('${t}')">
      ${t}
    </button>
  `).join('');

  if (lista.length === 0) {
    grid.innerHTML = `<div class="col-12 empty-state"><div class="empty-state-icon">🥤</div><p>Nenhuma bebida nessa categoria.</p></div>`;
    return;
  }

  grid.innerHTML = lista.map(b => `
    <div class="col-sm-6 col-lg-4">
      <div class="bebida-card" role="button" onclick="abrirModal('${b.id}','bebidas')">
        <div class="bebida-img-wrap">
          <img src="${b.img}" alt="${b.nome}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=75'">
        </div>
        <div class="bebida-body">
          <div style="font-size:0.58rem; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color: var(--gold); margin-bottom:4px;">${b.tipo}</div>
          <div class="bebida-name">${b.nome}</div>
          <p class="bebida-desc">${b.desc}</p>
          <div class="bebida-footer">
            <div class="bebida-preco">${formatPreco(b.preco)}</div>
            <button class="btn-add" onclick="event.stopPropagation(); Cart.add({id:'${b.id}',nome:'${b.nome}',preco:${b.preco},img:'${b.img}'})" title="Adicionar">
              <i class="bi bi-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ---- MODAL DETALHE ---- */
function abrirModal(id, cat) {
  const item = CARDAPIO[cat].find(i => i.id === id);
  if (!item) return;
  modalItem = item;

  document.getElementById('modalPratoNome').textContent = item.nome;
  document.getElementById('modalPratoImg').src = item.img;
  document.getElementById('modalPratoImg').alt = item.nome;
  document.getElementById('modalPratoDesc').textContent = item.desc;
  document.getElementById('modalPratoPreco').textContent = formatPreco(item.preco);

  let info = '';
  if (item.peso) info += `<span class="me-3"><i class="bi bi-bar-chart me-1"></i>${item.peso}</span>`;
  if (item.tempo) info += `<span class="me-3"><i class="bi bi-clock me-1"></i>${item.tempo}</span>`;
  if (item.inclui) info += `<span style="color:var(--gold-light)"><i class="bi bi-check-circle me-1"></i>${item.inclui}</span>`;
  if (item.tipo) info += `<span class="me-3"><i class="bi bi-tag me-1"></i>${item.tipo}</span>`;
  document.getElementById('modalPratoInfo').innerHTML = info;

  document.getElementById('modalBtnAdd').onclick = () => {
    Cart.add({ id: item.id, nome: item.nome, preco: item.preco, img: item.img });
  };

  new bootstrap.Modal(document.getElementById('pratoModal')).show();
}

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
  renderEntradas();
  renderExecutivo();
  renderPrincipal();
  renderSobremesas();
  renderBebidas();
});
