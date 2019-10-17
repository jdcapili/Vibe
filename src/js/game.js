import Visualizer from './visualizer';

class Game {
  constructor(){
    this.canvas = document.getElementById("canvas");
    this.playButton = document.getElementById("play-button");
    this.stopButton = document.getElementById("stop-button");
    this.audio = document.getElementById("audio");
    this.visualInit();

    this.playButton.onclick = () => {
      this.play();
    }

    this.stopButton.onclick = () => this.visualizer.music.mediaElement.pause();
    
  }

  visualInit(){  
    this.visualizer = new Visualizer(this.canvas);
  }

  play(){


    
    
    this.visualizer.music.mediaElement.play();
    window.visualizer = this.visualizer;
    this.visualizer.renderFrame();
  }
}

export default Game;