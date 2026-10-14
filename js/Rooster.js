const roosterData = [
    { week: "Week 39 (21 sep 2026 - 26 sep 2026)", title: "Start Opleiding & Blok 1 / Blok 3", badge: "badge-exam", desc: "Maandag: Welkom bij PSI opleiding & Blok 1: Werken bij de Nederlandse politie 1.3.<br>Dinsdag (Online): Blok 1: Werken bij de Nederlandse Politie 1.2 & Blok 3: Rechtmatig handelen / strafrecht 3.1." },
    { week: "Week 40 (28 sep 2026 - 3 okt 2026)", title: "Lesweek 2", badge: "badge-exam", desc: "Intensive dagen op de Politieacademie in Leusden: Strafvordering, Grondwettelijke kaders en praktijkscenario's aanhouding." },
    { week: "Week 41 (5 okt 2026 - 10 okt 2026)", title: "Lesweek 3", badge: "badge-exam", desc: "Verdieping geweldsbeheersing, Ambtsinstructie, wetgeving Wapens en Munitie en Proces-Verbaal vaardigheden." },
    { week: "Week 42 (12 okt 2026 - 17 okt 2026)", title: "Lesweek 4", badge: "badge-exam", desc: "Voorbereiding praktijktoetsen, verkeerswetgeving en interoperabiliteit met ketenpartners." },
    { week: "Herfstvakantie (19 okt 2026 - 24 okt 2026)", title: "Geen les / Vrij", badge: "badge-vacation", desc: "Geen fysieke of online lessen op de Politieacademie. Tijd voor rust en zelfstudie.", special: true },
    { week: "Week 44 (26 okt 2026 - 31 okt 2026)", title: "Lesweek 5", badge: "badge-exam", desc: "Hervatting lessen na de herfstvakantie: Verdieping bijzondere wetten, WPG, en scenarioscholing." },
    { week: "Week 45 (2 nov 2026 - 7 nov 2026)", title: "Lesweek 6", badge: "badge-exam", desc: "Eindcoaching en examentraining voor de aankomende praktijk- en theorie-examens." },
    { week: "Week 46 (9 nov 2026 - 14 nov 2026)", title: "Examen Week", badge: "badge-groen", desc: "Dinsdag: 🎓 EXAMEN PSI (Examenopdracht 1 t/m 3) & Inzage.", specialExam: true }
];

function renderRooster() {
    const container = document.getElementById('roosterContainer');
    container.innerHTML = `<h2 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 0.5rem;">Inforooster BPO/LEU/PSI/2639/B</h2><p style="color: #64748b; font-size: 0.92rem; margin-bottom: 1.5rem;">Volledig overzicht van lesweken in Leusden, lesdagen, de herfstvakantie en examenweken.</p>`;

    roosterData.forEach(r => {
        let style = "";
        if (r.special) style = 'border-left: 4px solid #e53e3e; background: #fff5f5;';
        if (r.specialExam) style = 'border-left: 4px solid #38a169; background: #f0fff4;';

        let card = document.createElement('div');
        card.className = 'schedule-card';
        card.style = style;
        card.innerHTML = `<div class="card-header"><div><span class="badge ${r.badge}">${r.week}</span><h3>${r.title}</h3></div></div><p>${r.desc}</p>`;
        container.appendChild(card);
    });
}
