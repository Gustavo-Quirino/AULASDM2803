
module.exports = {

    ehPrimo: function(valor) {
        for(let if i=2; i<valor/2; i++){
            if(valor%1 == 0) {
                return false;
            }
        }
        return true;
    }
}