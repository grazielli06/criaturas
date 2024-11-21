// script.js
const questions = [
    {
        text: "Quem lidera o grupo de aventureiros?",
        options: ["Layla, a arqueira", "Darius, o guerreiro"],
        correct: 1,
    },
    {
        text: "Qual é o maior perigo enfrentado?",
        options: ["Criaturas mágicas", "O próprio grupo"],
        correct: 1,
    },
    {
        text: "Qual o objetivo final dos aventureiros?",
        options: ["Destruir o amuleto", "Usar o amuleto"],
        correct: 1,
    },
    {
        text: "Onde o amuleto foi perdido?",
        options: ["Floresta encantada", "Caverna sombria"],
        correct: 1,
    },
    {
        text: "O que acontece se o amuleto for usado?",
        options: ["Concede poder e caos", "Liberta uma maldição"],
        correct: 1,
    },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = question.text;
    document.getElementById("option1").innerText = question.options[0];
    document.getElementById("option2").innerText = question.options[1];
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    const feedback = document.getElementById("feedback");

    if (selectedOption === question.correct) {
        score++;
        feedback.style.color = "limegreen";
        feedback.innerText = "Correto!";
    } else {
        feedback.style.color = "red";
        feedback.innerText = "Errado!";
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            feedback.innerText = "";
            loadQuestion();
        }, 1000);
    } else {
        setTimeout(() => {
            endGame();
        }, 1000);
    }
}

function endGame() {
    const game = document.getElementById("game");
    game.innerHTML = `
        <h2>Fim do Jogo!</h2>
        <p>Você acertou ${score} de ${questions.length} perguntas.</p>
        <button onclick="restartGame()">Jogar Novamente</button>
    `;
}

function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
    document.getElementById("feedback").innerText = "";
}

window.onload = loadQuestion;
