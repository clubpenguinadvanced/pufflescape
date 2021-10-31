
// You can write more code here
var ball;
var maxVelocity = 18;
/* START OF COMPILED CODE */

class Level1 extends Phaser.Scene {

	constructor() {
		super("Level1");

		/* START-USER-CTR-CODE */
		// Write your code here.
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

		// exitOver
		const exitOver = this.add.image(1405, 704, "exitOver");
		exitOver.scaleX = 0.9649079211260638;
		exitOver.scaleY = 0.9649079211260638;
		exitOver.visible = false;

		// foreground_1
		const foreground_1 = this.add.image(758, 494, "1foreground");
		foreground_1.visible = false;

		// close1_png
		const close1_png = this.add.image(1471, 43, "buttons", "close1.png");

		// ball
		this.add.image(194, 197, "ball");

		// foreground_1 (components)
		new hideImage(foreground_1);

		// close1_png (components)
		new InteractiveObject(close1_png);
		const close1_pngPointerHandler = new PointerHandler(close1_png);
		close1_pngPointerHandler.texOver = "close2.png";
		close1_pngPointerHandler.texOut = "close1.png";
		close1_pngPointerHandler.texOn = "close3.png";
		const close1_pnggoToLevel = new goToLevel(close1_png);
		close1_pnggoToLevel.sceneKey = "LevelSelect";

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		const col = this.cache.json.get('collision1');
		const ground = this.matter.add.fromPhysicsEditor(739, 578, col.Level1Ground, /*{position: {x: 0, y: 0}}*/);
		ball = this.matter.add.sprite(434, 634, "ball", "ball", { shape: col.ball });
		if (dragEnable == true) {
			ball.setInteractive();
			this.matter.add.mouseSpring();
			this.input.setDraggable(ball);
		}

		const exitOver = this.add.image(1405, 704, "exitOver");
		exitOver.scaleX = 0.9649079211260638;
		exitOver.scaleY = 0.9649079211260638;
		// foreground_1
		//this.add.image(758, 494, "1foreground");

		this.input.keyboard.on('keydown', (event) => {
			if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.RIGHT) {
				ball.applyForce({x: ball.position.x, y: ball.position.y}, {x: 0, y: -0.05});
			}
		});
	}
	update() {
		//velocity restrictions, prohibits the breaking of newtonian physics
		if (ball.body.velocity.x > maxVelocity || ball.body.velocity.x < -maxVelocity || null) {
			ball.setVelocityX(ball.body.velocity.x / Math.abs(ball.body.velocity.x) * maxVelocity)
		}

		//movement, find alternative to thrust in future, this.body.applyForceX();
		if (this.input.keyboard.addKey('LEFT').isDown) {
			ball.thrustBack(.1);
			console.log(ball.body.velocity.x);
		} else if (this.input.keyboard.addKey('RIGHT').isDown) {
			//ball.thrust(.1);
			console.log(ball.body.velocity.x);
			console.log(ball.body.position.x)
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
