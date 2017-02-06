var quesoPNG, vestidoPNG;

var cosas = [];

var cantidad = 40;

var out = false;

function preload() {
  quesoPNG = loadImage("http://i.imgur.com/jSaTUC1.png");
  vestidoPNG = loadImage("http://i.imgur.com/5HaqCGt.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < cantidad; i++) {
    cosas.push(new OBJETO());
  }
}
//
function draw() {
  background(255);

  for (var i = 0; i < cantidad; i++) {
    cosas[i].update();
    cosas[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function OBJETO() {

  this.pX = random(0, windowWidth);
  this.pY = random(0, windowHeight);

  this.tam = random(80, 240);
  this.velX = random(1, 2) * (this.tam/50);
  this.velY = random(1, 2) * (this.tam/100);
  this.velROT = random(1, 3) * (this.velX/5);
  this.rot = 0;

  this.random_1 = int(random(2));

  this.update = function() {

    if (this.pX > windowWidth + this.tam || this.pY > windowHeight + this.tam) {
      this.random_2 = int(random(2));
      if (this.random_2 == 0) {
        this.pX = -this.tam;
        this.pY = random(0, windowHeight);
      } else if (this.random_2 == 1) {
        this.pX = random(0, windowWidth);
        this.pY = -this.tam;
      }
    } else {
      this.rot += this.velROT;
      this.pX += this.velX;
      this.pY += this.velY;
    }
  }

  this.display = function() {

    push();
    translate(this.pX, this.pY);
    rotate(radians(this.rot));
    imageMode(CENTER);
    if (this.random_1 == 0) {
      image(quesoPNG, 0, 0, this.tam, this.tam);
    } else if (this.random_1 == 1) {
      image(vestidoPNG, 0, 0, this.tam, this.tam);
    }
    pop();
  }
}
