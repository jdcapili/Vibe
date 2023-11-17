import { keyColors } from "../shared/variables";
class Key {
  constructor(startPos,color,name){
    this.color = keyColors[color]
    this.geometry = new THREE.SphereGeometry(0.5, 7, 10);
    this.material = new THREE.MeshBasicMaterial();
    this.sphereShape = new THREE.Mesh(this.geometry, this.material);
    this.sphereShape.material.color.setHex(this.color)
    this.sphereShape.name = name;
    this.sphereShape.position.set(startPos,0.5,4);

    this.moveForward = this.moveForward.bind(this);
  }

  moveForward(keyspeed){
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