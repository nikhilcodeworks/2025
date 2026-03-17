/* script.js */
import * as THREE from 'three';

// Create a new scene
let scene = new THREE.Scene();

// Create a perspective camera
let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 5; // Move the camera back
scene.add(camera);

// Create a box geometry (cube)
let box = new THREE.BoxGeometry(1, 1, 1);

// Create a material and set its color to red
let material = new THREE.MeshBasicMaterial({ color: "red" });

// Create a mesh by combining geometry and material
let mesh = new THREE.Mesh(box, material);
scene.add(mesh);

// Get the canvas element
const canvas = document.getElementById('canvas');

// Create a WebGL renderer and set its size
let renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Initial render
renderer.render(scene, camera);

// Animation loop to rotate the cube
function animation() {
    window.requestAnimationFrame(animation);
    renderer.render(scene, camera);
    mesh.rotation.y += 0.01; // Rotate the cube slightly each frame
}

// Start the animation
animation();
