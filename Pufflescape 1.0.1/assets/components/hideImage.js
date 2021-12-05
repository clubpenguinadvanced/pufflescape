
// You can write more code here

/* START OF COMPILED CODE */

class hideImage extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

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
	awake() {
		this.gameObject.alpha = 0;
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
