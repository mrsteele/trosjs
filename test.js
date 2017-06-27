import tors from './src'

const arr = [9, 2, 9, 8]

console.log('testing', arr)
const t = tors(arr)

// t.bubble().step().step().step().step().step().step().step()

t.insertion().sort()

/*
{
  _raw: [], // the raw data
  order: [], // the current order of indexes
  pointer: [], // the pointers
  arr (virtual): [] // the ordered data
}
*/

// t.bubble().run().arr
// // => [0, 2, 3, 5, 7, 7, 8]
//
// t.steps
// // => an array of all the recorded steps that have run
//
// // new
//
// t.bubble().step()
// // => step once forward (move the pointers or swap an element)
//
// t.reverse()
//
// t.bubble().step(5).reverse().step(2).insertion().step().step().reverse()
// chain a bunch of stuff..
