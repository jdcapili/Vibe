class Controls {
  constructor(scene){
    let loader = new THREE.FontLoader(); 
    let that = this;
    let testdata = loader.load("assets/Dream MMA_Regular.typeface.json", function(font) {
      let title = new THREE.TextGeometry("vibe", {
        font: font,
        size: 1,
        height: 1,
        curveSegments: 3,
      });
      
      
      let materials = [
        new THREE.MeshPhongMaterial({ color: 0x2690f7, flatShading: true }), // front
        new THREE.MeshPhongMaterial({ color: 0x064d92 }) // side
      ];

      that.titleRender = new THREE.Mesh(title, materials);
      that.titleRender.name = "title";

      that.titleRender.position.z = 4;
      that.titleRender.position.x = -2.25;
      that.titleRender.position.y = 5;
      // titleRender.rotation.x = 0.5;
      // titleRender.rotation.y = 0.5;
      scene.add(that.titleRender);

      let light = new THREE.DirectionalLight(0xffffff);
      light.position.set(2, 3, 2);
      window.light = light;
      scene.add(light);
    });
    console.log(this.titleRender)
    
  }
}

export default Controls;