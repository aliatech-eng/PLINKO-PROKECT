class Plinko{
constructor(x,y,r){
var options={
restitution:0.4,
isStatic:false,
}
this.r=r;
this.x=x;
this.y=y;
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
World .add(world,this.body)
}
display(){
var pos =this.body.position;

push();
translate(pos.x,pos.y);
rectMode(CENTER)
fill("white")
ellipse(0,0,this.r,this.r);
pop();
}
}