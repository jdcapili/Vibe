class HitZone {
	constructor(scene,startPos,color,name){
		this.colors = {
		red: "0xFF0000",
		blue: "0x0000FF",
		yellow: "0xFFFF00",
		green: "0x00FF00"
		};
		this.color = color;
		this.scene = scene;
		this.geometry = new THREE.CylinderGeometry(0.5, 0.5, 0.25, 32);
		this.material = new THREE.MeshBasicMaterial();
		this.cylinderShape = new THREE.Mesh(this.geometry, this.material);
		this.cylinderShape.material.color.setHex(this.colors[color])
		this.cylinderShape.name = name;
		this.cylinderShape.position.set(startPos, 0, 7.4)

		scene.add(this.cylinderShape)
	}
}

export default HitZone;