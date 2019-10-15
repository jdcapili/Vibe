import {THREE} from '../three'; 

class Visualizer {
  constructor(analyser, dataArray, canvas){
    this.analyser = analyser;
    this.dataArray = dataArray;
    this.canvas = canvas;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.canvas.width, this.canvas.height);
    this.canvas.appendChild(this.renderer.domElement);

    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.cube);

    this.camera.position.z = 5;

    this.bufferLength = this.analyser.frequencyBinCount;


  }

  renderFrame(){
    requestAnimationFrame(render);
    this.renderer.render(scene, camera);
  }
}

export default Visualizer;