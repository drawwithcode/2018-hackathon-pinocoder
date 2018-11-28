var song;
var img;
var analyser;

function preload() {
  song = loadSound('assets/goodbye.mp3');
  img = loadImage("assets/dark_hackaton.jpg");
}

// ————————————————————————————————————————————————————————————————————————————————————————————————


function setup() {

  createCanvas(windowWidth, windowHeight);


  song.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);



}

// ————————————————————————————————————————————————————————————————————————————————————————————————

function draw() {

  //CREATE A BACKGROUND ALSO WITH AN IMG
  background(111, 113, 145);
  imageMode(CENTER);
  image(img, windowWidth / 2, windowHeight / 2, width / 2, height / 2);


  //CREATE A PULSATING POINT
  volume = analyzer.getLevel();
  console.log(volume);
  volume = map(volume,0,0.5,10,200);
  noStroke();
  fill(255, 255, 0);
  ellipse(windowWidth / 2, windowHeight / 1.5 + 60, volume);


  textFont('Karla');
  fill(255, 255, 0)
  textSize(24);
  text('DARK — by Baran bo Odar and Jantje Friese', 50, 100);

  // mySong.amp(0.5);
  // mySong.rate(2);


}

// ————————————————————————————————————————————————————————————————————————————————————————————————


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
