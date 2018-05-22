const fs = require('fs');
const path = require('path');
const chai = require('chai');
const application = require('../src/main');
chai.expect();

function loadTemplate(filepath, onLoad) {
    const filePath = path.join(__dirname, filepath);
    fs.readFile(filePath, {encoding: 'utf-8'}, function (err, data) {
        if (!err) {
            onLoad(data);
        } else {
            console.log(err);
        }
    });
}

describe('RomanNumerals',function () {
    it('should convert numbers to Roman Numerals', function () {
        //let romanNumerals = require("../src/main");

        expect(application().fromNumber(1)).toBe("I");
    });
});