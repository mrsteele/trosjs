/* global describe, it */

// Tests suite
import chai from 'chai'

// The star of the show
import trosjs from '../src'

const expect = chai.expect

describe('index', () => {
  describe('fail a test', () => {
    it('should fail', () => {
      expect(false).to.be.true
    })
  })

  describe('default', () => {
    it('should be a function', () => {
      expect(trosjs).to.be.a('function')
    })
  })
})
