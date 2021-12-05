
// You can write more code here

/* START OF COMPILED CODE */

class hideImage {

	constructor(gameObject) {

		/** @type {Phaser.GameObjects.Image} */
		this.gameObject;

		this.gameObject = gameObject;
		gameObject["__hideImage"] = this;

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	/** @returns {hideImage} */
	static getComponent(gameObject) {
		return gameObject["__hideImage"];
	}


	/* START-USER-CODE */
	start() {
		this.gameObject.alpha = 0;
		this.gameObject.emit('scene-awake');
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here