var alpha, beta, gamma;
var xpos, ypos;

function setup() {
  // set canvas size
  var myCanvas = createCanvas(400, 400);
  myCanvas.parent('sketch');
  // default values
  xpos = 200;
  ypos = 200;
  alpha = 670;
  beta = 0;
  gamma = 0;
}

function draw() {
  // set background color to white
  background(200);

  // display variables
  fill(100);
  noStroke();
  text("alpha: " + alpha, 25, 25);
  text("beta: " + beta, 25, 50);
  fill(255, 0, 0);
  text("gamma: " + gamma, 25, 75);

  push();
  translate(200, 200);
  rotate(radians(gamma));
  fill(255, 0, 0);
  rect(-40, -40, 80, 80);
  fill(0);
  rect(-40, 40, 80, 5);
  pop();
}

// accelerometer Data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


//
// let permissionGranted = false;
// let cx, cy;
// let bx, by, bz;
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//
//   cx = width/2;
//   cy = height/2;
//
//   bx = width/2;
//   by = height/2;
//   bz = 0;
//
//
//   // DeviceOrientationEvent, DeviceMotionEvent
//   if (typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function') {
//     // ios 13 device
//
//     DeviceOrientationEvent.requestPermission()
//       .catch(() => {
//         // show permission dialog only the first time
//         let button = createButton("click to allow access to sensors");
//         button.style("font-size", "24px");
//         button.center();
//         button.mousePressed( requestAccess );
//         throw error;
//       })
//       .then(() => {
//         // on any subsequent visits
//         permissionGranted = true;
//       })
//   } else {
//     // non ios 13 device
//     textSize(48);
//     // text("non ios 13 device", 100, 100);
//     permissionGranted = true;
//   }
// }
//
// function requestAccess() {
//   DeviceOrientationEvent.requestPermission()
//     .then(response => {
//       if (response == 'granted') {
//         permissionGranted = true;
//       } else {
//         permissionGranted = false;
//       }
//     })
//   .catch(console.error);
//
//   this.remove();
// }
//
// function draw() {
//   if (!permissionGranted) return;
//
//   //background(255);
//
//   // rotationX, rotationY
//   const dx = constrain(rotationY, -3, 3);
//   const dy = constrain(rotationX, -3, 3);
//   cx += dx*2;
//   cy += dy*2;
//   cx = constrain(cx, 0, width);
//   cy = constrain(cy, 0, height);
//
//
//   // rotationX, rotationY, rotationZ
//
//   ellipse(cx, cy, 200, 200);
//
// }
