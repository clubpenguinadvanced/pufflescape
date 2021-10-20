
// You can write more code here

/* START OF COMPILED CODE */

class Lvl extends Phaser.Scene {

	constructor() {
		super("Lvl");

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// text
		const text = this.add.text(177, 360, "", {});
		text.text = "level 1";
		text.setStyle({"fontSize":"120px"});

		// close1_png
		const close1_png = this.add.image(946, 465, "buttons", "close1.png");
		close1_png.scaleX = 2.7795887843647384;
		close1_png.scaleY = 2.9144015622104247;

		// close1_png (components)
		new InteractiveObject(close1_png);
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
