/**
 * MyClock
 * @constructor
 */
 function MyClock(scene) {
 	CGFobject.call(this,scene);

	this.cylinder = new MyCylinder(this.scene,12,1);
	this.cylinder.initBuffers();

	this.top = new MyClockTop(this.scene);
	this.top.initBuffers();
 };

 MyClock.prototype = Object.create(CGFobject.prototype);
 MyClock.prototype.constructor = MyClock;

 MyClock.prototype.display = function() {
 
	this.scene.pushMatrix();
    this.cylinder.display();
    this.top.display();
    this.scene.popMatrix();
 };
