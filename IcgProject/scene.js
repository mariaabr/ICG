// store the scene graph, and elements usefull to rendering the scene
const sceneElements = {
    sceneGraph: null,
    camera: null,
    control: null,  // NEW
    renderer: null,
};

let stars;

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
    const planeGeometry = new THREE.BoxGeometry(5000, 5000, 7);
    const planeMaterial = new THREE.MeshPhongMaterial({ color: 0x88b257, side: THREE.DoubleSide });
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

    // create main character
    var personObj = new Person();
    var person = personObj.createPerson();
    sceneGraph.add(person);
    person.name = "filsons";

    // set position of person - base on the plane
    person.translateY(4.3);

    // set shadow property
    person.castShadow = true;
    person.receiveShadow = true;

}

// animation

// displacement values
var delta = 0.1;
var disp = 0.2, fallSpeed = 0;
var previousTime = performance.now();
var armAngle, legAngle = 0;

function computeFrame() {

    sceneElements.control.update(0.3); // update first camera control

    var deltaTime = performance.now() - previousTime;
    previousTime = performance.now();

    // can extract an object from the scene Graph from its name

    // const stars = sceneElements.sceneGraph.getObjectByName("stars");;

    const sun = sceneElements.sceneGraph.getObjectByName("sun");
    const planetPos = new THREE.Vector3();
    const sunPos = sun.getWorldPosition(planetPos);

    // get sunlight and rotate
    const sunlight = sceneElements.sceneGraph.getObjectByName("sunPivotRotation");
    sunlight.rotation.x -= 0.005;

    // const moon = sceneElements.sceneGraph.getObjectByName("moon");
    // const planet2Pos = new THREE.Vector3();
    // const moonPos = sun.getWorldPosition(planet2Pos);

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

    // controling with the keyboard

    const person = sceneElements.sceneGraph.getObjectByName("filsons");

    if (keyD && person.position.x < 5095) {
        // person.translateZ(disp);
        // armAngle += 0.1;
        // person.moveArms(armAngle);
        // legAngle += 0.1;
        // person.moveLegs(legAngle);
        rotate(deltaTime, -Math.PI / 2, person); // Rotate 180 degrees to the right
    }
    if (keyW && person.position.z > -5095) {
        // person.translateZ(disp);
        // armAngle += 0.1;
        // person.moveArms(armAngle);
        // legAngle += 0.1;
        // person.moveLegs(legAngle);
        rotate(deltaTime, 0, person); // Rotate 180 degrees to the left
    }
    if (keyA && person.position.x > -5095) {
        // person.translateZ(disp);
        // armAngle += 0.1;
        // person.moveArms(armAngle);
        // legAngle += 0.1;
        // person.moveLegs(legAngle);
        rotate(deltaTime, Math.PI / 2, person); // Rotate 180 degrees to the right
    }
    if (keyS && person.position.z < 5095) {
        // person.translateZ(disp);
        // armAngle += 0.1;
        // person.moveArms(armAngle);
        // legAngle += 0.1;
        // person.moveLegs(legAngle);
        rotate(deltaTime, Math.PI, person); // Rotate 180 degrees to the left
    }

    // if (keySpace) { // jump
    //     fallSpeed = -10;
    // }

    // gravity
    // person.position.y += fallSpeed;
    // fallSpeed += 0.5;

    // limit fall
    // if (person.position.y < 0) {
    //     person.position.y = 0;
    //     fallSpeed = 0;
    // }

    // rendering
    helper.render(sceneElements);

    // animation
    // call for the next frame
    requestAnimationFrame(computeFrame);
}

function rotate(dts, angle, person) {
    var t = 0;
    const rotationSpeed = 0.01;

    const animateRotation = () => {
        t += rotationSpeed * dts;

        if (t >= 1) {
            t = 1; // Clamp t to ensure it doesn't exceed 1
        }

        const qb = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle);

        person.quaternion.slerp(qb, t);

        if (t < 1) {
            requestAnimationFrame(animateRotation); // Continue animation if not finished
        }
    };

    requestAnimationFrame(animateRotation);
}