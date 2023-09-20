console.log("hello world");

//Steps
let names = ["Maram", "Robi", "Maryse", "Ryan", "Amber",
 "Caity", "Liyanbing", "Jaiden", "Mishka", "Skyler", "Annika",
  "Elisabeth", "Pim", "Anastasia"];

//0. Wait for the page to load
window.addEventListener('load', () => {
    console.log('Page loaded!');

//1. Select button
let pickButton = document.getElementById('rbutton');

//2. Listen for when button is clicked
pickButton.addEventListener('click', () => {
    console.log('Someone clicked the button!');

    //3. Pick a random name
    const noNames = names.length;
    let randomNumber = Math.floor(Math.random()*noNames);
    console.log(randomNumber);
    let selectedName = names[randomNumber];
    console.log(selectedName);
    
    //4. Show the name on the page
    let selectedNameElement = document.getElementById("selected_name");
    selectedNameElement.innerHTML = selectedName;
    });
});