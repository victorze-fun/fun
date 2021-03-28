class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x];
  }

  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }

  *[Symbol.iterator]() {
    let x = 0;
    let y = 0;

    while (y < this.height) {
      yield {x, y, value: this.get(x, y)};
      x++;
      if (x == this.width) {
        x = 0;
        y++;
      }
    }
  }
}

let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix) {
  console.log(x, y, value);
}
// 0 0 value 0,0
// 1 0 value 1,0
// 0 1 value 0,1
// 1 1 value 1,1
