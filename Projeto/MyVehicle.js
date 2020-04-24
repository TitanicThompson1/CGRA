/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVehicle extends CGFobject{
    constructor(scene, object){
        super(scene);
        this.object = object
        this.scene = scene
        this.ang = 0
        this.speed = 0
        this.position = [0, 0, 0]
    }
   
    /*
    Crie a função MyVehicle.update() para atualizar a variável de posição em
    função dos valores de orientação e velocidade.
    */
    display(){

        this.scene.pushMatrix()
        this.scene.translate(this.position[0], this.position[1], this.position[2])
        this.scene.rotate(this.ang, 0, 1, 0)
        this.scene.translate(0, 0 , -0.5)
        this.scene.rotate(Math.PI/4, 0, 1, 0)
        this.scene.rotate(-Math.PI/2, 1, 0, 0)
        
        this.object.display()
        this.scene.popMatrix()
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
        if(this.speed + val >= 0)
            this.speed += val
    }

    reset() {
        this.ang = 0
        this.speed = 0
        this.position = [0, 0, 0]
    }

    update(){
        this.directionVector = [Math.sin(this.ang) * this.speed, 0, Math.cos(this.ang) * this.speed]
        for(let i=0; i < 3; i++){
            this.position[i] += this.directionVector[i]
        } 
        
    }
}