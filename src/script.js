import { quizData } from './questions.js';

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

const quizBox = document.getElementById('quiz-box');
const resultBox = document.getElementById('result-box');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionCounter = document.getElementById('question-counter');
const nextButton = document.getElementById('next-button');
const progressFill = document.getElementById('progress');
const finalScore = document.getElementById('final-score');
const scoreCommentary = document.getElementById('score-commentary');
const restartButton = document.getElementById('restart-button');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    resultBox.style.display = 'none';
    quizBox.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = quizData[currentQuestionIndex];

    questionText.innerText = currentQuestion.question;
    questionCounter.innerText = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
    progressFill.style.width = `${((currentQuestionIndex) / quizData.length) * 100}%`;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(button, index));
        optionsContainer.appendChild(button);
    });
}

function resetState() {
    nextButton.setAttribute("disabled", true);
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

function selectOption(selectedButton, index) {
    const correctAnswerIndex = quizData[currentQuestionIndex].correct;
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);

    userAnswers.push(index);

    if (index === correctAnswerIndex) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
        allButtons[correctAnswerIndex].classList.add('correct');
    }

    nextButton.removeAttribute('disabled');
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizBox.style.display = 'none';
    resultBox.style.display = 'block';
    progressFill.style.width = '100%';
    finalScore.innerText = `${score} / ${quizData.length}`;

    if (score === quizData.length) {
        scoreCommentary.innerText = "Perfect score! You are officially a HTML Expert! (LOL) 🚀";
    } else if (score >= 10) {
        scoreCommentary.innerText = "Good job! You've grasped the HTML basics, just keep practicing. 👍";
    } else {
        scoreCommentary.innerText = "Don't worry! Let's quickly review the slides and clear up any doubts. 📑";
    }

    const oldReport = document.getElementById('quiz-report');
    if (oldReport) {
        oldReport.remove();
    }

    const reportContainer = document.createElement('div');
    reportContainer.id = 'quiz-report';
    reportContainer.classList.add('quiz-report');

    quizData.forEach((item, qIndex) => {
        const userChoice = userAnswers[qIndex];
        const isCorrect = userChoice === item.correct;

        const reportItem = document.createElement('div');
        reportItem.classList.add('report-item', isCorrect ? 'report-correct' : 'report-wrong');

        reportItem.innerHTML = `
            <p class="report-question"><strong>Q${qIndex + 1}:</strong> ${escapeHtml(item.question)}</p>
            <p class="report-answer">
                Your answer: <span class="badge">${escapeHtml(item.options[userChoice])}</span>
                ${!isCorrect ? `<br>Correct answer: <span class="badge correct-badge">${escapeHtml(item.options[item.correct])}</span>` : ''}
            </p>
        `;
        reportContainer.appendChild(reportItem);
    });

    resultBox.insertBefore(reportContainer, restartButton);
}

function escapeHtml(text) {
    return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

nextButton.addEventListener('click', handleNextButton);
restartButton.addEventListener('click', startQuiz);

startQuiz();