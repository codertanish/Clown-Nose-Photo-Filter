noseX = 0;
noseY = 0;
img = "";
function preload() {
img = loadImage("https://i.postimg.cc/CLf1X7kS/Clown-Nose.png");

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);       //code for creating a webcam live view in P5.js
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);      //initializing PoseNet model
    poseNet.on('pose', gotPoses);       //it is used to run a piece of code while the PoseNet is running
}

function draw() {
image(video, 0, 0, 300, 300);
image(img, noseX - 15, noseY - 15, 30, 30);
//fill(255, 0, 0);
//stroke(255, 0, 0);
//circle(noseX, noseY, 30);
}

function take_snapshot() {
    save('FilteredImage.png');
}

function modelLoaded() {
    console.log("PoseNet Is Initialized");
}

function gotPoses(results) {
    if(results.length > 0 ) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x = " + noseX);
        console.log("Nose y = " + noseY);
    }
}