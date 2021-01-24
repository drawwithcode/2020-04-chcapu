let cnv;
let extracnv;
let overAllTexture;
let font;
let camera;
let camW = 240;
let camH = 240;
let margin = 30;
let ratio = camW / camH;
let scaleToCam;
let dim = 5;
const letters = ["ㅇ", "ㅜ", "ㅋ", "ㅉ", "ㅹ", "ㅀ", "ㅙ"];


function preload() {
	//font = loadFont("assets/NotoSansKR-Regular.otf");
}

function setup() {
	if (windowHeight <= windowWidth) {
		cnv = createCanvas (int(windowHeight * ratio) - margin, windowHeight - margin);
		scaleToCam = width/camW;
	} else {
		cnv = createCanvas (windowWidth - margin, int(windowHeight / ratio) - margin);
		scaleToCam = height/camH;
	}
	centerCanvas();
	background("white");
	frameRate(15);

	// extracnv = createGraphics(windowWidth, windowHeight);
	// extracnv.clear();

	camera = createCapture(VIDEO);
	camera.size(camW, camH);
	camera.hide();

	textAlign(CENTER, CENTER);
	textSize(dim);
	textFont("Noto Sans KR");

}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function draw() {
	camera.loadPixels();
	background(255);
	scale(scaleToCam);

	for (let y = 0; y < camH; y += dim) {
		for (let x = 0; x < camW; x += dim) {
			let i = ((y * camW) + x) * 4;
			let r = camera.pixels[i];
			let g = camera.pixels[i + 1];
			let b = camera.pixels[i + 2];
			let ind = floor((1 - (r+g+b) / 765) * (letters.length - 1));
			fill(0);
			text(letters[ind], x, y);
		}
	}

	// push();
	// extracnv.blendMode(BLEND);
	// extracnv.fill(0);
	// extracnv.ellipseMode(CENTER);
	// extracnv.ellipse(mouseX, mouseY, 40);
	// pop();
	// image(extracnv, 0, 0);

}

function windowResized() {
	if (windowHeight <= windowWidth) {
		resizeCanvas (int(windowHeight * ratio) - margin, windowHeight - margin);
	} else {
		resizeCanvas (windowWidth - margin, int(windowHeight / ratio) - margin);
	}
	centerCanvas();
}
