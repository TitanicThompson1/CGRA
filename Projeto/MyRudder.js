
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
        this.normals = []

        this.vertices.push(0.5, 0, -0.5)
        this.vertices.push(0.5, 0, 0.5)
        this.vertices.push(0, 0, 1.0)
        this.vertices.push(-0.5, 0, 0.5)
        this.vertices.push(-0.5, 0, -0.5)

        this.vertices.push(0.5, 0, -0.5)
        this.vertices.push(0.5, 0, 0.5)
        this.vertices.push(0, 0, 1.0)
        this.vertices.push(-0.5, 0, 0.5)
        this.vertices.push(-0.5, 0, -0.5)

        this.indices.push(1, 0, 4)
        this.indices.push(1, 4, 3)
        this.indices.push(2, 1, 3)

        this.indices.push(6, 9, 5)
        this.indices.push(6, 8, 9)
        this.indices.push(7, 8, 6)
        
        for (let i=0; i < 5; i++)
            this.normals.push(0, 1, 0)

        for (let i=0; i < 5; i++)
            this.normals.push(0, -1, 0)


        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

}