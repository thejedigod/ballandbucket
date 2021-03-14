class Bin {
    constructor(x, y,width,height) {
      var options1 = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          'isStatic':true
      }
     
      this.height = height;
      this.width = width;
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(this.x, this.y, this.width,this.height,options1);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill(255);
     rect(0, 0,this.width,this.height);
      pop();
    }
  };
  
