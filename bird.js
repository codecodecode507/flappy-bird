function Bird() {
  this.y = height / 2;
  this.x = 64;

  this.gravity = 0.7;
  this.lift = -15;
  this.velocity = 0;
  this.image = loadImage("bird.png");

  this.show = function() {

    push();
    translate(this.x, this.y)
    rotate(this.y * PI / 2);
    image(this.image, 0, 0);
    pop();
    //fill(255);
    // ellipse(this.x, this.y, 32, 32);
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;



    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }

  this.destroy = function() {
    this.x = -200;
  }

}