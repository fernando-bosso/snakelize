import _ from 'lodash'

const snakefyRegex = /\.?([A-Z]+)/g
const camelizeRegex = /_([a-zA-Z])/g

const convertKeys = (object, regex) => {
  let convertObject = _.cloneDeep(object)

  convertObject = _.mapKeys(convertObject, (value, key) => key.replace(regex, (x, y) => `_${y.toLowerCase()}`).replace(/^_/, ''))

  return _.mapValues(
    convertObject,
    (value) => {
      if (_.isPlainObject(value)) return convertKeys(value)
      if (_.isArray(value)) return _.map(value, convertKeys)
      return value
    },
  )
}

const snakefy = (object) => {
  return convertKeys(object, snakefyRegex)
}

const camelize = (object) => {
  return convertKeys(object, camelizeRegex)
}

export {
  camelize, snakefy
}
