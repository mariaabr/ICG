function createSun(posx, posy, posz) { // create sun
    // const texture = new THREE.TextureLoader().load("resources/suntexture.jpg")
    const geometry = new THREE.SphereGeometry(150, 64, 64);
    // const material = new THREE.MeshBasicMaterial({ map: texture, color: 0xfaff61 });
    const material = new THREE.MeshBasicMaterial({ color: 0xfaff61 });

    const sun = new THREE.Mesh(geometry, material);
    sun.position.set(posx, posy, posz);
    sun.name = "sun";

    return sun;
}

function createMoon(posx, posy, posz) { // create moon
    // const texture = new THREE.TextureLoader().load("resources/moontexture.jpg")
    const geometry = new THREE.SphereGeometry(100, 64, 64);
    // const material = new THREE.MeshBasicMaterial({ map: texture, color: 0xfaff61 });
    const material = new THREE.MeshBasicMaterial({ color: 0xb0afae });

    const moon = new THREE.Mesh(geometry, material);
    moon.position.set(posx, posy, posz);
    moon.name = "moon";

    return moon;
}

class Person { // create character
    constructor() {
        this.params = {
            x: 0,
            y: 0,
            z: 0,
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