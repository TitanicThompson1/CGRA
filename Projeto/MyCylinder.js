/**
* MyCylinder
* @constructor
*/
class MyCylinder extends CGFobject{
    constructor(scene, slices){
        super(scene)
        this.slices = slices
        this.initBuffers();
    }
    initBuffers(){
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        let ang = 0;
        let alphaAng = 2*Math.PI/this.slices;

        /*
        1 face
        0 1 3 
        1 4 3 
        
        2 face
        1 2 4 
        2 5 4 

        3 fase
        2 0 5 
        0 3 5 

        top
        3 4 5 

        bottom
        0 2 1
        */



        
        for(let i = 0; i < this.slices; i++){

            this.vertices.push(Math.cos(ang), 0, -Math.sin(ang));
            this.indices.push(i, (i+1) % this.slices, i + this.slices);

            this.indices.push((i+1) % this.slices, (i+1) % this.slices + this.slices, i + this.slices);

            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
            ang+=alphaAng;
        }

        //Top Base
        ang = 0
        for(let i = 0; i < this.slices; i++){

            this.vertices.push(Math.cos(ang), 1, -Math.sin(ang));
            
            this.normals.push(Math.cos(ang), 1, -Math.sin(ang));
            ang+=alphaAng;
        }
        /*
        for(let i=0; i < this.slices-2; i++){
            this.indices.push(i, i + 1, i + 2)
            this.indices.push()
        }
        */

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}