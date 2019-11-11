class Panel {
  constructor(scene){
    let size = 15,
      step = 1;
    let floor = new THREE.Geometry();
    let floorMat = new THREE.LineBasicMaterial({ color: "white" });

    for (let i = -size; i <= size; i += step) {
      floor.vertices.push(new THREE.Vector3(-size, -0.04, i));
      floor.vertices.push(new THREE.Vector3(size, -0.04, i));

      floor.vertices.push(new THREE.Vector3(i, -0.04, -size));
      floor.vertices.push(new THREE.Vector3(i, -0.04, size));
    }

    this.line = new THREE.Line(floor, floorMat, THREE.LineSegments);
    scene.add(this.line)
  }
}

export default Panel;