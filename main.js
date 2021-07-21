nose_x=0;
nose_y=0;
function preload(){
clown_nose=loadImage("https://i.postimg.cc/C5YM1SFX/Clown-nose-large.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,300,300);
image(clown_nose,nose_x,nose_y,70,70);

}
function take_snapshot(){
    save("clown filter image.png");
}
function modelLoaded(){
    console.log("posNet is initialized");
}
function gotPoses(results){
    if(results.length>0){
console.log(results);
nose_x=results[0].pose.nose.x-32;
nose_y=results[0].pose.nose.y-30;
console.log("Nose x= "+nose_x);
console.log("Nose y= "+nose_y);
    }
}