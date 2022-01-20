
// You can write more code here

/* START OF COMPILED CODE */

class restart extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		/** @type {Phaser.GameObjects.Image} */
		this.gameObject;


		this.gameObject = gameObject;
		gameObject["__restart"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {restart} */
	static getComponent(gameObject) {
		return gameObject["__restart"];
	}


	/* START-USER-CODE */

	start() {
		this.gameObject.on("pointerup", () => {
			this.scene.scene.restart();
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
