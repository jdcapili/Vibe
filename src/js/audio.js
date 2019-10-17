class AudioSynth {
  constructor(){
    this.listener = new THREE.AudioListener();
    
  
    this.audio = new THREE.Audio(this.listener);
    window.audio = this.audio;
    this.mediaElement = new Audio(
      "assets/Sunday Morning.mp3"
    );
    
    this.mediaElement.autoplay = false;
    this.mediaElement.loop = true;
    this.mediaElement.hasPlaybackControl = true;
     window.mediaElement = this.mediaElement;
    // this.mediaElement.play();
    
    
    this.bass = this.audio.context.createBiquadFilter();
    this.bass.type = "lowshelf";
    this.bass.frequency.value = 1000; // switches to 400 in UI
    this.bass.gain.value = -0.5;
    this.audio.setFilter(this.bass);
    // this.bass.connect(this.audio.context.destination);
    window.bass = this.bass;
    this.audio.setMediaElementSource(this.mediaElement);
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
    // console.log(set1);
  }
}

export default AudioSynth;