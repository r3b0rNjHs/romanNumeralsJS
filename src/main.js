function application(){

    let numeral = function (value, numeral) {
        return {value: value, numeral: numeral};
    };
    let numerals = [
        numeral(1000,"M"),
        numeral(900,"CM"),
        numeral(500,"D"),
        numeral(400,"CD"),
        numeral(100,"C"),
        numeral(90,"XC"),
        numeral(50,"L"),
        numeral(40,"XL"),
        numeral(10,"X"),
        numeral(9,"IX"),
        numeral(5,"V"),
        numeral(4,"IV"),
        numeral(1,"I")
    ];
    function fromNumber(number) {
        let result = "";
        numerals.forEach(function (actualNumber) {
            for (;number >= actualNumber.value;number -= actualNumber.value){
                result += actualNumber.numeral;
            }
        });
        return result;
    }
    return{
        fromNumber
    }
}

module.exports = application;