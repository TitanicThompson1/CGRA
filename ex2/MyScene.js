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

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.diamond = new MyDiamond(this);
        this.triangle = new MyTriangle(this);
        this.paral = new MyParallelogram(this);
        this.smallT1 = new MyTriangleSmall(this);
        this.smallT2 = new MyTriangleSmall(this);
        this.bigT = new MyTriangleBig(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.scaleFactor = 1;
        this.displayDiamond = false;
        this.displayTriangle = false;
        this.displayParal = true;
        this.displaySmallT = false;
        this.displayBigT = false;
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

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];

        this.multMatrix(sca);

        // ---- BEGIN Primitive drawing section
        
        this.pushMatrix()
        
        //Matrix da translação de 1/2 para cima
        let mT = 
        [ 1,        0,        0, 0,
          0,        1,        0, 0,
          0,        0,        1, 0,
          0,  Math.sqrt(0.5), 0, 1
        ]

        //Matrix da rotação de 90º em torno do eixo dos z
        let mRz90 = 
        [
            Math.cos(Math.PI/4), -Math.sin(Math.PI/4), 0, 0,
            Math.sin(Math.PI/4), Math.cos(Math.PI/4),  0, 0,
                    0          ,        0           ,  1, 0,
                    0          ,        0           ,  0, 1
        ]

        //Aplicando as transformações
        this.multMatrix(mT)
        this.multMatrix(mRz90)

        
        // Draw diamond
        if (this.displayDiamond)
            this.diamond.display();
        
        this.popMatrix()
        
        // Draw triangle
        if (this.displayTriangle)
            this.triangle.display();
        

/*------------------PARALLELOGRAM----------------------*/

        this.pushMatrix()

        //Rotação de 45º em torno do eixo z
        this.rotate(Math.PI/4, 0, 0, 1)

        //Rotação de 180º em torno do eixo do y
        this.rotate(Math.PI, 0, 1, 0)


        //Rotação de 225º em torno do eixo do z
        //this.rotate(3*Math.PI/4, 0, 0, 1)

        // Draw parallelogram
        if(this.displayParal)
            this.paral.display();
        
        this.popMatrix()

/*------------------BOTTOM SMALL TRIANGLE----------------------*/

        //Guarda-se a matrix identidade
        this.pushMatrix()

        //Efectua-se translação
        this.translate(-Math.sin(Math.PI/4)*1, -Math.sin(Math.PI/4)*1, 0)

        //Rotação de 225º em torno do eixo do z
        this.rotate(5*Math.PI/4, 0, 0, 1)
        
        // Draw Small Triangle
        if(this.displaySmallT)
            this.smallT1.display();

        this.popMatrix()
        
/*------------------TOP SMALL TRIANGLE----------------------*/
        this.pushMatrix()

        //Efectua-se translação
        this.translate(Math.sin(Math.PI/4)*1, Math.sin(Math.PI/4)*1 + Math.sqrt(0.5)*2 , 0)

        //Rotação de 45 º em torno do eixo do z
        this.rotate(Math.PI/4, 0, 0, 1)


        // Draw Small Triangle
        if(this.displaySmallT)
            this.smallT2.display();

        
        //Volta-se a por a identidade
        this.popMatrix()

/*----------------------------------------*/
        if(this.displayBigT)
            this.bigT.display();
        

        // ---- END Primitive drawing section
    }
}