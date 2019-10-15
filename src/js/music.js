// import {THREE} from '../three.js';

class Music {

    constructor(context, buffer){
        this.context = context;
        this.buffer = buffer;
    }

    init() {
        // debugger
        this.gainNode = this.context.createGain();
        this.source = this.context.createBufferSource();
        this.source.buffer = this.buffer;
        this.source.connect(this.gainNode);
        this.gainNode.connect(this.context.destination);
    }

    play() {
        this.init();
        
        // var scene = new THREE.Scene();
        // var camera = new THREE.PerspectiveCamera(
        //     75,
        //     window.innerWidth / window.innerHeight,
        //     0.1,
        //     1000
        // );

        // var renderer = new THREE.WebGLRenderer();
        // renderer.setSize(
        //     window.innerWidth / 2,
        //     window.innerHeight / 2
        // );
        // document.body.appendChild(renderer.domElement);

        // var geometry = new THREE.BoxGeometry(1, 1, 1);
        // var material = new THREE.MeshBasicMaterial();
        // var cube = new THREE.Mesh(geometry, material);
        // scene.add(cube);

        // camera.position.z = 5;

        // function animate() {
        //     requestAnimationFrame(animate);
        //     cube.rotation.x += 0.01;
        //     cube.rotation.y += 0.01;
        //     renderer.render(scene, camera);
        // }
        // animate();


        // this.setup();
        this.source.start(this.context.currentTime);
    }

    stop(){
        this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.5);
        this.source.stop(this.context.currentTime + 0.5);
    }
}

export default Music;