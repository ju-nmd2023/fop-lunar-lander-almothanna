class Lander {
    constructor() {
      this.x = width / 2;
      this.y = 100;
      this.vel = 0;
      this.size = 40;
      this.thrusting = false; 
    } // ChatGPT helped define constructor defaults clearly
  
    update() {
      if (this.thrusting) {
        this.vel -= 0.2;   // Thrust reduces velocity –  Lunar Lander logic From The Coding Train: https://www.youtube.com/watch?v=6vHkI4fZJ6Q
      }
  
      this.vel += gravity;
      this.y += this.vel;
    }
  
    display() {
      fill(255);
      ellipse(this.x, this.y, this.size);  // Draw lander body – p5.js: https://p5js.org/reference/#/p5/ellipse
  
      
      textSize(14);
      fill(255);
      text("Speed: " + this.vel.toFixed(2), 10, 20);   // Show speed 
  
     
      if (this.thrusting) {   // Draw flame effect when thrusting – Inspired by p5.js triangle() 
        fill(255, 150, 0);
        triangle(this.x - 10, this.y + this.size / 2,
                 this.x + 10, this.y + this.size / 2,
                 this.x, this.y + this.size / 2 + 20);
      }
    }
  }
  