// import { THREE } from '../three';
import Sphere from './sphere';
import Game from './game';
import Panel from './panel';
import KeyOne from './key1';
import PlayerInput from "./inputs";
import Controls from './controls';


class Visualizer {
  constructor(canvas,score){
    this.score = score;
    this.playerInput = new PlayerInput();
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.controls = new Controls(this.scene);
    window.controls = this.controls;
    window.scene = this.scene;

    this.camera = new THREE.PerspectiveCamera(
      90,
      (this.canvas.width) / (this.canvas.height),
      0.1,
      1000
    );
  

    this.container = document.getElementsByClassName("game-container")[0];
   
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.line = new Panel();
    this.scene.add(this.line.line);
    
    this.keyspeed = 0.05;

    window.renderer = this.renderer;
    this.init();
    this.animate = this.animate.bind(this);
    this.id;
      window.addEventListener('resize', this.onWindowResize, false);



  }

  onWindowResize(){
    this.container = document.getElementsByClassName("game-container")[0];
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
  }

  animate(){
    let {maxFreq,set2Ave,set3Ave,set4Ave} = this.music.fetchNewFrequencies();

    this.sphere.colorSwitch(maxFreq) 

  for(let i = 1; i < 5; i++){
    this.scene.children.some((child) => {
      if(child.name === i.toString()){
        if(child.position.z >= 8){
          child.position.z = 4;
          this.scene.remove(child)
        }else{

          if(i === 1) this.key1.moveForward(this.keyspeed);
          if (i === 2) this.key2.moveForward(this.keyspeed);
          if (i === 3) this.key3.moveForward(this.keyspeed);
          if (i === 4) this.key4.moveForward(this.keyspeed);

        }
      }else{
        if(maxFreq === 255){
          this.scene.add(this.key1.sphereShape);
        }
        if(set2Ave > 180){
          this.scene.add(this.key2.sphereShape);
        }
        if(set3Ave > 150 && set3Ave < 180){
          this.scene.add(this.key3.sphereShape);
        }
        if (set4Ave > 120 && set4Ave < 180) {
          this.scene.add(this.key4.sphereShape);
        }
      }
    });
  }

    this.speedUp();



    this.keyCheck();

    this.renderer.render(this.scene, this.camera);
        this.sphere.sphereShape.rotation.x += 0.01;
        this.sphere.sphereShape.rotation.y += 0.01;

    this.id = window.requestAnimationFrame( this.animate );
  }

  speedUp(){
    let curTime = parseFloat(this.music.mediaElement.currentTime.toFixed(2));

    if (this.musicMarkers[0] <= curTime) {
      this.keyspeed += 0.01;
      this.musicMarkers.shift();
    }
  }

  keyCheck(){
    if (
      this.playerInput.key1[0] === true &&
      (this.key1.sphereShape.position.z >= 7.4 &&
        this.key1.sphereShape.position.z <= 7.8)
    ) {
      if (this.playerInput.key1[1] === 1) {
        this.score += 20;
        Game.scoreUpdate(this.score);
        this.key1.sphereShape.position.z = 4;
        this.scene.remove(this.key1.sphereShape);
      }
    }

    if (
      this.playerInput.key2[0] === true &&
      (this.key2.sphereShape.position.z >= 7.4 &&
        this.key2.sphereShape.position.z <= 7.8)
    ) {
      if (this.playerInput.key2[1] === 1) {
        this.score += 20;
        Game.scoreUpdate(this.score);
        this.key2.sphereShape.position.z = 4;
        this.scene.remove(this.key2.sphereShape);
      }
    }

    if (
      this.playerInput.key3[0] === true &&
      (this.key3.sphereShape.position.z >= 7.4 &&
        this.key3.sphereShape.position.z <= 7.8)
    ) {
      if (this.playerInput.key3[1] === 1) {
        this.score += 20;
        Game.scoreUpdate(this.score);
        this.key3.sphereShape.position.z = 4;
        this.scene.remove(this.key3.sphereShape);
      }
    }

    if (
      this.playerInput.key4[0] === true &&
      (this.key4.sphereShape.position.z >= 7.4 &&
        this.key4.sphereShape.position.z <= 7.8)
    ) {
      if (this.playerInput.key4[1] === 1) {
        this.score += 20;
        Game.scoreUpdate(this.score);
        this.key4.sphereShape.position.z = 4;
        this.scene.remove(this.key4.sphereShape);
      }
    }
  }


  init(){

    
    this.sphere = new Sphere();
    this.scene.add(this.sphere.sphereShape);

    this.key1 = new KeyOne(this.scene,-1.5,"red",'1');
    this.key2 = new KeyOne(this.scene, -0.5,"green",'2');
    this.key3 = new KeyOne(this.scene, 0.5,"blue",'3');
    this.key4 = new KeyOne(this.scene, 1.5,"yellow",'4');

    

    

    this.camera.position.z = 10; //return to 10

    this.camera.position.y = 2; // return to 2
    
    
  }

  stopAnimation(){
    window.cancelAnimationFrame(this.id);
  }


  renderFrame(music){
    this.music = music
    let musicDuration = this.music.mediaElement.duration;

    let musicTimeDiv = parseFloat((musicDuration / 4).toFixed(2));

    this.musicMarkers = [musicTimeDiv, musicTimeDiv * 2, musicTimeDiv * 3];


       
        
    this.animate();
    
  }
}

export default Visualizer;