
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
        -0.5, 0.5, 0.5,      //7

        0.5, -0.5, 0.5,     //0
        0.5, -0.5, -0.5,    //1
        -0.5, -0.5, -0.5,   //2
        -0.5, -0.5, 0.5,    //3
        0.5, 0.5, 0.5,      //4
        0.5, 0.5, -0.5,     //5
        -0.5, 0.5, -0.5,    //6
        -0.5, 0.5, 0.5,      //7

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
      this.normals = []

      for(let i=0; i<4; i++){
          this.indices.push(i, (i+1)%4, i+4,(i+1)%4, (i+1)%4+4, i+4)
      }

      this.indices.push(4,5,6, 6,7,4)     //Top face
      this.indices.push(0,3,2, 2,1,0)     //Bottom face

      //Normal definitions
      for(let i=0; i<8; i++){

        //Right face (normal x)
        if(i==0 || i==1 || i==4 || i==5) this.normals.push(1,0,0)

        //Left face (normal x)
        if(i==2 || i==3 || i==6 || i==7) this.normals.push(-1,0,0)

      
      }

      for(let i=0; i<8; i++){
       
        //Top face (normal y)
        if(i==4 || i==5 || i==6 || i==7) this.normals.push(0,1,0)

        //Bottom face (normal y)
        if(i==0 || i==1 || i==2 || i==3) this.normals.push(0,-1,0)
        
      }

      for(let i=0; i<8; i++){

         //Front face (normal z)
        if(i==0 || i==3 || i==4 || i==7) this.normals.push(0,0,1)

        //Back face (normal z)
        if(i==1 || i==2 || i==5 || i==6) this.normals.push(0,0,-1)
        
      }
      
      
      this.primitiveType = this.scene.gl.TRIANGLES;

		  this.initGLBuffers();
    }

}