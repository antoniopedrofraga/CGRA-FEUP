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

	this.clockAppearance = new CGFappearance(this.scene);
	this.clockAppearance.setAmbient(0.3,0.3,0.3,1);
	this.clockAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.clockAppearance.setSpecular(0.1,0.1,0.1,1);	
	this.clockAppearance.setShininess(2);
	this.clockAppearance.loadTexture("/resources/images/clock.png");
 };

 MyClock.prototype = Object.create(CGFobject.prototype);
 MyClock.prototype.constructor = MyClock;

 MyClock.prototype.display = function() {
 
	this.scene.pushMatrix();
    this.cylinder.display();
    this.scene.popMatrix();
	
	this.scene.pushMatrix();
	//this.clockAppearance.apply();
	this.scene.translate(0,0,1);
    this.top.display();
    this.scene.popMatrix();

 };
