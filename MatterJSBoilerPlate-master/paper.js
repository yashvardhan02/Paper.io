class Paper{
 constructor(x,y,radius){
 var options = {
  isStatic:false,
  restitution:0.3,
  friction:0.5,
  density:1.2,
 }
 this.bodies = Bodies.circle(200,200,10,options)
 World.add(world,this.bodies)

 }
 display(){
     
 stroke("orange");
 fill("orange");
 push()
 translate(this.bodies.position.x,this.bodies.position.y)
  ellipse(0,0,20,20)
 pop()
}



}