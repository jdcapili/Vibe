class AudioSynth {
  constructor(){
    this.listener = new THREE.AudioListener();
    this.audioList = [
      "Dont Wanna Know.mp3",
      "Feel So Close.mp3",
      "If I Lose Myself.mp3",
      "Sunday Morning.mp3"
    ];
  
    this.audio = new THREE.Audio(this.listener);
    window.audio = this.audio;
    this.mediaElement = new Audio(
      "assets/Sunday Morning.mp3"
    );
    
    this.mediaElement.autoplay = false;

    // this.mediaElement.hasPlaybackControl = true;
    // this.mediaElement.play();
    
    
    // this.bass = this.audio.context.createBiquadFilter();
    // this.bass.type = "lowshelf";
    // this.bass.frequency.value = 1000; // switches to 400 in UI
    // this.bass.gain.value = -0.5;
    // this.audio.setFilter(this.bass);
    // // this.bass.connect(this.audio.context.destination);
    // window.bass = this.bass;
    this.audio.setMediaElementSource(this.mediaElement);
    this.analyser = new THREE.AudioAnalyser(this.audio, 1024);
    window.analyser = this.analyser;
  }

  fetchNewFrequencies(){
    // console.log("music")
    this.analyser.getFrequencyData();
    this.analyser.needsUpdate = true;
  }
}

export default AudioSynth;