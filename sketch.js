
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
  createCanvas(800, 600, WEBGL);
  cam=createCapture(VIDEO);
  cam.size(800, 600);
  

  
  cam.hide();
  
  //vid.size(400, 300);
  
  //vid.hide();
  //vid.loop();
  vid = createVideo(
    ['https://files.cargocollective.com/c1419425/void_upload2.mp4']
  );

  vid.size(800, 600);
    
  vid.hide();
  vid.loop();
  
}


  

function draw(){

  //background(0);
  background(7, 18, 10);
  

  
  //blendMode(BLEND);
  //image(cam, -200, -150, 430, 300);
  
  //blendMode(MULTIPLY);
  //blendMode(BLEND);
  //image(vid, 300, 200, 600, 400);

  
  
  blendMode(BLEND);
  image(cam, -500, -300, 800, 600);
  
  blendMode(MULTIPLY);
  image(vid, -400, -300, 900, 600);
  
  
}





