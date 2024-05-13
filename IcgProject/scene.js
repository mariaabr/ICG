import { helper } from './helper.js';
import { createSun } from './builders/createObjects.js';
import { createMoon } from './builders/createObjects.js';
import { createTree1 } from './builders/createObjects.js';
import { createForest1 } from './builders/createObjects.js';
import { createForest2 } from './builders/createObjects.js';
import { createForest3 } from './builders/createObjects.js';
import { createMountains } from './builders/createObjects.js';
import { createForestFill } from './builders/createObjects.js';
import { createLakePartition } from './builders/createObjects.js';
import { createFireflies } from './builders/createObjects.js';
import { createBunny1 } from './builders/createObjects.js';
import { createBunny2 } from './builders/createObjects.js';
import { createBunny3 } from './builders/createObjects.js';
import { createFrog1 } from './builders/createObjects.js';
import { createFrog2 } from './builders/createObjects.js';
import { Person } from './builders/createObjects.js';

// store the scene graph, and elements usefull to rendering the scene
const sceneElements = {
    sceneGraph: null,
    camera: null,
    control: null,  // NEW
    renderer: null,
};

let stars;
let startsXBunnies = [];
let startsZBunnies = [];
let startsXFrogs = [];
let startsZFrogs = [];

// initialize scene
helper.initEmptyScene(sceneElements);
load3DObjects(sceneElements.sceneGraph);
requestAnimationFrame(computeFrame);

// events listeners

window.addEventListener('resize', resizeWindow);

//To keep track of the keyboard - WASD
var keyD = false, keyA = false, keyS = false, keyW = false, keySpace = false;
document.addEventListener('keydown', onDocumentKeyDown, false);
document.addEventListener('keyup', onDocumentKeyUp, false);

// var controls = new FirstPersonControls(camera, document.body);

// update render image size and camera aspect when the window is resized
function resizeWindow(eventParam) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    sceneElements.camera.aspect = width / height;
    sceneElements.camera.updateProjectionMatrix();

    sceneElements.renderer.setSize(width, height);

    // comment when doing animation
    // computeFrame(sceneElements);
}

function onDocumentKeyDown(event) {
    switch (event.keyCode) {
        case 68: //d
            keyD = true;
            break;
        case 87: //w
            keyW = true;
            break;
        case 65: //a
            keyA = true;
            break;
        case 83: //s
            keyS = true;
            break;
        case 32: // space
            keySpace = true;
            break;
    }
}

function onDocumentKeyUp(event) {
    switch (event.keyCode) {
        case 68: //d
            keyD = false;
            break;
        case 87: //w
            keyW = false;
            break;
        case 65: //a
            keyA = false;
            break;
        case 83: //s
            keyS = false;
            break;
        case 32: // space
            keySpace = false;
            break;
    }
}

// building the scene
// create and insert in the scene graph the models of the 3D scene

function load3DObjects(sceneGraph) {

    // ground plane
    const texture = new THREE.TextureLoader().load("resources/grasstexture.jpeg")
    const planeGeometry = new THREE.BoxGeometry(5000, 5000, 7);
    const planeMaterial = new THREE.MeshPhongMaterial({ map: texture, color: 0x88b257, side: THREE.DoubleSide });
    const planeObject = new THREE.Mesh(planeGeometry, planeMaterial);
    sceneGraph.add(planeObject);

    // change orientation of the plane using rotation
    planeObject.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
    // set shadow property
    planeObject.receiveShadow = true;
    // planeObject.position.set(-200, 0, 0);
    planeObject.name = "plane";

    // create sun and add pivot light
    const sun = createSun(0, 2800, 0);
    sceneGraph.add(sun);

    const sunPivotRotation = new THREE.Object3D();
    sunPivotRotation.add(sceneElements.sceneGraph.getObjectByName("light_sun"));
    sunPivotRotation.add(sun);
    sceneElements.sceneGraph.add(sunPivotRotation);
    sunPivotRotation.name = "sunPivotRotation";

    // create moon and add pivot light
    const moon = createMoon(0, -2700, 0);
    sceneGraph.add(moon);

    const moonPivotRotation = new THREE.Object3D();
    moonPivotRotation.add(sceneElements.sceneGraph.getObjectByName("light_moon"));
    moonPivotRotation.add(moon);
    sceneElements.sceneGraph.add(moonPivotRotation);
    moonPivotRotation.name = "moonPivotRotation";

    // create some stars
    const star_vertices = [];

    for (let i = 0; i < 80000; i++) {
        const x = THREE.MathUtils.randFloatSpread(10000);
        const y = THREE.MathUtils.randFloatSpread(10000);
        const z = THREE.MathUtils.randFloatSpread(5000); + 10000
        star_vertices.push(x, y, z);

    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(star_vertices, 3));
    stars = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xffffff }));
    stars.name = "stars";

    // create tree1
    const tree1 = createTree1(1000, 0, -500);
    sceneGraph.add(tree1);

    // create forest1
    const forest1 = createForest1();
    sceneGraph.add(forest1);

    // create forest2
    const forest2 = createForest2();
    sceneGraph.add(forest2);

    // create forest3
    const forest3 = createForest3();
    sceneGraph.add(forest3);

    // create mountains
    const mountains = createMountains();
    sceneGraph.add(mountains);

    // create forest fill
    const forestFill = createForestFill();
    sceneGraph.add(forestFill);

    // create lake ambient
    const lakepart = createLakePartition();
    sceneGraph.add(lakepart);

    // create fireflies
    const fireflies = createFireflies();
    sceneGraph.add(fireflies);
    fireflies.name = "fireflies";

    // create bunny1
    const xb1 = Math.random() * -2000 + 250;
    const zb1 = Math.random() * 1950 - 100;
    const bunny1 = createBunny1(xb1, 10, zb1);
    sceneGraph.add(bunny1);
    bunny1.name = "bunny1";
    let startXBunny1 = xb1;
    startsXBunnies.push(startXBunny1);
    let startZBunny1 = zb1;
    startsZBunnies.push(startZBunny1);

    // create bunny2
    const xb2 = Math.random() * -2000 + 250;
    const zb2 = Math.random() * 1950 - 100;
    const bunny2 = createBunny2(xb2, 10, zb2);
    sceneGraph.add(bunny2);
    bunny2.name = "bunny2";
    let startXBunny2 = xb2;
    startsXBunnies.push(startXBunny2);
    let startZBunny2 = zb2;
    startsZBunnies.push(startZBunny2);

    // create bunny3
    const xb3 = Math.random() * -2000 + 250;
    const zb3 = Math.random() * 1950 - 100;
    const bunny3 = createBunny3(xb3, 10, zb3);
    sceneGraph.add(bunny3);
    bunny3.name = "bunny3";
    let startXBunny3 = xb3;
    startsXBunnies.push(startXBunny3);
    let startZBunny3 = zb3;
    startsZBunnies.push(startZBunny3);

    // create frog1
    const xf1 = Math.random() * 500 + 1900;
    const zf1 = Math.random() * 500 + 1350;
    const frog1 = createFrog1(xf1, 10, zf1);
    sceneGraph.add(frog1);
    frog1.name = "frog1";
    let startXFrog1 = xf1;
    startsXFrogs.push(startXFrog1);
    let startZFrog1 = zf1;
    startsZFrogs.push(startZFrog1);

    // create frog2
    const xf2 = Math.random() *  1500 + 500;
    const zf2 = Math.random() * 1000 + 500;
    const frog2 = createFrog2(xf2, 10, zf2);
    sceneGraph.add(frog2);
    frog2.name = "frog2";
    let startXFrog2 = xf2;
    startsXFrogs.push(startXFrog2);
    let startZFrog2 = zf2;
    startsZFrogs.push(startZFrog2);
    
    // create main character
    var personObj = new Person(3, 0 , 5);
    var person = personObj.createPerson();
    sceneGraph.add(person);
    person.name = "filsons";

    // set position of person - base on the plane
    person.translateY(10);

    // set shadow property
    // person.castShadow = true;
    // person.receiveShadow = true;

}

// animation

function computeFrame() {

    sceneElements.control.update(0.3); // update first camera control;

    const sun = sceneElements.sceneGraph.getObjectByName("sun");
    const planetPos = new THREE.Vector3();
    const sunPos = sun.getWorldPosition(planetPos);

    // get sunlight and rotate
    const sunlight = sceneElements.sceneGraph.getObjectByName("sunPivotRotation");
    sunlight.rotation.x -= 0.005;

    // get moonlight and rotate
    const moonlight = sceneElements.sceneGraph.getObjectByName("moonPivotRotation");
    moonlight.rotation.x -= 0.005;

    if (sunPos.y > 700) { // day

        sceneElements.sceneGraph.remove(stars);

        createjs.Tween.get(sceneElements.sceneGraph.background).to(new THREE.Color(0x7eb4e2), 1200);
        // createjs.Tween.get(sceneElements.sceneGraph.fog).to(new THREE.Fog(0xffe680, 2500, 12000));

        sceneElements.sceneGraph.getObjectByName("light_sun").intensity = 1;
        sceneElements.sceneGraph.getObjectByName("light_moon").intensity = 0;

    } else if (sunPos.y > 0 && sunPos.y < 700) { // sunset or sunrise

        console.log("cucumber");
        // someting will happend

        sceneElements.sceneGraph.remove(stars);

        createjs.Tween.get(sceneElements.sceneGraph.background).to(new THREE.Color(0xecc06b), 1200);
        // createjs.Tween.get(sceneElements.sceneGraph.fog).to(new THREE.Fog(0xffe680, 2500, 12000));

        sceneElements.sceneGraph.getObjectByName("light_sun").intensity = 0.5;

    } else { // night

        sceneElements.sceneGraph.add(stars);

        console.log("bacalhau");
        createjs.Tween.get(sceneElements.sceneGraph.background).to(new THREE.Color(0x070a1d), 1200);
        // createjs.Tween.get(sceneElements.sceneGraph.fog).to(new THREE.Fog(0x1e2733, 1000, 10000));

        sceneElements.sceneGraph.getObjectByName("light_moon").intensity = 0.7;
        sceneElements.sceneGraph.getObjectByName("light_sun").intensity = 0;
    }

    // aimations
    const time = Date.now() * 0.001;
    var step = 0;

    // animate bunnys
    const bunny1 = sceneElements.sceneGraph.getObjectByName("bunny1");
    const bunny2 = sceneElements.sceneGraph.getObjectByName("bunny2");
    const bunny3 = sceneElements.sceneGraph.getObjectByName("bunny3");

    const bunnies = [];
    bunnies.push(bunny1);
    bunnies.push(bunny2);
    bunnies.push(bunny3);

    bunnies.forEach((bunny, index) => {
        const startX = startsXBunnies[index];
        const startZ = startsZBunnies[index];
        const startY = 10;
        const amplitudeX = 70;
        const amplitudeY = 40;
        const amplitudeZ = 100;
        const frequency = 2;

        const offsetX = Math.cos(time * frequency + index) * amplitudeX;
        const offsetY = Math.abs(Math.sin(time * frequency * 2 + index)) * amplitudeY;
        const offsetZ = Math.sin(time * frequency + index) * amplitudeZ;

        bunny.position.x = startX + offsetX;
        bunny.position.y = startY + offsetY;
        bunny.position.z = startZ + offsetZ;
        
    });

    // animate frogs
    const frog1 = sceneElements.sceneGraph.getObjectByName("frog1");
    const frog2 = sceneElements.sceneGraph.getObjectByName("frog2");
    // const frog3 = sceneElements.sceneGraph.getObjectByName("frog3");

    const frogs = [];
    frogs.push(frog1);
    frogs.push(frog2);
    // frogs.push(frog3);

    frogs.forEach((frog, index) => {
        const startX = startsXFrogs[index];
        const startZ = startsZFrogs[index];
        const startY = 10;
        const amplitudeX = 70;
        const amplitudeY = 80;
        const amplitudeZ = 10;
        const frequency = 1;

        const offsetX = Math.cos(time * frequency + index) * amplitudeX;
        const offsetY = Math.abs(Math.sin(time * frequency * 2 + index)) * amplitudeY;
        const offsetZ = Math.sin(time * frequency + index) * amplitudeZ;

        frog.position.x = startX + offsetX;
        frog.position.y = startY + offsetY;
        // frog.position.z = startZ + offsetZ;
        
    });

    // animate fireflies
    const fireflies = sceneElements.sceneGraph.getObjectByName("fireflies");
    // fireflies.rotation.x -= 0.005;

    fireflies.children.forEach((firefly, index) => {
        const amplitude = 0.5;
        const frequency = 0.1;
        const offsetX = Math.sin(time * frequency + index) * amplitude;
        const offsetY = Math.cos(time * frequency + index) * amplitude;
        const offsetZ = Math.sin(time * frequency + index) * amplitude;

        firefly.position.x += offsetX;
        firefly.position.y += offsetY;
        firefly.position.z += offsetZ;
    });

    // animation
    // call for the next frame
    requestAnimationFrame(computeFrame);
    
    // rendering
    helper.render(sceneElements);
}

// function rotate(dts, angle, person) {
//     var t = 0;
//     const rotationSpeed = 0.01;

//     const animateRotation = () => {
//         t += rotationSpeed * dts;

//         if (t >= 1) {
//             t = 1;
//         }

//         const qb = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle);

//         person.quaternion.slerp(qb, t);

//         if (t < 1) {
//             requestAnimationFrame(animateRotation); // continue animation if not finished
//         }
//     };

//     requestAnimationFrame(animateRotation);
// }