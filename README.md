# Tiny Haikunator
A dependency free heroku-like random name generator insprired by the ruby gem [haikunator](https://github.com/usmanbashir/haikunator).

## Usage

```javascript
import haikunate from 'tiny-haikunator'

haikunate()
```

## Advanced Usage
All objects and functions are available for you to extend however you need, configuration is passed into the haikunate function. The configuration values are shown individually below. 

```javascript
import haikunate, {defaultAdjectives, defaultNouns, randomNumber} from 'tiny-haikunator'

haikunate({nouns: ['car']}) // cold-car-8829
haikunate({adjectives: ['spicy']}) // spicy-rain-5643
haikunate({maxValue: 100}) // spring-breeze-37

randomNumber(1) // 0
```

## Development
To install test dependencies use `yarn install`, test with `yarn test`

## Motivation
I needed a small heroku name generator, similar npm packages had an unpacked size of over 25KB! So I found a ruby gem, mainly for the word list, and wrote it up in ES6.