const questions = [
  {
    text: "Pick a snack:",
    options: ["Chips", "Chocolate", "Ice Cream", "Fruit"]
  },
  {
    text: "Favorite weekend activity:",
    options: ["Sleep", "Party", "Game", "Walk"]
  },
  {
    text: "Mood right now:",
    options: ["😎 Cool", "😭 Sad", "🤯 Crazy", "🥱 Tired"]
  }
];

const memes = [
  {name: "Doge in a Tuxedo", description: "You are classy but chaotic."},
  {name: "Shrek Meme", description: "You love humor and unpredictability."},
  {name: "Woman Yelling at Cat", description: "You are dramatic but relatable."},
  {name: "Surprised Pikachu", description: "Life surprises you often."}
];

let currentQuestion = 0;
let answers = [];

const questionText = document.getElementById('questionText');
const optionsDiv = document.getElementById('options');
const resultDiv = document.getElementById('result');
const memeName = document.getElementById('memeName');
const memeDescription = document.getElementById('memeDescription');
const retryBtn = document.getElementById('retryBtn');

function showQuestion() {
  if (currentQuestion >= questions.length) {
    showResult();
    return;
  }

  const q = questions[currentQuestion];
  questionText.textContent = q.text;
  optionsDiv.innerHTML = '';

  q.options.forEach((option, i) => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.addEventListener('click', () => {
      answers.push(i);
      currentQuestion++;
      showQuestion();
    });
    optionsDiv.appendChild(btn);
  });
}

function showResult() {
  // Simple scoring: sum of answer indices modulo number of memes
  const total = answers.reduce((a,b) => a+b, 0);
  const memeIndex = total % memes.length;
  const meme = memes[memeIndex];

  memeName.textContent = meme.name;
  memeDescription.textContent = meme.description;

  document.getElementById('quiz').classList.add('hidden');
  resultDiv.classList.remove('hidden');
}

retryBtn.addEventListener('click', () => {
  currentQuestion = 0;
  answers = [];
  resultDiv.classList.add('hidden');
  document.getElementById('quiz').classList.remove('hidden');
  showQuestion();
});

// Start quiz
showQuestion();
