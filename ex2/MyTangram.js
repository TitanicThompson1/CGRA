/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
  constructor(scene) {
    super(scene);

    // Initializes Tangram objects
    scene.diamond = new MyDiamond(scene);
    scene.triangle = new MyTriangle(scene);
    scene.paral = new MyParallelogram(scene);
    scene.smallT1 = new MyTriangleSmall(scene);
    scene.smallT2 = new MyTriangleSmall(scene);
    scene.bigT1 = new MyTriangleBig(scene);
    scene.bigT2 = new MyTriangleBig(scene);
  }

  display(scene) {
    // Insert Identity matrix into stack
    scene.pushMatrix();

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
    scene.multMatrix(mTranslUp);
    scene.multMatrix(mRot90clockwise);

    // Draw diamond
    scene.diamond.display();

    // Pop Identity from stack
    scene.popMatrix();

    /*------------------TRIANGLE---------------------------*/

    scene.pushMatrix();

    // Initiate transformations to scene - Triangle

    //Translation
    scene.translate(Math.sqrt(2), Math.sqrt(2), 0);
    //this.translate(0, Math.sqrt(0.5) / 2, 0);

    //Rotation 135º in z
    scene.rotate((5 * Math.PI) / 4, 0, 0, 1);

    // Draw triangle
    scene.triangle.display();

    //Pop identity from stack
    scene.popMatrix();

    /*------------------PARALLELOGRAM----------------------*/

    scene.pushMatrix();

    //Rotação de 45º em torno do eixo z
    scene.rotate(Math.PI / 4, 0, 0, 1);

    //Rotação de 180º em torno do eixo do y
    scene.rotate(Math.PI, 0, 1, 0);

    //Rotação de 225º em torno do eixo do z
    //this.rotate(3*Math.PI/4, 0, 0, 1)

    // Draw parallelogram
    scene.paral.display();

    scene.popMatrix();

    /*------------------BOTTOM SMALL TRIANGLE----------------------*/

    //Guarda-se a matrix identidade
    scene.pushMatrix();

    //Efectua-se translação
    scene.translate(-Math.sin(Math.PI / 4) * 1, -Math.sin(Math.PI / 4) * 1, 0);

    //Rotação de 225º em torno do eixo do z
    scene.rotate((5 * Math.PI) / 4, 0, 0, 1);

    // Draw Small Triangle
    scene.smallT1.display();

    scene.popMatrix();

    /*------------------TOP SMALL TRIANGLE----------------------*/

    scene.pushMatrix();

    //Efectua-se translação
    scene.translate(
      Math.sin(Math.PI / 4) * 1,
      Math.sin(Math.PI / 4) * 1 + Math.sqrt(0.5) * 2,
      0
    );

    //Rotação de 45 º em torno do eixo do z
    scene.rotate(Math.PI / 4, 0, 0, 1);

    // Draw Small Triangle
    scene.smallT2.display();

    //Volta-se a por a identidade
    scene.popMatrix();

    /*----------------------------------------*/
    /*------------------TOP BIG TRIANGLE-----------------------------*/

    scene.pushMatrix();

    //Transformations - BigTriangle
    //Translation OK
    scene.translate(-Math.sqrt(1 / 2), 2, 0);

    //Rotation 270º em torno do eixo z WHY IT ISNT WORKINGGGG?
    scene.rotate(Math.PI / 2, 0, 0, 1);

    //Draw Top Big Triangle
    scene.bigT1.display();

    //Pop Identity from stack
    scene.popMatrix();

    /*------------------BOTTOM BIG TRIANGLE-----------------------------*/

    scene.pushMatrix();

    //Transformations - BigTriangle
    //Translation metade da base do triangulo - lado quadrado
    scene.translate(Math.sqrt(1 / 2), -(2 - Math.sqrt(2)), 0);

    //Rotation 270º em torno do eixo z WHY IT ISNT WORKINGGGG?
    scene.rotate((3 * Math.PI) / 2, 0, 0, 1);

    //Draw Top Big Triangle
    scene.bigT2.display();

    //Pop Identity from stack
    scene.popMatrix();
  }
}
