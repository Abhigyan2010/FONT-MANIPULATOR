leftWristX="";
rightWristX="";
difference="";
function preload(){

}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(300,300);
    poseNet=ml5.poseNet(video, modelLoaded);
}
function modelLoaded(){
    console.log("GO TIME");
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}
function draw(){
    background("#5c5c5c");
    textSize(difference);
    fill("#001ac4");
    text("Ryan",50,300);
}