'use strict';

// Tests wrapped in a module pattern
(function(exports) {
  // The 'it' label function:
  function it(desc, callback) {
    try {
      callback();
      console.log(`Test: ${desc}...`);
      console.log('Passed 🥳');
    } catch(error) {
      console.log('\n');
      console.log(`Test: ${desc}...`);
      console.log('Failed 😭');
      console.error(error);
    }
  }
  // The 'expect' label function:
  function expect(a) {
    return {

      toEqual: function(b) {
        if (a !== b) {
          throw `EXPECTED ${a} TO EQUAL ${b}`;
        }
      },

      toBeAnArray: function() {
        if (!(a.notes instanceof Array)) {
          throw `EXPECTED ${a} TO BE AN ARRAY`;
        }
      },

      toBeTrue: function() {
        if (!a) {
          throw `${a} IS NOT TRUTHY`;
        }
      }
    }
  }

  exports.it = it;
  exports.expect = expect;
})(this);
