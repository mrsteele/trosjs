import Sorter from './sorter'

class Bubble extends Sorter {
  constructor (tros) {
    super(tros)
    this.swapped = false
    this.pointer = tros.length - 1
    this.lastSwap = 0
    this.finished = []
  }

  nextStep () {
    // console.log('stepping', this)

    const ret = {}
    ret.pointer = this.pointer
    const arr = this.tros.arr

    if (this.finished.length === arr.length) {
      return {
        pointer: 0,
        finished: this.finished
      }
    }

    // // make sure another step could happen
    // if (pointer + 2 < arr.length) {
    //   return
    // }

    // check for swap changes
    const i = ret.pointer
    // console.log(`is ${arr[i]} < ${arr[i - 1]}`)
    if (arr[i] < arr[i - 1]) {
      // console.log('YES!')
      this.swapped = true
      this.lastSwap = i
      ret.swap = {
        i: i,
        j: i - 1
      }
    }

    // check if finished
    if (this.pointer === this.finished.length) {
      if (this.swapped && this.lastSwap !== arr.length - 1) {
        this.swapped = false
        this.finished = this.finished.concat(arr.map((val, i) => i + this.finished.length).splice(0, this.lastSwap))
        this.pointer = arr.length
        this.lastSwap = 0
      } else {
        this.pointer = 0
        this.finished = arr.map((val, i) => i)
      }
    }

    // update
    this.pointer--
    ret.finished = this.finished

    // return it all
    return ret
  }
}

export default Bubble
