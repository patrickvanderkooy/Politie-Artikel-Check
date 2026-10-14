const flowData = [
    {
        title: "Stroomdiagram 1: Het Aanhoudings- en Vrijheidsbenemingsproces",
        steps: [
            "<strong>Stap 1: Verdachte & Staandehouding (Sv art. 27 & 52):</strong> Redelijk vermoeden van schuld? &rarr; Staande houden om identiteit vast te stellen.",
            "<strong>Stap 2: Aanhouding (Sv art. 53 of 54):</strong> Heterdaad (iedereen mag aanhouden) vs. Buiten heterdaad (alleen politie op bevel van (H)OvJ bij VH-feit).",
            "<strong>Stap 3: Fouillering na aanhouding:</strong> Identificatiefouillering (Sv art. 55b), Veiligheidsfouillering (Politiewet art. 7 lid 3), en Vervoersfouillering (Politiewet art. 7 lid 4).",
            "<strong>Stap 4: Ophouden voor onderzoek (Sv art. 56a):</strong> Maximaal 9 uur (VH) of 6 uur (geen VH). Nachturen (00:00 - 09:00) tellen niet mee.",
            "<strong>Stap 5: Inverzekeringstelling (I.V.S.) (Sv art. 57 & 58):</strong> Uitsluitend bij VH-feiten door (H)OvJ. Duur: max 3 + 3 = 6 dagen."
        ]
    },
    {
        title: "Stroomdiagram 2: Binnentreden & Inbeslagneming",
        steps: [
            "<strong>Stap 1: Toetsing Rechtsgrond & Ruimte:</strong> Hulpverlening (Politiewet art. 7 lid 2), Aanhouding (Sv art. 55), of Inbeslagneming (Sv art. 94).",
            "<strong>Stap 2: Vormvoorschriften (Awbi / Grondwet art. 12):</strong> Woning betreden zonder toestemming vereist legitimatie, doel mededelen en schriftelijke machtiging."
        ]
    }
];

function renderFlowcharts() {
    const container = document.getElementById('flowContainer');
    container.innerHTML = `<h2 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 0.5rem;">Interactieve Stroomdiagrammen</h2><p style="color: #64748b; font-size: 0.92rem; margin-bottom: 1.5rem;">Stap-voor-stap beslisbomen voor praktijk en examen.</p>`;
    
    flowData.forEach(flow => {
        let card = document.createElement('div');
        card.className = 'flow-card';
        let stepsHtml = flow.steps.map(s => `<div class="flow-step">${s}</div>`).join('');
        card.innerHTML = `<h3>${flow.title}</h3><div style="margin-top:0.75rem;">${stepsHtml}</div>`;
        container.appendChild(card);
    });
}
