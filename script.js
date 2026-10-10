const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" }
];
let currentIndex = -1;
let count = parseInt(localStorage.getItem('quoteCount') || '0');
const qt = document.getElementById('quoteText');
const qa = document.getElementById('quoteAuthor');
const card = document.getElementById('quoteCard');
document.getElementById('count').textContent = count;
function getRandom() { let i; do { i = Math.floor(Math.random()*quotes.length); } while(i===currentIndex); currentIndex=i; return quotes[i]; }
function showQuote() { card.classList.add('animate'); setTimeout(()=>{ const q=getRandom(); qt.textContent=q.text; qa.textContent='- '+q.author; card.classList.remove('animate'); count++; localStorage.setItem('quoteCount',count); document.getElementById('count').textContent=count; },250); }
document.getElementById('newQuoteBtn').addEventListener('click', showQuote);
document.getElementById('copyBtn').addEventListener('click', () => { navigator.clipboard.writeText(`"${qt.textContent}" ${qa.textContent}`); });
document.getElementById('tweetBtn').addEventListener('click', () => { window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${qt.textContent}" ${qa.textContent}`)}`, '_blank'); });
showQuote();