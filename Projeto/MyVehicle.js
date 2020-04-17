/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVehicle extends CGFobject{
    constructor(scene, ang, speed = 0, x, y, z){
        super(scene);
        this.ang = ang
        this.speed = speed
        this.x = x
        this.y = y
        this.z = z
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
    update(){
        
    }
}