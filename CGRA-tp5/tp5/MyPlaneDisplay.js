

 function MyPlaneDisplay(scene) {
 	CGFobject.call(this,scene);
    this.plane = new MyPlane(this.scene,9,7,-12);
	this.lastCurrTime = 0;
    this.delta_ms = 0;
    this.xz = 0.5;
    this.time = 0;

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
	this.scene.translate(this.plane.x,this.plane.y,this.plane.z);
	//this.scene.materialB.apply();
    this.plane.display();
    this.scene.popMatrix();
	
 };

MyPlaneDisplay.prototype.update = function(currTime) {
	this.delta_ms = currTime - this.lastCurrTime;
    this.lastCurrTime = currTime;
	this.xz = (0.5 * this.delta_ms) / 100;
    this.time++;
	if(this.plane.z < -1.1 && this.time > 1){
	this.plane.z += this.xz;
	this.plane.y += 0.01;
	}else if(this.plane.z >= -1.1 && this.plane.y >= 0.3){
	this.plane.y -= this.xz;
	}
};
