
class MyUnitCube extends CGFobject{
    constructor(scene) {
      super(scene)
      this.initBuffers()
    }
    
    initBuffers(){

      this.vertices = [
        0.5, -0.5, 0.5,     //0
        0.5, -0.5, -0.5,    //1
        -0.5, -0.5, -0.5,   //2
        -0.5, -0.5, 0.5,    //3
        0.5, 0.5, 0.5,      //4
        0.5, 0.5, -0.5,     //5
        -0.5, 0.5, -0.5,    //6
        -0.5, 0.5, 0.5      //7
      ]

      this.indices=[]

      for(let i=0; i<4; i++){
          this.indices.push(i, (i+1)%4, i+4,(i+1)%4, (i+1)%4+4, i+4)
      }

      this.indices.push(4,5,6, 6,7,4)     //Top face
      this.indices.push(0,3,2, 2,1,0)     //Bottom face

      
      this.primitiveType = this.scene.gl.TRIANGLES;

		  this.initGLBuffers();
    }

}