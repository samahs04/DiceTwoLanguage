function refresh() {
//image player 1/////////////////////////////////////////
var images=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]
function boss(){
    var nameImage=images[ Math.floor(Math.random()*images.length) ];
    return nameImage;
}
var randomImage=boss();
document.querySelectorAll("img")[0].setAttribute("src","images/"+randomImage);

//image player 2/////////////////////////////////////////
function boss2(){
    var nameImage2=images[ Math.floor(Math.random()*images.length) ];
    return nameImage2;
}
var randomImage2=boss2();
document.querySelectorAll("img")[1].setAttribute("src","images/"+randomImage2);
//Word win/////////
if(randomImage2>randomImage){
    document.querySelector(".titleEnglish").innerHTML="Player 2 Wins";
    document.querySelector(".titlePersian").innerHTML="بازیکن 2 برنده شد";
}
else if(randomImage2==randomImage){
    document.querySelector(".titleEnglish").innerHTML="Two players are equal";
    document.querySelector(".titlePersian").innerHTML="دو بازیکن برابر شدند";
}
else{
    document.querySelector(".titleEnglish").innerHTML="Player 1 Wins";
    document.querySelector(".titlePersian").innerHTML="بازیکن 1 برنده شد";
}
document.querySelector(".btnEnglish").setAttribute("value","Click Again");
document.querySelector(".btnPersian").setAttribute("value","دوباره");
}