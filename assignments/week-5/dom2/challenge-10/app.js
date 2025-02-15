let moves = 0;
let timeElapsed = 0;
let timer = null;
let flippedCards = [];
let matchedPairs = 0;

const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
let cards = [...emojis, ...emojis];

function initializeGame() {
  const gameContainer = document.getElementById('gameContainer');
  shuffleCards();

  gameContainer.innerHTML = '';
  cards.forEach((emoji, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.cardIndex = index;

    card.innerHTML = `
            <div class="card-front"></div>
            <div class="card-back">${emoji}</div>
        `;

    card.addEventListener('click', () => flipCard(card));
    gameContainer.appendChild(card);
  });

  moves = 0;
  timeElapsed = 0;
  matchedPairs = 0;
  flippedCards = [];
  updateStats();

  if (timer) clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
}

function shuffleCards() {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
}

function flipCard(card) {
  if (card.classList.contains('flipped') || flippedCards.length >= 2) return;

  card.classList.add('flipped');
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    moves++;
    updateStats();
    checkMatch();
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  const match =
    cards[card1.dataset.cardIndex] === cards[card2.dataset.cardIndex];

  if (match) {
    matchedPairs++;
    flippedCards = [];

    if (matchedPairs === emojis.length) {
      setTimeout(showVictoryMessage, 500);
    }
  } else {
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      flippedCards = [];
    }, 1000);
  }
}

function updateStats() {
  document.getElementById('moves').textContent = moves;
}

function updateTimer() {
  timeElapsed++;
  const minutes = Math.floor(timeElapsed / 60);
  const seconds = timeElapsed % 60;
  document.getElementById('time').textContent =
    `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function showVictoryMessage() {
  clearInterval(timer);
  const score = calculateScore();
  setTimeout(() => {
    alert(
      `Congratulations! 🎉\nYou won in ${moves} moves and ${formatTime(timeElapsed)}!\nScore: ${score} points`,
    );
  }, 300);
}

function calculateScore() {
  const baseScore = 1000;
  const movesPenalty = moves * 10;
  const timePenalty = timeElapsed * 2;
  return Math.max(0, baseScore - movesPenalty - timePenalty);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function restartGame() {
  initializeGame();
}

window.addEventListener('load', initializeGame);
