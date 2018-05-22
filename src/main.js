function application(){

    let numerals = [
        {value: 4, numeral: "IV"},
        {value: 1, numeral: "I"}
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