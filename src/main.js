function application(){

    function fromNumber(number) {
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