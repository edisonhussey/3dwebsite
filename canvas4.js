
const canvas4 = document.getElementById('myCanvas4');
const canvasWidth4=canvas4.width;
const canvasHeight4=canvas4.height;

const ctx4=canvas4.getContext('2d');

console.log('yo')

ctx4.beginPath()
ctx4.moveTo(0.1*canvasWidth,0.1*canvasHeight)
ctx4.lineTo(0.9*canvasWidth,0.1*canvasHeight)
ctx4.stroke()


function drawDynamic(){

    for(let i=0;i<data.length;i++){

    }


}

// const intervalId = setInterval(drawDynamic, 10000);
// const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         const renderer = new THREE.WebGLRenderer({ antialias: true });
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         document.body.appendChild(renderer.domElement);

//         // Add grid helper to the scene
//         const gridHelper = new THREE.GridHelper(200, 50);
//         scene.add(gridHelper);

//         // Add axes helper
//         const axesHelper = new THREE.AxesHelper(100);
//         scene.add(axesHelper);

//         // Create random points for scatter plot
//         const points = [];
//         const pointCount = 100;

//         for (let i = 0; i < pointCount; i++) {
//             const x = Math.random() * 200 - 100;
//             const y = Math.random() * 200 - 100;
//             const z = Math.random() * 200 - 100;
//             points.push(new THREE.Vector3(x, y, z));
//         }

//         // Create geometry and material for the points
//         const geometry = new THREE.BufferGeometry().setFromPoints(points);
//         const material = new THREE.PointsMaterial({ color: 0xff0000, size: 5 });

//         // Create the point cloud
//         const pointCloud = new THREE.Points(geometry, material);
//         scene.add(pointCloud);

//         // Set the camera position
//         camera.position.z = 300;

//         // Add OrbitControls for interaction
//         const controls = new THREE.OrbitControls(camera, renderer.domElement);
//         controls.enableDamping = true;
//         controls.dampingFactor = 0.25;
//         controls.enableZoom = true;

//         // Animation loop
//         function animate() {
//             requestAnimationFrame(animate);
//             controls.update(); // Update controls
//             renderer.render(scene, camera);
//         }

//         animate();

//         // Handle window resize
//         window.addEventListener('resize', () => {
//             camera.aspect = window.innerWidth / window.innerHeight;
//             camera.updateProjectionMatrix();
//             renderer.setSize(window.innerWidth, window.innerHeight);
//         });

//////////SEOCNDN TY







// const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         const renderer = new THREE.WebGLRenderer({ antialias: true });
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         document.body.appendChild(renderer.domElement);

//         // Add grid and axes helpers to the scene
//         const gridHelper = new THREE.GridHelper(200, 50);
//         scene.add(gridHelper);
//         const axesHelper = new THREE.AxesHelper(100);
//         scene.add(axesHelper);

//         // Define the characters and their colors
//         const characters = ["Jason", "Alice", "Tom"];
//         const colors = {
//             "Jason": 0xff0000, // Red
//             "Alice": 0x00ff00, // Green
//             "Tom": 0x0000ff    // Blue
//         };

//         // Create random points for scatter plot and associate them with characters
//         const points = [];
//         const characterData = [];
//         const pointCount = 100;

//         for (let i = 0; i < pointCount; i++) {
//             const x = Math.random() * 200 - 100;
//             const y = Math.random() * 200 - 100;
//             const z = Math.random() * 200 - 100;

//             // Randomly assign the point to a character
//             const character = characters[Math.floor(Math.random() * characters.length)];
//             const color = colors[character];

//             const point = new THREE.Vector3(x, y, z);
//             points.push({ point, color, character });
//             characterData.push({ character, x, y, z });
//         }

//         // Create geometry and material for each character's points
//         const pointGeometry = new THREE.BufferGeometry();
//         const positions = [];
//         const colorsArray = [];

//         points.forEach(({ point, color }) => {
//             positions.push(point.x, point.y, point.z);
//             colorsArray.push((color >> 16) / 255, ((color >> 8) & 0xff) / 255, (color & 0xff) / 255);
//         });

//         pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
//         pointGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colorsArray, 3));

//         const pointMaterial = new THREE.PointsMaterial({ vertexColors: true, size: 5 });

//         const pointCloud = new THREE.Points(pointGeometry, pointMaterial);
//         scene.add(pointCloud);

//         // Set the camera position
//         camera.position.z = 300;

//         // Add OrbitControls for interaction
//         const controls = new THREE.OrbitControls(camera, renderer.domElement);
//         controls.enableDamping = true;
//         controls.dampingFactor = 0.25;
//         controls.enableZoom = true;

//         // Add raycaster and mouse for detecting hover
//         const raycaster = new THREE.Raycaster();
//         const mouse = new THREE.Vector2();
//         const tooltip = document.getElementById('tooltip');

//         function onMouseMove(event) {
//             // Calculate mouse position in normalized device coordinates
//             mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//             mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//             raycaster.setFromCamera(mouse, camera);

//             const intersects = raycaster.intersectObject(pointCloud);

//             if (intersects.length > 0) {
//                 const intersect = intersects[0];
//                 const index = intersect.index;
//                 const characterInfo = characterData[index];
                
//                 tooltip.style.display = 'block';
//                 tooltip.style.left = event.clientX + 'px';
//                 tooltip.style.top = event.clientY + 'px';
//                 tooltip.innerHTML = `${characterInfo.character}<br>X: ${characterInfo.x.toFixed(2)}<br>Y: ${characterInfo.y.toFixed(2)}<br>Z: ${characterInfo.z.toFixed(2)}`;
//             } else {
//                 tooltip.style.display = 'none';
//             }
//         }

//         window.addEventListener('mousemove', onMouseMove, false);

//         // Animation loop
//         function animate() {
//             requestAnimationFrame(animate);
//             controls.update(); // Update controls
//             renderer.render(scene, camera);
//         }

//         animate();

//         // Handle window resize
//         window.addEventListener('resize', () => {
//             camera.aspect = window.innerWidth / window.innerHeight;
//             camera.updateProjectionMatrix();
//             renderer.setSize(window.innerWidth, window.innerHeight);
//         });


// // Set up the scene, camera, and renderer
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Add grid and axes helpers to the scene
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper);
// const axesHelper = new THREE.AxesHelper(100);
// scene.add(axesHelper);

// // Define the characters and their colors
// const characters = ["Jason", "Alice", "Tom"];
// const colors = {
//     "Jason": 0xff0000, // Red
//     "Alice": 0x00ff00, // Green
//     "Tom": 0x0000ff    // Blue
// };

// // Create random points for scatter plot and associate them with characters
// const points = [];
// const characterData = [];
// const pointCount = 100;

// // Create geometry and material for each character's points
// const cubeSize = 1;
// const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

// for (let i = 0; i < pointCount; i++) {
//     const x = Math.random() * 200 - 100;
//     const y = Math.random() * 200 - 100;
//     const z = Math.random() * 200 - 100;

//     // Randomly assign the point to a character
//     const character = characters[Math.floor(Math.random() * characters.length)];
//     const color = colors[character];

//     // Create a 3D cube for the point
//     const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
//     const cubeMaterial = new THREE.MeshBasicMaterial({ color });
//     const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
//     cube.position.set(x, y, z);

//     points.push(cube);
//     characterData.push({ character, x, y, z });

//     scene.add(cube);
// }

// // Set the camera position
// camera.position.z = 300;

// // Add OrbitControls for interaction
// const controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.25;
// controls.enableZoom = true;

// // Add raycaster and mouse for detecting hover
// const raycaster = new THREE.Raycaster();
// const mouse = new THREE.Vector2();
// const tooltip = document.getElementById('tooltip');

// function onMouseMove(event) {
//     // Calculate mouse position in normalized device coordinates
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//     raycaster.setFromCamera(mouse, camera);

//     const intersects = raycaster.intersectObjects(points);

//     if (intersects.length > 0) {
//         const intersect = intersects[0];
//         const index = points.indexOf(intersect.object);
//         const characterInfo = characterData[index];
        
//         tooltip.style.display = 'block';
//         tooltip.style.left = event.clientX + 'px';
//         tooltip.style.top = event.clientY + 'px';
//         tooltip.innerHTML = `${characterInfo.character}<br>X: ${characterInfo.x.toFixed(2)}<br>Y: ${characterInfo.y.toFixed(2)}<br>Z: ${characterInfo.z.toFixed(2)}`;
//     } else {
//         tooltip.style.display = 'none';
//     }
// }

// window.addEventListener('mousemove', onMouseMove, false);

// // Animation loop
// function animate() {
//     requestAnimationFrame(animate);
//     controls.update(); // Update controls
//     renderer.render(scene, camera);
// }

// animate();

// // Handle window resize
// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });








// // Set up the scene, camera, and renderer
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Add grid and axes helpers to the scene
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper);
// const axesHelper = new THREE.AxesHelper(100);
// scene.add(axesHelper);

// // Define the characters and their colors
// const characters = ["Jason", "Alice", "Tom"];
// const colors = {
//     "Jason": 0xff0000, // Red
//     "Alice": 0x00ff00, // Green
//     "Tom": 0x0000ff    // Blue
// };

// // Create random points for scatter plot and associate them with characters
// const points = [];
// const characterData = [];
// const pointCount = 100;

// // Create geometry and material for each character's points
// const cubeSize = 1;
// const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); // White material for cubes

// for (let i = 0; i < pointCount; i++) {
//     const x = Math.random() * 200 - 100;
//     const y = Math.random() * 200 - 100;
//     const z = Math.random() * 200 - 100;

//     // Randomly assign the point to a character
//     const character = characters[Math.floor(Math.random() * characters.length)];
//     const color = colors[character];

//     // Create a 3D cube for the point
//     const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
//     const cubeMaterial = new THREE.MeshBasicMaterial({ color });
//     const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

//     // Create white edges for the cube
//     const edgesGeometry = new THREE.EdgesGeometry(cubeGeometry);
//     const edgesMaterial = new THREE.LineBasicMaterial({ color: 0xffffff }); // White edges
//     const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    
//     cube.add(edges); // Add edges to the cube

//     cube.position.set(x, y, z);

//     points.push(cube);
//     characterData.push({ character, x, y, z });

//     scene.add(cube);
// }

// // Set the camera position
// camera.position.z = 300;

// // Add OrbitControls for interaction
// const controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.25;
// controls.enableZoom = true;

// // Add raycaster and mouse for detecting hover
// const raycaster = new THREE.Raycaster();
// const mouse = new THREE.Vector2();
// const tooltip = document.getElementById('tooltip');

// function onMouseMove(event) {
//     // Calculate mouse position in normalized device coordinates
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//     raycaster.setFromCamera(mouse, camera);

//     const intersects = raycaster.intersectObjects(points);

//     if (intersects.length > 0) {
//         const intersect = intersects[0];
//         const index = points.indexOf(intersect.object);
//         const characterInfo = characterData[index];
        
//         tooltip.style.display = 'block';
//         tooltip.style.left = event.clientX + 'px';
//         tooltip.style.top = event.clientY + 'px';
//         tooltip.innerHTML = `${characterInfo.character}<br>X: ${characterInfo.x.toFixed(2)}<br>Y: ${characterInfo.y.toFixed(2)}<br>Z: ${characterInfo.z.toFixed(2)}`;
//     } else {
//         tooltip.style.display = 'none';
//     }
// }

// window.addEventListener('mousemove', onMouseMove, false);

// // Animation loop
// function animate() {
//     requestAnimationFrame(animate);
//     controls.update(); // Update controls
//     renderer.render(scene, camera);
// }

// animate();

// // Handle window resize
// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });


///////// perfectt

// Set up the scene, camera, and renderer
// Set up the scene, camera, and renderer

















/////twoooooooo






// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Add grid and axes helpers to the scene
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper);
// const axesHelper = new THREE.AxesHelper(100);
// scene.add(axesHelper);

// // Define the characters and their colors
// const characters = ["Jason", "Alice", "Tom"];
// const colors = {
//     "Jason": 0xff0000, // Red
//     "Alice": 0x00ff00, // Green
//     "Tom": 0x0000ff    // Blue
// };

// // Create random points for scatter plot and associate them with characters
// const points = [];
// const characterData = [];
// const pointCount = 100;

// // Create geometry and material for each character's points
// const cubeSize = 1;
// const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); // White material for cubes

// for (let i = 0; i < pointCount; i++) {
//     const x = Math.random() * 200 - 100;
//     const y = Math.random() * 200 - 100;
//     const z = Math.random() * 200 - 100;

//     // Randomly assign the point to a character
//     const character = characters[Math.floor(Math.random() * characters.length)];
//     const color = colors[character];

//     // Create a 3D cube for the point
//     const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
//     const cubeMaterial = new THREE.MeshBasicMaterial({ color });
//     const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

//     // Create white edges for the cube
//     const edgesGeometry = new THREE.EdgesGeometry(cubeGeometry);
//     const edgesMaterial = new THREE.LineBasicMaterial({ color: 0xffffff }); // White edges
//     const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    
//     cube.add(edges); // Add edges to the cube

//     cube.position.set(x, y, z);

//     points.push(cube);
//     characterData.push({ character, x, y, z });

//     scene.add(cube);
// }

// // Set the camera position
// camera.position.z = 300;

// // Add OrbitControls for interaction
// const controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.25;
// controls.enableZoom = true;

// // Add raycaster and mouse for detecting hover
// const raycaster = new THREE.Raycaster();
// const mouse = new THREE.Vector2();
// const tooltip = document.getElementById('tooltip');

// function onMouseMove(event) {
//     // Calculate mouse position in normalized device coordinates
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//     raycaster.setFromCamera(mouse, camera);

//     const intersects = raycaster.intersectObjects(points);

//     if (intersects.length > 0) {
//         const intersect = intersects[0];
//         const index = points.indexOf(intersect.object);
//         const characterInfo = characterData[index];
        
//         tooltip.style.display = 'block';
//         tooltip.style.left = event.clientX + 'px';
//         tooltip.style.top = event.clientY + 'px';
//         tooltip.innerHTML = `${characterInfo.character}<br>X: ${characterInfo.x.toFixed(2)}<br>Y: ${characterInfo.y.toFixed(2)}<br>Z: ${characterInfo.z.toFixed(2)}`;
//     } else {
//         tooltip.style.display = 'none';
//     }
// }

// window.addEventListener('mousemove', onMouseMove, false);

// // Animation loop
// function animate() {
//     requestAnimationFrame(animate);

//     // Rotate the scene naturally
//     scene.rotation.x += 0.001; // Adjust rotation speed as needed
//     scene.rotation.y += 0.001; // Adjust rotation speed as needed

//     controls.update(); // Update controls
//     renderer.render(scene, camera);
// }

// animate();

// // Handle window resize
// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });


//learning from here

// import * as THREE from 'three';
//////////

////

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// function animate() {
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
// 	renderer.render( scene, camera );
// }
// renderer.setAnimationLoop( animate );

////
////

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
// camera.position.set( 0, 0, 100 );
// camera.lookAt( 0, 0, 0 );

// const scene = new THREE.Scene();

// const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

// const points = [];
// points.push( new THREE.Vector3( - 10, 0, 0 ) );
// points.push( new THREE.Vector3( 0, 10, 0 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );
// points.push( new THREE.Vector3(25,5,5))

// const geometry = new THREE.BufferGeometry().setFromPoints( points );

// const line = new THREE.Line( geometry, material );

// scene.add( line );
// renderer.render( scene, camera );

//

// import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
// import { GLTFLoader } from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/examples/jsm/loaders/GLTFLoader.js';

// Create the scene
// Check if GLTFLoader is accessible
console.log(THREE.GLTFLoader); // This should not be undefined

// Create the scene
const scene = new THREE.Scene();

// Create a camera and set its position
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let positions=[0,1,3]
camera.position.set(positions[0],positions[1],positions[2]);

// Create a renderer and attach it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add some basic lighting
const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Initialize GLTFLoader correctly
const loader = new THREE.GLTFLoader(); // Correct usage for non-module scripts

// Load a glTF model
loader.load(
    'scene.glb', // Replace with your model path
    function (gltf) {
        scene.add(gltf.scene);
        gltf.scene.position.set(0, 0, 0); // Position model
    },
    function (xhr) {
        // Called while loading is progressing
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        // Called when loading has errors
        console.error('An error happened:', error);
    }
);
window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);

// Define the handler functions
function handleKeyDown(event) {
    console.log('Key down:', event.key, event.code);
    // event.key gives you the key value (e.g., 'a', 'Enter')
    // event.code gives you the key code (e.g., 'KeyA', 'Enter')
    
    if (event.key === 'ArrowUp') {
        console.log('Up arrow key is pressed');
        positions[1]+=0.1
    }
    if (event.key === 'ArrowRight') {
        console.log('Up arrow key is pressed');
        positions[0]+=0.1
    }
    if (event.key === 'ArrowLeft') {
        console.log('Up arrow key is pressed');
        positions[0]-=0.1
    }
    if (event.key === 'ArrowDown') {
        console.log('Up arrow key is pressed');
        positions[1]-=0.1
    }
    // Add more key checks as needed
}

function handleKeyUp(event) {
    console.log('Key up:', event.key, event.code);
    // Handle key release if needed
}


// Animation loop
function animate() {
    camera.position.set(positions[0],positions[1],positions[2]);
    // positions[1]+=0.01
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Handle browser resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
