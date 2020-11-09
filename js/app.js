document.onkeydown = checkKey;
var snake = document.querySelector(".head");
var food = document.querySelector(".food");
var move, ran, score=0, direction;
var stepY=0;
var stepX=0;
var box=30;
var container_height=box+document.querySelector('.container').clientHeight % box;
var container_width=box+document.querySelector('.container').clientWidth % box;
document.querySelector('.inner-container').style.height=`calc(100vh - ${container_height}px)`;
document.querySelector('.inner-container').style.width=`calc(100% - ${container_width}px)`;
var cageX=document.querySelector('.inner-container').clientWidth/box;
var cageY=document.querySelector('.inner-container').clientHeight/box;
document.querySelector(".head").style.height= `${box}px`;
document.querySelector(".head").style.width= `${box}px`;
document.querySelector(".food").style.height= `${box}px`;
document.querySelector(".food").style.width= `${box}px`;
snake.style.transform = "translate("+stepX*box+"px, "+stepY*box+"px)";
randomFood()
// Getting Coordinates
function getPos(el) {
    var rect=el.getBoundingClientRect();
    return {x:rect.left,y:rect.top};
}

function randomFood(){
    transFoodX=Math.floor(Math.random()*cageX) *box;
    transFoodY=Math.floor(Math.random()*cageY) *box;
    food.style.transform = "translate("+transFoodX+"px, "+transFoodY+"px)";

}
function Up(){
    clearInterval(move);
    move = setInterval(function(){
        if (getPos(snake).y>box-1){
            stepY-=1;
            snake.style.transform = "translate("+stepX*box+"px, "+stepY*box+"px)";
            CheckFood();
        }
        else{
            alert("You died! "+"Score: "+ score);
            clearInterval(move);
            location.reload();
        }
    }, 100);
};
function Down(){
    clearInterval(move);
    move = setInterval(function(){
        
    if (getPos(snake).y<document.querySelector(".inner-container").clientHeight-box){
        stepY+=1;
        snake.style.transform = "translate("+stepX*box+"px, "+stepY*box+"px)";
        CheckFood();
    }
    else{
        alert("You died! "+"Score: "+ score);
        clearInterval(move);
        location.reload();
    }
    }, 100);
}
function Left(){
    clearInterval(move);
    move = setInterval(function(){
       
        if (getPos(snake).x>box-1){
            stepX-=1;
            snake.style.transform = "translate("+stepX*box+"px, "+stepY*box+"px)";
            CheckFood();}
        else{
            alert("You died! "+"Score: "+ score);
            clearInterval(move);
            location.reload();
        }
    }, 100);
}
function Right(){
    clearInterval(move);
    move = setInterval(function(){
        
        if (getPos(snake).x<document.querySelector(".inner-container").clientWidth-box){
            stepX+=1;
            snake.style.transform = "translate("+stepX*box+"px, "+stepY*box+"px)";
            CheckFood();
        }
        else{
            alert("You died! "+"Score: "+ score);
            clearInterval(move);
            location.reload();
        }
    }, 100);
}
function checkKey(e) {

    e = window.event;

    if (e.keyCode == '38' && direction!="down") {
        // up arrow
        direction="up";
        Up();
    }
    else if (e.keyCode == '40'&& direction!="up") {
        // down arrow
        direction="down";
        Down();
    }
    else if (e.keyCode == '37'&& direction!="right") {
       // left arrow
       direction="left";
       Left();
    }
    else if (e.keyCode == '39'&& direction!="left") {
       // right arrow
       direction="right";
       Right();
    }

}
function CheckFood(){
    if (transFoodX==stepX*box && transFoodY==stepY*box){
        score+=1;
        randomFood();
    }
};
