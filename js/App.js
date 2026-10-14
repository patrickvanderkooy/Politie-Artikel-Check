let favorites = JSON.parse(localStorage.getItem('pol_favs') || '[]');
let currentFilter = 'all';

window.addEventListener('DOMContentLoaded', () => {
    const dismissed = localStorage.getItem('pol_install_dismissed');
    if (!dismissed) {
        document.getElementById('installBanner').style.display = 'flex';
    }

    renderArticles(database);
    renderFlowcharts();
    renderExamTab();
    renderRooster();
});

function dismissInstallBanner() {
    localStorage.setItem('pol_install_dismissed', 'true');
    document.getElementById('installBanner').style.display = 'none';
}

function showInstallHelp() {
    alert("Om deze app direct op je beginscherm te plaatsen:\n\n- Android (Chrome): Tik rechtsboven op de 3 puntjes (⋮) en kies 'Toevoegen aan startscherm'.\n- iPhone (Safari): Tik onderaan op het deel-icoontje en kies 'Zet op beginscherm'.");
    dismissInstallBanner();
}

function switchTab(tabId, btn) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');

    if (tabId === 'quiz-tab') {
        generateQuestion();
    }
}

function toggleFav(id, btn) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(f => f !== id);
        btn.classList.remove('active');
    } else {
        favorites.push(id);
        btn.classList.add('active');
    }
    localStorage.setItem('pol_favs', JSON.stringify(favorites));
    if (currentFilter === 'favs') filterArticles();
}

function searchArticle(term) {
    switchTab('articles-tab', document.getElementById('btn-articles-tab'));
    document.getElementById('searchInput').value = term;
    filterArticles();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderArticles(items) {
    const container = document.getElementById('articlesContainer');
    const resultsInfo = document.getElementById('resultsInfo');
    
    container.innerHTML = '';
    resultsInfo.textContent = `${items.length} artikel(en) weergegeven`;

    if (items.length === 0) {
        container.innerHTML = `<div class="card" style="text-align:center; padding:2rem;">Geen resultaten gevonden.</div>`;
        return;
    }

    items.forEach(item => {
        const isFav = favorites.includes(item.id);
        const card = document.createElement('div');
        card.className = 'card';

        let badgesHtml = `<span class="badge badge-matrix">Toetsmatrijs</span>`;
        if (item.groen) badgesHtml += ` <span class="badge badge-groen">🟢 Recente Toets</span>`;
        if (item.vh) badgesHtml += ` <span class="badge badge-vh">🟣 VH-feit (Paars)</span>`;

        card.innerHTML = `
            <div class="card-header">
                <div>
                    <div style="font-size:0.75rem; font-weight:bold; color:var(--secondary); text-transform:uppercase;">${item.law}</div>
                    <h3 class="article-title">${item.article}: ${item.title}</h3>
                </div>
                <div style="display:flex; align-items:center;">
                    <div class="badges">${badgesHtml}</div>
                    <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFav('${item.id}', this)">★</button>
                </div>
            </div>
            <div class="matrix-grid">
                ${item.eis ? `<div class="matrix-eis-box"><strong>Eis / Leerdoel:</strong><br>${item.eis}</div>` : ''}
                <div class="matrix-text-box"><strong>Volledige Wettekst (1-op-1 incl. alle leden/subs):</strong><br><br>${item.text}</div>
                <div class="matrix-explanation-box"><strong>Toelichting:</strong><br><br>${item.explanation}</div>
            </div>
            ${item.connection ? `<div style="margin-top: 0.75rem; background: #fffaf0; border: 1px solid #feebc8; border-left: 3px solid #dd6b20; padding: 0.75rem; border-radius: 4px; font-size: 0.88rem; color: #7b341e;"><strong>Wetsverband:</strong> ${item.connection}</div>` : ''}
        `;
        container.appendChild(card);
    });
}

function filterArticles() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    let filtered = database.filter(item => {
        const matchesQuery = 
            item.article.toLowerCase().includes(query) ||
            item.title.toLowerCase().includes(query) ||
            item.text.toLowerCase().includes(query) ||
            item.explanation.toLowerCase().includes(query) ||
            item.law.toLowerCase().includes(query);

        if (!matchesQuery) return false;
        if (currentFilter === 'groen') return item.groen;
        if (currentFilter === 'vh') return item.vh;
        if (currentFilter === 'favs') return favorites.includes(item.id);
        return true;
    });
    renderArticles(filtered);
}

function setFilter(filter, btn) {
    currentFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterArticles();
}
