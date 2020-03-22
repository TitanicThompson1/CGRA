/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyUnitCubeQuad extends CGFobject{
    constructor(scene){
        super(scene)
        this.scene = scene
        this.initFaces()
        this.initMaterials()
        this.initTextures()

    }
    initFaces(){
        this.front = new MyQuad(this.scene,undefined)
        this.back = new MyQuad(this.scene, undefined)
        this.left = new MyQuad(this.scene,undefined)
        this.right = new MyQuad(this.scene, undefined)
        this.top = new MyQuad(this.scene,undefined)
        this.bottom = new MyQuad(this.scene, undefined)
    }
    initMaterials(){
        this.sideMaterial = new CGFappearance(this.scene)
        this.sideMaterial.setAmbient(1.0, 1.0, 1.0, 1.0);
        this.sideMaterial.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.sideMaterial.setShininess(10.0);

        this.topMaterial = new CGFappearance(this.scene)
        this.topMaterial.setAmbient(1.0, 1.0, 1.0, 1.0);
        this.sideMaterial.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.topMaterial.setShininess(10.0);
        
        this.bottomMaterial = new CGFappearance(this.scene)
        this.bottomMaterial.setAmbient(1.0, 1.0, 1.0, 1.0);
        this.sideMaterial.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.bottomMaterial.setShininess(10.0);
    }
    initTextures(){
        this.sideTexture = new CGFtexture(this.scene, 'images/mineSide.png')
        this.topTexture = new CGFtexture(this.scene, 'images/mineTop.png')
        this.bottomTexture = new CGFtexture(this.scene, 'images/mineBottom.png')
    }
    mineBottom


    display(){

        //Front face
        this.scene.pushMatrix()

        this.scene.translate(0,0,0.5)

        this.sideMaterial.setTexture(this.sideTexture)

        this.sideMaterial.apply()

        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.front.display()
        
        this.scene.popMatrix()

        //Back face
        this.scene.pushMatrix()

        this.scene.translate(0, 0, -0.5)

        this.scene.rotate(Math.PI, 0, 1, 0)

        this.sideMaterial.setTexture(this.sideTexture)

        this.sideMaterial.apply()

        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.back.display()

        this.scene.popMatrix()

        //Left face
        this.scene.pushMatrix()
        
        this.scene.translate(-0.5,0,0)

        this.scene.rotate(-Math.PI/2, 0, 1, 0)

        this.sideMaterial.setTexture(this.sideTexture)

        this.sideMaterial.apply()

        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.left.display()

        this.scene.popMatrix()

        //Right face
        this.scene.pushMatrix()
        
        this.scene.translate(0.5,0,0)

        this.scene.rotate(Math.PI/2, 0, 1, 0)

        this.sideMaterial.setTexture(this.sideTexture)

        this.sideMaterial.apply()

        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.right.display()

        this.scene.popMatrix()

        
        //Top face
        this.scene.pushMatrix()
        
        this.scene.translate(0,0.5,0)

        this.scene.rotate(-Math.PI/2, 1, 0, 0)

        this.topMaterial.setTexture(this.topTexture)

        this.topMaterial.apply()

        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.top.display()

        this.scene.popMatrix()

        
        //Bottom face
        this.scene.pushMatrix()

        this.scene.translate(0,-0.5,0)

        this.scene.rotate(Math.PI/2, 1, 0, 0)

        this.bottomMaterial.setTexture(this.bottomTexture)

        this.bottomMaterial.apply()

        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.bottom.display()

        this.scene.popMatrix()
    }
        
}