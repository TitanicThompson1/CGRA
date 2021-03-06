/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
*/

class MyTriangleSmall extends CGFobject{
    constructor(scene, texCoords = undefined){
        super(scene);

        this.texCoords = texCoords
        
        this.initBuffers()
    }

    initBuffers(){

        this.vertices = [
            -1, 0, 0,
            0, 1, 0,
            1, 0, 0
        ]

        this.indices = [
            0, 2, 1
        ]

        //Normals definition
        this.normals=[]

        for(let i=0;i<3;i++)
            this.normals.push(0,0,1);

        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();        
    }
}