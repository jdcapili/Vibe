import { keyColors } from "../shared/colors";
class HitZone {
	constructor(scene,startPos,color,name){
		this.color = keyColors[color]
		this.geometry = new THREE.CylinderGeometry(0.5, 0.5, 0.25, 32);
		this.material = new THREE.MeshBasicMaterial();
		this.cylinderShape = new THREE.Mesh(this.geometry, this.material);
		this.cylinderShape.material.color.setHex(this.color)
		this.cylinderShape.name = name;
		this.cylinderShape.position.set(startPos, 0, 7.4)

		scene.add(this.cylinderShape)
	}

	colorSwitch(){
		this.cylinderShape.material.color.setHex("0x00FFFF")
		setTimeout(
			() => this.cylinderShape.material.color.setHex(this.color),
			250
		);
	}
}

export default HitZone;