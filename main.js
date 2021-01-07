noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    document.getElementById("square_side").innerHTML="Width And Height of square will be="+difference+"px"
    background('#32CD32');
    fill('#228B22');
    stroke('#228B22');
    square(noseX,noseY,difference);
}
function modelLoaded(){
    console.log('poseNet is initiallized');

}
function gotPoses(results){
    if(results.length>0){
       console.log(results);
       noseX=results[0].pose.nose.x;
       noseY=results[0].pose.nose.y;
       console.log("Nose X="+noseX+"Nose Y="+noseY);
       rightWristX=results[0].pose.rightWrist.x;
       leftWristX=results[0].pose.leftWrist.x;
       difference=floor(leftWristX - rightWristX);
       console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX);
    }
}