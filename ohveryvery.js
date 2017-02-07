var cal_1PNG, cal_2PNG;

var cosas = [];

var cantidad = 40;

var out = false;

var boton = false;

function preload() {
  cal_1PNG = loadImage("http://i.imgur.com/6XS3iVF.png");
  cal_2PNG = loadImage("http://i.imgur.com/BATOEDR.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < cantidad; i++) {
    cosas.push(new OBJETO());
  }
}
//
function draw() {
  background(0);

  for (var i = 0; i < cantidad; i++) {
    cosas[i].update();
    cosas[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  for (var i = 0; i < cantidad; i++) {
    cosas[i].mouse(mouseX, mouseY);
    if (boton == true) {
      if (cosas[i].agrandado == false) {
        cosas[i].tam = cosas[i].tam * 2;
        cosas[i].agrandado = true;
      }
    }
  }
}

function OBJETO() {

  this.pX = random(0, windowWidth);
  this.pY = random(0, windowHeight);

  this.tam = random(40, 120);
  this.velX = random(1, 2) * (this.tam/50);
  this.velY = random(1, 2) * (this.tam/100);
  this.velROT = random(1, 3) * (this.velX/5);
  this.rot = 0;

  this.agrandado = false;

  this.random_1 = int(random(2));

  this.update = function() {

    if (this.pX > windowWidth + this.tam || this.pY > windowHeight + this.tam) {

      this.tam = random(40, 120);
      this.agrandado = false;

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
      image(cal_1PNG, 0, 0, this.tam, this.tam);
    } else if (this.random_1 == 1) {
      image(cal_2PNG, 0, 0, this.tam, this.tam);
    }
    pop();
  }

  this.mouse = function(mX, mY) {
    if (mX > this.pX - this.tam && mX < this.pX + this.tam &&mY > this.pY - this.tam && mY < this.pY + this.tam) {
      boton = true;
    } else {
      boton = false;
    }
  }
}
