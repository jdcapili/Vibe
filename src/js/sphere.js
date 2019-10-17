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
      let numSides = this.geometry.faces.length;
      for (let i = 0; i < numSides; i++) {
        let vertIndex = this.geometry.faces[i];
        var color = new THREE.Color(0xffffff);
        color.setRGB(Math.random(1.0), 0, 0);
        vertIndex.color = color;
      }
      this.geometry.elementsNeedUpdate = true;
    this.sphereShape.position.y = 2.5;
  }

  colorSwitch(maxFreq){
    let toggleColor = "positive";

    
      if(maxFreq === 255){
        let numSides = this.geometry.faces.length;
        for (let i = 0; i < numSides; i++) {
          let vertIndex = this.geometry.faces[i];
          var color = new THREE.Color(0xffffff);
          color.setRGB(0, Math.random(1), 0);
          vertIndex.color = color;
        }
        

        if (toggleColor === "negative") {
          this.colorTicker -= 0.05;
          if (this.colorTicker <= 0) toggleColor = "positive";
        } else if (toggleColor === "positive") {
          this.colorTicker += 0.05;
          if (this.colorTicker >= 1) toggleColor = "negative";
        }
      }
      this.geometry.elementsNeedUpdate = true;
  }
}

export default Sphere;