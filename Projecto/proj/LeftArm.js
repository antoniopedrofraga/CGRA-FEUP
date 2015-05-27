function LeftArm(scene) {
CGFobject.call(this,scene);

this.braco = new MyRobotArm(this.scene,500,1);
this.braco.initBuffers();

this.topo = new MyLamp(this.scene,25,5);
this.topo.initBuffers();
    
};

LeftArm.prototype = Object.create(CGFobject.prototype);
LeftArm.prototype.constructor = LeftArm;

LeftArm.prototype.display = function() {
    this.scene.pushMatrix();
     if(this.scene.currRobotAppearance == 'Bender'){
        this.scene.metalAppearance.apply();
    }else if(this.scene.currRobotAppearance == 'RoboCan'){
        this.scene.metalAppearance2.apply();
    }else if(this.scene.currRobotAppearance == 'Militar'){
    	this.scene.metalAppearance3.apply();
    }
    this.scene.rotate(- Math.PI / 2, 0, 1, 0);
	this.scene.rotate(- 2 * Math.PI / 6, 1, 0, 0);
    this.braco.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
     if(this.scene.currRobotAppearance == 'Bender'){
        this.scene.metalAppearance.apply();
    }else if(this.scene.currRobotAppearance == 'RoboCan'){
        this.scene.metalAppearance2.apply();
    }else if(this.scene.currRobotAppearance == 'Militar'){
    	this.scene.metalAppearance3.apply();
    }
    this.scene.rotate(- Math.PI / 2, 0, 1, 0);
	this.scene.rotate(- 2 * Math.PI / 6, 1, 0, 0);
    this.scene.scale(0.2,0.2,0.2);
    this.scene.translate(0,0,5);
    this.topo.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    if(this.scene.currRobotAppearance == 'Bender'){
        this.scene.metalAppearance.apply();
    }else if(this.scene.currRobotAppearance == 'RoboCan'){
        this.scene.metalAppearance2.apply();
    }else if(this.scene.currRobotAppearance == 'Militar'){
    	this.scene.metalAppearance3.apply();
    }
    this.scene.rotate(- Math.PI / 2, 0, 1, 0);
	this.scene.rotate(- 2 * Math.PI / 6, 1, 0, 0);
    this.scene.scale(0.2,0.2,0.2);
    this.scene.rotate(Math.PI, 0, 1, 0);
    this.topo.display();
    this.scene.popMatrix();

};