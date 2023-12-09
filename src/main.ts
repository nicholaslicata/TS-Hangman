import './style.css'

const lettersContainer = document.querySelector('.letters-container') as HTMLDivElement;
const wordContainer = document.querySelector('.word-container') as HTMLDivElement;
const livesContainer = document.querySelector('.lives-container') as HTMLDivElement;
const livesText = document.querySelector('.lives') as HTMLSpanElement;

const alphabet: string[] = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
  'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
];

const words: string[] = [
  'absurd', 'abyss', 'askew', 'banjo', 'bikini', 'blizzard', 'crypt', 'cobweb', 
  'croquet', 'duplex', 'daiquiri', 'dizzying', 'espionage', 'exodus', 'embezzle',
  'frazzled', 'flapjack', 'fluffiness', 'galaxy', 'gizmo', 'gnarly', 'haiku',
  'hyphen', 'hazard', 'ivy', 'icebox', 'injury', 'jackpot', 'jawbreaker', 'jukebox',
  'kayak', 'knapsack', 'kiosk', 'lucky', 'larynx', 'lymph', 'mystic', 'microwave',
  'matrix', 'nightclub', 'nowadays', 'numbskull', 'oar', 'onyx', 'oxygen', 'pajama',
  'pixel', 'pnuemonia', 'quartz', 'quiz', 'queue', 'rhubarb', 'rhythm', 'rickshaw',
  'scratch', 'sphinx', 'stronghold', 'topaz', 'transcript', 'transplant', 'unknown',
  'unworthy', 'uptown', 'vaporize', 'vixen', 'voodoo', 'waltz', 'whizzing', 'wyvern',
  'xylophone', 'xenon', 'xenoblast', 'yachtsman', 'yipee', 'yummy', 'zephyr', 'zigzag',
  'zombie',
];

let randomWord = words[Math.floor(Math.random() * words.length)];
const randomWordLetters: string[] = randomWord.split('');
const userGuesses: string[] = [];
let userGuess: HTMLButtonElement;
let letter: HTMLLIElement;
let lives: number = 10;

window.addEventListener('DOMContentLoaded', () => {
  renderLetters();
  renderWord();

});


function userTurn(e: Event) {
  userGuess = e!.target as HTMLButtonElement
  userGuesses.push(userGuess.value);
  
  checkCorrect();

  if (lives < 1) {
    livesText.textContent = '';
    livesContainer.textContent = 'GAME OVER';
  }
}

function renderLetters() {
  alphabet.forEach(letter => {
    const letterBtn = document.createElement('button');
    letterBtn.textContent = letter;
    letterBtn.value = letter;
    letterBtn.classList.add('letter-btn');
    lettersContainer.appendChild(letterBtn);

    letterBtn.addEventListener('click', (e) => {
      userTurn(e);
    });
  })
}

function renderWord() {
  for (let i = 0; i < randomWord.length; i++) {
    letter = document.createElement('li');
    letter.classList.add('letter');
    letter.innerText = '';
    wordContainer?.appendChild(letter);
  }
}

function checkCorrect() {
  const letters = wordContainer?.children;
  for (let i = 0; i < randomWordLetters.length; i++) {
  if (randomWordLetters[i] === userGuess.value) {
      letters![i].innerHTML = userGuess.value;
  } else {
    userGuess.style.opacity = '0.5';
    userGuess.disabled = true;
  }
}
  const index = randomWordLetters.indexOf(userGuess.value)
  if (index === -1 && lives >= 1) {
    lives -= 1;
    livesText.textContent = String(lives);
  }
}
console.log(randomWordLetters);