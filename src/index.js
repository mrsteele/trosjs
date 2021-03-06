import * as Sorters from './sorters'
const defaultSort = (a, b) => a - b

class Tors {
  constructor (arr = []) {
    // a local reference to everything that is in our array
    this.raw = arr
    this.sorter = new Sorters.Sorter(this)

    this.reset()
  }

  get length () {
    return this.raw.length
  }

  // gets the array in the current order
  get arr () {
    return this.order.map(i => this.raw[i])
  }

  reset () {
    // the order (just Int[])
    this.order = this.raw.map((val, i) => i)
    this.steps = []
  }

  bubble (fn = defaultSort) {
    this.reset()
    this.sorter = new Sorters.Bubble(this)

    return this
  }

  insertion (fn = defaultSort) {
    this.reset()
    this.sorter = new Sorters.Insertion(this)
    return this
  }

  heap (fn = defaultSort) {
    // reset config with heap sort
    return this
  }

  next () {
    this.sorter.next()
    return this
  }

  sort () {
    this.sorter.sort()
    return this
  }

  run () {
    // do everything
    return this
  }

  // then (cb) {
  //   if (!this.catchData) {
  //     try {
  //       this.thenData = cb(typeof this.thenData !== 'undefined' ? this.thenData : this.arr)
  //     } catch (err) {
  //       this.catchData = err
  //     }
  //   }
  //
  //   return this
  // }
  //
  // catch (cb) {
  //   if (this.catchData) {
  //     cb(this.catchData)
  //     delete this.catchData
  //   }
  //
  //   return this
  // }

  reverse () {
    this.order = this.order.reverse()
    return this
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
