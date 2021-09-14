// create variables 
var backImg;
var car1,car2,car3,car4;
var car1Img, car2Img, car3Img , car4Img;




function preload()
{

  //Load images here 
  backImg = loadImage("images/track.png");
  car1Img = loadImage("images/car1.png");
  car2Img = loadImage("images/car2.png");
  car3Img = loadImage("images/car3.png");
  car4Img = loadImage("images/car4.png");

  
}

function setup() {
  //Creating canvas 
  createCanvas(600,4000);


  // create the objects 
  car1 = createSprite(150,3960,45,45);
  car1.addImage(car1Img);
  car1.scale = 0.7;

  car2 = createSprite(250,3960,45,45);
  car2.addImage(car2Img);
  car2.scale = 0.7;

  car3 = createSprite(350,3960,45,45);
  car3.addImage(car3Img);
  car3.scale = 0.7;

  car4 = createSprite(450,3960,45,45);
  car4.addImage(car4Img);
  car4.scale = 0.7;



  



  
 
}

function draw()
{
  // give the background image 
  background(backImg);

  // keymovements for the car 
  if(keyDown(UP_ARROW))
{
    car3.y = car3.y - 10;
}

if(keyDown(DOWN_ARROW))
{
   car3.y = car3.y + 10;
}

if(keyDown(RIGHT_ARROW))
{
   car3.x = car3.x + 10;
}

if(keyDown(LEFT_ARROW))
{
  car3.x = car3.x - 10;
}

//car1.velocityY = -3;
//car2.velocityY = -2;
//car4.velocityY = -3;




drawSprites();

}



