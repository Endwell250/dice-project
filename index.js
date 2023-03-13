var randomNumber1 = Math.floor(Math.random() * 6) + 1; //when console loged it, they will a randome number been generated ranging from 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImgageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImgageSource2 = "images/dice" + randomNumber2 + ".png"; //merg two lines together to avoid mistakes
document.querySelectorAll ("img")[1].setAttribute("src", randomImgageSource2); //two lines togther too

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML =" Player1 Wins!"
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML =" Player2 Wins!"  
}else{
    document.querySelector("h1").innerHTML =" Draw!" 
}