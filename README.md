[![Node.js Package](https://github.com/magicfoodhand/tiny-haikunator/actions/workflows/npm-test.yml/badge.svg)](https://github.com/magicfoodhand/tiny-haikunator/actions/workflows/npm-test.yml)

NOTE: This project is not dead, it's done.

# Tiny Haikunator
A dependency free heroku-like random name generator inspired by the ruby gem [haikunator](https://github.com/usmanbashir/haikunator).

## Usage

```javascript
import haikunate from 'tiny-haikunator'

haikunate()
```

## Advanced Usage
All objects and functions are available for you to extend however you need, configuration is passed into the haikunate function. The configuration values are shown individually below. 

```javascript
import haikunate, {defaultAdjectives, defaultNouns, randomNumber, toChars} from 'tiny-haikunator'

haikunate({nouns: ['car']}) // cold-car-8829
haikunate({adjectives: ['spicy']}) // spicy-rain-5643
haikunate({maxValue: 100}) // spring-breeze-37
haikunate({useChars: true}) // hidden-river-a7a

randomNumber(1) // 0
toChars(37) // bb
toChars(37, 'na') // ananna
```

## Development
To install test dependencies use `npm i`, test with `npm run test`

## Motivation
I needed a small heroku style name generator. So I found a ruby gem, mainly for the word list, and wrote it up in ES6.