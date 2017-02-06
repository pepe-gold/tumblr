function setup() { 
	createCanvas(windowWidth, windowHeight);

	for (var i = 0; i < 100; i++) {
		bulles[i] = new UsineABulle();
		bulles[i].creation();
	};
}

function draw() {
	background('#FFF');

	for (var i = 0; i < bulles.length; i++) {
		bulles[i].redessine();
	};
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}


var bulles = [];

function UsineABulle(){};
UsineABulle.prototype = {
	creation : function(){
		this.x = width/2;
		this.y = height/2;
		this.vitx = random(-5, 5);
		this.vity = random(-5, 5);
		this.diam = random(10, 50);
		this.coulR = random(0, 255);
		this.coulV = random(0, 255);
		this.coulB = random(0, 255);
	},

	redessine : function(){

		fill(this.coulR, this.coulV, this.coulB);
		ellipse(this.x, this.y, this.diam, this.diam);

		this.x = this.x + this.vitx;
		this.y = this.y + this.vity;
		
		// du coup j'ai modifiÃ© les limites...
		// pour qu'une bulle hors champ aprÃ¨s le resize puisse revenir
		// dans le sketch...
		if(this.x > width-this.diam/2){
			this.vitx = -1*Math.abs(this.vitx);
		}
		if(this.x < this.diam/2){
			this.vitx = Math.abs(this.vitx);
		}
		if(this.y > height-this.diam/2){
			this.vity = -1*Math.abs(this.vity);
		}
		if(this.y < this.diam/2){
			this.vity = Math.abs(this.vity);
		}
	}
}
