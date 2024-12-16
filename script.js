import { Games2023_24, Games2024_25, Games2025_26 } from './gamelist.js';

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM complet load');

  //------------------- Navigation Kategorie
  const chat = document.getElementById('katChat');
  const info = document.getElementById('katInfo');
  const gamingHistory = document.getElementById('katGamingHistory');

  //------------------- Kategorie Content -------------------
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



  //------------------- Game History -------------------
  const jahrDivs = document.querySelectorAll('.jahrDiv');
  console.log('Gefundene Elemente: ', jahrDivs);
  if (jahrDivs.length === 0) {
    console.log('Keine Klasse .jahrDiv gefunden');
  }

  const gameListUl = document.querySelectorAll('.gameListUl');
  const jahrDivIcon = document.querySelectorAll('.jahrDivIcon');

  const gamesByYear = {
    '2023/24': Games2023_24,
    '2024/25': Games2024_25,
    '2025/26': Games2025_26
  };

  jahrDivs.forEach((jahrDiv, index) => {
    jahrDiv.addEventListener('click', () => {
        const ul = gameListUl[index];
        const icon = jahrDivIcon[index];

        // Jahr aus dem data-year Attribut auslesen
        const year = jahrDiv.getAttribute('data-year');

        // Leere Liste vor dem Laden der neuen Spiele
        ul.innerHTML = '';

        if (ul.classList.contains('open')) {
            // Animation beim Schließen der Liste
            ul.classList.remove('open');  // Entferne sofort die .open Klasse

            // Verzögere das Entfernen von max-height, damit die Transition wirkt
            setTimeout(() => {
                ul.style.maxHeight = '0';  // Reduziere max-height auf 0 nach der Animation
            }, 500);  // Setze eine Verzögerung, die der CSS-Transition entspricht (500ms)
            
            icon.style.transform = 'rotate(0deg)';
        } else {
            // Animation beim Öffnen der Liste
            ul.classList.add('open');
            ul.style.maxHeight = '100%';  // Setze max-height auf eine große Zahl beim Öffnen
            icon.style.transform = 'rotate(90deg)';

            // Überprüfen, ob es Spiele für das angeklickte Jahr gibt
            if (gamesByYear[year]) {
              gamesByYear[year].forEach((game) => {
                  const li = document.createElement('li');
                  li.textContent = game;
                  ul.appendChild(li);
              });
          } else {
              console.log(`Keine Spiele für das Jahr ${year} verfügbar.`);
          }
        }
    });
  });


  //------------------- Twitch Player -------------------
  var options = {
    width: '100%',
    height: '100%',
    channel: "jul1nux",
  };
  var player = new Twitch.Player("jul1nux", options);
  player.setVolume(0.5);
  console.log('Player ');

  player.addEventListener(Twtich.Player.READY, () => {
    console.log('videoPlayer ist bereit');

    const videoPlay = document.getElementById('videoPlay');

    videoPlay.addEventListener('click', () => {
    console.log('Element mit der ID "videoPlay" wurde gefunden');
    player.Play();
    console.log('Stream wird gestartet');
    });

    const videoPause = document.getElementById('videoPause');

    videoPause.addEventListener('click', () => {
      console.log('Element mit der ID "videoPause" wurde gefunden');
      player.Pause();
      console.log('Stream wird gestartet');
      });

  });

  
  //------------------- Twitch Player Controll -------------------

  




})