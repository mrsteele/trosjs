import Sorter from './sorter'

class Insertion extends Sorter {
  constructor (tros) {
    super(tros)
    this.pointers = {
      down: 1
    }
  }

  check (i) {
    const arr = this.tros.arr
    if (arr[i] < arr[i - 1]) {
      return true
    }
  }

  nextStep () {
    const ret = {}
    const arr = this.tros.arr
    const { up, down } = this.pointers

    if (up !== undefined) {
      if (this.check(up)) {
        ret.swap = { i: up, j: up - 1 }
      }

      this.pointers.up--
      if (this.pointers.up === 0) {
        delete this.pointers.up
      }
    } else {
      if (this.check(down)) {
        ret.swap = { i: down, j: down - 1 }
        this.pointers.up = down
      } else {
        this.pointers.down++
        if (this.pointers.down === arr.length) {
          this.finished = arr.map((v, i) => i)
        }
      }
    }

    ret.finished = this.finished

    return ret
  }
}

export default Insertion
