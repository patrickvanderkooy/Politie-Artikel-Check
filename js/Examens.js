const examData = [
    {
        title: "Examenopdracht 1: Rechtmatig Handelen & Strafrechtelijke Grondslagen",
        type: "Schriftelijke praktijkcasuïstiek & Mondelinge verdediging.",
        checks: [
            "Correcte kwalificatie van strafbare feiten uit de toetsmatrijs (Sr / Sv).",
            "Juiste toepassing van proportionaliteit en subsidiariteit bij geweld (Politiewet art. 7).",
            "Beheersing van strafuitsluitingsgronden (noodweer, overmacht)."
        ]
    },
    {
        title: "Examenopdracht 2: Proces-Verbaal & Identiteitsvaststelling",
        type: "Vaardigheidstoets opstellen PV & ID-controle.",
        checks: [
            "Vlekkeloze vaststelling personalia conform Sv art. 27a.",
            "Onderscheid maken tussen eigen waarneming en verklaringen in het PV."
        ]
    },
    {
        title: "Examenopdracht 3: Fysieke Vaardigheden & Veiligheidsfouillering",
        type: "Praktijkexamentraining (Leusden).",
        checks: [
            "Uitvoeren veiligheidsfouillering bij onmiddellijk gevaar (Politiewet art. 7 lid 3).",
            "Correcte toepassing vervoersfouillering en handboeiengebruik."
        ]
    },
    {
        title: "Examenopdracht 4: Professioneel Handelen & Integriteit",
        type: "Assessment / praktijkdialogen.",
        checks: [
            "Toepassing van Grondrechten (art. 1, 10, 12) in crisissituaties.",
            "Integer handelen conform de Beroepscode voor de Politie."
        ]
    }
];

function renderExamTab() {
    const container = document.getElementById('examContainer');
    container.innerHTML = `<h2 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 0.5rem;">Examenopdrachten & Aanvinkbare Beoordelingsrubrics (PSI)</h2><p style="color: #64748b; font-size: 0.92rem; margin-bottom: 1.5rem;">Vink hieronder de onderdelen af die je al volledig beheerst voor je examens.</p>`;

    examData.forEach((ex, idx) => {
        let card = document.createElement('div');
        card.className = 'exam-card';
        let checksHtml = ex.checks.map((c, cIdx) => {
            let id = `ex_${idx}_${cIdx}`;
            let checked = localStorage.getItem(id) === 'true' ? 'checked' : '';
            return `<div class="checklist-item"><input type="checkbox" id="${id}" ${checked} onchange="saveCheck('${id}', this.checked)"><label for="${id}">${c}</label></div>`;
        }).join('');

        card.innerHTML = `<h3>${ex.title}</h3><p><strong>Toetsvorm:</strong> ${ex.type}</p>${checksHtml}`;
        container.appendChild(card);
    });
}

function saveCheck(id, val) {
    localStorage.setItem(id, val);
}
