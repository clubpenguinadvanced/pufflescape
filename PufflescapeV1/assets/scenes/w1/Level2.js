
// You can write more code here

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

		const ground = this.matter.add.fromPhysicsEditor(826, 618, col.Level1ReverseGround, /*{position: {x: 0, y: 0}}*/);
		//const ground = this.matter.add.fromPhysicsEditor(0, 0, col.Level1ReverseGround, /*{position: {x: 0, y: 0}}*/);
		ball = this.matter.add.sprite(1399, 182, "ball", "ball", { shape: col.ball });
		var rect = this.matter.add.rectangle(1,1,1,1);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
