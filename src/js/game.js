import Visualizer from './visualizer';
import AudioSynth from "./audio";

class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");

    this.stopButton = document.getElementById("stop-button");
    this.audio = document.getElementById("audio");
    this.score = 0;
    let scoreCard = document.getElementById("score-value");

    scoreCard.innerText = this.score;
    this.visualInit();
    this.createSongList();
    this.gamePaused = null;
    this.curSongUrl = null;

    this.pauseGame();
    this.setMenuEvents();
    this.togglePause = this.togglePause.bind(this);
    this.playRound = this.playRound.bind(this);
    this.jumpToMainMenu = this.jumpToMainMenu.bind(this);
  }

  pauseGame() {
    this.pauseMenu = document.getElementById("pause-menu");
    document.addEventListener("keydown", e => {
      if (e.which === 32) {
        this.togglePause();
      }
    });
  }

  togglePause() {
    if (!this.gamePaused) {
      this.currentSong.pause();
      this.visualizer.stopAnimation();
      this.pauseMenu.classList.toggle("hide-menu");
      this.gamePaused = true;
    } else if (this.gamePaused) {
      this.currentSong.play();
      this.visualizer.animate();
      this.pauseMenu.classList.toggle("hide-menu");
      this.gamePaused = false;
    }
  }

  restartCurrentSong() {
    this.togglePause();
    this.visualizer.restartRound();
    this.score = 0;
    Game.scoreUpdate(this.score);
    this.playRound(this.curSongUrl);
  }

  jumpToMainMenu(){
    this.togglePause();
    this.visualizer.restartRound();
    let songSelection = document.getElementsByClassName(
      "song-selection"
    )[0];
    this.score = 0;
    Game.scoreUpdate(this.score);
    songSelection.classList.remove("hide");
  }

  createSongList() {
    let songList = document.getElementById("song-list");
    let audioList = [
      "Dont Wanna Know",
      "Feel So Close",
      "If I Lose Myself",
      "Sunday Morning",
      "Finesse",
      "What Do You Mean",
      "Starboy"
    ];
    audioList.forEach(songUrl => {
      let listItem = document.createElement("li");
      listItem.append(songUrl);
      listItem.onclick = () => {
        this.curSongUrl = songUrl;
        this.playRound(songUrl)};
      songList.append(listItem);
    });
  }

  setMenuEvents() {
    let resumeButton = document.getElementById("resume");
    let restartButton = document.getElementById("restart");
    let quitButton = document.getElementById("quit");
    resumeButton.addEventListener("click", () => {
      this.togglePause();
    });
    restartButton.addEventListener("click", () => {
      this.restartCurrentSong();
    });
    quitButton.addEventListener("click", () => {
      this.jumpToMainMenu();
    })
  }

  static scoreUpdate(score) {
    let scoreCard = document.getElementById("score-value");
    scoreCard.innerText = score;
    // console.log(this.score)
  }

  visualInit() {
    this.visualizer = new Visualizer(this.canvas, this.score);
  }

  playRound(songUrl) {
    this.gamePaused = false;
    this.music = new AudioSynth(songUrl + ".mp3");
    let songSelection = document.getElementsByClassName("song-selection")[0];
    songSelection.classList.add("hide");

    this.currentSong = this.music.mediaElement;
    this.currentSong.play();
    this.visualizer.renderFrame(this.music);
  }
}

export default Game;