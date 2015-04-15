/**
 * MyClockTop
 * @constructor
 */
 function MyClockHand(scene,height,type,myAngle) {
 	CGFobject.call(this,scene);
    this.height = height;
    this.angle = myAngle;
    this.type = type;

 	this.initBuffers();
 };

 MyClockHand.prototype = Object.create(CGFobject.prototype);
 MyClockHand.prototype.constructor = MyClockHand;

 MyClockHand.prototype.initBuffers = function() {
 

    this.vertices = [ -0.02,0,0,
                    0.02,0,0,
                    0,this.height,0
 	];

 	this.indices = [
 	      0,1,2
 	];

 	/*this.normals = [
 	];*/

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };


 MyClockHand.prototype.setAngle = function(thisAngle) {
     console.log('Type : %s myAngle: %d',this.type,thisAngle);
     this.angle = thisAngle;
     console.log('angle: %d',this.angle);
 }


 MyClockHand.prototype.update = function(currTime) {
 	if(this.type == 'seconds'){
      this.setAngle((this.angle + 360 / (60 * 100)));
      console.log('Type: %s Angle: %d after print',this.type, this.angle);
 	}else if(this.type == 'minutes'){
      this.setAngle(this.angle + 360 / (60 * 60 * 100));
 	}else if(this.type == 'hours'){
      this.setAngle(this.angle + 360 / (60 * 60 * 60 * 100));
 	}
 	console.log('Type: %s Angle: %d',this.type, this.angle);
 };