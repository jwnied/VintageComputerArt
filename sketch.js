let t=0;
const NUM_LINES = 50;

function x1(t){
  return cos(t/10) * 100 + cos(t / 5) * 20;
}
function y1(t){
  return sin(t/10) * 100;
}
function x2(t){
  return cos(t/10) * 200 + cos(t / 1) * 2;
}
function y2(t){
  return sin(t/20) * 200 + sin(t / 12) * 20;
}

function setup() {
  createCanvas(500, 500);
  background(51);
}

function draw() {
  background(51);
  
  strokeWeight(5);
  
  translate(width/2, height/2);
  for(var i = 0; i< NUM_LINES ; i++){
    stroke(sin((t+i)/50)*127+127,sin((t/2+i)/50)*127+127,sin((t/4+i)/50)*127)+127;
    line(x1(t+i),y1(t+i), x2(t+i), y2(t+i));
  }
  t+=1;
}