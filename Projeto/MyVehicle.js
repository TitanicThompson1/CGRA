/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVehicle extends CGFobject{
    constructor(scene){
        super(scene);
        this.ang = 0
        this.speed = 0
        this.position = [0, 0, 0]
        this.initBuffers();
    }
    initBuffers(){

        
        
        this.vertices = [
            -0.5, 0, -0.34,          //0
            0, 0, 0.66,              //1
            0.5, 0, -0.34            //2
        ]

        //Counter-clockwise reference of vertices
        this.indices = [
            0, 1, 2
        ]

        this.normals=[]

        for(let i=0;i<3;i++)
            this.normals.push(0,0,1);


        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers()


    }
    /*
    Crie a função MyVehicle.update() para atualizar a variável de posição em
    função dos valores de orientação e velocidade.
    */
    display(){
        this.scene.translate(this.position)
        this.rotate(0, 1, 0, this.ang)
    }

    /*
    Crie os métodos turn(val) e accelerate(val) para alterar o ângulo de orientação,
    e para aumentar/diminuir o valor da velocidade (em que val podem ser valores
    positivos ou negativos).
    */
    turn(val){
        this.ang += val
    }

    accelerate(val){
        this.speed += val
    }

    reset() {
        this.ang = 0
        this.speed = 0
        this.position = [0, 0, 0]
    }

    update(){
        this.directionVector = [Math.sin(this.ang) * this.speed, 0, Math.cos(this.ang) * this.speed]
        this.position = this.position + this.directionVector
    }
}