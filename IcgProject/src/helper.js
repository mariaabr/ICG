const helper = {

    initEmptyScene: function (sceneElements) {

        // create scene
        sceneElements.sceneGraph = new THREE.Scene();

        // add camera
        const width = window.innerWidth;
        const height = window.innerHeight;
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 500);
        sceneElements.camera = camera;
        camera.position.set(0, 5, 5);
        camera.lookAt(0, 0, 0);

        // ilumination
        const ambientLight = new THREE.AmbientLight('rgb(255, 255, 255)', 0.5); // ambient light
        sceneElements.sceneGraph.add(ambientLight);

        // sun light
        const spotSunLight = new THREE.SpotLight('rgb(255, 255, 255)', 1, 600, Math.PI / 3); // spotlight + shadows
        // spotLight1.decay = 1;
        spotSunLight.position.set(-5, 800, 0);
        sceneElements.sceneGraph.add(spotSunLight);

        // setup shadow properties for the spotlight
        spotSunLight.castShadow = true;
        spotSunLight.shadow.mapSize.width = 2048;
        spotSunLight.shadow.mapSize.height = 2048;

        // Give a name to the spot light
        spotSunLight.name = "light 1 sun";

        // const moonLight = new THREE.SpotLight(0xffffff, 0.05, 0, 2);
        // moonLight.position.set(0, -2400, 0);
        // sceneElements.sceneGraph.add(moonLight);

        // // Setup shadow properties for the moonlight
        // moonLight.castShadow = true;
        // moonLight.shadow.mapSize.width = 2048;
        // moonLight.shadow.mapSize.height = 2048;

        // moonLight.name = "moonlight";

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
        const htmlElement = document.querySelector("#Tag3DScene");
        htmlElement.appendChild(renderer.domElement);

        // control for the camera
        sceneElements.control = new OrbitControls(camera, renderer.domElement);
        sceneElements.control.screenSpacePanning = true;

    },

    render: function (sceneElements) {
        sceneElements.renderer.render(sceneElements.sceneGraph, sceneElements.camera);
    },
};