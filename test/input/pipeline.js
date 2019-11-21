const specialCharacters = "!\"#$%&'()*+,-./:;>=<?@[\\]^_`{|}~";
const numbers = "0123456789";
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const emptyString = "";
function getExtendedCharacters(){
    let array = new Array();
    for(i = 127;i < 161; i++){
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