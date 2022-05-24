var started = false;
var i=0;
var playerscore=0;
var computerscore=0;
$(document).keypress(function(){
 if(!started){
            start();
            started = true;
        }
});
function start(){
 var timeout=setInterval(function () {   getstarted(); }, 1000);
 setTimeout(function(){
     clearInterval(timeout);
 },11000);
}

function getstarted(){
    i++;
   if(i!=11){
       $("h2").text("Player vs Bot")
    var randomnum1=Math.floor(Math.random()*6+1);
$(".img-1").attr("src","dice"+randomnum1+".png");

var randomnum2=Math.floor(Math.random()*6+1);
$(".img-2").attr("src","dice"+randomnum2+".png");
if(randomnum1>randomnum2){
    playerscore++;
    $("h6").text("Your Score = "+playerscore+" || Bot Score = "+computerscore);
}
else if(randomnum1<randomnum2)
{
    computerscore++;
    $("h6").text("Your Score = "+playerscore+" || Bot Score = "+computerscore);
}
else
{
    $("h6").text("Your Score = "+playerscore+" || Bot Score = "+computerscore);
}
   }
   else {
       if(playerscore>computerscore)
       {
        $("h2").text("Congratulations.You won 🎉🎉");
       }
       else if(playerscore<computerscore){
        $("h2").text("You Lost ");
       }
       else{
        $("h2").text("It's a Tie Match 😶😶");
       }
       $("h6").text("Press Any Key To Restart the Game");
       gameover();
   }
}
function gameover(){
    started=false;
    playerscore=0;
    computerscore=0;
    i=0;
}