
// You can write more code here
var ball;
const maxVelocity = 18;
/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/** @type {Phaser.GameObjects.Rectangle} */
		this.rectangle;
		/** @type {Phaser.GameObjects.Rectangle} */
		this.rectangle1;
		/** @type {Phaser.GameObjects.Rectangle} */
		this.rectangle2;
		/** @type {Phaser.GameObjects.Rectangle[]} */
		this.gBox;


		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// dino
		const dino = this.add.image(-437, 261, "dino");

		// text_1
		const text_1 = this.add.text(400, 408, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "I can the puffle to move";
		text_1.setStyle({"fontFamily":"Arial","fontSize":"30px"});

		// ground_1
		this.add.image(791, 480, "ground_1");

		// ball_1
		this.add.image(434, 634, "ball");

		// rectangle
		const rectangle = this.add.rectangle(1147, 535, 128, 128);
		rectangle.scaleX = 5.537049677038785;
		rectangle.scaleY = 0.7647847577261004;
		rectangle.alpha = 0;
		rectangle.isFilled = true;
		rectangle.fillColor = 717056;
		rectangle.fillAlpha = 0.5;

		// rectangle1
		const rectangle1 = this.add.rectangle(607, 279, 128, 128);
		rectangle1.scaleX = 10.925516927976025;
		rectangle1.scaleY = -0.6782329519947596;
		rectangle1.alpha = 0;
		rectangle1.isFilled = true;
		rectangle1.fillColor = 717056;
		rectangle1.fillAlpha = 0.5;

		// rectangle2
		const rectangle2 = this.add.rectangle(759, 863, 128, 128);
		rectangle2.scaleX = 13.50012123810679;
		rectangle2.scaleY = 1.0270232550208196;
		rectangle2.alpha = 0;
		rectangle2.isFilled = true;
		rectangle2.fillColor = 717056;
		rectangle2.fillAlpha = 0.5;

		// lists
		const gBox = [rectangle, rectangle1, rectangle2]

		// dino (components)
		new PushOnClick(dino);

		this.rectangle = rectangle;
		this.rectangle1 = rectangle1;
		this.rectangle2 = rectangle2;
		this.gBox = gBox;

		this.events.emit("scene-awake");
	}


	/* START-USER-CODE */

	// Write more your code here

	create() {
		//World & sprite settings/init
		this.matter.world.setBounds(0, 0, 1520, 960, 130);
		this.editorCreate();
		const col = this.cache.json.get('gfile');
		ball = this.matter.add.sprite(434, 634, "ball", "ball", {shape: col.ball});
		ball.setFixedRotation();
		ball.scale = 1;
		ball.setBounce(.4);


		//debug drag
		if (dragEnable == true) {
			ball.setInteractive();
    		this.matter.add.mouseSpring();
    		this.input.setDraggable(ball);
		}
		//ground collision
		const ground = this.matter.add.fromPhysicsEditor(761, 690, col.ground, /*{position: {x: 0, y: 0}}*/);

		// rectangle
		var rectangle = this.add.rectangle(1147, 535, 128, 128);
		rectangle.scaleX = 5.537049677038785;
		rectangle.scaleY = 0.7647847577261004;
		rectangle.isFilled = true;
		rectangle.fillColor = 717056;
		rectangle.fillAlpha = 0.5;

		// rectangle1
		var rectangle1 = this.add.rectangle(607, 279, 128, 128);
		rectangle1.scaleX = 10.925516927976025;
		rectangle1.scaleY = -0.6782329519947596;
		rectangle1.isFilled = true;
		rectangle1.fillColor = 717056;
		rectangle1.fillAlpha = 0.5;

		// rectangle2
		var rectangle2 = this.add.rectangle(759, 863, 128, 128);
		rectangle2.scaleX = 13.50012123810679;
		rectangle2.scaleY = 1.0270232550208196;
		rectangle2.isFilled = true;
		rectangle2.fillColor = 717056;
		rectangle2.fillAlpha = 0.5;


		this.matter.add.gameObject(rectangle, {isSensor: true, isStatic: true, group: 3});
		this.matter.add.gameObject(rectangle1, {isSensor: true, isStatic: true, group: 3});
		this.matter.add.gameObject(rectangle2, {isSensor: true, isStatic: true, group: 3});

		//ball.setCollidesWith(pair => {rectangle, rectangle1, rectangle2, ground});
		/*this.matter.world.on("collisionstart", (event, bodyA, bodyB) => {
			if ((bodyA.label.substring(0, bodyA.label.length() - 1) == "rectangle" && bodyB.label == "ball") || (bodyB.label.substring(0, bodyB.label.length() - 1) == "rectangle" && bodyA.label == "ball")) {
				console.log('good');
			}
		})*/

	}

	update(){
		//velocity restrictions, prohibits the breaking of newtonian physics
		if (ball.body.velocity.x > maxVelocity || ball.body.velocity.x < -maxVelocity || null) {
			ball.setVelocityX(ball.body.velocity.x / Math.abs(ball.body.velocity.x) * maxVelocity)
		}

		//movement, find alternative to thrust in future, this.body.applyForceX();
		if (this.input.keyboard.addKey('LEFT').isDown) {
			ball.thrustBack(.1);
			console.log(ball.body.velocity.x);
		} else if (this.input.keyboard.addKey('RIGHT').isDown) {
			ball.thrust(.1);
			console.log(ball.body.velocity.x);
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
