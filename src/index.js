import Buffer from './js/buffer.js';
import Music from './js/music.js';


const note = () => {
  let context = new window.AudioContext();
    let analyser = context.createAnalyser();
  // let buffer = new Buffer(context, [
  //   "./assets/Feel So Close (Benny Benassi Remix) (Japan Bonus Track).mp3"
  // ]);
  // buffer.loadAll();
  // // debugger
  // let sound = new Music(context, buffer.getSoundByIndex(0));
  // // debugger
  // sound.play();

  const audio = document.getElementById('audio');
  audio.src =
    "./assets/Feel So Close (Benny Benassi Remix) (Japan Bonus Track).mp3";

  let src = context.createMediaElementSource(audio);
  audio.play();
  window.analyser = analyser;
  window.src = src;
  window.context = context;

};

document.querySelector("button").addEventListener("click", note);
