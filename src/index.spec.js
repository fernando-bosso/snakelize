import { snakefy, camelize } from './index'

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
describe('Snakelize', () => {
  describe('snakefy', () => {
    it('snakefies all keys from object', () => {
      expect(snakefy(camelizedObject)).toEqual(snakefiedObject)
    })
  })
  describe('camelize', () => {
    it('camelizes all keys from object', () => {
      expect(camelize(snakefiedObject)).toEqual(camelizedObject)
    })
  })
})
