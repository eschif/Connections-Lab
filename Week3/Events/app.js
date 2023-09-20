// console.log("Hello");
let count = 0;

//steps
//1. identify and select the button
let button;
let colorButton;
let bgColors = ["#f3de14", "#56e935", "#16dd43"]; //why are these strings? test without quotation marks
let choice = 0;

button = document.getElementById('button');
// console.log(button);

//2. listen to event click on the button
// button.addEventListener("click", increaseCounter);

//3. increase the number in the counter
// function increaseCounter() {
//     console.log("increasing counter");
//     count+=1;
//     document.getElementById('counter').innerHTML = count;
// }

//ALTERNATIVELY: use an anonymous function
//2. listen to event click on the button
//3. increase the number in the counter
button.addEventListener("click", function() {
    count+=1;
    document.getElementById('counter').innerHTML = count;
});

// button to change background color
colorButton = document.getElementById('button-color');
colorButton.addEventListener('click', function() {
    console.log('color changes');
    document.body.style.background = bgColors[choice];
    choice = (choice + 1) %3;
})

// check for scrolling on the window
window.addEventListener('scroll', function()
{
    // console.log('user is scrolling');
    console.log(window.scrollY);
    this.document.body.style.background = "hsl(" + window.scrollY%360 + ",50%,50%)"; //number for hue, percentages for saturation and lightness
})