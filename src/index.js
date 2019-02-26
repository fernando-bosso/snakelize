import _ from 'lodash'

const snakefyFunction = (object) => {
  return _.mapKeys(object, (value, key) => key.replace(/\.?([A-Z]+)/g, (x, y) => `_${y.toLowerCase()}`).replace(/^_/, ''))
}
const camelizeFunction = (object) => {
  return _.mapKeys(object, (value, key) => key.replace(/_([a-zA-Z])/g, (x, y) => `${y.toUpperCase()}`))
}

const convertKeys = (object, convertFunction) => {
  let convertObject = _.cloneDeep(object)

  convertObject = convertFunction(convertObject)

  return _.mapValues(
    convertObject,
    (value) => {
      if (_.isPlainObject(value)) return convertKeys(value, convertFunction)
      if (_.isArray(value)) return _.map(value, (item) => convertKeys(item, convertFunction))
      return value
    },
  )
}

const snakefy = (object) => {
  return convertKeys(object, snakefyFunction)
}

const camelize = (object) => {
  return convertKeys(object, camelizeFunction)
}

export {
  camelize, snakefy
}
