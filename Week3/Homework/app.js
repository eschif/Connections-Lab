// console.log("Hello world!");
let audio = document.getElementById('project_audio');
let content = document.getElementById('project_content');

window.addEventListener('scroll', function()
{
    this.document.body.style.background = "hsl(" + window.scrollY%70 + ",20%,58%)"; //number for hue, percentages for saturation and lightness
})
//"hsl(" + window.scrollY%0 + ",100%,50%)";

window.addEventListener('scroll', function()
{
    let scrollPercentage = (window.scrollY / (content.scrollHeight - window.innerHeight)) * 100;
    audio.volume = 1 - (scrollPercentage / 100);
});