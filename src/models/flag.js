export class Flag {
  constructor(type = null) {
    this.type = type;
    this.background = '#FCD116';
  }

  draw(sketch) {
    sketch.background(this.background);
  }

  isTricolor() {
    return this.type === 'Tricolor';
  }

  isStriped() {
    return this.type === 'Striped';
  }

  static save(sketch, canvas) {
    sketch.saveCanvas(canvas, 'myFlag', 'png');
  }
}
