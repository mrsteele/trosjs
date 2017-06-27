class Sorter {
  constructor (tros) {
    this.tros = tros
  }

  step () {
    // run the step
    const step = this.nextStep()
    if (step) {
      this.tros.steps.push(step)
      console.log('step', step)
      if (step.swap) {
        const { i, j } = step.swap
        const t = this.tros.order[i]
        this.tros.order[i] = this.tros.order[j]
        this.tros.order[j] = t
        // console.log('NEW ORDER:', this.tros.arr)
      }
    }
  }

  sort () {
    const length = this.tros.length
    // console.log('GOING FOR: ', length)
    do {
      this.step()
      // console.log(`finished: ${this.finished.length}`)
    } while (length !== this.finished.length)

    console.log(`final outcome: ${this.tros.arr}`)
  }
}

export default Sorter
