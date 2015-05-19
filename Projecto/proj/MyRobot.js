 function MyRobot(scene) {
 	CGFobject.call(this,scene);

 	this.initBuffers();
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

 	/*this.normals = [
 	];*/

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
