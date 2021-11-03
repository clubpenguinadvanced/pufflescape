
// You can write more code here
var ball;
const scale = .8;
var maxVelocity = 12.4 * scale;
var ctrlPair;
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

		// symbol_2
		const symbol_2 = this.add.image(437, 839, "Symbol 2");
		symbol_2.scaleX = 1.082692047920357;
		symbol_2.scaleY = 1.082692047920357;
		symbol_2.angle = -34;

		// symbol_2_1
		const symbol_2_1 = this.add.image(561, 806, "Symbol 2");
		symbol_2_1.scaleX = 1.1751539415470895;
		symbol_2_1.scaleY = 1.1751539415470895;

		// symbol_3
		const symbol_3 = this.add.image(693, 840, "Symbol 3");
		symbol_3.scaleX = 0.651728376415618;
		symbol_3.scaleY = 0.651728376415618;
		symbol_3.angle = 31;

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
		ball.setScale(scale);
		ball.label = "ball";
		if (dragEnable == true) {
			ball.setInteractive();
			this.matter.add.mouseSpring();
			this.input.setDraggable(ball);
		}
		var rectangle = this.matter.add.rectangle(1147, 535, 128 * 5.537049677038785, 128 * 0.7647847577261004, {isSensor: true, isStatic: true, collisionFilter: {group: 0}});
		rectangle.width = 128* 5.537049677038785;
		0.7647847577261004;
		rectangle.scaley = 0.7647847577261004;
		rectangle.isFilled = true;
		rectangle.fillColor = 717056;
		rectangle.fillAlpha = 0.5;

		this.matter.world.setGravity(0, .8)
		const exitOver = this.add.image(1405, 704, "exitOver");
		exitOver.scaleX = 0.9649079211260638;
		exitOver.scaleY = 0.9649079211260638;
		// foreground_1
		this.add.image(758, 494, "1foreground");

		this.input.keyboard.on('keydown', (event) => {
			if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.RIGHT) {

			}
		});

		this.matter.world.on("collisionactive", (event) => {
			console.log(event/*.pairs[0].bodyB.isSensor + event.pairs[0].bodyA.isSensor*/);
			if (this.input.keyboard.addKey('LEFT').isUp && this.input.keyboard.addKey('RIGHT').isUp && event.pairs[0].bodyB.label == "Rectangle Body") {
				ball.applyForce({x: 0, y: .1})
				console.log('good')
				ctrlPair = this.matter.pair.create(event);
			}
		})
		

	}
	update() {
		//velocity restrictions, prohibits the breaking of newtonian physics
		if (ball.body.velocity.x > maxVelocity || ball.body.velocity.x < -maxVelocity || null) {
			ball.setVelocityX(ball.body.velocity.x / Math.abs(ball.body.velocity.x) * maxVelocity)
		}

		if (){}
		//movement, find alternative to thrust in future, this.body.applyForceX();
		else if (this.input.keyboard.addKey('LEFT').isDown) {
			ball.applyForce({x: -.05 * scale,y: 0});
			console.log(ball.body.velocity.x);
		} else if (this.input.keyboard.addKey('RIGHT').isDown) {
			ball.applyForce({x: .05 * scale,y: 0});
			console.log(ball.body.velocity.x);
			console.log(ball.body.position.x)
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
