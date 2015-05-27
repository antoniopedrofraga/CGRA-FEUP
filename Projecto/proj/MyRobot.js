 function MyRobot(scene, x, y, z, angulo) {
 	CGFobject.call(this,scene);

 	this.initBuffers();
 	this.x = x;
 	this.y = y;
 	this.z = z;
 	this.angulo = angulo;

 	this.temp_angulo;

 	//Partes do robot
 	this.corpo = new MyCylinder(this.scene,500,2);
	this.corpo.initBuffers();

	this.topo = new MyClockTop(this.scene);
	this.topo.initBuffers();

	this.roda = new MyRobotWheel(this.scene,500,1,0.4);
	this.roda.initBuffers();
    
    this.cabeca = new MyLamp(this.scene,25,5);
    this.cabeca.initBuffers();
	
	this.braco = new RightArm(this.scene);
	this.braco.initBuffers();

	this.braco_esquerdo = new LeftArm(this.scene);
	this.braco_esquerdo.initBuffers();


    this.wheelAppearance = new CGFappearance(this.scene);
	this.wheelAppearance.setAmbient(0.3,0.3,0.3,1);
	this.wheelAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.wheelAppearance.setSpecular(0.1,0.1,0.1,1);	
	this.wheelAppearance.setShininess(2);
	this.wheelAppearance.loadTexture("/resources/images/wheel.jpg");

	this.tireAppearance = new CGFappearance(this.scene);
	this.tireAppearance.setAmbient(0.3,0.3,0.3,1);
	this.tireAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.tireAppearance.setSpecular(0.1,0.1,0.1,1);
	this.tireAppearance.setShininess(2);
	this.tireAppearance.loadTexture("/resources/images/tire.jpg");

	this.headAppearance = new CGFappearance(this.scene);
	this.headAppearance.setAmbient(0.3,0.3,0.3,1);
	this.headAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.headAppearance.setSpecular(0.1,0.1,0.1,1);
	this.headAppearance.setShininess(2);
	this.headAppearance.loadTexture(this.scene.robotAppearances[1]);

	this.bodyAppearance = new CGFappearance(this.scene);
	this.bodyAppearance.setAmbient(0.3,0.3,0.3,1);
	this.bodyAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.bodyAppearance.setSpecular(0.1,0.1,0.1,1);
	this.bodyAppearance.setShininess(2);
	this.bodyAppearance.loadTexture(this.scene.robotAppearances[2]);

	this.headAppearance2 = new CGFappearance(this.scene);
	this.headAppearance2.setAmbient(0.3,0.3,0.3,1);
	this.headAppearance2.setDiffuse(0.9,0.9,0.9,1);
	this.headAppearance2.setSpecular(0.1,0.1,0.1,1);
	this.headAppearance2.setShininess(2);
	this.headAppearance2.loadTexture(this.scene.robotAppearances[4]);

	this.bodyAppearance2 = new CGFappearance(this.scene);
	this.bodyAppearance2.setAmbient(0.3,0.3,0.3,1);
	this.bodyAppearance2.setDiffuse(0.9,0.9,0.9,1);
	this.bodyAppearance2.setSpecular(0.1,0.1,0.1,1);
	this.bodyAppearance2.setShininess(2);
	this.bodyAppearance2.loadTexture(this.scene.robotAppearances[5]);

	this.headAppearance3 = new CGFappearance(this.scene);
	this.headAppearance3.setAmbient(0.3,0.3,0.3,1);
	this.headAppearance3.setDiffuse(0.9,0.9,0.9,1);
	this.headAppearance3.setSpecular(0.1,0.1,0.1,1);
	this.headAppearance3.setShininess(2);
	this.headAppearance3.loadTexture(this.scene.robotAppearances[7]);

	this.bodyAppearance3 = new CGFappearance(this.scene);
	this.bodyAppearance3.setAmbient(0.3,0.3,0.3,1);
	this.bodyAppearance3.setDiffuse(0.9,0.9,0.9,1);
	this.bodyAppearance3.setSpecular(0.1,0.1,0.1,1);
	this.bodyAppearance3.setShininess(2);
	this.bodyAppearance3.loadTexture(this.scene.robotAppearances[8]);



 };

 MyRobot.prototype = Object.create(CGFobject.prototype);
 MyRobot.prototype.constructor = MyRobot;

MyRobot.prototype.display = function() {
    this.scene.pushMatrix();
    if(this.scene.currRobotAppearance == 'Bender'){
    	this.bodyAppearance.apply();
    }else if(this.scene.currRobotAppearance == 'RoboCan'){
    	this.bodyAppearance2.apply();
    }else if(this.scene.currRobotAppearance == 'Militar'){
    	this.bodyAppearance3.apply();
    }
    this.scene.rotate(Math.PI / 2,0 , 1, 0);
    this.scene.rotate(Math.PI / 2 , 1, 0, 0);
    this.scene.translate(0,0,-2.5);
    this.corpo.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(1.1,1.3,0);
	this.braco_esquerdo.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(-0.6,2.2,0);
	this.braco.display();
	this.scene.popMatrix();

   	this.scene.pushMatrix();
   	if(this.scene.currRobotAppearance == 'Bender'){
   		this.headAppearance.apply();
   	}else if(this.scene.currRobotAppearance == 'RoboCan'){
    	this.headAppearance2.apply();
    }else if(this.scene.currRobotAppearance == 'Militar'){
    	this.headAppearance3.apply();
    }
   	this.scene.rotate(Math.PI / 2,0 , 1, 0);
   	this.scene.rotate(-Math.PI / 2, 1, 0 ,0);
   	this.scene.translate(0,0,2.5);
   	this.cabeca.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.tireAppearance.apply();
    this.scene.rotate(Math.PI/2, 0 ,1 ,0);
    this.scene.translate(0,0.5,0.5);
    this.roda.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.tireAppearance.apply();
    this.scene.rotate(Math.PI/2, 0 ,1 ,0);
    this.scene.translate(0,0.5,-0.9);
    this.roda.display();
    this.scene.popMatrix();

    
    this.scene.pushMatrix();
    if(this.scene.currRobotAppearance == 'Bender'){
    	this.scene.metalAppearance.apply();
    }else if(this.scene.currRobotAppearance == 'RoboCan'){
    	this.scene.metalAppearance2.apply();
    }else if(this.scene.currRobotAppearance == 'Militar'){
    	this.scene.metalAppearance3.apply();
    }
    this.scene.rotate(- Math.PI / 2, 1,0,0);
    this.scene.translate(0, 0, 2.5);
    this.topo.display();
    this.scene.popMatrix();
    
    //Tampo esquerdo fora

    this.scene.pushMatrix();
    this.wheelAppearance.apply();
    this.scene.rotate(- Math.PI / 2, 0, 1 ,0);
    this.scene.translate(0, 0.5, 0.9);
    this.topo.display();
    this.scene.popMatrix();
  
    //Tampo esquerdo dentro
    this.scene.pushMatrix();
    this.wheelAppearance.apply();
    this.scene.rotate(Math.PI / 2, 0, 1 ,0);
    this.scene.translate(0, 0.5, -0.5);
    this.topo.display();
    this.scene.popMatrix();
    
    //Tampo direito fora
    this.scene.pushMatrix();
    this.wheelAppearance.apply();
    this.scene.rotate(Math.PI / 2, 0, 1 ,0);
    this.scene.translate(0, 0.5, 0.9);
    this.topo.display();
    this.scene.popMatrix();
    
    //Tampo direito dentro

     this.scene.pushMatrix();
    this.wheelAppearance.apply();
    this.scene.rotate(- Math.PI / 2, 0, 1 ,0);
    this.scene.translate(0, 0.5, -0.5);
    this.topo.display();
    this.scene.popMatrix();
}

MyRobot.prototype.updateRotation = function(rotation) {
    this.temp_angulo = rotation;
};

MyRobot.prototype.updateTranslate = function(myCase, mySpeed) {
    switch(myCase)
    {
      case 0:
        this.x += mySpeed / 25 * Math.sin(this.angulo);
        this.z += mySpeed / 25 * Math.cos(this.angulo);
        break;
      case 1:
        this.x -= mySpeed / 25 * Math.sin(this.angulo);
        this.z -= mySpeed / 25 * Math.cos(this.angulo);
        break;
    }
}

MyRobot.prototype.setUp = function() {
    this.scene.translate(this.x, this.y, this.z);
    this.scene.rotate(this.angulo, 0,1,0);
}

MyRobot.prototype.update = function(currTime) {
    if(this.temp_angulo)
    {
        this.angulo += this.temp_angulo;
        this.temp_angulo = 0;
    }
}