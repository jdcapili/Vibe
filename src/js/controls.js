class Controls {
  constructor(scene){
    let loader = new THREE.FontLoader(); 
    
    let testdata = loader.load("assets/Dream MMA_Regular.typeface.json", function(font) {
      let title = new THREE.TextGeometry("vibe", {
        font: font,
        size: 1,
        height: 1,
        curveSegments: 3,
      });
      
      
      let materials = [
        new THREE.MeshPhongMaterial({ color: 0x1b88f5, flatShading: true }), // front
        new THREE.MeshPhongMaterial({ color: 0x012242}) // side
      ];

      let titleRender = new THREE.Mesh(title, materials);
      titleRender.name = "title";

      titleRender.position.z = 4;
      titleRender.position.x = -2.25;
      titleRender.position.y = 5;
      scene.add(titleRender);

      let light = new THREE.DirectionalLight(0xffffff);
      light.position.set(0, 1, 1).normalize();
      scene.add(light);
    });

    
  }
}

export default Controls;