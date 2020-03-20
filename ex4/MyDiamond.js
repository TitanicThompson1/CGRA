/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {

		this.vertices = [
			-1, 0, 0,	//0		left
			0, -1, 0,	//1		down
			0, 1, 0,	//2		up
			1, 0, 0		//3		right
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			1, 3, 2
		];

		//Normals definition
		this.normals=[]

		for(let i=0;i<4;i++)
			this.normals.push(0,0,1);

		//Texture points definition
		this.texCoords = [
			0, 0,
			0, 1,
			1, 0,
			1, 1
		]



		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

