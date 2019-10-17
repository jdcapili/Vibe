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
    //   audio.src =
    //     "assets/Feel So Close (Benny Benassi Remix) (Japan Bonus Track).mp3";
        
    }

    this.stopButton.onclick = () => this.visualizer.music.mediaElement.pause();
    

        // this.playButton.onclick = () => {
        //   let sound = new THREE.PositionalAudio(this.visualizer.listener);
        //   console.log("onclick");
        //   this.visualizer.audioLoader.load(
        //     "assets/Feel So Close (Benny Benassi Remix) (Japan Bonus Track).mp3",
        //     function(buffer) {
        //       console.log("playing??");
        //       sound.setBuffer(buffer);
        //       sound.setVolume(0.5);
        //       sound.setRefDistance(20);
        //       sound.play();
        //     }
        //   );
        //   this.visualizer.cube.add(sound);
        // };
  }

  visualInit(){  
    this.visualizer = new Visualizer(this.canvas);
  }

  play(){
    
    // console.log("playing")


    
    
    this.visualizer.music.mediaElement.play();
    window.visualizer = this.visualizer;
    this.visualizer.renderFrame();
  }
}

export default Game;