class Sand {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.x=x;
      this.y=y;
      this.r=5;
      this.body = Bodies.circle(this.x, this.y, 5, options);
      
      World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke(181, 102, 5);
        fill(199, 111, 4);
        ellipse(0, 0, this.r, this.r);
        pop();
      }
    };