import Visualizer from './visualizer';
import AudioSynth from "./audio";

class Game {
  constructor(){
    this.canvas = document.getElementById("canvas");

    this.stopButton = document.getElementById("stop-button");
    this.audio = document.getElementById("audio");
    this.score = 0;
    let scoreCard = document.getElementById("score-value");
    
    scoreCard.innerText = this.score;
    this.visualInit();
    this.createSongList();
    this.gamePaused = null;

    this.pauseGame();
  }

  pauseGame(){
    let pauseMenu = document.getElementById('pause-menu')
    document.addEventListener("keydown", e => {
      if(e.which === 32){
        
        if(!this.gamePaused){
          
          this.music.mediaElement.pause();
          this.visualizer.stopAnimation();
          pauseMenu.classList.toggle('hide-menu')
          this.gamePaused = true;
        }else if(this.gamePaused){
          
          this.music.mediaElement.play();
          this.visualizer.animate();
          pauseMenu.classList.toggle('hide-menu')
          this.gamePaused = false;
        }
      }
    })
  }

  createSongList(){
    let songList = document.getElementById("song-list");
    let audioList = [
      "Dont Wanna Know.mp3",
      "Feel So Close.mp3",
      "If I Lose Myself.mp3",
      "Sunday Morning.mp3"
    ];
    audioList.forEach((songUrl) => {
      let listItem = document.createElement("li");
      listItem.append(songUrl);
      listItem.onclick = () => this.play(songUrl);
      songList.append(listItem);
    })

  }

  static scoreUpdate(score){
    let scoreCard = document.getElementById("score-value");
    scoreCard.innerText = score;
    // console.log(this.score)
  }

  visualInit(){  
    this.visualizer = new Visualizer(this.canvas, this.score);
  }

  play(songUrl){

    this.gamePaused = false;
    this.music = new AudioSynth(songUrl);
    let songSelection = document.getElementsByClassName("song-selection")[0];
    songSelection.classList.add("hide");
    
    
    this.music.mediaElement.play();
    window.visualizer = this.visualizer;
    this.visualizer.renderFrame(this.music);


  }
}

export default Game;