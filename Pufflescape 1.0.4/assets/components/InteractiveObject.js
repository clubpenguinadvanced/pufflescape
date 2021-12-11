
// You can write more code here

/* START OF COMPILED CODE */

class InteractiveObject {

	constructor(gameObject) {

		/** @type {Phaser.GameObjects.Image} */
		this.gameObject;

		this.gameObject = gameObject;
		gameObject["__InteractiveObject"] = this;

		/* START-USER-CTR-CODE */
		this.gameObject.setInteractive();
		/* END-USER-CTR-CODE */
	}

	/** @returns {InteractiveObject} */
	static getComponent(gameObject) {
		return gameObject["__InteractiveObject"];
	}


	/* START-USER-CODE */


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
