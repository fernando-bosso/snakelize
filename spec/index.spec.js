import { snakefy, camelize } from '../src/index'

const camelizedObject = {
  oneKey: 1,
  twoKey: {
    threeKey: {
      fourKey: 4,
      fiveKey: 5
    }
  }
}

const snakefiedObject = {
  one_key: 1,
  two_key: {
    three_key: {
      four_key: 4,
      five_key: 5
    }
  }
}

const camelizedArrObject = {
  oneKey: 1,
  twoKey: [
    "one", "two", 3
  ]
}

const snakefiedArrObject = {
  one_key: 1,
  two_key: [
    "one", "two", 3
  ]
}

describe('Snakelize', () => {
  describe('snakefy', () => {
    it('snakefies all keys from object', () => {
      expect(snakefy(camelizedObject)).toEqual(snakefiedObject)
    })
    it('snakefies all keys from object without deconstructing array', () => {
      expect(snakefy(camelizedArrObject)).toEqual(snakefiedArrObject)
    })
  })
  describe('camelize', () => {
    it('camelizes all keys from object', () => {
      expect(camelize(snakefiedObject)).toEqual(camelizedObject)
    })
    it('camelizes all keys from object without deconstructing array', () => {
      expect(snakefy(camelizedArrObject)).toEqual(snakefiedArrObject)
    })
  })
})
