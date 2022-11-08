
leftwrist = 0;
rightwrist = 0;
difference = 0;

function setup(){
video = createCapture(VIDEO);
video.size(550, 550);
video.position(100, 150);
canvas = createCanvas(550, 500);
canvas.position(1000, 150);

posenet= ml5.poseNet(video, modelloaded);
posenet.on("pose", gotResult);

}
function draw(){
    background("lavender");
    fill("magenta");
    stroke("black");
    textSize(difference);
    text('Aheli', 50, 400);
}

function modelloaded(){
    console.log("model is loaded");
}

function gotResult(results){
if(results.length > 0){
    console.log(results);
   
    
    leftwrist = results[0].pose.leftWrist.x;
    rightwrist = results[0].pose.rightWrist.x;
    difference= floor(leftwrist - rightwrist);
    console.log("LeftWrist =" + leftwrist +"RightWrist =" + rightwrist + "Difference = " + difference);
document.getElementById('v1').innerHTML = "Height and width of the Text is " + difference +"px";
}
}
