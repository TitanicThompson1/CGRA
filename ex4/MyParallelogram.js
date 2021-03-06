/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject{
    constructor(scene){
        super(scene);
        this.initBuffers();
    }
    initBuffers(){
        this.vertices = [
            0, 0, 0,            //0
            1, 1, 0,            //1
            2, 0, 0,            //2
            3, 1, 0,            //3

            0, 0, 0,            //4
            1, 1, 0,            //5
            2, 0, 0,            //6
            3, 1, 0             //7
        ]
        //Counter-clockwise reference of vertices
        this.indices = [
            0, 2, 1,
            2, 3, 1,
            5, 6, 4,
            5, 7, 6
        ]

        //Normals definition
        this.normals=[]
        for(let i=0;i<4;i++)
            this.normals.push(0,0,1);
        for(let i=0;i<4;i++)
            this.normals.push(0,0,-1);
        
        //Texture points definition
        this.texCoords = [
            1,      1,      //0
            0.75,   0.75,   //1
            0.5,    1,      //2
            0.25,   0.75,   //3
            1,      1,      //4
            0.75,   0.75,   //5
            0.5,    1,      //6
            0.25,   0.75    //7
        ]

        
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers()
    }
}

 /*
        this.indices = [
            0, 2, 1,
            1, 2, 3,
            0, 1, 2,
            1, 3, 2
        ]
        
        */

