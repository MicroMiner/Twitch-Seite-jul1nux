
// Navigation Kategorie
const chat = document.getElementById('katChat');
const info = document.getElementById('katInfo');
const gamingHistory = document.getElementById('katGamingHistory');

// Kategorie Content
const loadChat = document.getElementById('chat');
const loadInfo = document.getElementById('info');
const loadGamingHistory = document.getElementById('gamingHistory');

const chatActive = document.querySelector('img[alt="chat"]')
const infoActive = document.querySelector('img[alt="info"]')
const gamingHistoryActive = document.querySelector('img[alt="gamingHistory"]')

chat.addEventListener('click', () => {
  loadChat.style.opacity = '1';
  loadInfo.style.opacity = '0';
  loadGamingHistory.style.opacity = '0';

  chatActive.classList.add('active');
  infoActive.classList.remove('active');
  gamingHistoryActive.classList.remove('active');
});

info.addEventListener('click', () => {
  loadChat.style.opacity = '0';
  loadInfo.style.opacity = '1';
  loadGamingHistory.style.opacity = '0';

  chatActive.classList.remove('active');
  infoActive.classList.add('active');
  gamingHistoryActive.classList.remove('active');
});

gamingHistory.addEventListener('click', () => {
  loadChat.style.opacity = '0';
  loadInfo.style.opacity = '0';
  loadGamingHistory.style.opacity = '1';

  chatActive.classList.remove('active');
  infoActive.classList.remove('active');
  gamingHistoryActive.classList.add('active');
});

// Twitch Player
var options = {
  width: 1080,
  height: 720,
  channel: "jul1nux",
};
var player = new Twitch.Player("jul1nux", options);
player.setVolume(0.5);