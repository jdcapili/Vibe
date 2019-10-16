// import { THREE } from '../three';

class Visualizer {
  constructor(canvas){
    // this.analyser = analyser;
    // this.dataArray = dataArray;
    this.canvas = canvas;
    this.colorTicker = 0;
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      90,
      (window.innerWidth/2) / (window.innerHeight/2),
      0.1,
      1000
    );

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setSize(window.innerWidth/2, window.innerHeight/2);

    
    this.animate = this.animate.bind(this)

    
    this.init();



  }

  animate(){    
    this.renderer.render(this.scene, this.camera);
        this.sphere.rotation.x += 0.01;
        this.sphere.rotation.y += 0.01;
    window.requestAnimationFrame( this.animate );
  }

  // switchAttributes(){

  // }
  init(){
    const degree = Math.PI/180;



    this.listener = new THREE.AudioListener();
    this.camera.add(this.listener);
    this.audio = new THREE.Audio(this.listener);
    this.mediaElement = new Audio(
      "assets/Feel So Close (Benny Benassi Remix) (Japan Bonus Track).mp3"
    );
    this.mediaElement.autoplay = false;
    this.mediaElement.loop = true;
    this.mediaElement.hasPlaybackControl = true;
    // this.mediaElement.play();
    
    this.audio.setMediaElementSource(this.mediaElement);

    let analyser = new THREE.AudioAnalyser(this.audio, 1024);
    // this.audioLoader = new THREE.AudioLoader();
    let size = 15, step = 1;
    let floor = new THREE.Geometry();
    let floorMat = new THREE.LineBasicMaterial({color: 'white'});

    for(let i = -size; i <= size; i += step){
      floor.vertices.push(new THREE.Vector3(-size, -0.04, i));
      floor.vertices.push(new THREE.Vector3(size, -0.04, i));

      floor.vertices.push(new THREE.Vector3(i, -0.04, -size));
      floor.vertices.push(new THREE.Vector3(i, -0.04, size));
    }

    let line = new THREE.Line(floor, floorMat, THREE.LinePieces);
    this.scene.add(line);
    

    this.size = 3;

    this.geometry = new THREE.SphereGeometry(this.size, 20, 20);
    this.material = new THREE.MeshBasicMaterial({
      vertexColors: THREE.FaceColors
    });
    this.sphere = new THREE.Mesh(this.geometry, this.material);
    this.sphere.position.y = 2.5;
    this.scene.add(this.sphere);


    this.camera.position.z = 10;

    this.camera.position.y = 2;
    
    
  }


  renderFrame(){
    window.geo = this.geometry;
    let toggleColor = "positive";
  

       setInterval(() => {
          let numSides = this.geometry.faces.length;
          for (let i = 0; i < numSides; i++) {
            let vertIndex = this.geometry.faces[i];
            var color = new THREE.Color(0xffffff);
            color.setRGB(this.colorTicker, Math.random(1.0), this.colorTicker);
            vertIndex.color = color;
          }
          this.geometry.elementsNeedUpdate = true;

          if(toggleColor === "negative"){ 
            this.colorTicker -= 0.05
            if (this.colorTicker <= 0) toggleColor = "positive";
          }else if (toggleColor === "positive") {
            this.colorTicker += 0.05;
            if (this.colorTicker >= 1) toggleColor = "negative";
          }          
        },100);
        
  this.animate();

  }
}

export default Visualizer;