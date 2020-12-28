function Pipe() {
  this.spacing = 175;
  this.top = random(height / 4, 1 / 2 * height);
  this.bottom = height - (this.top + this.spacing);
  this.x = width;
  this.w = 40;
  this.speed = 4;

  this.highlight = false;
  this.image1=loadImage("pipeNorth.png");
  this.image2=loadImage("pipeSouth.png");
  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    image(this.image1,this.x, 0,this.w, this.top);
    image(this.image2,this.x, height - this.bottom, this.w, this.bottom);
    //rect(this.x, 0, this.w, this.top);
    //rect(this.x, height - this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }


}