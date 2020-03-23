/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
  constructor(scene) {
    super(scene);
    this.scene = scene;
    this.initPieces();
    this.initMaterial();


    this.initTextures();

  }

  initPieces(){

    // Initializes Tangram objects
    this.scene.diamond = new MyDiamond(this.scene);
    this.scene.triangle = new MyTriangle(this.scene);
    this.scene.paral = new MyParallelogram(this.scene);
    this.scene.smallT1 = new MyTriangleSmall(this.scene, [0,0,  0,0.5,  0.25,0.25]);
    this.scene.smallT2 = new MyTriangleSmall(this.scene, [0.25,0.75,  0.75,0.75,  0.5,0.5]);
    this.scene.bigT1 = new MyTriangleBig(this.scene, [1,1, 1,0,  0.5, 0.5]);

    this.scene.bigT2 = new MyTriangleBig(this.scene, [1, 0,  0,0,  0.5,0.5]);
  }

  initMaterial(){
    //Diamond
    this.green = new CGFappearance(this.scene);
    /*
    this.green.setSpecular(1.0, 1.0, 1.0, 1.0);
    this.green.setDiffuse(0.3, 0.3, 0.3, 1.0);
    this.green.setAmbient(0.3, 0.3, 0.3, 1.0);
    this.green.setShininess(10.0);
    */

    //Triangle
    this.pink = new CGFappearance(this.scene);
    /*
    this.pink.setSpecular(1.0, 1.0, 1.0, 1.0);
    this.pink.setDiffuse(1.0, 113.0/255.0, 181.0/255.0, 1.0);
    this.pink.setAmbient(1.0, 113.0/255.0, 181.0/255.0, 1.0);
    this.pink.setShininess(10.0);
    */

    //Parallelogram
    this.yellow = new CGFappearance(this.scene);
    /*
    this.yellow.setSpecular(1.0, 1.0, 1.0, 1.0);
    this.yellow.setDiffuse(1.0, 211.0/255.0, 0, 1.0);
    this.yellow.setAmbient(1.0, 211.0/255.0, 0, 1.0);
    this.yellow.setShininess(10.0);
    */

    //Triangle Small 1
    this.red = new CGFappearance(this.scene);
    /*
    this.red.setSpecular(1.0, 1.0, 1.0, 1.0);
    this.red.setDiffuse(1.0, 0, 0, 1.0);
    this.red.setAmbient(1.0, 0, 0, 1.0);
    this.red.setShininess(10.0);
    */

    //Triangle Small 2
    this.purple = new CGFappearance(this.scene);
    /*
    this.purple.setSpecular(1.0, 1.0, 1.0, 1.0);
    this.purple.setDiffuse(170.0/255.0, 83.0/255.0, 198.0/255.0, 1.0);
    this.purple.setAmbient(170.0 / 255.0, 83.0 / 255.0, 198.0 / 255.0, 1.0);
    this.purple.setShininess(10.0);
    */

    //Triangle Big 1
    this.orange = new CGFappearance(this.scene);
    /*
    this.orange.setSpecular(1.0, 1.0, 1.0, 1.0);
    this.orange.setDiffuse(1.0, 129.0/255.0, 0, 1.0);
    this.orange.setAmbient(1.0, 129.0/255.0, 0, 1.0);
    this.orange.setShininess(10.0);
    */

    //Triangle Big 2
    this.blue = new CGFappearance(this.scene);
    /*
    this.blue.setSpecular(1.0, 1.0, 1.0, 1.0);
    this.blue.setDiffuse(0, 228.0 / 255.0, 1.0, 1.0);
    this.blue.setAmbient(0, 228.0 / 255.0, 1.0, 1.0);
    this.blue.setShininess(10.0);
    */

    //Custom Material
    this.customMaterial = new CGFappearance(this.scene)

  }

  initTextures(){
    this.tangramTexture = new CGFtexture(this.scene, 'images/tangram.png')
    
  }
  
  //This function enables the visualization of the normals
  enableNormalViz() {

    this.scene.diamond.enableNormalViz()
    this.scene.triangle.enableNormalViz()
    this.scene.paral.enableNormalViz()
    this.scene.smallT1.enableNormalViz()
    this.scene.smallT2.enableNormalViz()
    this.scene.bigT1.enableNormalViz()
    this.scene.bigT2.enableNormalViz()

  }


  display() {
    
    //--------------------Diamond---------------------------//

    
    
    // Insert Identity matrix into stack
    this.scene.pushMatrix();

    // Initiate transformations to scene - Diamond
    // Translation Matrix- Diamond
    let mTranslUp = [
      1,    0,              0, 0, 
      0,    1,              0, 0,
      0,    0,              1, 0,
      0,    Math.sqrt(0.5), 0, 1
    ];

    // Rotation 90 Clockwise Matrix- Diamond
    let mRot90clockwise = [
      Math.cos(Math.PI / 4), -Math.sin(Math.PI / 4), 0,  0,
      Math.sin(Math.PI / 4), Math.cos(Math.PI / 4),  0,  0,
      0,                     0,                      1,  0,
      0,                     0,                      0,  1
    ];

    


    // Applying Transformations to Diamond
    this.scene.multMatrix(mTranslUp);
    this.scene.multMatrix(mRot90clockwise);

    //Color
    //this.green.apply();

    //Put Texture in Material
    this.customMaterial.setTexture(this.tangramTexture)


    // Custom Material for Diamond
    this.customMaterial.apply();

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

    //Put Texture in Material
    this.pink.setTexture(this.tangramTexture)

    //Color
    this.pink.apply();

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


    //Put Texture in Material
    this.yellow.setTexture(this.tangramTexture)

    //Color
    this.yellow.apply();

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

    //Put Texture in Material
    this.purple.setTexture(this.tangramTexture)

    //Color
    this.purple.apply();

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
    
    //Put Texture in Material
    this.red.setTexture(this.tangramTexture)

    //Color
    this.red.apply();

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


    //Put Texture in Material
    this.orange.setTexture(this.tangramTexture)

    //Color
    this.orange.apply();

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
    

    //Put Texture in Material
    this.blue.setTexture(this.tangramTexture)


    //Color
    this.blue.apply();

    //Draw Top Big Triangle
    this.scene.bigT2.display();

    //Pop Identity from stack
    this.scene.popMatrix();
  }
}
