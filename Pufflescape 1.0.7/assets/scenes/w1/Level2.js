
// You can write more code here

var cValue = 0;

/* START OF COMPILED CODE */

class Level2 extends Phaser.Scene {

	constructor() {
		super("Level2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// level1Reverse
		const level1Reverse = this.add.image(2, 1, "Level1Reverse");
		level1Reverse.setOrigin(0.04091042983660423, 0.013599382178787561);

		// level1ReverseGround
		const level1ReverseGround = this.add.image(5, -2, "Level1ReverseGround");
		level1ReverseGround.setOrigin(0.040668533791032455, 0.007810854921333314);
		level1ReverseGround.visible = false;

		// exitOver
		const exitOver = this.add.image(1416, 745, "exitOver");
		exitOver.scaleX = 0.8412741225231923;
		exitOver.scaleY = 0.8412741225231923;
		exitOver.visible = false;

		// foreground2
		const foreground2 = this.add.image(775, 499, "foreground2");
		foreground2.visible = false;

		// ball
		this.add.image(1399, 182, "ball");

		// close1_png
		const close1_png = this.add.image(1484, 37, "buttons", "close1.png");

		// rectangle
		const rectangle = this.add.rectangle(175, 802, 128, 128);
		rectangle.isFilled = true;
		rectangle.fillColor = 16120878;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(432, 225, 128, 128);
		rectangle_1.scaleX = 0.5278477155417052;
		rectangle_1.scaleY = 0.7658051521696063;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 16564520;

		// rectangle_1_1
		const rectangle_1_1 = this.add.rectangle(1451, 532, 128, 128);
		rectangle_1_1.scaleX = 0.5278477155417052;
		rectangle_1_1.scaleY = 0.7658051521696063;
		rectangle_1_1.isFilled = true;
		rectangle_1_1.fillColor = 16564520;

		// close1_png (components)
		new InteractiveObject(close1_png);
		const close1_pngPointerHandler = new PointerHandler(close1_png);
		close1_pngPointerHandler.texOver = "close2.png";
		close1_pngPointerHandler.texOut = "close1.png";
		close1_pngPointerHandler.texOn = "close3.png";
		const close1_pnggoToLevel = new goToLevel(close1_png);
		close1_pnggoToLevel.sceneKey = "LevelSelect";

		// rectangle (components)
		new Key(rectangle);

		// rectangle_1 (components)
		new OberrySingular(rectangle_1);

		// rectangle_1_1 (components)
		new OberrySingular(rectangle_1_1);

		this.rectangle_1 = rectangle_1;
		this.rectangle_1_1 = rectangle_1_1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1_1;

	/* START-USER-CODE */

	// Write your code here

	create() {
		var ball;
		this.ball = ball;
		this.anims.resumeAll();
		const col = this.cache.json.get('collision1');
		const ground = this.matter.add.fromPhysicsEditor(739, 578, col.Level1ReverseGround, {collisionFilter: { group: -3 }, restitution: 0, isStatic: true});
		this.ball = this.matter.add.sprite(1399, 182, "ball", "ball", { shape: col.ball });
		ground.label = "ground";

		this.editorCreate();

		this.matterCollision.addOnCollideActive({
			objectA: this.ball,
			callback: eventData => {

				if (this.input.keyboard.addKey('LEFT').isDown ) {
					//cValue = 1;
					if (eventData.bodyB.label == 'hitbox' /*&& platForceEnable == true*/) {
						cValue = 1;
					}
					if (this.ball.body.velocity.x < -8) {
						this.ball.applyForce({ x: -.01, y: 0 });
					}


					console.log(this.ball.body.velocity.x);
				} else if (this.input.keyboard.addKey('RIGHT').isDown) {
					//cValue = 2
					if (eventData.bodyB.label == 'hitbox' /*&& platForceEnable == true*/) {
						cValue = 2
					}
					if (this.ball.body.velocity.x > 8) {
						this.ball.applyForce({ x: .01, y: 0 });
					}

					console.log(this.ball.body.velocity.x);

				} else {
					cValue = 3
					// if (this.ball.body.velocity.x < .75 && this.ball.body.velocity.x > -.75) {
					// 	this.ball.setVelocity(0)
					// }
					// this.ball.setAngularVelocity(this.ball.body.angularVelocity / 1.4)
				}
			}
		});
	}
	update() {
		//velocity restrictions, prohibits the breaking of newtonian physics
		if (this.ball.body.velocity.x > maxVelocity || this.ball.body.velocity.x < -maxVelocity || null) {
			this.ball.setVelocityX(this.ball.body.velocity.x / Math.abs(this.ball.body.velocity.x) * maxVelocity)
		}

		//worst possible way of catching collision status for movement on specific objects
		if (this.input.keyboard.addKey('LEFT').isDown) {
			this.ball.setAngularVelocity(-.2)
		}
		if (this.input.keyboard.addKey('RIGHT').isDown) {
			this.ball.setAngularVelocity(.2)
		}
		if (this.input.keyboard.addKey('RIGHT').isUp && this.input.keyboard.addKey('LEFT').isUp) {
			this.ball.setAngularVelocity(0);
		}

		if (cValue == 1) {
			if (this.ball.body.velocity.x > 5) {
				this.ball.applyForce({ x: -.05 * scale, y: 0 });
			}
			this.ball.applyForce({ x: -.04 * scale, y: this.ball.body.force.y });
			cValue = 0;
		}
		if (cValue == 2) {
			if (this.ball.body.velocity.x < -5) {
				this.ball.applyForce({ x: .05 * scale, y: 0 });
			}
			this.ball.applyForce({ x: .04 * scale, y: 0 });
			cValue = 0;
		}
		if (cValue == 3) {

			cValue = 0;
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
