class Sphere {
  constructor(){
    this.size = 3;
    this.colorTicker = 0;
    this.geometry = new THREE.SphereGeometry(this.size, 20, 20);
    this.material = new THREE.MeshBasicMaterial({
      vertexColors: THREE.FaceColors
    });
    this.sphereShape = new THREE.Mesh(this.geometry, this.material);
    this.sphereShape.dynamic = true;

    this.generateRandomSphereColors();

    this.sphereShape.position.y = 2.5;
  }

  generateRandomSphereColors(){
    let numSides = this.geometry.faces.length;
    for (let i = 0; i < numSides; i++) {
      let vertIndex = this.geometry.faces[i];
      var color = new THREE.Color(0xffffff);
      let rRandom = Math.random() * (1 - 0.64) + 0.64;
      let gRandom = Math.random() * (1 - 0.64) + 0.64;
      let bRandom = Math.random() * (1 - 0.64) + 0.64;
      color.setRGB(rRandom, gRandom, bRandom);
      vertIndex.color = color;
    }
    this.geometry.elementsNeedUpdate = true;
  }

  colorSwitch(maxFreq){
    if(maxFreq === 255){
      this.generateRandomSphereColors 
    }
  }
}

export default Sphere;