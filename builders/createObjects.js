import { loadTree1 } from './loadModels.js';
import { loadTree2 } from './loadModels.js';
import { loadTree3 } from './loadModels.js';
import { loadBush } from './loadModels.js';
import { loadBush2 } from './loadModels.js';
import { loadMountain1 } from './loadModels.js';
import { loadMountain2 } from './loadModels.js';
import { loadStone1 } from './loadModels.js';
import { loadStone2 } from './loadModels.js';
import { loadStone3 } from './loadModels.js';
import { loadStone4 } from './loadModels.js';
import { loadTrunk1 } from './loadModels.js';
import { loadTrunk2 } from './loadModels.js';
import { loadFlowersDaisySunflower } from './loadModels.js';
import { loadFlowersGrass } from './loadModels.js';
import { loadFlowersLinen } from './loadModels.js';
import { loadFlowerRose } from './loadModels.js';
import { loadFlowerTulip } from './loadModels.js';
import { loadMushroom } from './loadModels.js';
import { loadDeer1 } from './loadModels.js';
import { loadDeer2 } from './loadModels.js';
import { loadDeer3 } from './loadModels.js';

export function createSun(posx, posy, posz) { // create sun
    const texture = new THREE.TextureLoader().load("resources/suntexture.jpeg")
    const geometry = new THREE.SphereGeometry(150, 64, 64);
    const material = new THREE.MeshBasicMaterial({ map: texture, color: 0xfaff61 });
    // const material = new THREE.MeshBasicMaterial({ color: 0xfaff61 });

    const sun = new THREE.Mesh(geometry, material);
    sun.position.set(posx, posy, posz);
    sun.name = "sun";

    return sun;
}

export function createMoon(posx, posy, posz) { // create moon
    const texture = new THREE.TextureLoader().load("resources/moontexture.jpg")
    const geometry = new THREE.SphereGeometry(100, 64, 64);
    const material = new THREE.MeshBasicMaterial({ map: texture, color: 0xb0afae });
    // const material = new THREE.MeshBasicMaterial({ color: 0xb0afae });

    const moon = new THREE.Mesh(geometry, material);
    moon.position.set(posx, posy, posz);
    moon.name = "moon";

    return moon;
}

export function createTree1(posx, posy, posz) { // create tree1
    const tree1 = loadTree1();
    tree1.position.x = posx;
    tree1.position.y = posy;
    tree1.position.z = posz;

    tree1.name = "tree1";

    return tree1;
    // sceneGraph.add(tree1);
}

export function createTree2(posx, posy, posz) { // create tree2
    const tree2 = loadTree2();
    tree2.position.x = posx;
    tree2.position.y = posy;
    tree2.position.z = posz;

    tree2.name = "tree2";

    return tree2;
}

export function createTree3(posx, posy, posz) { // create tree3
    const tree3 = loadTree3();
    tree3.position.x = posx;
    tree3.position.y = posy;
    tree3.position.z = posz;

    tree3.name = "tree3";

    return tree3;
}

export function createBush(posx, posy, posz) { // create bush
    const bush = loadBush();
    bush.position.x = posx;
    bush.position.y = posy;
    bush.position.z = posz;

    bush.name = "bush";

    return bush;
}

export function createBush2(posx, posy, posz) { // create bush2
    const bush2 = loadBush2();
    bush2.position.x = posx;
    bush2.position.y = posy;
    bush2.position.z = posz;

    bush2.name = "bush2";

    return bush2;
}

export function createMountain1(posx, posy, posz) { // create mountain1
    const mountain1 = loadMountain1();
    mountain1.position.x = posx;
    mountain1.position.y = posy;
    mountain1.position.z = posz;

    mountain1.name = "mountain1";

    return mountain1;
}

export function createMountain2(posx, posy, posz) { // create mountain2
    const mountain2 = loadMountain2();
    mountain2.position.x = posx;
    mountain2.position.y = posy;
    mountain2.position.z = posz;

    mountain2.name = "mountain2";

    return mountain2;
}

export function createStone1(posx, posy, posz) { // create stone1
    const stone1 = loadStone1();
    stone1.position.x = posx;
    stone1.position.y = posy;
    stone1.position.z = posz;

    stone1.name = "stone1";

    return stone1;
}

export function createStone2(posx, posy, posz) { // create stone2
    const stone2 = loadStone2();
    stone2.position.x = posx;
    stone2.position.y = posy;
    stone2.position.z = posz;

    stone2.name = "stone2";

    return stone2;
}

export function createStone3(posx, posy, posz) { // create stone3
    const stone3 = loadStone3();
    stone3.position.x = posx;
    stone3.position.y = posy;
    stone3.position.z = posz;

    stone3.name = "stone3";

    return stone3;
}

export function createStone4(posx, posy, posz) { // create stone4
    const stone4 = loadStone4();
    stone4.position.x = posx;
    stone4.position.y = posy;
    stone4.position.z = posz;

    stone4.name = "stone4";

    return stone4;
}

export function createTrunk1(posx, posy, posz) { // create trunk1
    const trunk1 = loadTrunk1();
    trunk1.position.x = posx;
    trunk1.position.y = posy;
    trunk1.position.z = posz;

    trunk1.name = "trunk1";

    return trunk1;
}

export function createTrunk2(posx, posy, posz) { // create trunk2
    const trunk2 = loadTrunk2();
    trunk2.position.x = posx;
    trunk2.position.y = posy;
    trunk2.position.z = posz;

    trunk2.name = "trunk2";

    return trunk2;
}

export function createTrunk3(posx, posy, posz) { // create trunk3
    const texture = new THREE.TextureLoader().load("resources/woodtexture.jpg")
    const geometry = new THREE.CylinderGeometry(4.5, 5.5, 4.8, 10);
    const material = new THREE.MeshBasicMaterial({ map: texture, color: 0x422600 });
    const trunk3 = new THREE.Mesh(geometry, material);

    trunk3.scale.set(5, 5, 5);
    
    trunk3.position.x = posx;
    trunk3.position.y = posy;
    trunk3.position.z = posz;

    trunk3.name = "trunk3";

    return trunk3;
}

export function createFlowersDaisySunflower(posx, posy, posz) { // create daisySunflower
    const daisySunflower = loadFlowersDaisySunflower();
    daisySunflower.position.x = posx;
    daisySunflower.position.y = posy;
    daisySunflower.position.z = posz;

    daisySunflower.name = "daisySunflower";
    
    return daisySunflower;
}

export function createFlowersGrass(posx, posy, posz) { // create flowersGrass
    const flowersGrass = loadFlowersGrass();
    flowersGrass.position.x = posx;
    flowersGrass.position.y = posy;
    flowersGrass.position.z = posz;

    flowersGrass.name = "flowersGrass";

    return flowersGrass;
}

export function createFlowersLinen(posx, posy, posz) { // create flowersLinen
    const flowersLinen = loadFlowersLinen();
    flowersLinen.position.x = posx;
    flowersLinen.position.y = posy;
    flowersLinen.position.z = posz;

    flowersLinen.name = "flowersLinen";

    return flowersLinen;
}

export function createFlowerRose(posx, posy, posz) { // create flowerRose
    const flowerRose = loadFlowerRose();
    flowerRose.position.x = posx;
    flowerRose.position.y = posy;
    flowerRose.position.z = posz;

    flowerRose.name = "flowerRose";

    return flowerRose;
}

export function createFlowerTulip(posx, posy, posz) { // create flowerTulip
    const flowerTulip = loadFlowerTulip();
    flowerTulip.position.x = posx;
    flowerTulip.position.y = posy;
    flowerTulip.position.z = posz;

    flowerTulip.name = "flowerTulip";

    return flowerTulip;
}

export function createMushroom(posx, posy, posz) { // create mushroom
    const mushroom = loadMushroom();
    mushroom.position.x = posx;
    mushroom.position.y = posy;
    mushroom.position.z = posz;

    mushroom.name = "mushroom";

    return mushroom;
}

export function createWoodFence(posx, posy, posz) { // create fence
    const fence = new THREE.Group();

    const texture = new THREE.TextureLoader().load("resources/woodtexture.jpg");

    const woodMaterial = new THREE.MeshBasicMaterial({ map:texture, color: 0x8b4513 });
    const postGeometry = new THREE.BoxGeometry(0.1, 2, 0.1);

    for (let i = 0; i < 5; i++) {
        const post = new THREE.Mesh(postGeometry, woodMaterial);
        post.position.set(i * 2 - 4, 1, 0);
        fence.add(post);
    }

    const boardMaterial = new THREE.MeshBasicMaterial({ map:texture, color: 0xcd853f });
    const boardGeometry = new THREE.BoxGeometry(10, 0.2, 0.1);

    for (let i = 0; i < 5; i++) {
        const board = new THREE.Mesh(boardGeometry, boardMaterial);
        board.position.set(0, i * 0.5, 0);
        fence.add(board);
    }

    fence.scale.set(15, 15, 15);

    fence.position.x = posx;
    fence.position.y = posy;
    fence.position.z = posz;

    fence.name = "fence";
    
    return fence;
}

export function createLake( posx, posy, posz) { // create lake
    const water = new THREE.Group();

    const texture = new THREE.TextureLoader().load("resources/laketexture2.jpeg");

    // water
    const geometryb = new THREE.BoxGeometry( 300, 700, 0 ); 
    const materialb = new THREE.MeshBasicMaterial( { map:texture, color: 0x71b6f7 } ); 
    const box = new THREE.Mesh( geometryb, materialb );
    box.rotation.z = -Math.PI / 2;

    water.add( box );

    const geometryc = new THREE.CircleGeometry( 250, 32 );
    const materialc = new THREE.MeshBasicMaterial( { map:texture, color: 0x71b6f7 } );
    const circle = new THREE.Mesh( geometryc, materialc );
    circle.position.x = -300;

    water.add( circle );

    water.rotation.x = -Math.PI / 2;

    // let material = new THREE.MeshLambertMaterial({ color:  0x71b6f7 });
    // let water = new THREE.Mesh(boxGeo, material);
    water.receiveShadow = true;

    // water.scale.set(7, 7, 0);

    water.position.x = posx;
    water.position.y = posy;
    water.position.z = posz;

    // // waterfall particles
    // let dropCount = 100;
    // let drops = [];

    // // water details
    // let detailCount = 24;
    // let dets = [];
    // let detailCount2 = 8;
    // let dets2 = [];

    // // creating particles function
    // let particleGeo, particleMat, particle;
    // const createParticles = (color, particleAmount, particleArray, scaleX, scaleY, scaleZ, posX, posX2, posY, posY2, posZ, posZ2, opacity, rotX, rotY, rotZ) => {
    //     particleGeo = new THREE.BoxBufferGeometry();
    //     particleMat = new THREE.MeshLambertMaterial({
    //         color: color,
    //         transparent: true });

    //     for (let i = 0; i < particleAmount; i++) {
    //         particle = new THREE.Mesh(particleGeo, particleMat);
    //         islandGroup.add(particle);
    //         particleArray.push(particle);
    //         particle.scale.set(scaleX, scaleY, scaleZ);
    //         particle.position.set(THREE.Math.randFloat(posX, posX2), THREE.Math.randFloat(posY, posY2), THREE.Math.randFloat(posZ, posZ2));
    //         particle.material.opacity = opacity;
    //         particle.rotation.set(rotX, THREE.Math.degToRad(rotY), rotZ);
    //     }
    // }
    
    water.name = "water";
    
    return water;
}

export function createDeer1(posx, posy, posz) { // create deer1
    const deer1 = loadDeer1();
    deer1.position.x = posx;
    deer1.position.y = posy;
    deer1.position.z = posz;

    deer1.name = "deer1";

    return deer1;
}

export function createDeer2(posx, posy, posz) { // create deer2
    const deer2 = loadDeer2();
    deer2.position.x = posx;
    deer2.position.y = posy;
    deer2.position.z = posz;

    deer2.name = "deer2";

    return deer2;
}

export function createDeer3(posx, posy, posz) { // create deer3
    const deer3 = loadDeer3();
    deer3.position.x = posx;
    deer3.position.y = posy;
    deer3.position.z = posz;

    deer3.name = "deer3";

    return deer3;
}

export function createBunny1(posx, posy, posz) { // create bunny1
    const bunny1 = new THREE.Group();

    const texture = new THREE.TextureLoader().load("resources/bunnytexture.jpeg");
    // const material = new THREE.MeshBasicMaterial({ map:texture, color: 0xb48e44 });
    const material = new THREE.MeshBasicMaterial({ map:texture, color: 0xffffff });

    const bodybox = new THREE.BoxGeometry( 15, 15, 15 );
    const earbox = new THREE.BoxGeometry( 5, 10, 2 );

    const earsoftmaterial = new THREE.MeshBasicMaterial({ map:texture, color: 0xec7968 });
    const earsoftbox = new THREE.BoxGeometry( 3, 8, 1);

    const eyematerial = new THREE.MeshBasicMaterial({ color: 0x1c2115 });
    const eyeshpere = new THREE.SphereGeometry( 2, 32, 16);

    const nosecone = new THREE.ConeGeometry( 2, 3, 21 ); 
    const nosematerial = new THREE.MeshBasicMaterial( { map:texture, color: 0xec7968 } );

    const body = new THREE.Mesh(bodybox, material);
    bunny1.add(body);

    for (let i = 0; i < 2; i++) {
        const ear = new THREE.Mesh(earbox, material);
        ear.position.set(i * 10 - 5, 12, 3);

        const earsoft = new THREE.Mesh(earsoftbox, earsoftmaterial);
        earsoft.position.set(i * 10 - 5, 12, 4);

        bunny1.add(ear);
        bunny1.add(earsoft);
    }

    for (let i = 0; i < 2; i++) {
        const eye = new THREE.Mesh(eyeshpere, eyematerial);
        eye.position.set(i * 8 - 4, 5, 7);
        bunny1.add(eye);
    }

    const nose = new THREE.Mesh(nosecone, nosematerial);
    nose.position.set(0, 0, 7);
    nose.rotation.z = Math.PI;
    bunny1.add(nose);

    bunny1.position.x = posx;
    bunny1.position.y = posy;
    bunny1.position.z = posz;

    bunny1.name = "bunny1";

    return bunny1;
}

export function createBunny2(posx, posy, posz) { // create bunny2
    const bunny2 = new THREE.Group();

    const texture = new THREE.TextureLoader().load("resources/bunnytexture.jpeg");
    
    // const material = new THREE.MeshBasicMaterial({ map:texture, color: 0xb48e44 });
    const material = new THREE.MeshBasicMaterial({ map:texture, color: 0xb6b6b4 });

    const bodybox = new THREE.BoxGeometry( 15, 15, 15 );
    const earbox = new THREE.BoxGeometry( 5, 10, 2 );

    const earsoftmaterial = new THREE.MeshBasicMaterial({ map:texture, color: 0xec7968 });
    const earsoftbox = new THREE.BoxGeometry( 3, 8, 1);

    const eyematerial = new THREE.MeshBasicMaterial({ color: 0x1c2115 });
    const eyeshpere = new THREE.SphereGeometry( 2, 32, 16);

    const nosecone = new THREE.ConeGeometry( 2, 3, 21 ); 
    const nosematerial = new THREE.MeshBasicMaterial( { map:texture, color: 0xec7968 } );

    const body = new THREE.Mesh(bodybox, material);
    bunny2.add(body);

    for (let i = 0; i < 2; i++) {
        const ear = new THREE.Mesh(earbox, material);
        ear.position.set(i * 10 - 5, 12, 3);

        const earsoft = new THREE.Mesh(earsoftbox, earsoftmaterial);
        earsoft.position.set(i * 10 - 5, 12, 4);

        bunny2.add(ear);
        bunny2.add(earsoft);
    }

    for (let i = 0; i < 2; i++) {
        const eye = new THREE.Mesh(eyeshpere, eyematerial);
        eye.position.set(i * 8 - 4, 5, 7);
        bunny2.add(eye);
    }

    const nose = new THREE.Mesh(nosecone, nosematerial);
    nose.position.set(0, 0, 7);
    nose.rotation.z = Math.PI;
    bunny2.add(nose);

    bunny2.position.x = posx;
    bunny2.position.y = posy;
    bunny2.position.z = posz;

    bunny2.name = "bunny2";

    return bunny2;
}

export function createBunny3(posx, posy, posz) { // create bunny3
    const bunny3 = new THREE.Group();

    const texture = new THREE.TextureLoader().load("resources/bunnytexture.jpeg");
    // const material = new THREE.MeshBasicMaterial({ map:texture, color: 0xb48e44 });
    const material = new THREE.MeshBasicMaterial({ map:texture, color: 0xe5bb8b });

    const bodybox = new THREE.BoxGeometry( 15, 15, 15 );
    const earbox = new THREE.BoxGeometry( 5, 10, 2 );

    const earsoftmaterial = new THREE.MeshBasicMaterial({ map:texture, color: 0xec7968 });
    const earsoftbox = new THREE.BoxGeometry( 3, 8, 1);

    const eyematerial = new THREE.MeshBasicMaterial({ color: 0x1c2115 });
    const eyeshpere = new THREE.SphereGeometry( 2, 32, 16);

    const nosecone = new THREE.ConeGeometry( 2, 3, 21 ); 
    const nosematerial = new THREE.MeshBasicMaterial( { map:texture, color: 0xec7968 } );

    const body = new THREE.Mesh(bodybox, material);
    bunny3.add(body);

    for (let i = 0; i < 2; i++) {
        const ear = new THREE.Mesh(earbox, material);
        ear.position.set(i * 10 - 5, 12, 3);

        const earsoft = new THREE.Mesh(earsoftbox, earsoftmaterial);
        earsoft.position.set(i * 10 - 5, 12, 4);

        bunny3.add(ear);
        bunny3.add(earsoft);
    }

    for (let i = 0; i < 2; i++) {
        const eye = new THREE.Mesh(eyeshpere, eyematerial);
        eye.position.set(i * 8 - 4, 5, 7);
        bunny3.add(eye);
    }

    const nose = new THREE.Mesh(nosecone, nosematerial);
    nose.position.set(0, 0, 7);
    nose.rotation.z = Math.PI;
    bunny3.add(nose);

    bunny3.position.x = posx;
    bunny3.position.y = posy;
    bunny3.position.z = posz;

    bunny3.name = "bunny3";

    return bunny3;
}

export function createFrog1(posx, posy, posz) { // create frog1
    const frog1 = new THREE.Group();

    const texture = new THREE.TextureLoader().load("resources/frogtexture.jpg");
    // const material = new THREE.MeshBasicMaterial({ map:texture, color: 0x6ea162 });
    const material = new THREE.MeshBasicMaterial({ map:texture, color: 0x00ff00 });

    const bodybox = new THREE.BoxGeometry( 10, 10, 10 );
    const tonguecone = new THREE.ConeGeometry( 1.5, 2, 21 );

    // const earsoftmaterial = new THREE.MeshBasicMaterial({ map:texture, color: 0xec7968 });
    // const earsoftbox = new THREE.BoxGeometry( 3, 8, 1);

    const eyematerial = new THREE.MeshBasicMaterial({ color: 0x1c2115 });
    const eyeshpere = new THREE.SphereGeometry( 1, 32, 16);

    const facesphere = new THREE.SphereGeometry( 0.5, 32, 16);
    const facematerial = new THREE.MeshBasicMaterial( { map:texture, color: 0xec7968 } );

    const ballmaterial = new THREE.MeshBasicMaterial({ map:texture, color: 0xffff00 });
    const ballsphere = new THREE.SphereGeometry(2, 16, 16);

    const body = new THREE.Mesh(bodybox, material);
    frog1.add(body);

    for (let i = 0; i < 2; i++) {
        const ball = new THREE.Mesh(ballsphere, ballmaterial);

        const x = Math.random() * 6 - 2;
        const y = Math.random() * 6 - 2;
        ball.position.set(x, y, -3.5);

        frog1.add(ball);
    }

    for (let i = 0; i < 3; i++) {
        const ball = new THREE.Mesh(ballsphere, ballmaterial);

        const y = Math.random() * 6 - 2;
        const z = Math.random() * 6 - 2;
        ball.position.set(3.5, y, z);

        frog1.add(ball);
    }

    for (let i = 0; i < 3; i++) {
        const ball = new THREE.Mesh(ballsphere, ballmaterial);

        const y = Math.random() * 6 - 2;
        const z = Math.random() * 6 - 2;
        ball.position.set(-3.5, y, z);

        frog1.add(ball);
    }

    for (let i = 0; i < 2; i++) {
        const ball = new THREE.Mesh(ballsphere, ballmaterial);

        const x = Math.random() * 6 - 2;
        const z = Math.random() * 6 - 2;
        ball.position.set(x, 3.5, z);

        frog1.add(ball);
    }

    const tongue = new THREE.Mesh(tonguecone, facematerial);
    tongue.position.set(2, -2, 4);
    tongue.rotation.z = - Math.PI/4;

    frog1.add(tongue);

    for (let i = 0; i < 2; i++) {
        const eye = new THREE.Mesh(eyeshpere, eyematerial);
        eye.position.set(i * 4 - 2, 1.5, 5);
        frog1.add(eye);
    }

    for (let i = 0; i < 2; i++) {
        const face = new THREE.Mesh(facesphere, facematerial);
        face.position.set(i * 7 - 3.5, 0.5, 5);
        frog1.add(face);
    }

    frog1.position.x = posx;
    frog1.position.y = posy;
    frog1.position.z = posz;

    frog1.name = "frog1";

    return frog1;
}

export function createFrog2(posx, posy, posz) { // create frog2
    const frog2 = new THREE.Group();

    const texture = new THREE.TextureLoader().load("resources/frogtexture.jpg");
    // const material = new THREE.MeshBasicMaterial({ map:texture, color: 0x6ea162 });
    const material = new THREE.MeshBasicMaterial({ map:texture, color: 0x79e85f });

    const bodybox = new THREE.BoxGeometry( 10, 10, 10 );
    const tonguecone = new THREE.ConeGeometry( 1.5, 2, 21 );

    // const earsoftmaterial = new THREE.MeshBasicMaterial({ map:texture, color: 0xec7968 });
    // const earsoftbox = new THREE.BoxGeometry( 3, 8, 1);

    const eyematerial = new THREE.MeshBasicMaterial({ color: 0x1c2115 });
    const eyeshpere = new THREE.SphereGeometry( 1, 32, 16);

    const facesphere = new THREE.SphereGeometry( 0.5, 32, 16);
    const facematerial = new THREE.MeshBasicMaterial( { map:texture, color: 0xec7968 } );

    const ballmaterial = new THREE.MeshBasicMaterial({ map:texture, color: 0xe5b048 });
    const ballsphere = new THREE.SphereGeometry(2, 16, 16);

    const body = new THREE.Mesh(bodybox, material);
    frog2.add(body);

    for (let i = 0; i < 2; i++) {
        const ball = new THREE.Mesh(ballsphere, ballmaterial);

        const x = Math.random() * 6 - 2;
        const y = Math.random() * 6 - 2;
        ball.position.set(x, y, -3.5);

        frog2.add(ball);
    }

    for (let i = 0; i < 3; i++) {
        const ball = new THREE.Mesh(ballsphere, ballmaterial);

        const y = Math.random() * 6 - 2;
        const z = Math.random() * 6 - 2;
        ball.position.set(3.5, y, z);

        frog2.add(ball);
    }

    for (let i = 0; i < 3; i++) {
        const ball = new THREE.Mesh(ballsphere, ballmaterial);

        const y = Math.random() * 6 - 2;
        const z = Math.random() * 6 - 2;
        ball.position.set(-3.5, y, z);

        frog2.add(ball);
    }

    for (let i = 0; i < 2; i++) {
        const ball = new THREE.Mesh(ballsphere, ballmaterial);

        const x = Math.random() * 6 - 2;
        const z = Math.random() * 6 - 2;
        ball.position.set(x, 3.5, z);

        frog2.add(ball);
    }

    const tongue = new THREE.Mesh(tonguecone, facematerial);
    tongue.position.set(2, -2, 4);
    tongue.rotation.z = - Math.PI/4;

    frog2.add(tongue);

    for (let i = 0; i < 2; i++) {
        const eye = new THREE.Mesh(eyeshpere, eyematerial);
        eye.position.set(i * 4 - 2, 1.5, 5);
        frog2.add(eye);
    }

    for (let i = 0; i < 2; i++) {
        const face = new THREE.Mesh(facesphere, facematerial);
        face.position.set(i * 7 - 3.5, 0.5, 5);
        frog2.add(face);
    }

    frog2.position.x = posx;
    frog2.position.y = posy;
    frog2.position.z = posz;

    frog2.name = "frog2";

    return frog2;
}

export function createFireflies() { // create fireflies
    const fireflies = new THREE.Group();

    // light material fireflies
    const material = new THREE.MeshBasicMaterial({ color: 0xb48e44 });
    const geometry = new THREE.SphereGeometry( 1, 64, 32 );

    const lightCount = 50;
    const lightPositions = [];

    for (let i = 0; i < lightCount; i++) {
        // fireflies positions

        const x = Math.random() * -2000 + 250;
        const y = Math.random() * 50 + 100;
        const z = Math.random() * 1950 - 100;

        const firefly = new THREE.Mesh( geometry, material );
        firefly.position.x = x;
        firefly.position.y = y;
        firefly.position.z = z;

        // firefly light
        const pointFireflyLight = new THREE.PointLight(0xb48e44, 1.2, 150);
        pointFireflyLight.position.set(0, 0, 0);

        firefly.add(pointFireflyLight);

        fireflies.add(firefly);
    }

    fireflies.name = "fireflies";
    
    return fireflies;
}

export function createForest1() { // forest with tree1 + tree2 + tree3
    const forest = new THREE.Group();

    // for (let i = 500; i < 1500; i += 150) {
    //     for (let j = -1000; j > -1500; j -= 100) {
    //         const tree1 = createTree1(i, 0, j);
    //         forest.add(tree1);
    //     }
    // }

    // for (let i = 0; i < 20; i++) {
    //     const x = Math.random() * 1000 - 500;
    //     const z = Math.random() * 1000 - 500;

    //     const tree1 = createTree1(x, 0, z);
    //     forest.add(tree1);
    // }

    for (let i = 0; i < 45; i++) {
        // const x = Math.random() * 1000 - 500;
        // const z = Math.random() * 1000 - 500;

        const x = Math.random() * 2000 + 500;
        const z = Math.random() * 1000 - 1500;

        const tree1 = createTree1(x, 0, z);
        forest.add(tree1);
    }

    for (let i = 0; i < 10; i++) {

        const x = Math.random() * 2000 + 500;
        const z = Math.random() * 1000 - 1500;

        const tree2 = createTree2(x, 0, z);
        forest.add(tree2);
    }

    for (let i = 0; i < 5; i++) {

        const x = Math.random() * 2000 + 250;
        const z = Math.random() * 1000 - 1500;

        const tree3 = createTree3(x, 0, z);
        forest.add(tree3);
    }

    return forest;
}

export function createForest2() { // forest with tree1 + tree2 + bush + fireflies
    const forest = new THREE.Group();

    for (let i = 0; i < 30; i++) {

        const x = Math.random() * -2000 + 250;
        const z = Math.random() * 1950 - 100;

        const tree1 = createTree1(x, 0, z);
        forest.add(tree1);
    }

    for (let i = 0; i < 35; i++) {

        const x = Math.random() * -2000 + 250;
        const z = Math.random() * 1950 - 100;

        const tree2 = createTree2(x, 0, z);
        forest.add(tree2);
    }

    for (let i = 0; i < 10; i++) {

        const x = Math.random() * -2000 + 250;
        const z = Math.random() * 1950 - 100;

        const bush = createBush(x, 0, z);
        forest.add(bush);
    }

    for (let i = 0; i < 5; i++) {

        const x = Math.random() * -2000 + 250;
        const z = Math.random() * 1950 - 100;

        const bush2 = createBush2(x, 0, z);
        forest.add(bush2);
    }

    // const fireflies = createFireflies();
    // forest.add(fireflies);

    return forest;
}

export function createForest3() { // forest with tree1 + tree2 + bush
    const forest = new THREE.Group();

    for (let i = 0; i < 15; i++) {

        const x = Math.random() * 1700 - 500;
        const z = Math.random() * 1950 - 100;

        const tree1 = createTree1(x, 0, z);
        forest.add(tree1);
    }

    for (let i = 0; i < 10; i++) {

        const x = Math.random() * 1700 - 500;
        const z = Math.random() * 1950 - 100;

        const tree2 = createTree2(x, 0, z);
        forest.add(tree2);
    }

    for (let i = 0; i < 5; i++) {

        const x = Math.random() * 2000 - 250;
        const z = Math.random() * 1950 - 100;

        const bush = createBush(x, 0, z);
        forest.add(bush);
    }

    for (let i = 0; i < 2; i++) {

        const x = Math.random() * 2000 - 250;
        const z = Math.random() * 1950 - 100;

        const bush2 = createBush2(x, 0, z);
        forest.add(bush2);
    }

    return forest;
}

export function createMountains() { // forest with mountain1 + mountain2
    const mountains = new THREE.Group();

    for (let i = 0; i < 1; i++) {

        const x = Math.random() * -1000 - 700;
        const z = Math.random() * -1700 - 700;

        const mountain1 = createMountain1(x, 0, z);
        mountains.add(mountain1);
    }

    for (let i = 0; i < 2; i++) {

        const x = Math.random() * -1000 - 700;
        const z = Math.random() * -1200 - 1000;

        const mountain2 = createMountain2(x, 0, z);
        mountains.add(mountain2);
    }

    return mountains;
}

export function createForestFill() { // forest with 1 + stone2 + stone3 + stone4 + trunk1 + trunk2 + daisySunflower + flowersGrass + flowersLinen + flowerRose + flowerTulip + mushroom + deer1 + deer2 + deer3
    const forest = new THREE.Group();

    for (let i = 0; i < 10; i++) {

        const x = Math.random() * 3500 - 1500;
        const z = Math.random() * 5000 - 2500;

        const tree1 = createTree1(x, 0, z);
        forest.add(tree1);
    }

    for (let i = 0; i < 10; i++) {

        const x = Math.random() * 3500 - 1500;
        const z = Math.random() * 5000 - 2500;

        const tree2 = createTree2(x, 0, z);
        forest.add(tree2);
    }

    for (let i = 0; i < 5; i++) {

        const x = Math.random() * 3500 - 1500;
        const z = Math.random() * 5000 - 2500;

        const stone1 = createStone1(x, 0, z);
        forest.add(stone1);
    }

    for (let i = 0; i < 2; i++) {

        const x = Math.random() * 3500 - 1500;
        const z = Math.random() * 5000 - 2500;

        const stone2 = createStone2(x, 0, z);
        forest.add(stone2);
    }

    for (let i = 0; i < 4; i++) {

        const x = Math.random() * 3500 - 1500;
        const z = Math.random() * 5000 - 2500;

        const stone3 = createStone3(x, 0, z);
        forest.add(stone3);
    }

    for (let i = 0; i < 5; i++) {

        const x = Math.random() * 3500 - 1500;
        const z = Math.random() * 5000 - 2500;

        const stone4 = createStone4(x, 10, z);
        forest.add(stone4);
    }

    for (let i = 0; i < 5; i++) {

        const x = Math.random() * 3500 - 1500;
        const z = Math.random() * 5000 - 2500;

        const trunk1 = createTrunk1(x, 15, z);
        forest.add(trunk1);
    }

    for (let i = 0; i < 5; i++) {

        const x = Math.random() * 3500 - 1500;
        const z = Math.random() * 5000 - 2500;

        const trunk2 = createTrunk2(x, 0, z);
        forest.add(trunk2);
    }

    for (let i = 0; i < 5; i++) {

        const x = Math.random() * 3500 - 1500;
        const z = Math.random() * 5000 - 2500;

        const trunk3 = createTrunk3(x, 10, z);
        forest.add(trunk3);
    }

    for (let i = 0; i < 5; i++) {

        const x = Math.random() * 3500 - 1500;
        const z = Math.random() * 5000 - 2500;

        const daisySunflower = createFlowersDaisySunflower(x, 0, z);
        forest.add(daisySunflower);
    }

    for (let i = 0; i < 5; i++) {

        const x = Math.random() * 3500 - 1500;
        const z = Math.random() * 5000 - 2500;

        const flowersGrass = createFlowersGrass(x, 0, z);
        forest.add(flowersGrass);
    }

    for (let i = 0; i < 5; i++) {

        const x = Math.random() * 3500 - 1500;
        const z = Math.random() * 5000 - 2500;

        const flowersLinen = createFlowersLinen(x, 0, z);
        forest.add(flowersLinen);
    }

    for (let i = 0; i < 5; i++) {

        const x = Math.random() * 3500 - 1500;
        const z = Math.random() * 5000 - 2500;

        const flowerRose = createFlowerRose(x, 0, z);
        forest.add(flowerRose);
    }

    for (let i = 0; i < 5; i++) {

        const x = Math.random() * 3500 - 1500;
        const z = Math.random() * 5000 - 2500;

        const flowerTulip = createFlowerTulip(x, 0, z);
        forest.add(flowerTulip);
    }

    for (let i = 0; i < 5; i++) {

        const x = Math.random() * 3500 - 1500;
        const z = Math.random() * 5000 - 2500;

        const mushroom = createMushroom(x, 0, z);
        forest.add(mushroom);
    }

    for (let i = 0; i < 3; i++) {

        const x = Math.random() * 3500 - 1500;
        const z = Math.random() * 5000 - 2500;

        const deer1 = createDeer1(x, 0, z);
        forest.add(deer1);
    }

    for (let i = 0; i < 2; i++) {

        const x = Math.random() * 3500 - 1500;
        const z = Math.random() * 5000 - 2000;

        const deer2 = createDeer2(x, 0, z);
        forest.add(deer2);
    }

    for (let i = 0; i < 3; i++) {

        const x = Math.random() * 3500 - 1500;
        const z = Math.random() * 5000 - 2500;

        const deer3 = createDeer3(x, 0, z);
        forest.add(deer3);
    }

    return forest;
}

export function createLakePartition () {
    const lakepart = new THREE.Group();

    // const x = Math.random() *  2000 + 500;
    // const z = Math.random() * 1000 + 500;

    const lake = createLake(2150, 5.2, 1500);
    const fence = createWoodFence(2425, 5.2, 1350);
    const fence2 = createWoodFence(2275, 5.2, 1350);
    const fence3 = createWoodFence(2125, 5.2, 1350);
    const fence4 = createWoodFence(2500, 5.2, 1425);
    const fence5 = createWoodFence(2500, 5.2, 1575);
    const fence6 = createWoodFence(2425, 5.2, 1650);
    fence4.rotation.y = -Math.PI / 2;
    fence5.rotation.y = -Math.PI / 2;

    lakepart.add(lake);
    lakepart.add(fence);
    lakepart.add(fence2);
    lakepart.add(fence3);
    lakepart.add(fence4);
    lakepart.add(fence5);
    lakepart.add(fence6);

    for (let i = 0; i < 4; i ++) {
        const x = Math.random() * 500 + 1900;
        const z = Math.random() * 300 + 1350;

        const stone2 = createStone2(x, 5, z);
        lakepart.add(stone2);
    }

    for (let i = 0; i < 5; i ++) {
        const x = Math.random() * 500 + 1900;
        const z = Math.random() * 300 + 1350;

        const stone3 = createStone3(x, 2, z);
        lakepart.add(stone3);
    }

    return lakepart;
}

export class Person { // create character
    constructor() {
        this.params = {
            x: -50,
            y: 10,
            z: 1500,
        }

        this.createPerson();
    }

    createPerson() {

        // Create group and add to scene
        this.angelblock = new THREE.Group();

        // Position according to params
        this.angelblock.position.x = this.params.x;
        this.angelblock.position.y = this.params.y;
        this.angelblock.position.z = this.params.z;

        this.arms = [];
        this.legs = [];

        // TEXTURES
        this.skinMaterial = new THREE.MeshPhongMaterial({ color: 0xffdbac, flatShading: false });
        this.eyesMaterial = new THREE.MeshPhongMaterial({ color: 0x315f2a, flatShading: false });
        this.hairMaterial = new THREE.MeshPhongMaterial({ color: 0x8c4207, flatShading: false });
        this.pantsMaterial = new THREE.MeshPhongMaterial({ color: 0xa5bdf7, flatShading: false });
        this.sweatMaterial = new THREE.MeshPhongMaterial({ color: 0xd897fb, flatShading: false });
        this.shoesMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: false });


        this.drawHead();
        this.drawEyes();
        this.drawBody();
        this.drawArms();
        this.drawLegs();

        this.angelblock.scale.set(15, 15, 15);

        this.angelblock.name = "filsons";
        
        return this.angelblock;
    }

    drawHead() {
        this.head = new THREE.Mesh(new THREE.BoxBufferGeometry(2.5, 2.5, 2.5), this.skinMaterial);
        this.head.castShadow = true;
        this.head.receiveShadow = true;
        this.head.position.set(0, 4.8, 0);

        this.hair = new THREE.Mesh(new THREE.BoxBufferGeometry(2.95, 2.5, 2.3), this.hairMaterial);
        this.hair.castShadow = true;
        this.hair.receiveShadow = true;
        this.hair.position.set(0, 5.3, -0.3);

        this.hairFront = new THREE.Mesh(new THREE.BoxBufferGeometry(1.5, 0.5, 0.8), this.hairMaterial);
        this.hairFront.castShadow = true;
        this.hairFront.receiveShadow = true;
        this.hairFront.position.set(0, 6.3, 0.85);

        const geoHairBun = new THREE.Geometry();
        const tuft1 = new THREE.BoxGeometry(1.3, 1.3, 1.3).translate(0, 0, 0);
        const tuft2 = new THREE.BoxGeometry(0.8, 0.8, 0.8).translate(0, 0.5, -0.5);
        geoHairBun.merge(tuft1);
        geoHairBun.merge(tuft2);

        this.hairBun = new THREE.Mesh(geoHairBun, this.hairMaterial);
        this.hairBun.position.set(0, 6.3, -1.3);

        this.hairBun.castShadow = true;
        this.hairBun.receiveShadow = true;

        this.angelblock.add(this.head);
        this.angelblock.add(this.hair);
        this.angelblock.add(this.hairFront);
        this.angelblock.add(this.hairBun);
    }

    drawEyes() {
        this.retines = new THREE.Group();
        this.eyesbrow = new THREE.Group();
        const geoRetine = new THREE.BoxBufferGeometry(0.2, 0.5, 0.1);
        const geoEyebrow = new THREE.BoxBufferGeometry(0.8, 0.25, 0.1);

        let i;

        for (i = 0; i < 2; i++) {
            const retine = new THREE.Mesh(geoRetine, this.eyesMaterial);
            const eyebrow = new THREE.Mesh(geoEyebrow, this.hairMaterial);

            this.retines.add(retine);
            this.eyesbrow.add(eyebrow);

            const m = i % 2 === 0 ? 0.5 : -0.5;
            retine.position.x = m;
            eyebrow.position.x = m;
        }

        this.head.add(this.retines);
        this.head.add(this.eyesbrow);

        this.eyesbrow.castShadow = true;
        this.eyesbrow.receiveShadow = true;

        this.retines.position.y = 0;
        this.retines.position.z = 1.30;
        this.eyesbrow.position.y = 0.7;
        this.eyesbrow.position.z = 1.30;
    }

    drawBody() {
        this.body = new THREE.Mesh(new THREE.BoxBufferGeometry(2.3, 2, 2.2), this.sweatMaterial);
        this.body.castShadow = true;
        this.body.receiveShadow = true;
        this.body.position.set(0, 2.5, 0);
        this.angelblock.add(this.body);
    }

    drawArms() {
        const height = 1.9;
        const geoArms = new THREE.BoxBufferGeometry(0.45, height, 0.85);
        const geoHands = new THREE.BoxBufferGeometry(0.45, 0.2, 0.65);

        let i;

        for (i = 0; i < 2; i++) {
            const armGroup = new THREE.Group()
            const arm = new THREE.Mesh(geoArms, this.sweatMaterial);
            const hand = new THREE.Mesh(geoHands, this.skinMaterial);

            armGroup.add(arm);
            armGroup.add(hand);
            this.arms.push(armGroup);
            this.angelblock.add(armGroup);

            armGroup.castShadow = true;
            armGroup.receiveShadow = true;

            const m = i % 2 === 0 ? 1 : -1;
            armGroup.position.x = m * 1.4;
            armGroup.position.y = 3.5;
            arm.position.y = height * -0.5;
            hand.position.y = -height - 0.1;
        }
    }

    drawLegs() {
        const height = 1.8;
        const geoPants = new THREE.BoxBufferGeometry(0.9, height, 1.6);
        const geoFoot = new THREE.BoxBufferGeometry(0.75, 0.45, 1.9);

        let i;

        for (i = 0; i < 2; i++) {
            const legGroup = new THREE.Group();
            const leg = new THREE.Mesh(geoPants, this.pantsMaterial);
            const foot = new THREE.Mesh(geoFoot, this.shoesMaterial);

            legGroup.add(leg);
            legGroup.add(foot);
            this.legs.push(legGroup);
            this.angelblock.add(legGroup)

            legGroup.castShadow = true;
            legGroup.receiveShadow = true;

            const m = i % 2 === 0 ? 0.5 : -0.5;
            legGroup.position.x = m;
            legGroup.position.y = 1.4;
            leg.position.y = height * -0.45;
            foot.position.y = -height - 0.1;
            foot.position.z = 0.2;
        }
    }

    moveArms(angle, arms) {
        arms.forEach((arm, i) => {
            const m = i % 2 === 0 ? 1 : -1;
            arm.rotation.x = degreesToRadians(angle * m);
        });
    }

    moveLegs(angle, legs) {
        legs.forEach((leg, i) => {
            const m = i % 2 === 0 ? 1 : -1;
            leg.rotation.x = degreesToRadians(angle * m);
        });
    }
}