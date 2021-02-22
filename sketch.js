var font;
var vehicles = [];

function preload(){
  font = loadFont('GRUNGE.TTF');
}

function setup() {
  createCanvas(800, 300);
  background(0);
  // textFont(font);
  // textSize(100);
  // fill(255,0,0);
  // noStroke();
  // text('METAL', width/16, 250);

  var points = font.textToPoints('METAL', width/16, 250, 100);
  
  //console.log(points);

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y)
  }
}

function draw() {
  background(0); 
  for (var i = 0; i < vehicles.length; i++){
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
 

}