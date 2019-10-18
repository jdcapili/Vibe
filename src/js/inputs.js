function PlayerInput(){
  let that = this;

  that.key1 = [false,0];
  that.key2 = [false,0];
  that.key3 = false;
  that.key4 = false;

  document.addEventListener("keydown", e => {
    if(e.key === "d") {
      that.key1[0] = true;
      that.key1[1] += 1;
      // console.log(that.key1);
    }

    if (e.key === "f") {
      that.key2[0] = true;
      that.key2[1] += 1;
      // console.log(that.key1);
    }

    if (e.key === "j") {
      that.key3[0] = true;
      that.key3[1] += 1;
      // console.log(that.key1);
    }

    if (e.key === "k") {
      that.key4[0] = true;
      that.key4[1] += 1;
      // console.log(that.key1);
    }
  })


  document.addEventListener("keyup", e => {
    if (e.key === "d") that.key1 = [false,0];
    if (e.key === "f") that.key2 = [false, 0];
    if (e.key === "j") that.key3 = [false, 0];
    if (e.key === "k") that.key4 = [false, 0];
  });


  
}

export default PlayerInput;