/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangle extends CGFobject{
    constructor(scene){
        super(scene);
        this.initBuffers();
    }
    initBuffers(){
        this.vertices = [
            -1, -1, 0,          //0
            -1, 1, 0,           //1
            1, -1, 0            //2
        ]

        //Counter-clockwise reference of vertices
        this.indices = [
            1, 0, 2
        ]


        //Normals definition
        this.normals=[]

        for(let i=0;i<3;i++)
            this.normals.push(0,0,1);


        //Texture points definition
        this.texCoords = [
			1, 0,
			0, 0,
            1, 1,
		]


        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers()


    }
}