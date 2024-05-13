// import { FirstPersonControls } from 'https://threejs.org/examples/jsm/controls/FirstPersonControls.js';
// import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';

export const helper = {

    initEmptyScene: function (sceneElements) {

        // create scene
        sceneElements.sceneGraph = new THREE.Scene();
        sceneElements.sceneGraph.background = new THREE.Color(0xeeb245)
        // sceneElements.sceneGraph.fog = new THREE.Fog(0xffe680, 0, 0)

        // add camera
        const width = window.innerWidth;
        const height = window.innerHeight;
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 20000);
        camera.position.x = 3;
        camera.position.y = 1000; // not on the ground
        camera.position.z = 3100;
        sceneElements.camera = camera;
        // camera.position.set(0, 4, 500);
        // camera.lookAt(0, 10, 0);

        // axes helper
        const axesHelper = new THREE.AxesHelper( 5000 );
        // axesHelper.setColors (new THREE.Color( 0xff0000 ), new THREE.Color( 0xff0000 ), new THREE.Color( 0xff0000 ) )
        
        sceneElements.sceneGraph.add(axesHelper);

        // ilumination
        const ambientLight = new THREE.AmbientLight('rgb(255, 255, 255)', 0.5); // ambient light
        sceneElements.sceneGraph.add(ambientLight);

        // sun light
        const spotSunLight = new THREE.SpotLight('rgb(255, 255, 255)', 1, 8000, Math.PI / 2.5); // spotlight + shadows
        spotSunLight.decay = 1;
        spotSunLight.position.set(0, 4000, 0);
        sceneElements.sceneGraph.add(spotSunLight);

        const spotLightHelper = new THREE.SpotLightHelper( spotSunLight );
        // sceneElements.sceneGraph.add( spotLightHelper );

        // setup shadow properties for the spotlight
        spotSunLight.castShadow = true;
        spotSunLight.shadow.mapSize.width = 2048;
        spotSunLight.shadow.mapSize.height = 2048;

        // give a name to the spot light
        spotSunLight.name = "light_sun";

        // moon light
        const spotMoonLight = new THREE.SpotLight('rgb(255, 255, 255)', 0.1, 1500, Math.PI / 2.5); // spotlight + shadows
        // spotLight1.decay = 1;
        spotMoonLight.position.set(0, -2700, 0);
        sceneElements.sceneGraph.add(spotMoonLight);

        const spotMoonHelper = new THREE.SpotLightHelper( spotMoonLight );
        // sceneElements.sceneGraph.add( spotMoonHelper );

        // setup shadow properties for the spotlight
        spotMoonLight.castShadow = true;
        spotMoonLight.shadow.mapSize.width = 2048;
        spotMoonLight.shadow.mapSize.height = 2048;

        // give a name to the spot light
        spotMoonLight.name = "light_moon";

        // create render
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        sceneElements.renderer = renderer;
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor('rgb(255, 255, 150)', 1.0);
        renderer.setSize(width, height);

        // with and setup shadowMap property
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // add the rendered image in the HTML DOM
        const htmlElement = document.querySelector("#SceneGame");
        htmlElement.appendChild(renderer.domElement);

        // control for the camera

        // pointer lock
        // sceneElements.control = new THREE.PointerLockControls(camera, renderer.domElement);

        // first person
        // sceneElements.control = new THREE.FirstPersonControls(camera, renderer.domElement);
        // sceneElements.control.enabled = true;
        // sceneElements.control.activeLook = true;
        // // sceneElements.control.movementSpeed = 1.5;
        // // sceneElements.control.lookSpeed = 0.01;
        // sceneElements.control.constrainVertical = true;
        // sceneElements.control.verticalMin = Math.PI / 1.7;
        // sceneElements.control.verticalMax = Math.PI / 2.3;

        // orbit
        sceneElements.control = new THREE.OrbitControls(camera, renderer.domElement);
        sceneElements.control.screenSpacePanning = true;
        
    }, 

    render: function (sceneElements) {
        sceneElements.renderer.render(sceneElements.sceneGraph, sceneElements.camera);
    },
};