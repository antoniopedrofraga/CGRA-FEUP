function MyTable(scene) {
 CGFobject.call(this,scene);
	
	this.tableAppearance = new CGFappearance(this.scene);
	this.tableAppearance.setAmbient(0.3,0.3,0.3,1);
	this.tableAppearance.setDiffuse(0.8,0.8,0.8,1);
	this.tableAppearance.setSpecular(0.1,0.1,0.1,1);
	this.tableAppearance.setShininess(3);
	this.tableAppearance.loadTexture("/resources/images/table.png");

	this.metal = new CGFappearance(this.scene);
	this.metal.setAmbient(0.3,0.3,0.3,1);
	this.metal.setDiffuse(0.6,0.6,0.6,1);
	this.metal.setSpecular(0.8,0.8,0.8,1);
	this.metal.setShininess(120);
	
 	this.MyUnitCubeQuad =new MyUnitCubeQuad(this.scene,0,1,0,1);
	this.MyUnitCubeQuad.initBuffers();
};

MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor = MyTable;

MyTable.prototype.display = function () {
	


    //PRIMEIRA PERNA
    this.scene.pushMatrix();
    this.scene.scale(0.3,3.5,0.3);
    this.scene.translate(7.5,0.5,4.25);
    this.metal.apply();
    this.MyUnitCubeQuad.display();
    this.scene.popMatrix();
    
     //SEGUNDA PERNA
    this.scene.pushMatrix();
    this.scene.scale(0.3,3.5,0.3);
    this.scene.translate(7.5,0.5,-4.25);
    this.metal.apply();
    this.MyUnitCubeQuad.display();
    this.scene.popMatrix();
    
    //TERCEIRA PERNA
    this.scene.pushMatrix();
    this.scene.scale(0.3,3.5,0.3);
    this.scene.translate(-7.5,0.5,-4.25);
    this.metal.apply();
    this.MyUnitCubeQuad.display();
    this.scene.popMatrix();

    //QUARTA PERNA
    this.scene.pushMatrix();
    this.scene.scale(0.3,3.5,0.3);
    this.scene.translate(-7.5,0.5,4.25);
    this.metal.apply();
    this.MyUnitCubeQuad.display();
    this.scene.popMatrix();
    
    //TAMPO
    this.scene.pushMatrix();
    this.scene.translate(0,3.5,0);
    this.scene.scale(5,0.3,3);
    this.tableAppearance.apply();
    this.MyUnitCubeQuad.display();
    this.scene.popMatrix();

};