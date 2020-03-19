/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
  constructor(scene) {
    super(scene);
    this.scene = scene;

    // Initializes Tangram objects
    scene.diamond = new MyDiamond(scene);
    scene.triangle = new MyTriangle(scene);
    scene.paral = new MyParallelogram(scene);
    scene.smallT1 = new MyTriangleSmall(scene);
    scene.smallT2 = new MyTriangleSmall(scene);
    scene.bigT1 = new MyTriangleBig(scene);
    scene.bigT2 = new MyTriangleBig(scene);
  }

  display() {
    // Insert Identity matrix into stack
    this.scene.pushMatrix();

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
    this.scene.multMatrix(mTranslUp);
    this.scene.multMatrix(mRot90clockwise);

    // Draw diamond
    this.scene.diamond.display();

    // Pop Identity from stack
    this.scene.popMatrix();

    /*------------------TRIANGLE---------------------------*/

    this.scene.pushMatrix();

    // Initiate transformations to scene - Triangle

    //Translation
    this.scene.translate(Math.sqrt(2), Math.sqrt(2), 0);
    //this.translate(0, Math.sqrt(0.5) / 2, 0);

    //Rotation 135º in z
    this.scene.rotate((5 * Math.PI) / 4, 0, 0, 1);

    // Draw triangle
    this.scene.triangle.display();

    //Pop identity from stack
    this.scene.popMatrix();

    /*------------------PARALLELOGRAM----------------------*/

    this.scene.pushMatrix();

    //Rotação de 45º em torno do eixo z
    this.scene.rotate(Math.PI / 4, 0, 0, 1);

    //Rotação de 180º em torno do eixo do y
    this.scene.rotate(Math.PI, 0, 1, 0);

    //Rotação de 225º em torno do eixo do z
    //this.rotate(3*Math.PI/4, 0, 0, 1)

    // Draw parallelogram
    this.scene.paral.display();

    this.scene.popMatrix();

    /*------------------BOTTOM SMALL TRIANGLE----------------------*/

    //Guarda-se a matrix identidade
    this.scene.pushMatrix();

    //Efectua-se translação
    this.scene.translate(-Math.sin(Math.PI / 4) * 1, -Math.sin(Math.PI / 4) * 1, 0);

    //Rotação de 225º em torno do eixo do z
    this.scene.rotate((5 * Math.PI) / 4, 0, 0, 1);

    // Draw Small Triangle
    this.scene.smallT1.display();

    this.scene.popMatrix();

    /*------------------TOP SMALL TRIANGLE----------------------*/

    this.scene.pushMatrix();

    //Efectua-se translação
    this.scene.translate(
      Math.sin(Math.PI / 4) * 1,
      Math.sin(Math.PI / 4) * 1 + Math.sqrt(0.5) * 2,
      0
    );

    //Rotação de 45 º em torno do eixo do z
    this.scene.rotate(Math.PI / 4, 0, 0, 1);

    // Draw Small Triangle
    this.scene.smallT2.display();

    //Volta-se a por a identidade
    this.scene.popMatrix();

    /*----------------------------------------*/
    /*------------------TOP BIG TRIANGLE-----------------------------*/

    this.scene.pushMatrix();

    //Transformations - BigTriangle
    //Translation OK
    this.scene.translate(-Math.sqrt(1 / 2), 2, 0);

    //Rotation 270º em torno do eixo z WHY IT ISNT WORKINGGGG?
    this.scene.rotate(Math.PI / 2, 0, 0, 1);

    //Draw Top Big Triangle
    this.scene.bigT1.display();

    //Pop Identity from stack
    this.scene.popMatrix();

    /*------------------BOTTOM BIG TRIANGLE-----------------------------*/

    this.scene.pushMatrix();

    //Transformations - BigTriangle
    //Translation metade da base do triangulo - lado quadrado
    this.scene.translate(Math.sqrt(1 / 2), -(2 - Math.sqrt(2)), 0);

    //Rotation 270º em torno do eixo z WHY IT ISNT WORKINGGGG?
    this.scene.rotate((3 * Math.PI) / 2, 0, 0, 1);

    //Draw Top Big Triangle
    this.scene.bigT2.display();

    //Pop Identity from stack
    this.scene.popMatrix();
  }
}
