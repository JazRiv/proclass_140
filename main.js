function setup(){
    canvas = createCanvas(600, 440);
    background("blue");
    canvas.parent("game");
    video = createCapture(VIDEO);
    video.hide();
    modelo = ml5.poseNet(video, load);
}

function draw() {
    image(video, 0, 0, 600, 440);
}

function load(){
    console.log("Modelo listo");
}