class Controls {
  constructor(scene){
    let loader = new THREE.FontLoader(); 
    this.scene = scene;
    this.titleCreate = this.titleCreate.bind(this);
    
    let title = loader.load("assets/Dream MMA_Regular.typeface.json", (font) => {
      this.titleCreate(font);
    });
    
  }

  titleCreate(font){
    let title = new THREE.TextGeometry("vibe", {
      font: font,
      size: 1,
      height: 1,
      curveSegments: 3
    });

    let materials = [
      new THREE.MeshPhongMaterial({ color: 0x2690f7, flatShading: true }), // front
      new THREE.MeshPhongMaterial({ color: 0x064d92 }) // side
    ];

    this.titleRender = new THREE.Mesh(title, materials);
    this.titleRender.name = "title";

    this.titleRender.position.z = -4;
    this.titleRender.position.x = -2.25;
    this.titleRender.position.y = 5;
    // titleRender.rotation.x = 0.5;
    // titleRender.rotation.y = 0.5;
    this.scene.add(this.titleRender);

    let light = new THREE.DirectionalLight(0xffffff);
    light.position.set(2, 3, 2);
    window.light = light;
    this.scene.add(light);
  }


  zoomIn(){
    if(this.titleRender){
      if(this.titleRender.position.z < 4){
        this.titleRender.position.z += 0.25;
      }
    }
  }
}

export default Controls;