/**
 * MyClockTop
 * @constructor
 */
 function MyClockTop(scene) {
 	CGFobject.call(this,scene);

 	this.initBuffers();
 };

 MyClockTop.prototype = Object.create(CGFobject.prototype);
 MyClockTop.prototype.constructor = MyClockTop;

 MyClockTop.prototype.initBuffers = function() {
 

    this.vertices = [
 	];

 	this.indices = [
 	];

 	/*this.normals = [
 	];*/
    
    var indice = 0;
 	var angulo = Math.PI * 2 / 12;
    
 	this.vertices.push(0);
 	this.vertices.push(0);
 	this.vertices.push(0);

 	for(var i = 0; i < 12; i++){
        this.vertices.push(0.5*Math.cos(indice));
        this.vertices.push(0.5*Math.sin(indice));
        this.vertices.push(0);
        indice = angulo * i;
 	}

 	indice = 1;
    for(var i = 0; i < 12; i++){
        this.indices.push(0);
        if(i == 11){
          this.indices.push(indice);
          this.indices.push(1);
        }else{
          this.indices.push(indice);
          this.indices.push(indice + 1);
          indice = indice + 1;
        }
 	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };