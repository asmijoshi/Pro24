class Rubber {
    constructor(x, y,r) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body = Bodies.circle(this.x, this.y, this.r, options);
      
      World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke(46, 112, 103);
        fill(71, 166, 153);
        ellipse(0, 0, this.r, this.r);
        pop();
      }
    };
    