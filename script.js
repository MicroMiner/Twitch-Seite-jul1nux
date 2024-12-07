document.addEventListener('DOMContentLoaded', (event) => {

  // Navigation Kategorie
  const chat = document.getElementById('katChat');
  const info = document.getElementById('katInfo');
  const gamingHistory = document.getElementById('katGamingHistory');

  // Kategorie Content
  const loadChat = document.getElementById('chat');
  const loadInfo = document.getElementById('info');
  const loadGamingHistory = document.getElementById('gamingHistory');

  const chatActive = document.querySelector('img[alt="chat"]');
  const infoActive = document.querySelector('img[alt="info"]');
  const gamingHistoryActive = document.querySelector('img[alt="gamingHistory"]');

  chat.addEventListener('click', () => {
    loadChat.style.display = 'flex';
    loadInfo.style.display = 'none';
    loadGamingHistory.style.display = 'none';

    chatActive.classList.add('active');
    infoActive.classList.remove('active');
    gamingHistoryActive.classList.remove('active');
  });

  info.addEventListener('click', () => {
    loadChat.style.display = 'none';
    loadInfo.style.display = 'grid';
    loadGamingHistory.style.display = 'none';

    chatActive.classList.remove('active');
    infoActive.classList.add('active');
    gamingHistoryActive.classList.remove('active');
  });

  gamingHistory.addEventListener('click', () => {
    loadChat.style.display = 'none';
    loadInfo.style.display = 'none';
    loadGamingHistory.style.display = 'flex';

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


  // Game History
  const jahrDiv = document.getElementsByClassName('jahrDiv');
  const gameListUl = document.getElementsByClassName('gameListUl');
  const jahrDivIcon = document.getElementsByClassName('jahrDivIcon');

  const Games = ['Two Point Hospital', 'Minecraft', 'Ballistic NG', 'Papers Please', 'Stardew Valley', 'Amnesia: Dark Descent'];

  jahrDiv.addEventListener('mouseover', () => {
    console.log('Maus berührt Div');
  })

  jahrDiv.addEventListener('click', () => {

    if (gameListUl.classList.contains('open')) {
      console.log('List Close!');
      gameListUl.classList.remove('open');
      jahrDivIcon.style.transform = 'rotate(0deg)';

      setTimeout(() => {
        gameListUl.innerHTML = '';
      }, 500);
    } else {
        gameListUl.classList.add('open');
        console.log('List Open');
        jahrDivIcon.style.transform = 'rotate(90deg)';

        Games.forEach((game) => {
          const li = document.createElement('li');
          li.textContent = game;
          console.log(game);
          gameListUl.appendChild(li);
        });
    }
  })
})