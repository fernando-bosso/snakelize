# Snakelize
[![Maintainability](https://api.codeclimate.com/v1/badges/5986b4a37cfeb07f5493/maintainability)](https://codeclimate.com/github/fernando-bosso/snakelize/maintainability)

This lib was developed to convert javascript object keys from camelcase to snake case and vice-versa.

### Example

```javascript

import { snakefy, camelize } from 'snakelize'

let snakefiedObject = {
    one_key: 1,
    two_key: {
        three_key: {
            four_key: 4,
            five_key: 5
        }
    }
}

camelizedObject = camelize(snakefiedObject)
```
