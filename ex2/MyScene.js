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
    this.bigT1 = new MyTriangleBig(this);
    this.bigT2 = new MyTriangleBig(this);

    //Objects connected to MyInterface
    this.displayAxis = true;
    this.scaleFactor = 1;
    this.displayDiamond = true;
    this.displayTriangle = true;
    this.displayParal = true;
    this.displaySmallT = true;
    this.displayBigT = true;
  }
  initLights() {
    this.lights[0].setPosition(15, 2, 5, 1);
    this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[0].enable();
    this.lights[0].update();
  }
  initCameras() {
    this.camera = new CGFcamera(
      0.4,
      0.1,
      500,
      vec3.fromValues(15, 15, 15),
      vec3.fromValues(0, 0, 0)
    );
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
    if (this.displayAxis) this.axis.display();

    this.setDefaultAppearance();

    var sca = [
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0
    ];

    this.multMatrix(sca);

    // ---- BEGIN Primitive drawing section

    // Insert Identity matrix into stack
    this.pushMatrix();

    // Initiate transformations to scene - Diamond
    // Translation Matrix- Diamond
    let mTranslUp = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      Math.sqrt(0.5),
      0,
      1
    ];

    // Rotation 90 Clockwise Matrix- Diamond
    let mRot90clockwise = [
      Math.cos(Math.PI / 4),
      -Math.sin(Math.PI / 4),
      0,
      0,
      Math.sin(Math.PI / 4),
      Math.cos(Math.PI / 4),
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];

    // Applying Transformations to Diamond
    this.multMatrix(mTranslUp);
    this.multMatrix(mRot90clockwise);

    // Draw diamond
    if (this.displayDiamond) this.diamond.display();

    // Pop Identity from stack
    this.popMatrix();

    /*------------------TRIANGLE---------------------------*/

    this.pushMatrix();

    // Initiate transformations to scene - Triangle

    //Translation
    this.translate(Math.sqrt(2), Math.sqrt(2), 0);
    //this.translate(0, Math.sqrt(0.5) / 2, 0);

    //Rotation 135º in z
    this.rotate((5 * Math.PI) / 4, 0, 0, 1);

    // Draw triangle
    if (this.displayTriangle) this.triangle.display();

    //Pop identity from stack
    this.popMatrix();

    /*------------------PARALLELOGRAM----------------------*/

    this.pushMatrix();

    //Rotação de 45º em torno do eixo z
    this.rotate(Math.PI / 4, 0, 0, 1);

    //Rotação de 180º em torno do eixo do y
    this.rotate(Math.PI, 0, 1, 0);

    //Rotação de 225º em torno do eixo do z
    //this.rotate(3*Math.PI/4, 0, 0, 1)

    // Draw parallelogram
    if (this.displayParal) this.paral.display();

    this.popMatrix();

    /*------------------BOTTOM SMALL TRIANGLE----------------------*/

    //Guarda-se a matrix identidade
    this.pushMatrix();

    //Efectua-se translação
    this.translate(-Math.sin(Math.PI / 4) * 1, -Math.sin(Math.PI / 4) * 1, 0);

    //Rotação de 225º em torno do eixo do z
    this.rotate((5 * Math.PI) / 4, 0, 0, 1);

    // Draw Small Triangle
    if (this.displaySmallT) this.smallT1.display();

    this.popMatrix();

    /*------------------TOP SMALL TRIANGLE----------------------*/
    this.pushMatrix();

    //Efectua-se translação
    this.translate(
      Math.sin(Math.PI / 4) * 1,
      Math.sin(Math.PI / 4) * 1 + Math.sqrt(0.5) * 2,
      0
    );

    //Rotação de 45 º em torno do eixo do z
    this.rotate(Math.PI / 4, 0, 0, 1);

    // Draw Small Triangle
    if (this.displaySmallT) this.smallT2.display();

    //Volta-se a por a identidade
    this.popMatrix();

    /*----------------------------------------*/
    /*------------------TOP BIG TRIANGLE-----------------------------*/

    this.pushMatrix();

    //Transformations - BigTriangle
    //Translation OK
    this.translate(-Math.sqrt(1 / 2), 2, 0);

    //Rotation 270º em torno do eixo z WHY IT ISNT WORKINGGGG?
    this.rotate(Math.PI / 2, 0, 0, 1);

    //Draw Top Big Triangle
    if (this.displayBigT) this.bigT1.display();

    //Pop Identity from stack
    this.popMatrix();

    /*------------------BOTTOM BIG TRIANGLE-----------------------------*/

    this.pushMatrix();

    //Transformations - BigTriangle
    //Translation metade da base do triangulo - lado quadrado
    this.translate(Math.sqrt(1 / 2), -(2 - Math.sqrt(2)), 0);

    //Rotation 270º em torno do eixo z WHY IT ISNT WORKINGGGG?
    this.rotate((3 * Math.PI) / 2, 0, 0, 1);

    //Draw Top Big Triangle
    if (this.displayBigT) this.bigT2.display();

    //Pop Identity from stack
    this.popMatrix();

    // ---- END Primitive drawing section
  }
}
