/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */

 /*

Com este exercício pretende-se que crie um cube map que sirva como ambiente de fundo da
cena. 
Um cube map pode ser definido como:
● um cubo de grandes dimensões (bastante superiores à da cena visível),
● com componente especular e difusa nulas, e componente ambiente forte,
● apenas com as faces interiores visíveis,
● e às quais são aplicadas texturas que representam a envolvente da cena (uma paisagem, por exemplo; ver Figura 4).

usando por base o MyUnitCubeQuad e seis texturas diferentes, uma para cada face do
cubo

Escolha uma dessas duas opções e inclua na pasta do projeto uma cópia do código da classe
respetiva - MyUnitCube ou MyUnitCubeQuad. 

Modifique essa cópia para criar uma classe MyCubeMap, 
de forma a ser visível por dentro, 
e com coordenadas de textura de acordo com essa opção.

O cube map deve ser unitário e ao ser usado na cena, 
deve ser escalado de forma a medir 50 unidades de lado. 

Se necessário, 
poderá ter de alterar a posição da câmara de forma 
a que fique no interior e centrada dentro do cube map.

O código de base inclui um exemplo de imagens para cada um dos dois tipos de cube map
(uma semelhante à da Figura 4, e um pack de 6 imagens para a opção de seis quads).

Devem procurar/criar pelo menos mais uma imagem envolvente à vossa escolha, para permitir
depois ao utilizador escolher entre essa e a de exemplo através da interface gráfica (ver ponto
2.2). 
Como ponto de partida, podem consultar o endereço:
https://www.cleanpng.com/free/skybox.html
*/

class MyCubeMap extends CGFobject{
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
        this.frontTexture = new CGFtexture(this.scene, 'images/split_cubemap/front.png')
        this.leftTexture = new CGFtexture(this.scene, 'images/split_cubemap/left.png')
        this.backTexture = new CGFtexture(this.scene, 'images/split_cubemap/back.png')
        this.rightTexture = new CGFtexture(this.scene, 'images/split_cubemap/right.png')
        this.topTexture = new CGFtexture(this.scene, 'images/split_cubemap/top.png')
        this.bottomTexture = new CGFtexture(this.scene, 'images/split_cubemap/bottom.png')
    }
    //mineBottom


    display(){

        this.scene.pushMatrix()
        
        this.scene.scale(50,50,50);
        //Front face
        this.scene.pushMatrix()

        
        this.scene.translate(0,0,0.5)

        this.sideMaterial.setTexture(this.frontTexture)

        this.sideMaterial.apply()

        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.front.display()
        
        this.scene.popMatrix()

        //Back face
        this.scene.pushMatrix()

        this.scene.translate(0, 0, -0.5)

        this.scene.rotate(Math.PI, 0, 1, 0)

        this.sideMaterial.setTexture(this.backTexture)

        this.sideMaterial.apply()

        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.back.display()

        this.scene.popMatrix()

        //Left face
        this.scene.pushMatrix()
        
        this.scene.translate(-0.5,0,0)

        this.scene.rotate(-Math.PI/2, 0, 1, 0)

        this.sideMaterial.setTexture(this.leftTexture)

        this.sideMaterial.apply()

        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.left.display()

        this.scene.popMatrix()

        //Right face
        this.scene.pushMatrix()
        
        this.scene.translate(0.5,0,0)

        this.scene.rotate(Math.PI/2, 0, 1, 0)

        this.sideMaterial.setTexture(this.rightTexture)

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

        
        this.scene.popMatrix()

    }       
}