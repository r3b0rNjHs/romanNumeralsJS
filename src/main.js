function application(){

    function fromNumber(number) {
        let result = "";

        while(number > 0){
            result += "I";
            --number;
        }
        return result;
    }


    return{
        fromNumber
    }
}

module.exports = application;