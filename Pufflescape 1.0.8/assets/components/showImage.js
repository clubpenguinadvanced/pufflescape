
// You can write more code here

/* START OF COMPILED CODE */

class showImage extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		/** @type {Phaser.GameObjects.Layer} */
		this.gameObject;


		this.gameObject = gameObject;
		gameObject["__showImage"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {showImage} */
	static getComponent(gameObject) {
		return gameObject["__showImage"];
	}


	/* START-USER-CODE */

	awake () {
		this.gameObject.alpha = 1;
		this.gameObject.depth = 2;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
