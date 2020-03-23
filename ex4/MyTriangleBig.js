/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene, texCoords = undefined) {
		super(scene);
		this.texCoords = texCoords
		this.initBuffers();

	}
	
	initBuffers() {
		this.vertices = [
			-2, 0, 0,	//0
			2, 0, 0,	//1
			0, 2, 0,	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2
		];

		//Normals definition
		this.normals=[]

        for(let i=0;i<3;i++)
			this.normals.push(0,0,1);
		

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

