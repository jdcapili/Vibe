import Visualizer from './visualizer';

class Game {
  constructor(){
    this.canvas = document.getElementById("canvas");
    this.playButton = document.getElementById("play-button")
    const audio = document.getElementById("audio");

    
    this.playButton.onclick = () => {
      
      audio.src =
        "assets/Feel So Close (Benny Benassi Remix) (Japan Bonus Track).mp3";
        this.play();
    }

    
  }

  play(){
    
    console.log("playing")
    const context = new AudioContext();
    let src = context.createMediaElementSource(audio);
    const analyser = context.createAnalyser();
    src.connect(analyser);
    analyser.connect(context.destination)
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);


    const visualizer = new Visualizer(analyser, dataArray, this.canvas)
    audio.play();
  }
}

export default Game;