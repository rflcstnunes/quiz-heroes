const quizData = [
    {
        question: 'Em qual filme do Homem-Aranha, Dr.Octopus ataca?',
        a: 'Homem-Aranha 2',
        b: 'Homem-Aranha 1',
        c: 'Homem-Aranha 3',
        d: 'O espetacular-Homem-Aranha',
        correct: 'b'
    },
    {
        question: 'Como o Hulk se transforma?',
        a: 'Picado',
        b: 'Uma radiação cósmica',
        c: 'Poderes que apareceram de repente',
        d: 'Caiu no lixo tóxico',
        correct: 'b'
    },
    {
        question: 'Quem é o parceiro do Batman?',
        a: 'Super Homem',
        b: 'Lanterna Verde',
        c: 'Robin',
        d: 'Hulk',
        correct: 'c'
    },
    {
        question: 'Qual o maior inimigo do Homem-Aranha?',
        a: 'Magneto',
        b: 'Dr. Caveira',
        c: 'Loki',
        d: 'Venon',
        correct: 'd'
    },
    {
        question: 'Quem foi o primeiro herói da América?',
        a: 'Homem de Ferro',
        b: 'Hulk',
        c: 'Thor',
        d: 'Capitão América',
        correct: 'd'
    }
];

const answersEl = document.getElementsByName('answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuestion];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answersEl.forEach((answersEl) => {
        if (answersEl.checked) {
            answer = answersEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answersEl.forEach((answersEl) => {
        answersEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quizData.length) {
                loadQuiz();
            } else {
                // Show results pending
                quiz.innerHTML = `<h2 class="results">Você acertou ${score}/${quizData.length} questões.</h2>
                <button onClick="location.reload()" id="reloadBtn">Recomeçar</button>`
            }          
    }
});
