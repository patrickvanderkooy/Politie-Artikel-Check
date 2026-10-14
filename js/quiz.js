let currentQuizQuestion = null;
let score = 0;
let questionCount = 0;

function generateQuestion() {
    document.getElementById('quiz-feedback').style.display = 'none';
    document.getElementById('quiz-next-btn').style.display = 'none';

    const item = database[Math.floor(Math.random() * database.length)];
    const questionText = `<strong>Toetsvraag:</strong> Welk wetsartikel uit de toetsmatrijs hoort bij het volgende onderwerp / lesdoel?<br><em>"${item.eis || item.title}"</em>`;
    const correctAnswer = `${item.law} - ${item.article}: ${item.title}`;
    const wrongPool = database.filter(d => d.id !== item.id).map(o => `${o.law} - ${o.article}: ${o.title}`);
    const allOptions = [correctAnswer, ...wrongPool.slice(0, 3)].sort(() => Math.random() - 0.5);

    currentQuizQuestion = {
        correct: correctAnswer,
        explanation: item.explanation
    };

    questionCount++;
    document.getElementById('quiz-counter').textContent = `Examen Vraag #${questionCount}`;
    document.getElementById('quiz-question').innerHTML = questionText;

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    allOptions.forEach(opt => {
        let btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.innerHTML = opt;
        btn.onclick = () => checkAnswer(opt, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedOpt, btnElement) {
    const allBtns = document.querySelectorAll('.quiz-option');
    allBtns.forEach(b => b.onclick = null);

    const feedback = document.getElementById('quiz-feedback');
    feedback.style.display = 'block';

    if (selectedOpt === currentQuizQuestion.correct) {
        btnElement.classList.add('correct');
        feedback.style.background = '#c6f6d5';
        feedback.style.color = '#22543d';
        feedback.innerHTML = `<strong>Juist! 🎉</strong><br><br>${currentQuizQuestion.explanation}`;
        score++;
    } else {
        btnElement.classList.add('wrong');
        feedback.style.background = '#fed7d7';
        feedback.style.color = '#742a2a';
        feedback.innerHTML = `<strong>Onjuist.</strong> Juiste antwoord: <strong>${currentQuizQuestion.correct}</strong>.<br><br>${currentQuizQuestion.explanation}`;
        allBtns.forEach(b => { if (b.innerHTML === currentQuizQuestion.correct) b.classList.add('correct'); });
    }

    document.getElementById('quiz-score').textContent = `Score: ${score} van de ${questionCount}`;
    document.getElementById('quiz-next-btn').style.display = 'inline-block';
}
