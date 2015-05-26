 function MyRobot(scene, x, y, z, angulo) {
 	CGFobject.call(this,scene);

 	this.initBuffers();
 	this.x = x;
 	this.y = y;
 	this.z = z;
 	this.angulo = angulo;

 	this.temp_angulo;
 };

 MyRobot.prototype = Object.create(CGFobject.prototype);
 MyRobot.prototype.constructor = MyRobot;

 MyRobot.prototype.initBuffers = function() {
 

    this.vertices = [ 0.5, 0.3,0,
                    -0.5, 0.3, 0,
                    0, 0.3, 2
 	];

 	this.indices = [
 	      0,1,2,
 	      2,1,0
 	];

 	this.normals = [
 	  0,1,0,
 	  0,1,0,
 	  0,1,0
 	];

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };


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