import {Multiple} from './../src/multiple.js';

describe('Multiple', function() {
    it('should add all multiples of 3 and 5 up to the user given number', function() {
        let givenNumber = new Multiple(11);
        console.log(givenNumber.addMultiples());
        expect(givenNumber.addMultiples()).toEqual(33);
    });
});