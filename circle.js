class Circle{
constructor( x,y,r1, r2){
    var option={

density:1,
frictionAir:0.005,


    }
this.body=Bodies.rectangle(x,y,r1,r2,option)

World.add(world,this.body)
this.r1=r1
this.r2=r2




}

display(){

    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill("red");
    
    ellipse(0, 0, this.r1, this.r2);
    pop();
  }

}







