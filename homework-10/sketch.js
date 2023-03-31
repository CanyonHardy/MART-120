var GlasX = 100;
var GlasY = 140;
var diameter = 50;

var Glasmovement = 5;

var eyeX = 130;
var eyeY = 155;

var eyemovement = 1;

var mouthX = 160;
var mouthY = 205;
var mouthmovement = 1;

var size = 5;
var count = 0;
var sizeDirection = 2;


function setup() {
    createCanvas(400,400);
}

 eyemovement = Math.floor(Math.random() * 5) +1;

 Glasmovement = Math.floor(Math.random() * 5) +1;

 mouthmovement = Math.floor(Math.random() * 5) +1;

function draw() {
    background(245, 239, 251);
    strokeWeight(2);
    fill(100, 60, 70);


//movement controls

if(GlasX >= 270 || GlasX <= 0)
{
   Glasmovement *= -1;

}
 GlasX += Glasmovement;



 if(eyeY >= 160 || eyeY <= 140)
{
   eyemovement *= -1;

}
 eyeY += eyemovement;




 if(mouthY >= 160 || mouthY <= 140)
 {
    mouthmovement *= -1;
 
 }
  mouthY += mouthmovement;
  if(mouthX >= 165 || mouthX <= 90)
  {
     mouthmovement *= -1;
  
  }
   mouthX += mouthmovement;


//end of movement controls

    
    //right side of face
    line(260,150,250,210);
    line(95,120, 110, 210);
    //left side of face
    line(110,210, 180,250);
    line(180,250, 250, 210);

    //mouth
    //moving diagnol (please god go diagnol)
    line(mouthX,mouthY,mouthX+40,mouthY);
    line(mouthX,mouthY, mouthX+20, mouthY+10);
    line(mouthX+40,mouthY, mouthX+20, mouthY+10);


    //glasses (will move left and right on the x axis forever)
    //differant speed (random speed) than the eyes
    //change color of glasses lenses when they hit a wall
        circle(GlasX,GlasY,70);
        circle(GlasX+90,GlasY,70);
    //glasses bridge
    line(GlasX+30, GlasY+5, GlasX+60, GlasY+5);
    //glasses eyerests
    point(GlasX+30, GlasY+7);
    point(GlasX+60, GlasY+7);



//left eye (this will move across the y axis forever)
    line(eyeX-10, eyeY+2, eyeX+10, eyeY-3);
    line(eyeX+10,eyeY-3, eyeX+30, eyeY+2);
    line(eyeX-8, eyeY+4, eyeX+12, eyeY-1);
    line(eyeX+12,eyeY-1, eyeX+32, eyeY+4);
        //left eyebrow
        ellipse(140, 120, 25,15);

//right eye (this will move across the y axis forever)
    line(eyeX+70, eyeY, eyeX+90, eyeY-5);
    line(eyeX+90, eyeY-5, eyeX+110, eyeY);
    line(eyeX+69, eyeY+2, eyeX+91, eyeY-3);
    line(eyeX+91, eyeY-3, eyeX+111, eyeY+2);
    //right eyebrow
    ellipse(220,120, 25,15);
 
//nose
    line(175, 180, 180, 185);

    //right elf ear
    line(270, 148, 310, 130);
    line(310,130, 252, 200);

    //left elf ear
    line(100, 150, 50, 130);
    line(50, 130, 108, 200);



    /*BELOW ARE THE RIGHT AND LEFT HAIR PEICES. 
    THE RIGHT SIDE IS FIRST, THEN ITS FOLLOWED BY
    THE LEFT IN A SIMILAR ORDER */

//middle main hair piece
//this should move diagnol forever
    line(180, 155, 200, 120);
    line(190, 100, 200, 120);
    line(180, 155, 150, 130);
    

    //middle right hair piece
    line(195, 130,245, 150);
    line(230, 90, 245, 150);
    line(230, 90, 220, 85);

    //far right hair piece
    line(240, 130, 270, 160);
    line(270, 160, 265, 120);

    //top right-ish hair piece
    line(175, 25, 180, 15);
    line(180, 15, 230, 10);
    line(230, 10, 217, 20);

    //top right hair peice 
    line(223, 15, 310, 35);
    line(310, 35, 270, 50);

    //far right hair peice
    line(280, 46, 350, 80);
    line(350, 80, 280, 130);

//far right behind the ear hair peice
    line(300, 116, 340, 135);
    line(340, 135, 300, 170);
    
    //right below ear spike (bigger)
    line(290, 160, 312, 190);
    line(312, 190, 270, 188);
//right below ear spike (smaller)
    line(270, 188, 275, 200);
    line(275, 200, 260, 190);


//LEFT SIDE OF HAIR

 // mid left main hair peice
 line(160, 120, 120, 150);
 line(120, 150, 120, 100);

 //far left main hair piece
 line(120,100, 100, 170);
 line(105, 120, 100, 170);

//left top hair piece 
line(175, 25, 140, 10);
line(140, 10, 80, 18);
line(80, 18, 65, 15);
line(65, 15, 90, 30);

//far left far top hair spike 
line(90, 30, 30, 50);
line(30,50, 50, 70);
//far left hair spike (below that one)
line(50,70, 30, 80);
line(30, 80, 50, 107);

   //left behind the ear hair piece
    line(70, 90, 20, 135);
    line(20, 135, 60, 170);

    //left below ear spike (bigger)
    line(50, 160, 30, 190);
    line(30, 190, 85, 188);

//left below ear spike (smaller)
    line(85, 188, 80, 200);
    line(80, 200, 100, 190);



/*HERE IS THE TITLE BOX INFORMATION,
AS WELL AS THE TEXT BELOW THE BOX */

//the entire title will move 5x bigger and smaller forever


    //title box
    rect(40, 300, 260, 50)

    //C in Canyon
    line(65, 310, 50, 330);
    line(50, 330, 65, 345);

    //A in Canyon
    triangle(100, 310, 80, 330, 120, 330);
    line(80, 330, 70, 340);
    line(120, 330, 130, 340);
    
    //N in Canyon
    line(140, 340, 140, 310);
    line(140, 310, 160, 340);
    line(160, 340, 160, 310);

    //Y in Canyon
    triangle(185, 330, 170, 310, 200, 310);
    line(185, 330, 185, 340);

    //O in Canyon
    square( 210, 320, 20);

    //N in Canyon
    line(250, 340, 250, 310);
    line(250, 310, 270, 340);
    line(270, 340, 270, 310);



    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }

    //Text below title
    //move in a square pattern for ex credit

    text('Drawn By Canyon Hardy!', 20, 370)

}