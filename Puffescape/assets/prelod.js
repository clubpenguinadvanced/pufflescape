
// You can write more code here

/* START OF COMPILED CODE */

class prelod extends Phaser.Scene {

	constructor() {
		super("prelod");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// text
		const text = this.add.text(447, 276, "", {});
		text.text = "asdfssdaaafds";

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
