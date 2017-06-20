class Tors {
  constructor (arr = []) {
    // a local reference to everything that is in our array
    this._raw = arr

    // the order (just Int[])
    this.order = arr.map((x, y) => y)
  }

  // gets the array in the current order
  get arr () {
    return this.order.map(i => this._raw[i])
  }
}

function createTors (arr) {
  return new Tors(arr)
}

/**
 * IDEAS:
 * - tors.next()
 */

export default createTors
