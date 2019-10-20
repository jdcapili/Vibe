class AudioSynth {
  constructor(songUrl){
    this.listener = new THREE.AudioListener();


    


  
    this.audio = new THREE.Audio(this.listener);
    window.audio = this.audio;
    this.mediaElement = new Audio(
      `assets/${songUrl}`
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
    
    this.analyser.getFrequencyData();
    this.analyser.needsUpdate = true;

    let set1 = this.analyser.data.slice(0, 16);
    let set2 = this.analyser.data.slice(16, 32);
    let set3 = this.analyser.data.slice(32, 48);
    let set4 = this.analyser.data.slice(48, 62);

    let set2Sum = set2.reduce((a, b) => a + b, 0);
    let set2Ave = set2Sum / set2.length;

    let set3Sum = set3.reduce((a, b) => a + b, 0);
    let set3Ave = set3Sum / set3.length;

    let set4Sum = set4.reduce((a, b) => a + b, 0);
    let set4Ave = set4Sum / set4.length;
    let maxFreq = set1[2];

    return {maxFreq,set2Ave,set3Ave,set4Ave};
  }
}

export default AudioSynth;