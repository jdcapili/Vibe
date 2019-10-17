// import { THREE } from '../three';
import Sphere from './sphere';
import AudioSynth from './audio';
import Panel from './panel';

class Visualizer {
  constructor(canvas){
    // this.analyser = analyser;
    // this.dataArray = dataArray;
    this.canvas = canvas;
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      90,
      (window.innerWidth/2) / (window.innerHeight/2),
      0.1,
      1000
    );

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    
    this.animate = this.animate.bind(this)

    
    this.init();



  }

  animate(){
    this.music.fetchNewFrequencies();
    // console.log()
    let set1 = this.music.analyser.data.slice(0,16)
    console.log(set1);
    let maxFreq = set1[2];
    this.sphere.colorSwitch(maxFreq);   
    this.renderer.render(this.scene, this.camera);
        this.sphere.sphereShape.rotation.x += 0.01;
        this.sphere.sphereShape.rotation.y += 0.01;
    window.requestAnimationFrame( this.animate );
  }

  // switchAttributes(){

  // }
  init(){
    const degree = Math.PI/180;

    this.music = new AudioSynth();
    // audio NEEDS: camera, 
    
    // this.audioLoader = new THREE.AudioLoader();
    this.line = new Panel();
    this.scene.add(this.line.line);
    

    this.sphere = new Sphere();
    this.scene.add(this.sphere.sphereShape);


    this.camera.position.z = 10;

    this.camera.position.y = 2;
    
    
  }


  renderFrame(){
    window.geo = this.geometry;
    this.music.fetchNewFrequencies();

    // this.sphere.colorSwitch();
  

       
        
  this.animate();

  }
}

export default Visualizer;