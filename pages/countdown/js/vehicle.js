// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

function Vehicle(x, y) {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector();
  this.acc = createVector();

  this.maxspeed = 10;
  this.maxforce = 1;

  this.target = createVector(x, y);

  this.r = 4;
  this.col = 255;

  this.arrived = false;
  this.hidden = false;
}

Vehicle.prototype.behaviors = function () {
  let arrive = this.arrive(this.target);
  // var mouse = createVector(mouseX, mouseY);

  arrive.mult(2);
  this.applyForce(arrive);
};

Vehicle.prototype.applyParticle = function (p, firework) {
  let vector = firework ? p.firework.pos : p.pos;
  var flee = this.flee(vector);
  flee.mult(firework ? 5 : map(p.lifespan, 0, 255, 0.1, 3));
  this.applyForce(flee);
}

Vehicle.prototype.applyForce = function (f) {
  this.acc.add(f);
};

Vehicle.prototype.update = function () {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
};

Vehicle.prototype.show = function () {
  stroke(255);
  strokeWeight(this.r);
  point(this.pos.x, this.pos.y);
};

Vehicle.prototype.arrive = function (target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  var speed = this.maxspeed;
  if (d < 100) {
    speed = map(d, 0, 100, 0, this.maxspeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
};

Vehicle.prototype.flee = function (target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  if (d < 50) {
    desired.setMag(this.maxspeed);
    desired.mult(-1);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0, 0);
  }
};
Vehicle.prototype.updateColor = function (col) {
  this.col = col;
};

Vehicle.prototype.updateTarget = function (target) {
  this.target = target;
};

Vehicle.prototype.randomPosition = function () {
  this.pos = createVector(random(width), random(height));
};