var maincharacterX = 80;
var maincharacterY = 520;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var LEFT_ARROW = 65;
var RIGHT_ARROW = 68;
var UP_ARROW =87;
var DOWN_ARROW =83;


var shapeX = 10;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var badguyshapeX = 300;
var badguyshapeY = 10;
var badguyshapeXSpeed;
var badguyshapeYSpeed;


var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(500,600);
}
createCharacter(200,350);


function keyIsPressed() {
    if (keyCode == LEFT_ARROW) {
        characterX -= 10;
    } 
    else if (keyCode == RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode == UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode == DOWN_ARROW) {
        characterY += 10;
    }
}
//mouse fucntion
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;

}

function draw()
{
background(300,203,190);
stroke(0);
fill(0);

//border
rect(0,0,width,10);
rect(0,0,10,height);
rect(0,height-10,width,10);
rect(width-10,50,10,height-10);

//mouse click
fill(0,200,140);
circle(mouseShapeX,mouseShapeY,20);



//exit sign
fill(0,0,0);
textSize(10);
text("exit here!", width-55, height-570);

if(maincharacterX > height && maincharacterY > width-500)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
    function mouseClicked(){
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
        }

//maincharacter
fill(320,160,220);
circle(maincharacterX,maincharacterY,20);
fill(0,0,0)
circle(maincharacterX+5,maincharacterY-2,3);
circle(maincharacterX-5,maincharacterY-2,3);
line(maincharacterX-4,maincharacterY+4,maincharacterX+4,maincharacterY+4);

// hes saying :| hehehehe

//alright, lets figure out character movement
if(keyIsDown(w))
{
    maincharacterY -= 4;
}

if(keyIsDown(a))
{
    maincharacterX -= 4;
}

if(keyIsDown(s))
{
    maincharacterY += 4;
}
if(keyIsDown(d))
{
    maincharacterX += 4;
}
//other way of movement

//badguy 1
fill(233,150,122);
square(shapeX,shapeY,30);
fill(250,0,0);
square(shapeX+3,shapeY+5,9);
square(shapeX+18,shapeY+5,9);
line(shapeX+3, shapeY, shapeX+13, shapeY+8);
line(shapeX+17, shapeY+8, shapeX+25, shapeY);
fill(128,0,0);
ellipse(shapeX+15, shapeY+22,15, 10);

//badguy 1 movement
shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
shapeX += shapeXSpeed;
shapeY += shapeYSpeed;

//reapeating movement for badguy 1
if(shapeX > width)
{
    shapeX = 0;
}
if (shapeX < 0)
{
    shapeX = width;
}

if(shapeY > height)
{
    shapeY = 0;
}
if (shapeY < 0)
{
    shapeY = height;
}


//badguy 2
fill(10,150,122);
square(badguyshapeX,badguyshapeY,40);
fill(0,150,220);
square(badguyshapeX+3,badguyshapeY+5,10);
square(badguyshapeX+24,badguyshapeY+5,10);
line(badguyshapeX+3, badguyshapeY, badguyshapeX+13, badguyshapeY+8);
line(badguyshapeX+22, badguyshapeY+8, badguyshapeX+31, badguyshapeY);
fill(0,0,0);
ellipse(badguyshapeX+20, badguyshapeY+25,20, 15);

//badguy 2 movement
badguyshapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
badguyshapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
badguyshapeX += badguyshapeXSpeed;
badguyshapeY += badguyshapeYSpeed;

//reapeating movement for badguy 2
if(badguyshapeX > width)
{
    badguyshapeX = 0;
}
if (badguyshapeX < 0)
{
    badguyshapeX = width;
}

if(badguyshapeY > height)
{
    badguyshapeY = 0;
}
if (badguyshapeY < 0)
{
    badguyshapeY = height;
}


}