// short :: Emma Buller, Shyne Choi
// SoftDev pd1
// K32 -- canvas based JS animation
// 2022-02-15
// time spent: 30
// --------------------------------------------------

// model for HTML5 canvas-based animation


//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById("buttonCircle");
var stopButton = document.getElementById("buttonStop");
var movieButton = document.getElementById("buttonMovie");

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to team color
ctx.fillStyle = 'rgb(0, 255, 255)';
ctx.strokeStyle = "black";
ctx.lineWidth = 0.5;

var requestID;  //init global var for use with animation frames

//image spawn
var dvd = new Image();
dvd.src = "logo_dvd.jpg"
var x;
var y;
var dx;
var dy;


//var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...")
  ctx.clearRect(0,0,500,500);
};


var radius = 0;
var growing = true; //turns false when circle radius reaches 250

//var drawDot = function() {
var drawDot = () => {
  console.log("drawDot invoked...")
  if(radius == 0) {
    growing = true;
  }
  if(radius == 250) {
    growing = false;
  }
  if(growing) {
    radius = radius + 1;
  }
  else {
    radius = radius - 1;
  }
  clear();
  var fillingCircle = new Path2D();
  fillingCircle.arc(250,250,radius,0,Math.PI * 2);
  ctx.fill(fillingCircle);
  ctx.stroke(fillingCircle);

  if(requestID) {
    window.cancelAnimationFrame(requestID);
  }

  requestID = window.requestAnimationFrame(drawDot);
};


//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );
  window.cancelAnimationFrame(requestID);
};


var moveDVD = () => {
  x = Math.floor(Math.random() * 500);
  y = Math.floor(Math.random() * 500);
  dx = 1;
  dy = 1;
  requestID = window.requestAnimationFrame(moveLogo);
};

var moveLogo = () => {
  //if at boundaries, reverse direction
  if (x === 0 || x === 440) {
    dx *= -1;
  }
  if (y === 0 || y === 460) {
    dy *= -1;
  }

  clear();
  x += dx;
  y += dy;
  ctx.drawImage(dvd, x, y, 60, 40);
  if(requestID) {
    window.cancelAnimationFrame(requestID);
  }
  requestID = window.requestAnimationFrame(moveLogo);
};


dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );
movieButton.addEventListener("click", moveDVD);
