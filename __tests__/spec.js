const application = require('../src/main');

describe('RomanNumerals',function () {
    it('should convert numbers to Roman Numerals', function () {
        //let romanNumerals = require("../src/main");

        expect(application().fromNumber(1)).toBe("I");
        expect(application().fromNumber(2)).toBe("II");
        expect(application().fromNumber(3)).toBe("III");
        expect(application().fromNumber(4)).toBe("IV");
        expect(application().fromNumber(2648)).toBe("MMDCXLVIII");
        expect(application().fromNumber(888)).toBe("DCCCLXXXVIII");
    });
});