const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//in the index file we used id="btn" and here we now access it by using getElementById
const btn = document.getElementById('btn');
//the class for color was color, so that goes into the querySelector
const color = document.querySelector(".color");

//we addEventListener of 'click', and the logic is going to be in the method function
btn.addEventListener('click', function(){
    //get random number between 0 and 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

//but we also get Radical numbers, so use floor to round to the nearest integer
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}