class AudioSynth {
  constructor(){
    this.listener = new THREE.AudioListener();
    
    window.gain = this.gain;
    this.audio = new THREE.Audio(this.listener);
    window.audio = this.audio;
    this.mediaElement = new Audio(
      "assets/Feel So Close (Benny Benassi Remix) (Japan Bonus Track).mp3"
    );
    
    this.mediaElement.autoplay = false;
    this.mediaElement.loop = true;
    this.mediaElement.hasPlaybackControl = true;
    // this.mediaElement.play();

    this.audio.setMediaElementSource(this.mediaElement);
      this.audio.volume = 0.25;
    this.analyser = new THREE.AudioAnalyser(this.audio, 1024);
    window.analyser = this.analyser;
  }

  fetchNewFrequencies(){
    // console.log("music")
    this.analyser.getFrequencyData();
    this.analyser.needsUpdate = true;
  }

  frequencySeparator(){
    let set1 = this.analyser.data.slice(0,128);
    console.log(set1);
  }
}

export default AudioSynth;