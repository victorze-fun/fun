(function aVectorType() {
  class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    plus(vec) {
      return new Vec(this.x + vec.x, this.y + vec.y);
    }

    minus(vec) {
      return new Vec(this.x - vec.x, this.y - vec.y);
    }

    get length() {
      return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
  }


  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  // → Vec{x: 3, y: 5}
  console.log(new Vec(1, 2).minus(new Vec(2, 3)));
  // → Vec{x: -1, y: -1}
  console.log(new Vec(3, 4).length);
  // → 5
});


(function groups() {
  class Group {
    constructor() {
      this._members = [];
    }

    add(value) {
      if (!this.has(value)) {
        this._members.push(value);
      }
    }

    delete(value) {
      if (this.has(value)) {
        this._members = this._members.filter(member => member != value);
      }
    }

    has(value) {
      return this._members.includes(value);
    }

    static from(iterable) {
      let group = new Group();
      for (let member of iterable) {
        group.add(member);
      }
      return group;
    }
  }

  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false
});


(function iterableGroups() {
  class Group {
    constructor() {
      this._members = [];
    }

    add(value) {
      let index = this._members.indexOf(value);
      if (index == -1) {
        this._members.push(value);
      }
    }

    delete(value) {
      let index = this._members.indexOf(value);
      if (index > -1) {
        this._members = this._members.filter((_, i) => i != index);
      }
    }

    has(value) {
      return this._members.indexOf(value) > -1;
    }

    static from(iterable) {
      let group = new Group();
      for (let member of iterable) {
        group.add(member);
      }
      return group;
    }

    [Symbol.iterator]() {
      return new GroupIterator(this);
    }
  }

  class GroupIterator {
    constructor(group) {
      this.group = group;
      this.position = 0;
    }

    next() {
      if (this.position >= this.group._members.length) {
        return { done: true };
      } else {
        let result = {
          value: this.group._members[this.position],
          done: false
        };
        this.position++;
        return result;
      }
    }
}

  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c
})();


(function borrowingAMethod() {
  let map = { one: true, two: true, hasOwnProperty: true };

  // Fix this call
  console.log(Object.hasOwnProperty.call(map, "one"));
  // → true
});
