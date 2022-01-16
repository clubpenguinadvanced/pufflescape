
// You can write more code here

/* START OF COMPILED CODE */

class UI extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// hintOut_png
		const hintOut_png = scene.add.image(168, 54, "uiButtons", "hintOut.png");
		this.add(hintOut_png);

		// pauseOut_png
		const pauseOut_png = scene.add.image(68, 54, "uiButtons", "pauseOut.png");
		this.add(pauseOut_png);

		// hintOut_png (components)
		new InteractiveObject(hintOut_png);
		const hintOut_pngPointerHandler = new PointerHandler(hintOut_png);
		hintOut_pngPointerHandler.texOver = "hintOver.png";
		hintOut_pngPointerHandler.texOut = "hintOut.png";
		hintOut_pngPointerHandler.texOn = "hintOn.png";
		new hint(hintOut_png);

		// pauseOut_png (components)
		new InteractiveObject(pauseOut_png);
		const pauseOut_pngPointerHandler = new PointerHandler(pauseOut_png);
		pauseOut_pngPointerHandler.texOver = "pauseOver.png";
		pauseOut_pngPointerHandler.texOut = "pauseOut.png";
		pauseOut_pngPointerHandler.texOn = "pauseDown.png";
		new pause(pauseOut_png);

		this.hintOut_png = hintOut_png;
		this.pauseOut_png = pauseOut_png;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	hintOut_png;
	/** @type {Phaser.GameObjects.Image} */
	pauseOut_png;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
