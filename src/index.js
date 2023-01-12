const encodeOneDigit=(number)=>{
    const digits = {
        0: 'zero',1: 'one', 2: 'two',3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'};
    
    return digits[number];
}
const encodeTwoDigit=(number)=>{
    if (number < 10)
        return encodeOneDigit(number);
    let first_digit = Number(number.toString()[0]);    
    let last_digit = Number(number.toString()[1]);

    let end =  (!last_digit)? '' :' '+encodeOneDigit(last_digit);

    const tens = {
        10: 'ten', 11: 'eleven', 12: 'twelve',13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
    20: 'twenty', 30: 'thirty',40: 'forty', 50: 'fifty',60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'};
    
        
    return (number > 20)? tens[first_digit*10] + end : tens[number];
}
const encodeThreeDigit=(number)=>{  
    let first_digit = Number(number.toString()[0]); 
    let last_digits = Number(number.toString().slice(1)); 
    let end = (!last_digits)? '' :encodeTwoDigit(last_digits);     
    return (number % 100) ? encodeOneDigit(first_digit) + ' hundred '+ end : encodeOneDigit(first_digit) + ' hundred';
}
module.exports = function toReadable (number) {
    return  (number < 10) ? encodeOneDigit(number): (number < 100)? encodeTwoDigit(number): encodeThreeDigit(number);
    }  
