
// You can write more code here
var ball;
var cValue;
var rectangle1;
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
		const ball = this.add.image(194, 197, "ball");

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

		// rectangle_1
		const rectangle_1 = this.add.rectangle(629, 730, 128, 128);
		rectangle_1.scaleX = 0.1170975530768291;
		rectangle_1.scaleY = 0.4837246178719503;
		rectangle_1.angle = -14;
		rectangle_1.isFilled = true;

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
		const rectangle_2 = this.add.rectangle(1300, 222, 51, 82);
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 14649600;

		// endScreen
		const endScreen = this.add.container(0, 0);

		// w1
		const w1 = this.add.image(-928, 459, "w1");
		endScreen.add(w1);

		// text
		const text = this.add.text(-1388, 422, "", {});
		text.text = "Level Complete";
		text.setStyle({"color":"#000000ff","fontSize":"100px"});
		endScreen.add(text);

		// rectangle_2_1
		const rectangle_2_1 = this.add.rectangle(62, 536, 51, 82);
		rectangle_2_1.isFilled = true;
		rectangle_2_1.fillColor = 14649600;

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

		// ball (components)
		new hideImage(ball);

		// symbol_2_1 (components)
		new hideImage(symbol_2_1);

		// rectangle (components)
		new hideImage(rectangle);

		// rectangle_1 (components)
		new hideImage(rectangle_1);

		// door (components)
		new hideImage(door);

		// key (components)
		new hideImage(key);

		// rectangle_2 (components)
		new hideImage(rectangle_2);

		// rectangle_2_1 (components)
		new hideImage(rectangle_2_1);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		const col = this.cache.json.get('collision1');
		const ground = this.matter.add.fromPhysicsEditor(739, 578, col.Level1Ground, {collisionFilter: { group: -3 }} /*{position: {x: 0, y: 0}}*/);
		ball = this.matter.add.sprite(194, 197, "ball", "ball", { shape: col.ball });
		ground.label = "ground";
		ball.setScale(scale);


		var mouseSpring = this.matter.add.mouseSpring({stiffness:.1, angularStiffness: .1});
		var platformMouseStiffness = new Phaser.Physics.Matter.PointerConstraint(this, this.matter.world, {stiffness: .001 	});

		const rectangle1 = this.matter.add.rectangle(1147, 535, 128 * 5.537049677038785, 128 * 0.7647847577261004, { isSensor: true, isStatic: true, collisionFilter: { group: 0 } });
		rectangle1.width = 128 * 5.537049677038785;
		0.7647847577261004;
		rectangle1.scaley = 0.7647847577261004;
		rectangle1.isFilled = true;
		rectangle1.fillColor = 717056;
		rectangle1.fillAlpha = 0.5;
		rectangle1.label = "rectangle1"

		var rampSprite = this.matter.add.sprite(566, 807, 'Symbol 2', '', {collisionFilter: {group: -3}, isStatic: false, friction: .8})
		rampSprite.setScale(1.2226632606777537);
		rampSprite.isStatic = true;
		let cons = this.matter.add.worldConstraint(rampSprite, 0, 1, { pointA: { x: 640, y: 806 }});
		cons.pointB = {x: 78, y: 0};

		const rampConst2 = this.matter.add.rectangle(551, 834, 128 * 0.5836364623470147, 128 * 0.20127176681410605, {isStatic: true, collisionFilter: {group: -5}});

		this.matter.world.setGravity(0, .85);
		const exitOver = this.add.image(1405, 704, "exitOver");
		exitOver.scaleX = 0.9649079211260638;
		exitOver.scaleY = 0.9649079211260638;
		// foreground_1
		this.add.image(758, 494, "1foreground");
		this.matter.world.on('dragstart', (body, part, constraint) => {
			if (body.label != 'ball' && body.label != 'ground' && body.isSensor != true) {
				body.collisionFilter.group = -5;
				body.isStatic = false;
				console.log(body)
				try {
					body.gameObject.setAlpha(.5);
				} catch(err) {console.error('ground alpha err')};
			}
		})
		this.matter.world.on('dragend', (body, part, constraint) => {
			if (body.label != 'ball' && body.label != 'ground' &&  body.isSensor != true) {
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
		})

		cValue = 0;
		this.matterCollision.addOnCollideActive({
			objectA: ball,
			callback: eventData => {
				if (this.input.keyboard.addKey('LEFT').isDown) {
					cValue = 1;
					ball.setFriction(.2)

					console.log(ball.body.velocity.x);
				} else if (this.input.keyboard.addKey('RIGHT').isDown) {
					cValue = 2
					ball.setFriction(.2)

					console.log(ball.body.velocity.x);

				} else {
					cValue = 3
					if (ball.body.velocity.x < 1 && ball.body.velocity.x > -1) {
						ball.setVelocity(0)
					}
					ball.setAngularVelocity(ball.body.angularVelocity / 1.4)
				}
			}
		});

		//COLLECTABLE OBJECT COLLISION
		const key = this.matter.add.sprite(98, 808, 'collectables', 'key001.png', {isSensor: true, isStatic: true, render: {fillColor: '#ecd740'}});
		const star1 = this.matter.add.sprite(1300, 222, 'collectables', 'oberrysingular0001.png', {isSensor: true, isStatic: true, render: {fillColor: '#ecd740'}});
		const star2 = this.matter.add.sprite(62, 536, 'collectables', 'oberrysingular0001.png', {isSensor: true, isStatic: true, render: {fillColor: '#ecd740'}});
		const door = this.matter.add.rectangle(1315, 747, 64, 350, {isStatic: true, collisionFilter: {group :-3}});
		const exit = this.matter.add.rectangle(1486, 770, 128, 128, {isSensor: true, isStatic: true});


		key.anims.play('key');
		star1.anims.play('oberrysingular');
		star2.anims.play('oberrysingular');

		var keysound = this.sound.add('key');
		var oberrysingularsound = this.sound.add('oberrysingular');

		this.matterCollision.addOnCollideStart({
			objectA: ball,
			objectB: star1,
			callback: eventData => {
				oberrysingularsound.play();			
				star1.destroy(true);
				//replace destroy with animation sequence fx 

			}
		});
		this.matterCollision.addOnCollideStart({
			objectA: ball,
			objectB: star2,
			callback: eventData => {
				oberrysingularsound.play();			
				star2.destroy(true);
				//replace destroy with animation sequence fx 

			}
		});
		this.matterCollision.addOnCollideStart({
			objectA: ball,
			objectB: key,
			callback: eventData => {
				//replace if with unsubscribe method somehow
				if (door.isSensor != true){
					keysound.play();
					door.isSensor = true;				
					key.destroy(true);
					//replace destroy with animation sequence fx 
				}
			}
		});
		this.matterCollision.addOnCollideStart({
			objectA: ball,
			objectB: exit,
			callback: eventData => {
				this.matter.world.pause;
				this.scene.start('LevelSelect');
			}
		});


	}
	update() {
		//velocity restrictions, prohibits the breaking of newtonian physics
		if (ball.body.velocity.x > maxVelocity || ball.body.velocity.x < -maxVelocity || null) {
			ball.setVelocityX(ball.body.velocity.x / Math.abs(ball.body.velocity.x) * maxVelocity)
		}
		//worst possible way of catching collision status for movement on specific objects
		if (cValue == 1) {
			if (ball.body.velocity.x > 5) {
				ball.applyForce({ x: -.1 * scale, y: 0 });
			}
			ball.applyForce({ x: -.05 * scale, y: 0 });
			cValue = 0;
		}
		if (cValue == 2) {
			if (ball.body.velocity.x < -5) {
				ball.applyForce({ x: .1 * scale, y: 0 });
			}
			ball.applyForce({ x: .05 * scale, y: 0 });
			cValue = 0;
		}
		if (cValue == 3) {
			ball.setFriction(1)
			cValue = 0;
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
