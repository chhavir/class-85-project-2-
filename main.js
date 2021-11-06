Canvas= document.getElementById("myC")
ctx= Canvas.getContext("2d");

rover_x= 10;
rover_y= 10;
roverImg= "car2.png";
bgImg= "parkingLot.jpg";

function add()
{
    bgImgTag= new Image();
    bgImgTag.src= bgImg;
    bgImgTag.onload= bgImgLoad;

   roverImgTag= new Image();
    roverImgTag.src= roverImg;
  roverImgTag.onload= roverImgLoad;

}

function bgImgLoad()
{
    ctx.drawImage(bgImgTag, 0, 0, Canvas.width, Canvas.height);
}

function roverImgLoad()
{
    ctx.drawImage(roverImgTag, rover_x, rover_y, 100, 95);
}

window.addEventListener("keydown" , mykeydown)

function mykeydown(e)
{
    keyPressed= e.keyCode;
    console.log(keyPressed)
    if(keyPressed=='37')
    Left();

    if(keyPressed=='38')
    Up();

    if(keyPressed=='39')
    Right();

    if(keyPressed=='40')
    Down(); 
}



function Left(){
    if(rover_x > 0){
    rover_x= rover_x-10;
    bgImgLoad();
    roverImgLoad();
}
   
}

function Right(){
    if(rover_x <= 700){
    rover_x= rover_x+10;
    bgImgLoad();
    roverImgLoad();
}
   
}

function Up(){
    if(rover_y > 0){
    rover_y= rover_y-10;
    bgImgLoad();
    roverImgLoad();
}
   
}

function Down(){
    if(rover_y < 560){
    rover_y= rover_y+10;
    bgImgLoad();
    roverImgLoad();
}
   
}
    




