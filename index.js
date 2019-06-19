var width = 1200;
var cells = [];
var gens = 600; //upper limit of iterations
var scale = 1;

//populate cells array
for (let i = 0; i < width; i++) {
  cells.push(0);
}

//make center cell of cells array 1
cells[Math.floor(width / 2)] = 1;

//create canvas and canvas context
var canvas = document.getElementById("canvas");
canvas.width = 1200;
canvas.height = 600;
var context = canvas.getContext("2d");

//track current generation
var count = 0;

//draw new generations up to limit set by gens
while (count < gens) {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] === 0) {
      context.fillStyle = "white";
    } else {
      context.fillStyle = "black";
    }
    context.fillRect(i*scale, count*scale, scale, scale);
  }
  var newcells = [0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] === 1) {
      if (cells[i-1] === 1) {
        if (cells[i+1] === 1) {
          newcells[i] = 1; //111 change this to implement different rules
        } else {
          newcells[i] = 0; //110 change this to implement different rules
        }
      } else {
        if (cells[i+1] === 1) {
          newcells[i] = 0; //011 change this to implement different rules
        } else {
          newcells[i] = 1; //010 change this to implement different rules
        }
      }
    } else {
      if (cells[i-1] === 1) {
        if (cells[i+1] === 1) {
          newcells[i] = 0; //101 change this to implement different rules
        } else {
          newcells[i] = 1; //100 change this to implement different rules
        }
      } else {
        if (cells[i+1] === 1) {
          newcells[i] = 1; //001 change this to implement different rules
        } else {
          newcells[i] = 0; //000 change this to implement different rules
        }
      }
    }
  }
  cells = newcells;
  count++;
}
