class Bob {
    constructor(x, y) {
      var options = {
          isStatic:true,
         // restitution:1,
          //friction:0.1,
         // density:1
      }
      this.body = Bodies.circle(x, y, 43, options);
      this.diameter=43;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     // stroke("blue");
     // strokeWeight(15);
     //ellipseMode(center)
      fill("blue");
      circle(0, 0, this.diameter);
      pop();
    }
  }
  