let bg;
var font;
var vehicles = [];

function preload(){
  font = loadFont('GRUNGE.TTF');
}

function setup() {
  song = loadSound('assests/sorry.mp3');
  createCanvas(1050, 450);
  bg = loadImage('flower.jpg');
  //background(0);
  // textFont(font);
  // textSize(100);
  // fill(255,0,0);
  // noStroke();
  // text('METAL', width/16, 250);

  var points = font.textToPoints('BLOSSOM', 10, 265, 100);
  
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
  background(bg); 
  for (var i = 0; i < vehicles.length; i++){
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
 

}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
  } else {
    song.play();
    }
}