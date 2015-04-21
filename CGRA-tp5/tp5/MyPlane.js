/**
 * MyClockTop
 * @constructor
 */
 function MyPlane(scene) {
 	CGFobject.call(this,scene);

 	this.initBuffers();
 };

 MyPlane.prototype = Object.create(CGFobject.prototype);
 MyPlane.prototype.constructor = MyClockHand;

 MyPlane.prototype.initBuffers = function() {
  

    this.vertices = [ 0,0,0,
                    0,0,1,
                    0,-0.25,0,
                    -0.25,0,0,
                    0.25,0,0
 	];

 	this.indices = [
 	      0,1,2,
 	      2,1,0,
 	      3,4,1,
 	      1,4,3
 	];

 	/*this.normals = [
 	];*/

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };



 MyPlane.prototype.update = function(currTime) {
 };