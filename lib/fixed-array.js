export default class FixedArray {
  constructor(size) {
    this._count = 0;
    this._data = new Array(size);
  }

  _resize (size) {
    if (size > this._data.length) {
      for (let i = this._data.length; i < size; ++i) {
        this._data[i] = this._fn();
      }
    }
  }

  get length () {
    return this._count;
  }

  get data () {
    return this._data;
  }

  reset() {
    for (let i = 0; i < this._count; ++i) {
      this._data[i] = undefined;
    }

    this._count = 0;
  }

  push(val) {
    if (this._count >= this._data.length) {
      this._resize(this._data.length * 2);
    }

    this._data[this._count] = val;
    ++this._count;
  }

  pop() {
    --this._count;

    if (this._count < 0) {
      this._count = 0;
    }
    this._data[this._count] = undefined;
  }

  fastRemove(idx) {
    if ( idx >= this._count ) {
      return;
    }

    let last = this._count-1;
    this._data[idx] = this._data[last];
    this._data[last] = undefined;
    this._count -= 1;
  }
}