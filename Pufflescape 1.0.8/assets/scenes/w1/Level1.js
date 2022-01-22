
// You can write more code here
var ball;
var cValue;
var rectangle1;
const scale = .82;
var maxVelocity = 20 * scale;
var maxAngularVelocity = .29 * scale
var ctrlPair;
var door;
/* START OF COMPILED CODE */

class Level1 extends Phaser.Scene {

	constructor() {
		super("Level1");

		/** @type {Phaser.GameObjects.Sprite} */
		this.rampExample;
		/** @type {Phaser.GameObjects.Sprite} */
		this.keyExample;
		/** @type {Phaser.GameObjects.Layer} */
		this.foreground;
		/** @type {Phaser.GameObjects.Image} */
		this.ballShadowUnder;
		/** @type {Phaser.GameObjects.Sprite} */
		this.puffleAnims;
		/** @type {Phaser.GameObjects.Image} */
		this.ballShadowOver;
		/** @type {Phaser.GameObjects.Image} */
		this.ballObject;
		/** @type {Phaser.GameObjects.Image} */
		this.symbol_3;
		/** @type {Phaser.GameObjects.Rectangle} */
		this.rectangle_1_1_1;
		/** @type {Phaser.GameObjects.Rectangle} */
		this.rectangle_1_1;
		/** @type {Phaser.GameObjects.Rectangle} */
		this.rectangle_1;
		/** @type {Phaser.GameObjects.Image} */
		this.hintMap;
		/** @type {UI} */
		this.ui_buttons;
		/** @type {Phaser.GameObjects.Image} */
		this.hintMask;
		/** @type {Pause} */
		this.pauseScreen;
		/** @type {Phaser.GameObjects.Container} */
		this.endScreen;
		/** @type {Phaser.GameObjects.Rectangle} */
		this.menuFade;
		/** @type {endUI} */
		this.endUIFinal;


		/* START-USER-CTR-CODE */
		this.airTime;
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// level1_1
		this.add.image(757, 494, "Level1_1");

		// level1Ground
		const level1Ground = this.add.image(4, 1, "Level1Ground");
		level1Ground.setOrigin(0.04747801156397925, 0.009737206310257901);
		level1Ground.visible = false;

		// RampExample
		const rampExample = this.add.sprite(330, 675, "RampExample", "Symbol 15840001.png");
		rampExample.scaleX = 0.64917801995666;
		rampExample.scaleY = 0.64917801995666;
		rampExample.angle = 3;

		// KeyExample
		const keyExample = this.add.sprite(534, 144, "2");
		keyExample.scaleX = 0.4823353048711637;
		keyExample.scaleY = 0.4823353048711637;

		// foreground
		const foreground = this.add.layer();

		// exitOver
		const exitOver = this.add.image(1405, 704, "exitOver");
		exitOver.scaleX = 0.9649079211260638;
		exitOver.scaleY = 0.9649079211260638;
		foreground.add(exitOver);

		// foreground_1
		const foreground_1 = this.add.image(758, 494, "1foreground");
		foreground.add(foreground_1);

		// close1_png
		const close1_png = this.add.image(1472, 43, "buttons", "close1.png");

		// ballShadowUnder
		const ballShadowUnder = this.add.image(110, 197, "ballShadowUnder");

		// puffleAnims
		const puffleAnims = this.add.sprite(108, 196, "PurpleSprites", "purple0001.png");
		puffleAnims.scaleX = 0.39444245274643;
		puffleAnims.scaleY = 0.39444245274643;

		// ballShadowOver
		const ballShadowOver = this.add.image(109, 197, "ballShadowOver");

		// BallObject
		const ballObject = this.add.image(109, 197, "ball");

		// symbol_2
		const symbol_2 = this.add.image(433, 842, "Symbol 2");
		symbol_2.scaleX = 1.082692047920357;
		symbol_2.scaleY = 1.082692047920357;
		symbol_2.angle = -34;

		// symbol_2_1
		const symbol_2_1 = this.add.image(566, 807, "Symbol 2");
		symbol_2_1.scaleX = 1.2226632606777537;
		symbol_2_1.scaleY = 1.2226632606777537;

		// symbol_3
		const symbol_3 = this.add.image(693, 841, "Symbol 3");
		symbol_3.scaleX = 0.651728376415618;
		symbol_3.scaleY = 0.651728376415618;
		symbol_3.angle = 31;

		// rectangle
		const rectangle = this.add.rectangle(551, 834, 128, 128);
		rectangle.scaleX = 0.5836364623470147;
		rectangle.scaleY = 0.20127176681410605;
		rectangle.isFilled = true;

		// door
		const door = this.add.rectangle(1315, 747, 64, 350);
		door.isFilled = true;
		door.fillColor = 8788889;

		// exit
		const exit = this.add.rectangle(1486, 770, 128, 128);
		exit.isFilled = true;
		exit.fillColor = 8260620;

		// key
		const key = this.add.rectangle(98, 808, 146, 78);
		key.isFilled = true;
		key.fillColor = 15521600;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(1288, 226, 51, 82);
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 14649600;

		// rectangle_2_1
		const rectangle_2_1 = this.add.rectangle(78, 549, 51, 82);
		rectangle_2_1.isFilled = true;
		rectangle_2_1.fillColor = 14649600;

		// rectGroup
		const rectGroup = this.add.container(0, 0);

		// rectangle_1_1_1
		const rectangle_1_1_1 = this.add.rectangle(682, 279, 128, 128);
		rectangle_1_1_1.scaleX = 10.805676800343262;
		rectangle_1_1_1.scaleY = 0.6700990828430419;
		rectangle_1_1_1.fillAlpha = 0;
		rectangle_1_1_1.isStroked = true;
		rectangle_1_1_1.strokeColor = 1359887;
		rectangle_1_1_1.lineWidth = 3;
		rectGroup.add(rectangle_1_1_1);

		// rectangle_1_1
		const rectangle_1_1 = this.add.rectangle(1177, 534, 128, 128);
		rectangle_1_1.scaleX = 6.319915339002196;
		rectangle_1_1.scaleY = 0.6700990828430419;
		rectangle_1_1.fillAlpha = 0;
		rectangle_1_1.isStroked = true;
		rectangle_1_1.strokeColor = 1359887;
		rectangle_1_1.lineWidth = 3;
		rectGroup.add(rectangle_1_1);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(720, 872, 128, 128);
		rectangle_1.scaleX = 11.421693065188025;
		rectangle_1.fillAlpha = 0;
		rectangle_1.isStroked = true;
		rectangle_1.strokeColor = 1359887;
		rectangle_1.lineWidth = 3;
		rectGroup.add(rectangle_1);

		// hintMap
		const hintMap = this.add.image(747, 495, "Level1Hint");

		// ui buttons
		const ui_buttons = new UI(this, 0, 0);
		this.add.existing(ui_buttons);

		// hintMask
		const hintMask = this.add.image(-1843, 0, "hintMask");
		hintMask.setOrigin(0, 0);

		// pauseScreen
		const pauseScreen = new Pause(this, -753, 1373);
		this.add.existing(pauseScreen);

		// endScreen
		const endScreen = this.add.container(0, 0);

		// menuFade
		const menuFade = this.add.rectangle(-760, 480, 1520, 960);
		menuFade.alpha = 0;
		menuFade.isFilled = true;
		menuFade.fillColor = 0;
		endScreen.add(menuFade);

		// endUIFinal
		const endUIFinal = new endUI(this, -753, 497);
		endScreen.add(endUIFinal);

		// foreground (components)
		new showImage(foreground);

		// close1_png (components)
		new InteractiveObject(close1_png);
		const close1_pngPointerHandler = new PointerHandler(close1_png);
		close1_pngPointerHandler.texOver = "close2.png";
		close1_pngPointerHandler.texOut = "close1.png";
		close1_pngPointerHandler.texOn = "close3.png";
		const close1_pnggoToLevel = new goToLevel(close1_png);
		close1_pnggoToLevel.sceneKey = "LevelSelect";

		// ballObject (components)
		new hideImage(ballObject);

		// symbol_2_1 (components)
		new hideImage(symbol_2_1);

		// rectangle (components)
		new hideImage(rectangle);

		// door (components)
		new Door(door);

		// exit (components)
		new Exit(exit);

		// key (components)
		const keyKey = new Key(key);
		keyKey.scale = 0.8;

		// rectangle_2 (components)
		const rectangle_2OberrySingular = new OberrySingular(rectangle_2);
		rectangle_2OberrySingular.scale = 0.8;

		// rectangle_2_1 (components)
		const rectangle_2_1OberrySingular = new OberrySingular(rectangle_2_1);
		rectangle_2_1OberrySingular.scale = 0.8;

		// rectangle_1_1_1 (components)
		new hideImage(rectangle_1_1_1);

		// rectangle_1_1 (components)
		new hideImage(rectangle_1_1);

		// rectangle_1 (components)
		new hideImage(rectangle_1);

		// pauseScreen (prefab fields)
		pauseScreen.lvlName = "Level 1";
		pauseScreen.pauseColor = "purple";

		// menuFade (components)
		new InteractiveObject(menuFade);

		// endUIFinal (prefab fields)
		endUIFinal.nextLevel = "Level2";
		endUIFinal.levelName = "Level 1";

		this.rampExample = rampExample;
		this.keyExample = keyExample;
		this.foreground = foreground;
		this.ballShadowUnder = ballShadowUnder;
		this.puffleAnims = puffleAnims;
		this.ballShadowOver = ballShadowOver;
		this.ballObject = ballObject;
		this.symbol_3 = symbol_3;
		this.rectangle_1_1_1 = rectangle_1_1_1;
		this.rectangle_1_1 = rectangle_1_1;
		this.rectangle_1 = rectangle_1;
		this.hintMap = hintMap;
		this.ui_buttons = ui_buttons;
		this.hintMask = hintMask;
		this.pauseScreen = pauseScreen;
		this.endScreen = endScreen;
		this.menuFade = menuFade;
		this.endUIFinal = endUIFinal;

		this.events.emit("scene-awake");
	}


	/* START-USER-CODE */

	// Write your code here

	create() {
		this.anims.resumeAll();
		this.sound.setVolume(1);
		const col = this.cache.json.get('collision1');
		const ground = this.matter.add.fromPhysicsEditor(739, 578, col.Level1Ground, {collisionFilter: { group: -3 }, restitution: 0});
		ball = this.matter.add.sprite(110, 197, "ball", "ball", { shape: col.ball });
		ground.label = "ground";
		ball.setScale(scale);
		ball.body.restitution = 0;
		ball.depth = 3;

		this.editorCreate();
		//this.endUIFinal.update();
		//var mask = this.hintMask.createBitmapMask();
		//this.level1Hint.setMask(mask);

		this.puffleAnims.setScale(scale * this.puffleAnims.scale);
		this.ballShadowUnder.setScale(scale)
		this.ballShadowOver.setScale(scale)
		this.puffleAnims.play('Purple_Idle');
		this.rampExample.play('RampExample');
		this.keyExample.play("KeyExample");
		this.symbol_3.depth = 2;
		this.foreground.depth = 4
		this.endScreen.depth = 10;
		var mouseSpring = this.matter.add.mouseSpring({stiffness:.1, angularStiffness: .1});
		var platformMouseStiffness = new Phaser.Physics.Matter.PointerConstraint(this, this.matter.world, {stiffness: .001 	});


		var rampSprite = this.matter.add.sprite(566, 813, 'Symbol 2', '', {collisionFilter: {group: -3}, isStatic: false, friction: .8, depth: 1})
		rampSprite.setScale(1.2226632606777537);
		rampSprite.isStatic = true;
		let cons = this.matter.add.worldConstraint(rampSprite, 0, 1, { pointA: { x: 640, y: 807 }});
		cons.pointB = {x: 78, y: -4};
		const rampConst2 = this.matter.add.rectangle(551, 838, 128 * 0.5836364623470147, 128 * 0.20127176681410605, {isStatic: true, collisionFilter: {group: -5}});

		this.matter.world.setGravity(0, .6);

		var airTime = this.time.addEvent({
			delay: 750, //in ms
  			callback: function callback() {return},
   			loop: false,
    		repeat: 0,
    		startAt: 0,
    		timeScale: 1,
		});



		this.matter.world.on('dragstart', (body, part, constraint) => {
			if (body.label != 'ball' && body.label != 'ground' && body.isSensor != true) {
				body.collisionFilter.group = -5;
				body.isStatic = false;
				console.log(body)

				try {
					body.gameObject.setAlpha(.5);
				} catch(err) {console.error('ground alpha err')};

			}
		});
		this.matter.world.on('dragend', (body, part, constraint) => {
			if (body.label != 'ball' && body.label != 'ground' &&  body.isSensor != true) {
				if (body.angle > Math.PI / 4 - .2 && body.angle < Math.PI / 3){

				}
				if (rampSprite.x > 640) {
					rampSprite.setPosition(640, 728);
					rampSprite.setRotation(Math.PI / 2);
				}
				if (rampSprite.y > 807) {
					rampSprite.setPosition(566, 807);
					rampSprite.setRotation(0)
				}

				body.collisionFilter.group = -3;
				body.isStatic = true;


				try {
					body.gameObject.setAlpha(1);
				} catch(err) {console.error('ground alpha err')};
			}
		});
		this.matterCollision.addOnCollideStart({
			objectA: ball,
			callback: eventData => {
				try {airTime.paused = true} catch {}
				if (airTime.getRemaining() == 0 || null) {
					this.puffleAnims.play('Purple_Down');
				}
				//this.puffleAnims.anims.play("Purple_Idle", true)
			}
		});

		cValue = 0;
		this.matterCollision.addOnCollideActive({
			objectA: ball,
			callback: eventData => {

				if (this.input.keyboard.addKey('LEFT').isDown ) {
					//cValue = 1;



					console.log(ball.body.velocity.x);
				} else if (this.input.keyboard.addKey('RIGHT').isDown) {
					//cValue = 2


					console.log(ball.body.velocity.x);

				} else {
					cValue = 3
					// if (ball.body.velocity.x < .75 && ball.body.velocity.x > -.75) {
					// 	ball.setVelocity(0)
					// }

					// ball.setAngularVelocity(ball.body.angularVelocity / 1.4)
				}
				try {airTime.paused = true} catch {}
			}

		});

		function timerCallback() {
			this.this.puffleAnims.anims.play("Purple_Air")
		}
		var calcVelocity = 0;
		this.matterCollision.addOnCollideEnd({
			objectA: ball,
			callback: eventData => {
				airTime.reset({
					delay: 500, //in ms
  					callback: ()=>{this.puffleAnims.play("Purple_Air")},
   					loop: false,
    				repeat: 0,
    				startAt: 0,
    				timeScale: 1,
				});
				this.time.addEvent(airTime);
			}
		});


	}

	update() {
		//velocity restrictions, prohibits the breaking of newtonian physics
		if (ball.body.velocity.x > maxVelocity || ball.body.velocity.x < -maxVelocity || null) {
			ball.setVelocityX(ball.body.velocity.x / Math.abs(ball.body.velocity.x) * maxVelocity)
		}
		if (ball.body.angularVelocity > maxAngularVelocity || ball.body.angularVelocity < -maxAngularVelocity || null) {
			ball.setAngularVelocity(ball.body.angularVelocity / Math.abs(ball.body.angularVelocity) * maxAngularVelocity)
		}


		//worst possible way of catching collision status for movement on specific objects
		if (this.input.keyboard.addKey('LEFT').isDown) {
			if (ball.body.velocity.x >= 7) {
				ball.setAngularVelocity(ball.body.angularVelocity - .007)
			} else {
				ball.setAngularVelocity(ball.body.angularVelocity - .015)

			};
			if (this.puffleAnims.rotation > - Math.PI / 5) {
				this.puffleAnims.setRotation(this.puffleAnims.rotation -.09)
			}
			this.puffleAnims.setFlip(true);

		}
		if (this.input.keyboard.addKey('RIGHT').isDown) {
			if (ball.body.velocity.x <= -8) {
				ball.setAngularVelocity(ball.body.angularVelocity + .007)

			} else {
				ball.setAngularVelocity(ball.body.angularVelocity + .015);

			};
			if (this.puffleAnims.rotation < Math.PI / 5) {
				this.puffleAnims.setRotation(this.puffleAnims.rotation +.09)
			}
			this.puffleAnims.setFlip(false);
		}
		if (this.input.keyboard.addKey('RIGHT').isUp && this.input.keyboard.addKey('LEFT').isUp) {
			if (this.puffleAnims.rotation > 0) {
				this.puffleAnims.setRotation(this.puffleAnims.rotation -.09)
			} else if (this.puffleAnims.rotation < 0) {
				this.puffleAnims.setRotation(this.puffleAnims.rotation +.09)
			}
		}
		if (cValue == 1) {
			if (ball.body.velocity.x > 5) {
				ball.applyForce({ x: -.05 * scale, y: 0 });
			}
			ball.applyForce({ x: -.04 * scale, y: ball.body.force.y });
			cValue = 0;
		}
		if (cValue == 2) {
			if (ball.body.velocity.x < -5) {
				ball.applyForce({ x: .05 * scale, y: 0 });
			}
			ball.applyForce({ x: .04 * scale, y: 0 });
			cValue = 0;
		}
		if (cValue == 3) {
			if (this.input.keyboard.addKey('RIGHT').isDown && this.input.keyboard.addKey('LEFT').isDown) {
				ball.applyForce({x: ball.body.velocity.x / 900, y: ball.body.velocity.y /900});
			}

			cValue = 0;
		}
		this.puffleAnims.setPosition(ball.x, ball.y);
		this.ballShadowOver.setPosition(ball.x, ball.y);
		this.ballShadowUnder.setPosition(ball.x, ball.y);


	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
