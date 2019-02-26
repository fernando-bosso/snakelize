import _ from 'lodash'

const snakefyRegex = /\.?([A-Z]+)/g
const camelizeRegex = /_([a-zA-Z])/g

const snakefy = (object) => {
  let convertObject = _.cloneDeep(object)

  convertObject = _.mapKeys(convertObject, (value, key) => key.replace(snakefyRegex, (x, y) => `_${y.toLowerCase()}`).replace(/^_/, ''))

  return _.mapValues(
    convertObject,
    (value) => {
      if (_.isPlainObject(value)) return snakefy(value)
      if (_.isArray(value)) return _.map(value, snakefy)
      return value
    },
  )
}

const camelize = (object) => {
  let convertObject = _.cloneDeep(object)

  convertObject = _.mapKeys(convertObject, (value, key) => key.replace(camelizeRegex, (x, y) => `${y.toUpperCase()}`))

  return _.mapValues(
    convertObject,
    (value) => {
      if (_.isPlainObject(value)) return camelize(value)
      if (_.isArray(value)) return _.map(value, camelize)
      return value
    },
  )
}

export {
  camelize, snakefy
}
