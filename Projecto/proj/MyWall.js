function MyWall(scene) {
CGFobject.call(this,scene);
    CGFobject.call(this,scene);

    this.wallLeft = new MyQuad(this.scene, -2.2, 0.05, -0.7, 1.7);
	this.wallRight = new MyQuad(this.scene, 0.95, 2.5, -0.7, 1.7);
	this.wallTop = new MyQuad(this.scene, 0, 1, -1, 0.05);
	this.wallDown = new MyQuad(this.scene, 0, 1, 0.95, 2);
};



MyWall.prototype = Object.create(CGFobject.prototype);
MyWall.prototype.constructor = MyWall;

MyWall.prototype.display = function() {
    
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI / 2, 0,1,0);
    this.scene.translate(-2.1,4,0);
    this.scene.scale(4.15,8,1);
    this.wallRight.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI / 2, 0,1,0);
    this.scene.translate(-12.8,4,0);
    this.scene.scale(4.4,8,1);
    this.wallLeft.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0,1.15,7.4);
    this.scene.rotate(Math.PI / 2, 0,1,0);
    this.scene.scale(6.6,2.3,0);
    this.wallDown.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0,6.8,7.4);
    this.scene.rotate(Math.PI / 2, 0,1,0);
    //this.scene.rotate(Math.PI / 2,0,0,1); // evitar sombras
    this.scene.scale(/*3.3*/6.6,2.4,0.3);
    this.wallTop.display();
    this.scene.popMatrix();
    
};
