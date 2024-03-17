// store the scene graph, and elements usefull to rendering the scene
const sceneElements = {
    sceneGraph: null,
    camera: null,
    control: null,  // NEW
    renderer: null,
};

// initialize scene
helper.initEmptyScene(sceneElements);
scene.load3DObjects(sceneElements.sceneGraph);
requestAnimationFrame(computeFrame);

// events listeners

window.addEventListener('resize', resizeWindow);

//To keep track of the keyboard - WASD
var keyD = false, keyA = false, keyS = false, keyW = false;
document.addEventListener('keydown', onDocumentKeyDown, false);
document.addEventListener('keyup', onDocumentKeyUp, false);

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
        case 83: //s
            keyS = true;
            break;
        case 65: //a
            keyA = true;
            break;
        case 87: //w
            keyW = true;
            break;
    }
}

function onDocumentKeyUp(event) {
    switch (event.keyCode) {
        case 68: //d
            keyD = false;
            break;
        case 83: //s
            keyS = false;
            break;
        case 65: //a
            keyA = false;
            break;
        case 87: //w
            keyW = false;
            break;
    }
}

// building the scene
// create and insert in the scene graph the models of the 3D scene

function load3DObjects (sceneGraph) {

    // ground plane
    const planeGeometry = new THREE.PlaneGeometry(8000, 8000);
    const planeMaterial = new THREE.MeshPhongMaterial({ color: 0x88b257, side: THREE.DoubleSide });
    const planeObject = new THREE.Mesh(planeGeometry, planeMaterial);
    sceneGraph.add(planeObject);

    // change orientation of the plane using rotation
    planeObject.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
    // set shadow property
    planeObject.receiveShadow = true;

    // create sun and add pivot light
    const sun = createSun(0, 6800, 0);
    sceneGraph.add(sun);

    const sunPivotRotation = new THREE.Object3D();
    sunPivotRotation.add(sceneElements.sceneGraph.getObjectByName("light 1 sun"));
    sunPivotRotation.add(sun);
    sceneElements.sceneGraph.add(sunPivotRotation)
    sunPivotRotation.name = "sunPivotRotation"

    // create cube - center (0, 0, 0)
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshPhongMaterial({ color: 'rgb(255, 255, 255)' });
    const cubeObject = new THREE.Mesh(cubeGeometry, cubeMaterial);
    sceneGraph.add(cubeObject);

    // set position of the cube
    // the base of the cube will be on the plane 
    cubeObject.translateY(0.5);

    // set shadow property
    cubeObject.castShadow = true;
    cubeObject.receiveShadow = true;

    cubeObject.name = "cube"; // name
}

// animation

// displacement values
var delta = 0.1;
var dispX = 0.2, dispZ = 0.2;


function computeFrame() {

    // can extract an object from the scene Graph from its name

    const sun = sceneElements.sceneGraph.getObjectByName("sun");
    const planet = new THREE.Vector3();
    const sunpos = sun.getWorldPosition(worldPosition);

    // get sunlight
    const sunlight = sceneElements.sceneGraph.getObjectByName("light 1 sun");

    if (sunpos.y > 25) { // day

        sceneElements.sceneGraph.remove(stars);

        createjs.Tween.get(sceneElements.sceneGraph.background).to(new THREE.Color(0x91c3ed), 1200);
        createjs.Tween.get(sceneElements.sceneGraph.fog).to(new THREE.Fog(0xffe680, 2500, 12000));

        sunlight.intensity = 1;
    } else if (sunpos.y > 0 && sunpos > 25) { // sunset or sunrise

        // someting will happend
        sceneElements.sceneGraph.remove(stars);

        createjs.Tween.get(sceneElements.sceneGraph.background).to(new THREE.Color(0x000000), 1200);
        createjs.Tween.get(sceneElements.sceneGraph.fog).to(new THREE.Fog(0xffe680, 2500, 12000));

    } else { // night

        sceneElements.sceneGraph.add(stars);

        createjs.Tween.get(sceneElements.sceneGraph.background).to(new THREE.Color(0x090f14), 1200);
        createjs.Tween.get(sceneElements.sceneGraph.fog).to(new THREE.Fog(0x1e2733, 1000, 10000));

        sunlight.intensity = 0;
    }

    // controling with the keyboard

    const cube = sceneElements.sceneGraph.getObjectByName("cube");

    if (keyD && cube.position.x < 195.5) {
        cube.translateX(dispX);
    }
    if (keyW && cube.position.z > -195.5) {
        cube.translateZ(-dispZ);
    }
    if (keyA && cube.position.x > -195.5) {
        cube.translateX(-dispX);
    }
    if (keyS && cube.position.z < 195.5) {
        cube.translateZ(dispZ);
    }

    // rendering
    helper.render(sceneElements);

    // animation
    // call for the next frame
    requestAnimationFrame(computeFrame);
}