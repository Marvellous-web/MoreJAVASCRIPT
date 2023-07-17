// Task – 1: Define Function drawBox() to Draw Box
/*
    The function should accept DOM element as the parameter.
    Using DOM methods and properties, the function should create div and 
    provide it with style properties: width, height, border width and border style
    The div element should be appended to the element passed as parameter
    The function should then return the styled div element.
*/
var div=document.getElementById("container");
var d1=document.createElement("div");

function drawBox() {
    div.appendChild(d1);
    d1.style.width='100vw';
    d1.style.height='100px';
    d1.style.border='5px solid black'
    setTimeout(changeBorderColor,2000);
}
setTimeout(drawBox,3000);

// Task 2 – Define Function changeBorderColor() to Change Color of Box Border
/*
    The function should accept DOM element as the parameter whose border color 
    needs to be changed.
    Using DOM methods and properties, the function should style the element with 
    orange color to its border.
    The function should then return the styled div element.
*/
function changeBorderColor() {
    d1.style.borderColor='orange';
    setTimeout(makeBorderRounded,2000);
}

// Task 3 – Define Function makeBorderRounded to Make Box Corners Rounded
/*
    The function should accept DOM element as the parameter whose border's 
    corners need to be rounded.
    Using DOM methods and properties, the function should style the element with 
    radius of its border set to 15px.
    The function should then return the styled div element.
*/
function makeBorderRounded() {
    d1.style.borderRadius='25px'
    setTimeout(fillColor,2000);
   
}

// Task 4 – Define Function fillColor() to Fill the Box with a Color
/*
    The function should accept DOM element as the parameter whose background color 
    needs to be changed
    Using DOM methods and properties, the function should style the element with 
    background color cadet blue
    The function should then return the styled div element.
*/


function fillColor() {
    d1.style.backgroundColor="purple"
    setTimeout(displayHeading,2000)
}

// Task 5 – Define Function displayHeading() to Enter Text in Box
/*
    The function should accept DOM element as the parameter within which text 
    needs to be entered.
    The heading text should be displayed within `h1` element.
    The text to be displayed should be AMC Entertainment.
    The color of the text should be orange and should be centrally aligned.
    The function should then return the div element with the text.
*/
var h1;
function displayHeading() {
    h1=document.createElement("h1");
    d1.appendChild(h1);
    h1.innerHTML+="AMC Entertainment";
    h1.style.color='orange';
    h1.style.textAlign='center';
    setTimeout(moveDown,3000);

}

function moveDown(){
    h1.style.paddingTop="25px"


}

// Task 6 - Call Functions to Animate After a Delay
/*
    Create nested structure with calls to setTimeout() method
    Each call to setTimeout() should call another setTimeout() method.
    Each callback of setTimeout() should call the animation method the return from 
    which should be passed to the next animation method.
    Observe the Callback Hell Effect.
*/

// setTimeout(()=>{
//    drawBox();
//    setTimeout(()=>{
//     changeBorderColor();
//         setTimeout(()=>{
//             makeBorderRounded();
//             setTimeout(()=>{
//                 fillColor();
//                 setTimeout(()=>{
//                     displayHeading();
//                 },2000)
//             },5000)
//      },4000)
//    },3000)
// },2000);
