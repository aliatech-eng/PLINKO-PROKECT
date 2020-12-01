function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
var particles=[];
var plinkos=[];
var division=[];
var divisionHeight=300;

function draw() {
  background(255,255,255); 

for(var j= 40; j<=width;j=j+50){
plinkos.push(new Plinkos(j,75));
}

for(var j = 15; j <=width-10 ; j=j+50){
plinkos.push(new Plinkos(j,175));
}
for(var j=0; j <particles.length; j++){
particles[j].display();
}
for(var k =0; k <division.length; k++){
divisions[k].display();
}
  for(var k=0; k <=width; k = k+80) {
    division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight ));
    if(frameCount%60===0){
particles.push(new Particle(random(width/2-10,width/2+10), 10,10   ))
    }
  }
  drawSprites();
}