//function to reverse number
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log((reverse_a_number(789456)));
// ///OR
// text = 93;
// const tempArr = [text];
// var z =[...text].reverse().join("");
// console.log(z);



// Function to reverse the string
function ReverseString(str) {
    // Returning reverse string
return [...str].reduce((x, y) => y.concat(x));
}
console.log(ReverseString("utkarsha"))

// program to check an Armstrong number of three digits

let sum = 0;
const number = prompt('Enter a number: ');

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}


//Palindrom number 

// accept the string or number from the prompt  
const string = prompt('Enter a string or number: ');  
  
const value = validatePalin(string);  
  
console.log(value); 

function validatePalin(str) {  
  
    // get the total length of the words  
    const len = string.length;  
  
    // Use for loop to divide the words into 2 half  
    for (let i = 0; i < len / 2; i++) {  
  
        // validate the first and last characters are same  
        if (string[i] !== string[len - 1 - i]) {  
            console.log( 'It is not a palindrome');  
        }  
    }  
    console.log( 'It is a palindrome');  
}  
  
 
