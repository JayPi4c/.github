const targetDate = new Date(2024, 3, 1, 17, 56, 0);

let font;
let fontSize;
let factor;

function preload() {
    font = loadFont("assets/NotoSans-Black.ttf");
}

let countdown;

function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    fontSize = windowWidth * 0.1;
    factor = map(fontSize, 20, 250, 0.3, 0.1);


    countdown = new Countdown(targetDate);
}

function draw() {
    background(0);
    countdown.update();
    countdown.show();
}