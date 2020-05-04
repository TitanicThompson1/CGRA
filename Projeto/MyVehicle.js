/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVehicle extends CGFobject{
    constructor(scene, objects){
        super(scene);
        this.objects = objects
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

       
        /*
        this.scene.translate(this.position[0], this.position[1], this.position[2])
        this.scene.rotate(this.ang, 0, 1, 0)
        this.scene.translate(0, 0 , -0.5)
        this.scene.rotate(Math.PI/4, 0, 1, 0)
        this.scene.rotate(-Math.PI/2, 1, 0, 0)
       */
        //this.scene.translate(0, 10, 0)
        
        //Body
        this.scene.pushMatrix()

        this.scene.scale(1, 1, 2)
        this.objects[0].display()

        this.scene.popMatrix()

        //Gongula
        this.scene.pushMatrix()
        
        this.scene.translate(0, -1.0, -0.5)
        this.scene.rotate(Math.PI/2, 1, 0, 0)
        this.scene.scale(0.20, 1, 0.20)
        this.objects[1].display()
        
        this.scene.popMatrix()

        //Gondula Speheres
        this.scene.pushMatrix()
        
        this.scene.translate(0, -1.0, 0)

        this.scene.pushMatrix()

        this.scene.translate(0, 0, 0.50)
        this.scene.scale(0.20, 0.20, 0.20)
        this.objects[2].display()

        this.scene.popMatrix()

        this.scene.translate(0, 0, -0.50)
        this.scene.scale(0.20, 0.20, 0.20)
        this.objects[3].display()

        this.scene.popMatrix()

        //Rudders
        this.scene.pushMatrix()

        this.scene.translate(0, 0.75, -2.0)
        this.scene.rotate(-Math.PI/2, 0, 0, 1)
        this.scene.scale(0.75, 0.75, 0.75)
        this.objects[4].display()

        this.scene.popMatrix()
        
        this.scene.pushMatrix()

        this.scene.translate(-0.75, 0, -2.0)
        this.scene.scale(0.75, 0.75, 0.75)
        this.objects[5].display()

        this.scene.popMatrix()

        this.scene.pushMatrix()

        this.scene.translate(0.75, 0, -2.0)
        this.scene.scale(0.75, 0.75, 0.75)
        this.objects[6].display()

        this.scene.popMatrix()

        this.scene.pushMatrix()

        this.scene.translate(0, -0.75, -2.0)
        this.scene.rotate(-Math.PI/2, 0, 0, 1)
        this.scene.scale(0.75, 0.75, 0.75)
        this.objects[7].display()

        this.scene.popMatrix()

        //Motors
        this.scene.pushMatrix()

        this.scene.translate(0.23, -1.1, -0.6)
        this.scene.scale(0.1, 0.075, 0.15)
        this.objects[8].display()

        this.scene.popMatrix()

        this.scene.pushMatrix()

        this.scene.translate(-0.23, -1.1, -0.6)
        this.scene.scale(0.1, 0.075, 0.15)
        this.objects[9].display()

        this.scene.popMatrix()

        //Helices
                    //1
        this.scene.pushMatrix()

        this.scene.translate(0.23, -1.2, -0.75)
        this.scene.scale(0.03, 0.08, 0)
        this.objects[10].display()

        this.scene.popMatrix()
                    //2
        this.scene.pushMatrix()

        this.scene.translate(0.23, -1, -0.75)
        this.scene.scale(0.03, 0.08, 0.0)
        this.objects[11].display()

        this.scene.popMatrix()
                    
                    //3
        this.scene.pushMatrix()

        this.scene.translate(-0.24, -1.2, -0.75)
        this.scene.scale(0.03, 0.08, 0)
        this.objects[12].display()

        this.scene.popMatrix()

                    //4
        this.scene.pushMatrix()

        this.scene.translate(-0.24, -1.0, -0.75)
        this.scene.scale(0.03, 0.08, 0)
        this.objects[13].display()

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