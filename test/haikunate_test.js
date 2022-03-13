import { expect } from 'chai'

import haikunate, {randomNumber} from "../index.js"

describe('tiny-haikunate', function () {
  describe('#randomValue()', function () {
    it('should return a value between 0 < maxValue', function () {
      const result = randomNumber(1)
      expect(result).to.equal(0)
    });
  })

  describe('#haikunate()', function () {
    it('should return a value', function () {
      const result = haikunate()
      const parts = result.split('-')
      expect(parts.length).to.equal(3)
    });
    
    it('can override nouns', function () {
      const result = haikunate({nouns: ['car']})
      console.log(result)
      const parts = result.split('-')
      expect(parts[1]).to.equal('car')
    });

    it('can override adjectives', function () {
      const result = haikunate({adjectives: ['spicy']})
      console.log(result)
      const parts = result.split('-')
      expect(parts[0]).to.equal('spicy')
    });

    it('can override maxValue', function () {
      const result = haikunate({maxValue: 1})
      const parts = result.split('-')
      expect(parts[2]).to.equal('1')
    });
  });
});
