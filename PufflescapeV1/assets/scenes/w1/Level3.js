var ball;
// You can write more code here

/* START OF COMPILED CODE */

class Level3 extends Phaser.Scene {

	constructor() {
		super("Level3");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// level3ground
		const level3ground = this.add.image(2, 4, "level3ground");
		level3ground.setOrigin(0.040531702945618746, 0.06354770678534626);

		// exitOver
		const exitOver = this.add.image(116, 740, "exitOver");
		exitOver.scaleX = 0.9221678178442946;
		exitOver.scaleY = 0.9221678178442946;
		exitOver.flipX = true;

		// level3foreground
		this.add.image(974, 496, "level3foreground");

		// levelChooseTunnelGround
		this.add.image(973, 501, "LevelChooseTunnelGround");

		// close1_png
		const close1_png = this.add.image(1486, 37, "buttons", "close1.png");

		// close1_png (components)
		const close1_pnggoToLevel = new goToLevel(close1_png);
		close1_pnggoToLevel.sceneKey = "LevelSelect";
		const close1_pngPointerHandler = new PointerHandler(close1_png);
		close1_pngPointerHandler.texOver = "close2.png";
		close1_pngPointerHandler.texOut = "close1.png";
		close1_pngPointerHandler.texOn = "close3.png";
		new InteractiveObject(close1_png);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		const col = this.cache.json.get('collision1');
		const ground = this.matter.add.fromPhysicsEditor(739, 578, col.LevelChooseTunnelGround, /*{position: {x: 0, y: 0}}*/);
		ball = this.matter.add.sprite(434, 634, "ball", "ball", { shape: col.ball });
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
