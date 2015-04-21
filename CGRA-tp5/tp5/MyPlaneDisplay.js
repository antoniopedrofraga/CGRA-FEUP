

 function MyPlaneDisplay(scene) {
 	CGFobject.call(this,scene);
    this.plane = new MyPlane(this.scene);


    this.materialB = new CGFappearance(this);
	this.materialB.setAmbient(1,1,1,1);
	this.materialB.setDiffuse(1,1,1,1);
	this.materialB.setSpecular(1,1,1,1);	
	this.materialB.setShininess(120);
	
 };

 MyPlaneDisplay.prototype = Object.create(CGFobject.prototype);
 MyPlaneDisplay.prototype.constructor = MyPlaneDisplay;

 MyPlaneDisplay.prototype.display = function() {
 
	this.scene.pushMatrix();
	this.scene.rotate(-Math.PI/2,0,1,0);
	this.scene.translate(9,7,-12);
	this.scene.materialB.apply();
    this.plane.display();
    this.scene.popMatrix();
	
 };

MyPlaneDisplay.prototype.update = function(currTime) {
};
