class Key {
  constructor(scene, startPos,color,name){
    this.colors = {
      red: "0xFF0000",
      blue: "0x0000ff",
      yellow: "0xffff00",
      green: "0x00ff00"
    };
    this.color = color;
    this.scene = scene;
    this.geometry = new THREE.SphereGeometry(0.5, 10, 10);
    this.material = new THREE.MeshBasicMaterial();
    this.sphereShape = new THREE.Mesh(this.geometry, this.material);
    this.sphereShape.name = name;
    this.sphereShape.position.set(startPos,0.5,4);

    this.moveForward = this.moveForward.bind(this);
  }

  moveForward(keyspeed){
    this.colorSwitch();
    if(this.sphereShape.position.z > 8){
      this.sphereShape.position.z = 4;
    }else{
      this.sphereShape.position.z += keyspeed;
    }
  }

  colorSwitch(){
    if (
      this.sphereShape.position.z >= 7
    ) {
      this.sphereShape.material.color.setHex("0x00FFFF")
    }else{
      this.sphereShape.material.color.setHex(this.colors[this.color]);
    }
  }


}

export default Key;