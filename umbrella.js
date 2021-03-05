class Umbrella{
    constructor(x, y, radius) {
        var options = {
            restitution:0.3,
            friction:0.2,
            density:1.0,
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.radius = radius;
        this.image = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
       //this.image=loadImage('Walking Frame/walking_1.png') 
       this.body = Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //animationMode(CENTER);
        //image(this.image,-15,40,420,420);
        animation(this.image,-15,160,10,1);
        pop();      
      }
}