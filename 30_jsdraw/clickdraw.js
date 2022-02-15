// short :: Emma Buller, Shyne Choi
// SoftDev pd1
// K30 -- canvas based JS drawing
// 2022-02-14
// time spent: 30
// --------------------------------------------------

//retrieve node in DOM via ID
var c = document.getElementById("slate");

//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

//init global state var
var mode = "rect";

//var toggleMode = function(e) {
var toggleMode = (e) => { //changes mode btwn rect and circ
  console.log("toggling...");
  if (mode === "rect") {
    mode = "circ"
  }
  else {
    mode = "rect"
  }
  // console.log(mode);
};

var drawRect = function(e) {
  var mouseX = e.offsetX;
  var mouseY = e.offsetY;
  console.log("mouseclick registered at ", mouseX, mouseY);

  var fillingRect = new Path2D(); //instead of beginPath
  fillingRect.moveTo(mouseX, mouseY);
  fillingRect.lineTo(mouseX+50, mouseY);
  fillingRect.lineTo(mouseX+50, mouseY+100);
  fillingRect.lineTo(mouseX, mouseY+100);
  fillingRect.lineTo(mouseX, mouseY);
  fillingRect.closePath();

  ctx.fillStyle = "red";
  ctx.fill(fillingRect);
}

var drawCircle = (e) => {
  var mouseX = e.offsetX;
  var mouseY = e.offsetY;
  console.log("mouseclick registered at ", mouseX, mouseY);
}

var draw = (e) => {
  if (mode === "rect") {
    drawRect(e);
  }
  else {
    drawCircle(e);
  }
}

// var wipeCanvas = () => {
//
// }
//
c.addEventListener("click", draw);
// var bToggler = doccument. ;
// bToggler. ;
// var clearB = ;
// clearB. ;
