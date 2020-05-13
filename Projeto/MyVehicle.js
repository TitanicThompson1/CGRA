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
        this.position = [0, 10, 0]
        this.initMaterials()
        this.t = 1
        this.inclineLeft = false
        this.inclineRight = false
        this.autoPilotOn = false
        
    }
    initMaterials(){
        this.bodyMaterial = new CGFappearance(this.scene)
        this.bodyMaterial.setAmbient(0.6, 0.6, 0.6, 1);
        this.bodyMaterial.setDiffuse(0.1, 0.1, 0.9, 1);
        this.bodyMaterial.setSpecular(0.1, 0.1, 0.1, 1);

        this.gondolaMaterial = new CGFappearance(this.scene)
        this.gondolaMaterial.setAmbient(0.6, 0.6, 0.6, 1);
        this.gondolaMaterial.setDiffuse(0.1, 0.1, 0.9, 1);
        this.gondolaMaterial.setSpecular(0.1, 0.1, 0.1, 1);

        this.rudderMaterial = new CGFappearance(this.scene)
        this.rudderMaterial.setAmbient(0.6, 0.6, 0.6, 1);
        this.rudderMaterial.setDiffuse(0.1, 0.1, 0.9, 1);
        this.rudderMaterial.setSpecular(0.1, 0.1, 0.1, 1);
    }

    setBodyTexture(texture){
        this.bodyMaterial.setTexture(texture)
    }

    setGondolaTexture(texture){
        this.gondolaMaterial.setTexture(texture)
    }

    setRudderTexture(texture){
        this.rudderMaterial.setTexture(texture)
    }

    setAllTextures(texture){
        this.setBodyTexture(texture)
        this.setGondolaTexture(texture)
        this.setRudderTexture(texture)
    }
   
    /*
    Crie a função MyVehicle.update() para atualizar a variável de posição em
    função dos valores de orientação e velocidade.
    */
    display(){

        this.scene.pushMatrix()
        
        this.scene.translate(this.position[0], this.position[1], this.position[2])
        this.scene.rotate(this.ang, 0, 1, 0)
        /*
        
        this.scene.translate(0, 0 , -0.5)
        this.scene.rotate(Math.PI/4, 0, 1, 0)
        this.scene.rotate(-Math.PI/2, 1, 0, 0)
       */
        //this.scene.translate(0, 10, 0)
        
        //Body
        this.scene.pushMatrix()

        this.scene.scale(1, 1, 2)
        this.bodyMaterial.apply()
        this.objects[0].display()

        this.scene.popMatrix()

        //Gongola
        this.scene.pushMatrix()
        
        this.scene.translate(0, -1.0, -0.5)
        this.scene.rotate(Math.PI/2, 1, 0, 0)
        this.scene.scale(0.20, 1, 0.20)
        this.gondolaMaterial.apply()
        this.objects[1].display()
        
        this.scene.popMatrix()

        //Gondola Speheres
        this.scene.pushMatrix()
        
        this.scene.translate(0, -1.0, 0)

        this.scene.pushMatrix()

        this.scene.translate(0, 0, 0.50)
        this.scene.scale(0.20, 0.20, 0.20)
        this.gondolaMaterial.apply()
        this.objects[2].display()

        this.scene.popMatrix()

        this.scene.translate(0, 0, -0.50)
        this.scene.scale(0.20, 0.20, 0.20)
        this.gondolaMaterial.apply()
        this.objects[3].display()

        this.scene.popMatrix()

        //Rudders
        this.scene.pushMatrix()

        this.scene.translate(0, 0.75, -2.0)
        if(this.inclineLeft)
            this.scene.rotate(-Math.PI/6, 0, 0, 1)
        else if(this.inclineRight)
            this.scene.rotate(Math.PI/6, 0, 0, 1)

        this.scene.rotate(-Math.PI/2, 0, 0, 1)
        this.scene.scale(0.75, 0.75, 0.75)
        this.rudderMaterial.apply()
        this.objects[4].display()

        this.scene.popMatrix()
        
        this.scene.pushMatrix()

        this.scene.translate(-0.75, 0, -2.0)
        this.scene.scale(0.75, 0.75, 0.75)
        this.rudderMaterial.apply()
        this.objects[5].display()

        this.scene.popMatrix()

        this.scene.pushMatrix()

        this.scene.translate(0.75, 0, -2.0)
        this.scene.scale(0.75, 0.75, 0.75)
        this.rudderMaterial.apply()
        this.objects[6].display()

        this.scene.popMatrix()

        this.scene.pushMatrix()

        this.scene.translate(0, -0.75, -2.0)
        if(this.inclineLeft)
            this.scene.rotate(-Math.PI/6, 0, 0, 1)
        else if(this.inclineRight)
            this.scene.rotate(Math.PI/6, 0, 0, 1)
            
        this.scene.rotate(-Math.PI/2, 0, 0, 1)
        this.scene.scale(0.75, 0.75, 0.75)
        this.rudderMaterial.apply()
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

        this.scene.translate(0.23, -1.1, -0.75)        
        this.scene.rotate(Math.PI/2*this.speed*this.t + 0.1*this.t, 0, 0, 1)
        this.scene.translate(0, -0.08, 0)
        this.scene.scale(0.03, 0.08, 0)
        this.objects[10].display()

        this.scene.popMatrix()
                    //2
        this.scene.pushMatrix()

        this.scene.translate(0.23, -1.1, -0.75)
        this.scene.rotate(Math.PI/2*this.speed*this.t + 0.1*this.t, 0, 0, 1)
        this.scene.translate(0, 0.08, 0)
        this.scene.scale(0.03, 0.08, 0)
        this.objects[11].display()

        this.scene.popMatrix()
                    
                    //3
        this.scene.pushMatrix()

        this.scene.translate(-0.24, -1.1, -0.75)
        this.scene.rotate(Math.PI/2*this.speed*this.t + 0.1*this.t, 0, 0, 1)
        this.scene.translate(0, -0.08, 0)
        this.scene.scale(0.03, 0.08, 0)
        this.objects[12].display()

        this.scene.popMatrix()

                    //4
        this.scene.pushMatrix()

        this.scene.translate(-0.24, -1.1, -0.75)
        this.scene.rotate(Math.PI/2*this.speed*this.t + 0.1*this.t, 0, 0, 1)
        this.scene.translate(0, 0.08, 0)
        this.scene.scale(0.03, 0.08, 0)
        this.objects[13].display()

        this.scene.popMatrix()

        this.scene.popMatrix()
    }

    /*
    Crie os métodos turn(val) e accelerate(val) para alterar o ângulo de orientação,
    e para aumentar/diminuir o valor da velocidade (em que val podem ser valores
    positivos ou negativos).
    */
    turn(val){
        if(this.autoPilotOn) return;
        this.ang += val
    }

    accelerate(val){
        if(this.autoPilotOn) return;
        if(this.speed + val >= 0)
            this.speed += val
    }

    reset() {
        this.ang = 0
        this.speed = 0
        this.position = [0, 10, 0]
        this.autoPilotOn = false
    }

    rudderInclineLeft(value){
        this.inclineLeft = value
    }

    rudderInclineRight(value){
        this.inclineRight = value
    }

    update(t){

        if(this.previousTime === 0 && this.autoPilotOn){
            
            this.previousTime = t

        }else if(this.autoPilotOn) {

            this.deltaTime = (t - this.previousTime)/1000
            this.pilotAngle += this.deltaTime * this.angularSpeed
            this.directionVector = [Math.sin(this.pilotAngle), 0, Math.cos(this.pilotAngle)]

            this.ang = this.pilotAngle + Math.PI/2

            this.position[0] = this.center[0] + this.directionVector[0] * this.radius
            this.position[1] = this.center[1] + this.directionVector[1] * this.radius
            this.position[2] = this.center[2] + this.directionVector[2] * this.radius

            this.previousTime = t
        }else{
            this.directionVector = [Math.sin(this.ang) * this.speed, 0, Math.cos(this.ang) * this.speed]
            for(let i=0; i < 3; i++)
                this.position[i] += this.directionVector[i]
        }
        this.t++
    }
    getPosition(){
        return this.position
    }

    startAutoPilot(radius, animationTime){
        if(this.autoPilotOn){
            this.autoPilotOn = false
            this.inclineLeft = false
            return;
        }
        
        this.radius = radius
        this.direction = [Math.sin(this.ang + Math.PI/2), 0,  Math.cos(this.ang + Math.PI/2)]
        
        this.center=[]
        this.center[0] = this.position[0] + this.direction[0]*this.radius
        this.center[1] = this.position[1] + this.direction[1]*this.radius
        this.center[2] = this.position[2] + this.direction[2]*this.radius

        this.pilotAngle = this.ang - Math.PI/2
        /*
        this.position[0] = this.center[0] + this.direction[0] * this.radius
        this.position[1] = this.center[1] + this.direction[1] * this.radius
        this.position[2] = this.center[2] + this.direction[2] * this.radius
        */       
        this.angularSpeed = Math.PI*2 / animationTime
        this.previousTime = 0
        this.autoPilotOn = true
        this.inclineLeft = true
    }
}