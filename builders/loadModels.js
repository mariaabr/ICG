export function loadTree1() {
  const tree1 = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/trees/arvore/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      tree1.add( gltf.scene );

      gltf.scene.scale.set(2, 2, 2);

      gltf.scene; // THREE.Group

    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return tree1;
}

export function loadTree2() {
  const tree2 = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/trees/arvore__tree_low_poly/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      tree2.add( gltf.scene );

      gltf.scene.scale.set(1, 1, 1);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return tree2;
}

export function loadTree3() {
  const tree3 = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/trees/arvores/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      tree3.add( gltf.scene );

      gltf.scene.scale.set(10, 10, 10);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return tree3;
}

export function loadBush() {
  const bush = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/bush/arbustos/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      bush.add( gltf.scene );

      gltf.scene.scale.set(20, 20, 20);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return bush;
}

export function loadBush2() {
  const bush2 = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/bush/dead_bush/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      bush2.add( gltf.scene );

      gltf.scene.scale.set(17, 17, 17);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return bush2;
}

export function loadMountain1() {
  const mountain1 = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/mountains/mountain/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      mountain1.add( gltf.scene );

      gltf.scene.scale.set(25, 25, 25);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return mountain1;
}

export function loadMountain2() {
  const mountain2 = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/mountains/mountain2/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      mountain2.add( gltf.scene );

      gltf.scene.scale.set(22, 22, 22);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return mountain2;
}

export function loadStone1() {
  const stone1 = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/stones/real_rock/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      stone1.add( gltf.scene );

      gltf.scene.scale.set(50, 50, 50);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return stone1;
}

export function loadStone2() {
  const stone2 = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/stones/small_pbr_rock/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      stone2.add( gltf.scene );

      gltf.scene.scale.set(300, 300, 300);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return stone2;
}

export function loadStone3() {
  const stone3 = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/stones/small_rock_03/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      stone3.add( gltf.scene );

      gltf.scene.scale.set(10, 10, 10);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return stone3;
}

export function loadStone4() {
  const stone4 = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/stones/high_poly_rock_4/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      stone4.add( gltf.scene );

      gltf.scene.scale.set(3, 3, 3);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return stone4;
}

export function loadTrunk1() {
  const trunk1 = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/wood/low_poly_fairy_log/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      trunk1.add( gltf.scene );

      gltf.scene.scale.set(800, 800, 800);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return trunk1;
}

export function loadTrunk2() {
  const trunk2 = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/wood/low_poly_tree_trunk/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      trunk2.add( gltf.scene );

      gltf.scene.scale.set(50, 50, 50);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return trunk2;
}

export function loadFlowersDaisySunflower() {
  const daisySunflower = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/flowers/bush_daisies_sunflower/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      daisySunflower.add( gltf.scene );

      gltf.scene.scale.set(1/10, 1/10, 1/10);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return daisySunflower;
}

export function loadFlowersGrass() {
  const flowersGrass = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/flowers/grass_and_flower/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      flowersGrass.add( gltf.scene );

      gltf.scene.scale.set(5, 5, 5);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return flowersGrass;
}

export function loadFlowersLinen() {
  const flowersLinen = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/flowers/linen_with_flowers/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      flowersLinen.add( gltf.scene );

      gltf.scene.scale.set(1/2, 1/2, 1/2);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return flowersLinen;
}

export function loadFlowerRose() {
  const flowerRose = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/flowers/rose/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      flowerRose.add( gltf.scene );

      gltf.scene.scale.set(60, 60, 60);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return flowerRose;
}

export function loadFlowerTulip() {
  const flowerTulip = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/flowers/simple_tulip/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      flowerTulip.add( gltf.scene );

      gltf.scene.scale.set(5, 5, 5);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return flowerTulip;
}

export function loadMushroom() {
  const mushroom = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/flowers/uvmushroom/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      mushroom.add( gltf.scene );

      gltf.scene.scale.set(1/20, 1/20, 1/20);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return mushroom;
}

export function loadDeer1() {
  const deer1 = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/animals/deer/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      deer1.add( gltf.scene );

      gltf.scene.scale.set(750, 750, 750);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return deer1;
}

export function loadDeer2() {
  const deer2 = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/animals/low_poly_deer_elk/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      deer2.add( gltf.scene );

      gltf.scene.scale.set(55, 55, 55);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return deer2;
}

export function loadDeer3() {
  const deer3 = new THREE.Group();

  const loader = new THREE.GLTFLoader();

  loader.load(

    // resource URL
    '../models/animals/deer_box/scene.gltf',

    // called when the resource is loaded
    function ( gltf ) {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      deer3.add( gltf.scene );

      gltf.scene.scale.set(50, 50, 50);

      gltf.scene; // THREE.Group
    },
    // called while loading is progressing
    function ( xhr ) {
      console.log( 'Tree ' + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
  );
  
  return deer3;
}