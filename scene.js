import { helper } from './helper.js';
// import { show_blocker } from './helper.js';
// import { OrbitControls } from './orbitControls.js';
import { infoObjects } from './builders/infoObjects.js';
import { createDeer1, createDeer2, createDeer3, createFlowerRose, createFlowerTulip, createFlowersDaisySunflower, createFlowersGrass, createFlowersLinen, createLake, createMushroom, createSun, createWoodFence } from './builders/createObjects.js';
import { createMoon } from './builders/createObjects.js';
import { createMountain1, createMountain2 } from './builders/createObjects.js';
import { createTrunk1, createTrunk2, createTrunk3, createStone4 } from './builders/createObjects.js';
import { createTree3 } from './builders/createObjects.js';
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
    controls: null,
    renderer: null,
    raycaster: null
};

// useful variables
let floorSize = 5000;
let stars;
let startsXBunnies = [];
let startsZBunnies = [];
let startsXFrogs = [];
let startsZFrogs = [];

// movement variables
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

let show_blocker = true;

// performance variables
let prevTime = performance.now();
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
const vertex = new THREE.Vector3();
const color = new THREE.Color();

// initialize scene
helper.initEmptyScene(sceneElements);
load3DObjects(sceneElements.sceneGraph);
requestAnimationFrame(computeFrame);

// events listeners
window.addEventListener('resize', resizeWindow);

//To keep track of the keyboard - WASD
// var keyD = false, keyA = false, keyS = false, keyW = false, keySpace = false;
// document.addEventListener('keydown', onDocumentKeyDown, false);
// document.addEventListener('keyup', onDocumentKeyUp, false);

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

// function getIntersectedObject(detectedGroup) {
//     // detect intersected model
//     const raycaster = new THREE.Raycaster();
//     const mouse = new THREE.Vector2();
//     raycaster.setFromCamera(mouse, sceneElements.camera);
//     const intersects = raycaster.intersectObjects(detectedGroup, false);
//     return intersects.length > 0 ? intersects[0].object : null;
// }

// function openModal(modelName) {
//     const modal = document.getElementById('modal');
//     const title = document.getElementById('modal-title');
//     const desc = document.getElementById('modal-desc');
//     const year = document.getElementById('modal-year');
//     const location = document.getElementById('modal-location');

//     const modelInfo = modelInfos[modelName];

//     title.textContent = modelInfo.title;
//     desc.textContent = modelInfo.desc;
//     year.textContent = modelInfo.year;
//     location.textContent = modelInfo.location;

//     modal.style.display = 'block';
// }

// document.getElementById('close-modal').addEventListener('click', () => {
//     document.getElementById('modal').style.display = 'none';
// });

// function onDocumentKeyDown(event) {
//     switch (event.keyCode) {
//         case 68: //d
//             keyD = true;
//             break;
//         case 87: //w
//             keyW = true;
//             break;
//         case 65: //a
//             keyA = true;
//             break;
//         case 83: //s
//             keyS = true;
//             break;
//         case 32: // space
//             keySpace = true;
//             break;
//     }
// }

document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';

    sceneElements.controls.lock();
    // show_blocker = false;
});

function findHighestParent(object) {
    let current = object;
    while (current && current.parent!== null) {
        if (current.parent && current.parent.name) {
            console.log("Parent: ", current.parent.name);
            current = current.parent;
        } else {
            break;
        }
    }
    return current? current.name : "Nenhum grupo";
}

function loadInfo(object) {
    let infoObject = infoObjects[object];

    document.getElementById('modal_title').textContent = infoObject['title'];
    document.getElementById('modal_name').textContent = infoObject['name'];
    document.getElementById('modal_desc').textContent = infoObject['desc'];
    document.getElementById('modal_location').textContent = infoObject['location'];
    document.getElementById('modal_use').textContent = infoObject['use'];
}

const onKeyDown = function (event) {

    switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
            moveForward = true;
            break;

        case 'ArrowLeft':
        case 'KeyA':
            moveLeft = true;
            break;

        case 'ArrowDown':
        case 'KeyS':
            moveBackward = true;
            break;

        case 'ArrowRight':
        case 'KeyD':
            moveRight = true;
            break;

        case 'KeyE':
            
            console.log("keyE");
            
            sceneElements.raycaster.setFromCamera(new THREE.Vector2(), sceneElements.camera);

            // const intersectedObject = raycaster.intersectObjects(detectedGroup, false);

            var intersects = sceneElements.raycaster.intersectObjects(sceneElements.sceneGraph.children, true);
            if (intersects.length > 0) {
                var firstIntersectedObject = intersects[0];
                console.log("Objeto interseccionado:", firstIntersectedObject.object.name); // Imprime o nome do objeto interseccionado
                console.log("Grupo do objeto interseccionado:", findHighestParent(firstIntersectedObject.object)); // Tenta obter o nome do grupo pai
            }

            // loadInfo(intersectedObject);
            // $("#modal").modal("toggle");

            if (findHighestParent(firstIntersectedObject.object) === "plane") {

                break;
            }

            loadInfo(findHighestParent(firstIntersectedObject.object));
            document.getElementById('modal').style.display = 'block';

            sceneElements.controls.unlock();
            // show_blocker = false;

            break;
        
        // case 'Escape':

        //     instructions.addEventListener( 'click', function () {
        //         controls.lock();
        //     });

        //     show_blocker = true;

        //     break;

        // dont need
        case 'Space':
            if (canJump === true) velocity.y += 350;
            canJump = false;
            break;
    }

};

// function onDocumentKeyUp(event) {
//     switch (event.keyCode) {
//         case 68: //d
//             keyD = false;
//             break;
//         case 87: //w
//             keyW = false;
//             break;
//         case 65: //a
//             keyA = false;
//             break;
//         case 83: //s
//             keyS = false;
//             break;
//         case 32: // space
//             keySpace = false;
//             break;
//     }
// }

const onKeyUp = function (event) {

    switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
            moveForward = false;
            break;

        case 'ArrowLeft':
        case 'KeyA':
            moveLeft = false;
            break;

        case 'ArrowDown':
        case 'KeyS':
            moveBackward = false;
            break;

        case 'ArrowRight':
        case 'KeyD':
            moveRight = false;
            break;
    }

};

document.addEventListener( 'keydown', onKeyDown );
document.addEventListener( 'keyup', onKeyUp );

// building the scene
// create and insert in the scene graph the models of the 3D scene

function load3DObjects(sceneGraph) {

    // ground plane
    const texture = new THREE.TextureLoader().load("resources/grasstexture.jpeg")
    const planeGeometry = new THREE.BoxGeometry(floorSize, floorSize, 7);
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

    // create forest1
    const forest1 = createForest1();
    //  sceneGraph.add(forest1);

    // create forest2
    const forest2 = createForest2();
    // sceneGraph.add(forest2);

    // create forest3
    const forest3 = createForest3();
    // sceneGraph.add(forest3);

    // create mountains
    const mountains = createMountains();
    // sceneGraph.add(mountains);

    // create forest fill
    const forestFill = createForestFill();
    sceneGraph.add(forestFill);

    // create lake ambient
    const lakepart = createLakePartition();
    // sceneGraph.add(lakepart);

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
    const xf2 = Math.random() * 1500 + 500;
    const zf2 = Math.random() * 1000 + 500;
    const frog2 = createFrog2(xf2, 10, zf2);
    sceneGraph.add(frog2);
    frog2.name = "frog2";
    let startXFrog2 = xf2;
    startsXFrogs.push(startXFrog2);
    let startZFrog2 = zf2;
    startsZFrogs.push(startZFrog2);

    // create main character
    var personObj = new Person();
    var person = personObj.createPerson();
    sceneGraph.add(person);

    // set position of person - base on the plane
    // person.translateY(10);

    // set shadow property
    // person.castShadow = true;
    // person.receiveShadow = true;

}

// animation

function computeFrame() {

    // sceneElements.controls.update(0.3); // update first camera controls;

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

    // animations
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

    const timeControls = performance.now();

    if (sceneElements.controls.isLocked === true) {

        const delta = (timeControls - prevTime) / 1000;

        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;

        velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

        direction.z = Number(moveForward) - Number(moveBackward);
        direction.x = Number(moveRight) - Number(moveLeft);
        direction.normalize(); // this ensures consistent movements in all directions

        if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
        if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

        sceneElements.controls.moveRight(- velocity.x * delta);
        sceneElements.controls.moveForward(- velocity.z * delta);

        sceneElements.controls.getObject().position.y += (velocity.y * delta); // new behavior

        if (sceneElements.controls.getObject().position.y < 80) {

            velocity.y = 0;
            sceneElements.controls.getObject().position.y = 80;

            canJump = false;

        }

        if (
            sceneElements.controls.getObject().position.x >= floorSize / 2 - (1 + 1)
        ) {
            velocity.x = 0;
            sceneElements.controls.getObject().position.x = floorSize / 2 - (1 + 1);

            canJump = false;
        }

        else if (
            sceneElements.controls.getObject().position.x <= - floorSize / 2 + (1 + 1)
        ) {
            velocity.x = 0;
            sceneElements.controls.getObject().position.x = - floorSize / 2 + (1 + 1);

            canJump = false;
        }

        if (
            sceneElements.controls.getObject().position.z >= floorSize / 2 - (1 + 1)
        ) {
            velocity.z = 0;
            sceneElements.controls.getObject().position.z = floorSize / 2 - (1 + 1);

            canJump = false;
        }

        else if (
            sceneElements.controls.getObject().position.z <= - floorSize / 2 + (1 + 1)
        ) {
            velocity.z = 0;
            sceneElements.controls.getObject().position.z = - floorSize / 2 + (1 + 1);

            canJump = false;
        }

    }

    prevTime = timeControls;

    // rendering
    helper.render(sceneElements);
}