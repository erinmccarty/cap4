/*
let vid;
function setup() {
  noCanvas();
  vid = createVideo(
    ['https://files.cargocollective.com/c1419425/finalvoidv3.mp4'],
    vidLoad
  );
  vid.size(300, 300);
}
// This function is called when the video loads
function vidLoad() {
  vid.loop();
  vid.volume(0);
}
*/




let cam;
let vid;

/*
function preload(){
  vid = createVideo('https://files.cargocollective.com/c1419425/finalvoidv3.mp4');
}
*/


function setup(){
  createCanvas(1920, 1920, WEBGL);
  cam=createCapture(VIDEO);
  cam.size(1920, 1920);
  

  
  cam.hide();
  
  //vid.size(400, 300);
  
  //vid.hide();
  //vid.loop();
  vid = createVideo(
    ['https://files.cargocollective.com/c1419425/void_upload2.mp4']
  );

  vid.size(1920, 1080);
    
  vid.hide();
  vid.loop();
  
}


  

function draw(){

  //background(0);
 // background(7, 18, 10);
  

  
  //blendMode(BLEND);
  //image(cam, -200, -150, 430, 300);
  
  //blendMode(MULTIPLY);
  //blendMode(BLEND);
  //image(vid, 300, 200, 600, 400);

  
  push();
  
  translate(-1060,-1920,0);
  
  blendMode(BLEND);
  image(cam, 0, 0, 1920, 1920);
  
  blendMode(MULTIPLY);
  image(vid, 0, 0, 2160, 1920);
  
   pop()
  
}




