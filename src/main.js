function application(){

    let numerals = [
        {value: 4, numeral: "IV"},
        {value: 1, numeral: "I"}
    ];
    function fromNumber(number) {
        let result = "";
        numerals.forEach(function (actualNumber) {
            while (number >= actualNumber.value){
                result += actualNumber.numeral;
                number -= actualNumber.value;
            }

        });
        return result;
    }


    return{
        fromNumber
    }
}

module.exports = application;