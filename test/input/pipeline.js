const specialCharacters = "!\"#$%&'()*+,-./:;>=<?@[\\]^_`{|}~";
const numbers = "0123456789";
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const emptyString = "";
function getExtendedCharacters(){
    let array = new Array();
    
    // Testing the 2 first characters
    for(i = 128;i < 130; i++){
        array.push(String.fromCharCode(i));
    }
    return array.join(emptyString);
}
module.exports = {
	specialCharacters,
	numbers,
    letters,
    getExtendedCharacters
};