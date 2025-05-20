class Lander {
    constructor() {
      this.x = width / 2;
      this.y = 100;
      this.vel = 0;
      this.size = 40;
      this.thrusting = false; 
    }
  
    update() {
      if (this.thrusting) {
        this.vel -= 0.2; 
      }
  
      this.vel += gravity;
      this.y += this.vel;
    }
  
    display() {
      fill(255);
      ellipse(this.x, this.y, this.size);
  
      
      textSize(14);
      fill(255);
      text("Speed: " + this.vel.toFixed(2), 10, 20);
  
     
      if (this.thrusting) {
        fill(255, 150, 0);
        triangle(this.x - 10, this.y + this.size / 2,
                 this.x + 10, this.y + this.size / 2,
                 this.x, this.y + this.size / 2 + 20);
      }
    }
  }
  