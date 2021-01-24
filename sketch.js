let button;
let sizew = 80;
let sizeh = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton("나도 몰라");
  button.mouseClicked(buttonClicked);
  button.size(sizew,sizeh);
  button.style("font-size", "16px");
  button.style("font-family", "Noto Sans KR");
  cursor("help");
  button.mouseOver(function(){cursor("default")});
  button.mouseOut(function(){cursor("help")});
}

function draw (){
  //background(255);
  //button.position(mouseX - sizew/2, mouseY - sizeh/2);
  button.position(windowWidth/2-sizew/2, windowHeight/2-sizeh/2);
}

function buttonClicked() {
  window.open('main.html', '_self');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
