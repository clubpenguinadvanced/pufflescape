
// You can write more code here

/* START OF COMPILED CODE */

class PointerHandler extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		/** @type {Phaser.GameObjects.Image} */
		this.gameObject;
		/** @type {string} */
		this.texOver = "";
		/** @type {string} */
		this.texOut = "";
		/** @type {string} */
		this.texOn = "";


		this.gameObject = gameObject;
		gameObject["__PointerHandler"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {PointerHandler} */
	static getComponent(gameObject) {
		return gameObject["__PointerHandler"];
	}


	/* START-USER-CODE */

	start() {
		this.gameObject.on("pointerover", () => {

			this.gameObject.setFrame(this.texOver);
		});
		this.gameObject.on("pointerout", () => {

			this.gameObject.setFrame(this.texOut);
		});
		this.gameObject.on("pointerdown", () => {

			this.gameObject.setFrame(this.texOn);
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
