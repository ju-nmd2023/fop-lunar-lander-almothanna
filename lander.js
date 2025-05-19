class Lander {
    constructor() 
    {
      this.x = width / 2;
      this.y = 100;
      this.vel = 0;
      this.size = 40;
    }
  
    update()
    
    {
      this.vel += gravity;
      this.y += this.vel;
    }
  
    display() 
    
    {

      fill(255);
      ellipse(this.x, this.y, this.size);
      textSize(14);
      text("speed: " + this.vel.toFixed(2), 10, 20);
    }
  }
  