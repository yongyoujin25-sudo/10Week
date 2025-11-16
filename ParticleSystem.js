class ParticleSystem {
    constructor(position) {
        this.origin = position.copy();
        this.particles = [];
    }

addParticle() {
    this.particles.push(new Particle(this.origin));
}

setPosition(position) {
  this.origin = position.copy();
}

run() {
for (let i = this.particles.length-1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }

}

display() {
        noStroke();
        fill("pink");
        ellipse(this.origin.x, this.origin.y+25,35);
        fill(255)
        rect(this.origin.x-7.5,this.origin.y-10,15,20);
        fill("gray")
        ellipse(this.origin.x,this.origin.y,7);
    }

}
