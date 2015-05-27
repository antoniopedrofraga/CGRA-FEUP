function MyWall(scene) {
CGFobject.call(this,scene);
    CGFobject.call(this,scene);

    this.wall =new MyQuad(this.scene, -0.6, 1.55, -0.6, 1.55);
};



MyWall.prototype = Object.create(CGFobject.prototype);
MyWall.prototype.constructor = MyWall;

MyWall.prototype.display = function() {
    this.scene.metalAppearance.apply();
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI / 2, 0,1,0);
    this.scene.translate(-2.1,4,0);
    this.scene.scale(4.15,8,1);
    this.wall.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI / 2, 0,1,0);
    this.scene.translate(-12.8,4,0);
    this.scene.scale(4.4,8,1);
    this.wall.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0,1.15,7.4);
    this.scene.rotate(Math.PI / 2, 0,1,0);
    this.scene.scale(6.6,2.3,0);
    this.wall.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0,1.2 + 5.6,7.4);
    this.scene.rotate(Math.PI / 2, 0,1,0);
    this.scene.scale(6.6,2.4,0);
    this.wall.display();
    this.scene.popMatrix();
    
};
