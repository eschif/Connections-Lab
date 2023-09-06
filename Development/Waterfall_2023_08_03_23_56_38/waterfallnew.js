// make an array of objects = [];
let initialX = 0;
let video;
let poseNet;
let poses = [];
let warrior;
let counter = 0;
//let personSprite;
let peopleSprites = [];
let waterSprites = [];
let imageNames = [];
let imageFolder = "/images";
// let waterSprites = [];

function preload(){
  warrior = loadImage('/warrior.png');
  sea_radish = loadImage('/sea_radish.png');
  lady = loadImage('/lady.png');
  demon = loadImage('/demon.png');
  man = loadImage('/man.png');
  creature = loadImage('/creature.png');
  bluedevil = loadImage('/bluedevil.png');
  baldie = loadImage('/baldie.png');
  octopus = loadImage('/lady.png');
}


function setup() {
console.log(waterSprites);

  createCanvas(windowWidth, windowHeight);
  world.gravity.y = 2;

  initialX = windowWidth/2;

  video = createCapture(VIDEO);
  video.size(width, height);


   // Create a new poseNet method with a single detection
   poseNet = ml5.poseNet(video, modelReady);
   // This sets up an event that fills the global variable "poses"
   // with an array every time new poses are detected
   poseNet.on('pose', function(results) {
     poses = results;
   });
   // Hide the video element, and just show the canvas
   video.hide();

  for (let i = 0; i < 5; i++){
    peopleSprites[i] = new Sprite();
    //personSprite = new Sprite();
    peopleSprites[i].collider = 'static';
  // peopleSprites[i].color = 'rgba(200,0,0)';
  //personSprite.collider = 'static';
  peopleSprites[i].color= 'rgba(0,0,0,0)';
  peopleSprites[i].stroke= 'rgba(0,0,0,0)';
  peopleSprites[i].x = 0; 
  peopleSprites[i].y = 0;
  }
}

function modelReady() {
  console.log('modelReady');
  // select('#status').html('Model Loaded');

  getVideoDevices(getVideo);
}

function draw() {
  background(0);
  //reverses the opposite mirror effect so it moves like a real mirror reflection
  translate(width,0);
  scale (-1,1);
  //must come before image
  image(video, 0, 0, width, height);
  //tint(255,140);
//for (let x = width/2; x < width; x++){
  //fill(r,g,b,a);
  //a++;
//}
//for (let x = width/2; x >0; x--){
  //fill(r,g,b,a);
  //a--;
//}



  counter++;
  if (counter % 10 == 0){
    // for (let i = 0; i < waterSprites.length; i++){
    //   waterSprites[i].drawSprite();
  // warrior = drawSprite(initialX+10, -30,'warrior.png',.06,10);
  // bluedevil = drawSprite(initialX-40, -30,'bluedevil.png',.04,10);
  // baldie = drawSprite(initialX - 60, -30, 'baldie.png', .04 ,10);
  // sea_radish = drawSprite(initialX - 10, -30, 'sea_radish.png', .07, 3);
  // demon = drawSprite(initialX - 35, -30, 'demon.png', .06, 10);
  // man = drawSprite(initialX + 50, -30, 'man.png', .08, 10);
  // creature = drawSprite(initialX + 75, -30, 'creature.png', .05, 10);
  // octopus = drawSprite(initialX+20,-30, 'octopus.png', .12, 10);
  drawSprite(initialX+10, -30,'warrior.png',.07,10);
  drawSprite(initialX-40, -30,'bluedevil.png',.05,10);
  drawSprite(initialX - 60, -30, 'baldie.png', .05 ,10);
  drawSprite(initialX - 10, -30, 'sea_radish.png', .08, 3);
  drawSprite(initialX - 35, -30, 'demon.png', .07, 10);
  drawSprite(initialX + 50, -30, 'man.png', .09, 10);
  drawSprite(initialX + 75, -30, 'creature.png', .06, 10);
  drawSprite(initialX+30,-30, 'lady.png', .03 , 10);
    // }  
}
  drawKeypoints();
}

function drawSprite(x,y,name,scale,diameter){
  let sprite = new Sprite(x, y);
  sprite.img = name;
  sprite.scale = scale;
  sprite.diameter = diameter;
  return sprite;
}

function drawKeypoints()  {
  console.log(poses);
  // Loop through all the poses detected
 // for (let i = 0; i < poses.length; i++) {
   if (poses[0]) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[0].pose;
    let nose = pose.nose;
    let eye = pose.leftEye;
    let leftEar = pose.leftEar;
    let rightEar = pose.rightEar;

    if (nose.confidence > .2 && eye.confidence > .2){
    // ellipse(nose.x, nose.y, 10);
    peopleSprites[0].x = nose.x;
    let hairline = nose.y - ((nose.y-eye.y)*3);
    peopleSprites[0].y = nose.y-3*(nose.y-eye.y);

    //personSprite.height = (nose.y-eye.y)*7;
    //personSprite.diameter = (nose.y-eye.y)*5;
    // console.log(personSprite.x, personSprite.y, personSprite.diameter);
    }
    if (leftEar.confidence > .2 && rightEar.confidence > .2){
        peopleSprites[0].diameter = leftEar.x-rightEar.x;
    }
  }
}


function getVideoDevices(callback) {
  navigator.mediaDevices
    .enumerateDevices()
    .then((devices) => {
      const filtered = devices.filter((device) => device.kind === "videoinput");
      callback(filtered);
    })
    .catch((err) => console.log(`${err.name}: ${err.message}`));
}

function getVideo(cams) {
  for (let cam of cams) {
    const index = cams.indexOf(cam);
    const capabilities = cam.getCapabilities();
    const constraints = {
      audio: false,
      video: {
        deviceId: `${cam.deviceId}`,
        width: `${capabilities.width.max}`,
        height: `${capabilities.height.max}`,
      },
    };
    webcams[index] = createCapture(constraints);
    webcams[index].hide();

    console.log(
      `webcams[${index}]\n${cam.label}\nMax width:\t${constraints.video.width}\nMax height:\t${constraints.video.height}\n`
    );
  }
}


