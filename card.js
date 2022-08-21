//const container = document.;

const cardContainer = document.querySelector('main').parentElement,
  [w, h] = [cardContainer.clientWidth, cardContainer.clientHeight];

let card, speed;

function setup() {
  createCanvas(w, h, WEBGL);
  describe('Spining card');
  speed = 0.015;
}

function draw() {
  clear();
  background(100);
  push();
  rotateX(frameCount * speed);
  rotateY(frameCount * speed);
  ambientMaterial('#CCCC56');
  ambientLight(255);
  stroke(255);
  box(337, 212.5, 5);
  pop();
}
