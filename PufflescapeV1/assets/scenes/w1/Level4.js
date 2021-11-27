
// You can write more code here

/* START OF COMPILED CODE */

class Level4 extends Phaser.Scene {

	constructor() {
		super("Level4");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// level4
		const level4 = this.add.image(0, 0, "level4");
		level4.setOrigin(0.13715112377453922, 0.141147906754187);

		// exitOver
		const exitOver = this.add.image(1435, 350, "exitOver");
		exitOver.scaleX = 0.7116595802966071;
		exitOver.scaleY = 0.7116595802966071;

		// level4foreground
		this.add.image(725, 468, "Level4foreground");

		// levelEasy2Ground
		const levelEasy2Ground = this.add.image(723, 465, "LevelEasy2Ground");

		// close1_png
		const close1_png = this.add.image(1481, 46, "buttons", "close1.png");

		// levelEasy2Ground (components)
		new hideImage(levelEasy2Ground);

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
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
