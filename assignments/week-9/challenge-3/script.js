const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');
const copyBtn = document.getElementById('copy-btn');
const tweetBtn = document.getElementById('tweet-btn');
const exportBtn = document.getElementById('export-btn');
const copyAlert = document.getElementById('copy-alert');
const quoteContent = document.getElementById('quote-content');
const quoteBackground = document.getElementById('quote-background');

async function fetchQuote() {
  try {
    quoteText.textContent = '"Loading quote..."';
    quoteAuthor.textContent = '— Author';

    quoteText.classList.remove('fade-in');
    quoteAuthor.classList.remove('fade-in');

    void quoteText.offsetWidth;

    newQuoteBtn.disabled = true;
    newQuoteBtn.classList.add('opacity-50');

    const response = await fetch(
      'https://api.freeapi.app/api/v1/public/quotes/quote/random',
    );

    if (!response.ok) {
      throw new Error('Failed to fetch quote');
    }

    const data = await response.json();

    if (data.success && data.data) {
      quoteText.classList.add('fade-in');
      quoteAuthor.classList.add('fade-in');

      quoteText.textContent = `"${data.data.content}"`;
      quoteAuthor.textContent = `— ${data.data.author || 'Unknown'}`;
    } else {
      throw new Error('Invalid API response');
    }

    newQuoteBtn.disabled = false;
    newQuoteBtn.classList.remove('opacity-50');
  } catch (error) {
    console.error('Error fetching quote:', error);
    quoteText.textContent = '"Failed to load quote. Please try again."';
    quoteAuthor.textContent = '— Error';

    newQuoteBtn.disabled = false;
    newQuoteBtn.classList.remove('opacity-50');
  }
}

function copyToClipboard() {
  const quote = quoteText.textContent;
  const author = quoteAuthor.textContent;
  const textToCopy = `${quote} ${author}`;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      copyAlert.classList.remove('hidden');
      copyAlert.classList.add('animate-pulse');

      setTimeout(() => {
        copyAlert.classList.remove('animate-pulse');
        copyAlert.classList.add('hidden');
      }, 2000);
    })
    .catch(err => {
      console.error('Failed to copy:', err);
    });
}

function shareOnTwitter() {
  const quote = quoteText.textContent;
  const author = quoteAuthor.textContent.replace('— ', '');
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote} ${author} #QuoteOfTheDay`)}`;
  window.open(twitterUrl, '_blank');
}

function exportAsImage() {
  const container = document.getElementById('quote-container');

  html2canvas(container).then(canvas => {
    const link = document.createElement('a');
    link.download = 'quote-of-the-day.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('mousedown', () => {
    button.classList.add('scale-95');
  });

  button.addEventListener('mouseup', () => {
    button.classList.remove('scale-95');
  });

  button.addEventListener('mouseleave', () => {
    button.classList.remove('scale-95');
  });
});

newQuoteBtn.addEventListener('click', fetchQuote);
copyBtn.addEventListener('click', copyToClipboard);
tweetBtn.addEventListener('click', shareOnTwitter);
exportBtn.addEventListener('click', exportAsImage);

document.addEventListener('DOMContentLoaded', () => {
  fetchQuote();
});
