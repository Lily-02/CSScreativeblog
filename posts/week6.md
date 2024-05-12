---
title: Week 6 🕊
published_at: 2024-04-10
snippet: Three js
disable_html_sanitization: true
---

<div id="three_container"></div>

<script type="module">
   import * as THREE from "/script/threeejs/Three.js";
   import { OrbitControls } from "/script/threeejs/OrbitControls.js";
  //  import Stats from "/script/stat.js";
  //  import {GUI} from "/script/dat.js";
   

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.set(0, 0.75, 1.5)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

function twist(geometry, factor) {
  const q = new THREE.Quaternion();
  const up = new THREE.Vector3(0, 1, 0);
  const p = geometry.attributes.position.array;

  for (let i = 0; i < p.length; i += 3) {
    q.setFromAxisAngle(
      up,
      p[i + 1] * factor
    );

    let vec = new THREE.Vector3(p[i], p[i + 1], p[i + 2])
    vec.applyQuaternion(q);

    p[i] = vec.x
    p[i + 2] = vec.z
  }

  geometry.computeVertexNormals()
  geometry.attributes.position.needsUpdate = true;
}

let geometry = new THREE.BoxGeometry(1, 1, 1, 10, 10, 10)
twist(geometry, Math.PI / 2)
const twistedCube = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial({
  wireframe: true
}))
scene.add(twistedCube)

window.addEventListener(
  'resize',
  () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  },
  false
)

let data = {
  t: Math.PI / 2
}

// const gui = new GUI();
// gui.add(data, "t", -Math.PI, Math.PI, 0.01).onChange((t) => {
//   twistedCube.geometry.dispose()
//   geometry = new THREE.BoxGeometry(1, 1, 1, 10, 10, 10)
//   twist(geometry, t)
//   twistedCube.geometry = geometry
// })
// gui.open();

// const stats = Stats()
// document.body.appendChild(stats.dom)

var animate = function() {
  requestAnimationFrame(animate)
  controls.update()
  render()
  // stats.update()
}

function render() {
  renderer.render(scene, camera)
}

animate()
</script>


```html

<div id="three_container"></div>

<script type="module">
  // Import Three.js library
   import * as THREE from "/script/threeejs/Three.js";
   import { OrbitControls } from "/script/threeejs/OrbitControls.js";
  //  import Stats from "/script/stat.js";
  //  import {GUI} from "/script/dat.js";
   
 // Setup the 3D scene for rendering objects
const scene = new THREE.Scene()

// Initialise a perspective camera for a realistic depth field
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.set(0, 0.75, 1.5)

// Position camera slightly above and in front of the origin

// Create a renderer that will draw the objects onto the screen
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

// Set size to full window
document.body.appendChild(renderer.domElement)
// Attach renderer to the document

// Enable user interaction with the camera using mouse movements
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
// Smooth out camera movements


// Function to modify geometry by twisting it around the Y-axis
function twist(geometry, factor) {
  const q = new THREE.Quaternion();
  // Quaternion for applying rotation
  const up = new THREE.Vector3(0, 1, 0);
  // Up direction vector for rotation axis
  const p = geometry.attributes.position.array;
  // Direct access to the geometry's vertices

  // Iterate over each vertex to apply the twist
  for (let i = 0; i < p.length; i += 3) {
    q.setFromAxisAngle(
      up,
      p[i + 1] * factor // Compute rotation angle based on vertex's y position
    );

    let vec = new THREE.Vector3(p[i], p[i + 1], p[i + 2])
    vec.applyQuaternion(q); 
    // Apply the quaternion rotation to the vector

    p[i] = vec.x
    // Update vertex positions
    p[i + 2] = vec.z
  }

  geometry.computeVertexNormals()
  // Necessary to ensure the object interacts with lights correctly
  geometry.attributes.position.needsUpdate = true;
  // Mark positions as updated for re-render
}

// Create basic box geometry and apply the twisting transformation
let geometry = new THREE.BoxGeometry(1, 1, 1, 10, 10, 10)
twist(geometry, Math.PI / 2)
// Apply a half rotation twist
const twistedCube = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial({
  wireframe: true
// Use wireframe to better visualize the twist
}))
scene.add(twistedCube)
// Add twisted cube to the scene

// Responsive design: adjust camera and renderer size on window resize
window.addEventListener(
  'resize',
  () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    // Adjust the aspect ratio
    renderer.setSize(window.innerWidth, window.innerHeight)
    // Adjust the size of the renderer
  },
  false
)

let data = {
  t: Math.PI / 2
  // Example data structure for storing state
}

// const gui = new GUI();
// gui.add(data, "t", -Math.PI, Math.PI, 0.01).onChange((t) => {
//   twistedCube.geometry.dispose()
//   geometry = new THREE.BoxGeometry(1, 1, 1, 10, 10, 10)
//   twist(geometry, t)
//   twistedCube.geometry = geometry
// })
// gui.open();

// const stats = Stats()
// document.body.appendChild(stats.dom)

var animate = function() {
  requestAnimationFrame(animate) 
  // Schedule the next frame
  controls.update()
  // Update the camera control positions
  render()
  // Render the scene
  // stats.update()
}
// Render the scene with the updated camera and objects
function render() {
  renderer.render(scene, camera)
}
// Start the animation loop
animate()
</script>

```

# Resources Used

1. I used Three.js example 2023 from Seanwasere
https://jsfiddle.net/seanwasere/1x0L5mda/

2. I referred the three.js in class as well
https://blog.science.family/240424_class_example_threejs

# Here is what my implemention: