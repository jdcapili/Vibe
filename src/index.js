import Game from '../src/js/game.js';

window.addEventListener("DOMContentLoaded", () => {
// debugger
const game = new Game();

// this.playButton = document.getElementsByClassName("play-button");
});


// const note = () => {
//   let context = new window.AudioContext();
//     let analyser = context.createAnalyser();
//   // let buffer = new Buffer(context, [
//   //   "./assets/Feel So Close (Benny Benassi Remix) (Japan Bonus Track).mp3"
//   // ]);
//   // buffer.loadAll();
//   // // debugger
//   // let sound = new Music(context, buffer.getSoundByIndex(0));
//   // // debugger
//   // sound.play();

//   const audio = document.getElementById('audio');
//   audio.src =
//     "./assets/Feel So Close (Benny Benassi Remix) (Japan Bonus Track).mp3";

//     let src = context.createMediaElementSource(audio);
//     src.connect(analyser);
//     let bufferLength = analyser.frequencyBinCount;
//     let dataArray = new Uint8Array(bufferLength);
//     window.analyser = analyser;
//     window.src = src;
//     window.context = context;
//     window.dataArray = dataArray;
    
//     audio.play();
//     analyser.getByteFrequencyData(dataArray);
// };

// document.querySelector("button").addEventListener("click", note);
