/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
        
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);
        
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.incompleteSphere = new MySphere(this, 1, 1);
        this.cylinder = new MyCylinder(this, 50)
        this.body = new MySphere(this,)     
        this.vehicle = new MyVehicle(this, [new MySphere(this, 20, 10), new MyCylinder(this,20), 
                                    new MySphere(this, 20, 10),new MySphere(this, 20, 10),
                                    new MyRudder(this),new MyRudder(this),new MyRudder(this),new MyRudder(this),
                                    new MySphere(this, 16,8),new MySphere(this, 16,8),
                                    new MySphere(this, 8, 4),new MySphere(this, 8, 4),new MySphere(this, 8, 4),new MySphere(this, 8, 4)])

        this.cube = new MyCubeMap(this);
        this.terrain = new MyTerrain (this, new MyPlane(this, 20))        


        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayCylinder = false
        this.displaySphere = false        
        this.scaleFactor = 1;
        this.displayVehicle = false
        this.displayCube = false
        this.selectedTexture = -1;  
        this.speedFactor = 0.1

        this.textureIds = { 'World': 0};

        
        
        //Material to apply texture to
        this.material = new CGFappearance(this)
        this.material.setAmbient(0.1, 0.1, 0.1, 1);
        this.material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material.setSpecular(0.1, 0.1, 0.1, 1);
        this.material.loadTexture('images/earth.jpg');
        this.material.setTextureWrap('REPEAT', 'REPEAT');



        this.materialEarth = new CGFappearance(this)
        //this.materialEarth.loadTexture('images/earth.jpg')

        //Textures
        //this.texture1 = new CGFtexture(this, 'images/ourTexture.jpg');
        this.texture1 = new CGFtexture(this, 'images/earth.jpg');
        this.textures = [this.texture1]

    
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        this.checkKeys()
        this.vehicle.update()
    }

    //Function that resets selected texture in quadMaterial
    updateAppliedTexture() {
        //this.cube.setTexture(this.textures[this.selectedTexture]);
        this.vehicle.setAllTextures(this.textures[this.selectedTexture])
        this.vehicle.display()
    }

    checkKeys() {
        var text="Keys pressed: ";
        var keysPressed=false;
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            text+=" W ";
            keysPressed=true;
            this.vehicle.accelerate(this.speedFactor)
        }
        if (this.gui.isKeyPressed("KeyS")) {
            text+=" S ";
            keysPressed=true;
            this.vehicle.accelerate(-this.speedFactor)
        }
        if(this.gui.isKeyPressed("KeyA")){
            text+=" A ";
            keysPressed=true;
            this.vehicle.turn(Math.PI/36)   //5º graus
        }
        if(this.gui.isKeyPressed("KeyD")){
            text+=" D ";
            keysPressed=true;
            this.vehicle.turn(-Math.PI/36)
        }
        if(this.gui.isKeyPressed("KeyR")){
            text+=" R ";
            keysPressed=true;
            this.vehicle.reset()
        }
        
        if (keysPressed)
            console.log(text);
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

        // ---- BEGIN Primitive drawing section

        //This sphere does not have defined texture coordinates
        if(this.displaySphere){
            this.materialEarth.apply()
            this.incompleteSphere.display()
        }
        if(this.displayCylinder){
            this.material.apply()
            this.cylinder.display()
        }

        if(this.displayVehicle)
            this.vehicle.display()

        if (this.displayCube) {
            this.cube.display()
        }


        this.pushMatrix()
        this.scale(50,0, 50)
        this.terrain.display()
        this.popMatrix()
        

        // ---- END Primitive drawing section
    }
}