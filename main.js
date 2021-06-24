function preload(){
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,150,150,300,200);
    fill("red");
    stroke("green");
    circle(70,80,60);
    circle(550,80,60);
    circle(70,400,60);
    circle(550,400,60);
    noFill();
    rect(70,80,480,320);
}