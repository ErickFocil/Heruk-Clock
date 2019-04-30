function setup() {
  createCanvas(400, 400); //El lienzo se dibuja aqui si no desea que cambie de tama�o con la ventana
  angleMode(DEGREES);
  let secAng, minAng, hrAng;
}

function draw() {
  //createCanvas(window.innerWidth-5,window.innerHeight-5); //Todo el lienzo es la ventana y cambia de tama�o con la ventana
  background(0);
  translate(200, 200);
  rotate(-90);
  
  secAng = map(second(), 0, 60, 0, 360);
  minAng = map(minute(), 0, 60, 0, 360);
  hrAng = map(hour() % 12, 0, 12, 0, 360);

  noFill();
  strokeWeight(8);

  stroke(131, 51, 255);
  arc(0, 0, 300, 300, 0, secAng);
  if (secAng === 0) ellipse(0, 0, 300, 300);

  stroke(51, 66, 255);
  arc(0, 0, 280, 280, 0, minAng);
  if (minAng === 0) ellipse(0, 0, 280, 280);

  stroke(255, 76, 51);
  arc(0, 0, 260, 260, 0, hrAng);
  if (hrAng === 0) ellipse(0, 0, 260, 260);

  push();
  rotate(secAng);
  stroke(131, 51, 255);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minAng);
  stroke(51, 66, 255);
  line(0, 0, 80, 0);
  pop();

  push();
  rotate(hrAng);
  stroke(255, 76, 51);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);

  stroke(255, 51, 113);
  arc(0, 0, 350, 350, 0, 359);

}