function createSun(posx, posy, posz) { // create sun
    const texture = new THREE.TextureLoader().load("resources/suntexture.jpg")
    const geometry = new THREE.SphereGeometry(200, 64, 64);
    const material = new THREE.MeshBasicMaterial({ map: texture, color: 0xfaff61 });

    const sun = new THREE.Mesh(geometry, material);
    sun.position.set(posx, posy, posz);
    sun.name = "sun";

    return sun;
}