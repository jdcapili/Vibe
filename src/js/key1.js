class KeyOne {
  constructor(scene, startPos,color,name){
    this.scene = scene;
    this.geometry = new THREE.SphereGeometry(0.5, 10, 10);
    this.material = new THREE.MeshBasicMaterial({
      color: color
    });
    this.sphereShape = new THREE.Mesh(this.geometry, this.material);
    this.sphereShape.name = name;
    this.sphereShape.position.x = startPos;
    this.sphereShape.position.z = 4;

    this.moveForward = this.moveForward.bind(this);
  }

  moveForward(keyspeed){
    
      
      if(this.sphereShape.position.z > 8){
        this.sphereShape.position.z = 4;
      }else{
        
        this.sphereShape.position.z += keyspeed;
      }
      
  }


}

export default KeyOne;