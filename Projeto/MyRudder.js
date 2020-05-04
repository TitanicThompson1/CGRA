
/**
 * MyRudder
 * @constructor
 * @param scene - Reference to MyScene object
*/
class MyRudder extends CGFobject{
    constructor(scene){
        super(scene)
        this.scene = scene
        this.initBuffers()
    }
    initBuffers(){
        this.vertices=[]
        this.indices = []

        this.vertices.push(0.5, 0, -0.5)
        this.vertices.push(0.5, 0, 0.5)
        this.vertices.push(0, 0, 1.0)
        this.vertices.push(-0.5, 0, 0.5)
        this.vertices.push(-0.5, 0, -0.5)
        

        this.indices.push(1, 0, 4)
        this.indices.push(1, 4, 3)
        this.indices.push(2, 1, 3)
        
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

}