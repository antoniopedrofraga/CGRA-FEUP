 function MyRobot(scene, x, y, z, angulo) {
 	CGFobject.call(this,scene);

 	this.initBuffers();
 	this.x = x;
 	this.y = y;
 	this.z = z;
 	this.angulo = angulo;

 	this.temp_angulo;

 	//Partes do robot
 	this.corpo = new MyCylinder(this.scene,8,2);
	this.corpo.initBuffers();

	this.topo = new MyClockTop(this.scene);
	this.topo.initBuffers();

	this.roda = new MyRobotWheel(this.scene,8,1,0.4);
	this.roda.initBuffers();

	
    this.wheelAppearance = new CGFappearance(this.scene);
	this.wheelAppearance.setAmbient(0.3,0.3,0.3,1);
	this.wheelAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.wheelAppearance.setSpecular(0.1,0.1,0.1,1);	
	this.wheelAppearance.setShininess(2);
	this.wheelAppearance.loadTexture("/resources/images/wheel.jpg");

 };

 MyRobot.prototype = Object.create(CGFobject.prototype);
 MyRobot.prototype.constructor = MyRobot;

MyRobot.prototype.display = function() {
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI / 2 , 1, 0, 0);
    this.scene.translate(0,0,-2.5);
    this.corpo.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2, 0 ,1 ,0);
    this.scene.translate(0,0.5,0.5);
    this.roda.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2, 0 ,1 ,0);
    this.scene.translate(0,0.5,-0.9);
    this.roda.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.metalAppearance.apply();
    this.scene.rotate(- Math.PI / 2, 1,0,0);
    this.scene.translate(0, 0, 2.5);
    this.topo.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.wheelAppearance.apply();
    this.scene.rotate(- Math.PI / 2, 0, 1 ,0);
    this.scene.translate(0, 0.5, 0.9);
    this.topo.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.wheelAppearance.apply();
    this.scene.rotate(Math.PI / 2, 0, 1 ,0);
    this.scene.translate(0, 0.5, 0.9);
    this.topo.display();
    this.scene.popMatrix();



}

MyRobot.prototype.updateRotation = function(rotation) {
    this.temp_angulo = rotation;
};

MyRobot.prototype.updateTranslate = function(myCase, mySpeed) {
    switch(myCase)
    {
      case 0:
        this.x += mySpeed / 25 * Math.sin(this.angulo);
        this.z += mySpeed / 25 * Math.cos(this.angulo);
        break;
      case 1:
        this.x -= mySpeed / 25 * Math.sin(this.angulo);
        this.z -= mySpeed / 25 * Math.cos(this.angulo);
        break;
    }
}

MyRobot.prototype.setUp = function() {
    this.scene.translate(this.x, this.y, this.z);
    this.scene.rotate(this.angulo, 0,1,0);
}

MyRobot.prototype.update = function(currTime) {
    if(this.temp_angulo)
    {
        console.log(this.temp_angulo);
        this.angulo += this.temp_angulo;
        this.temp_angulo = 0;
    }
}