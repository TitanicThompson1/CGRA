
class MyBillBoard extends CGFobject{
    constructor(scene){
        super(scene)
        this.scene = scene
        this.plane = new MyPlane (this)
    }
}