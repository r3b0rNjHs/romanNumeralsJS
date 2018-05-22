function application(){

    function fromNumber(number) {
        if (number === 3){
            return "III";
        }
        if (number === 2){
            return "II";
        }
        return "I";
    }


    return{
        fromNumber
    }
}

module.exports = application;