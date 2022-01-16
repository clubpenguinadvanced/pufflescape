
// You can write more code here

/* START OF COMPILED CODE */

class FullUI extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// hintMask
		const hintMask = scene.add.image(-1843, 0, "hintMask");
		hintMask.setOrigin(0, 0);
		this.add(hintMask);

		// uI
		const uI = new UI(scene, 0, 0);
		this.add(uI);

		// endScreen
		const endScreen = new end(scene, 0, 0);
		this.add(endScreen);

		// pause
		const pause = new Pause(scene, -889.3634193115813, 1402.1261672316);
		this.add(pause);

		this.hintMask = hintMask;
		this.uI = uI;
		this.endScreen = endScreen;
		this.pause = pause;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	hintMask;
	/** @type {UI} */
	uI;
	/** @type {end} */
	endScreen;
	/** @type {Pause} */
	pause;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
