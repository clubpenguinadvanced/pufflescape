
// You can write more code here

/* START OF COMPILED CODE */

class SceneConfigOptions extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		/** @type {Phaser.GameObjects.Image} */
		this.gameObject;
		/** @type {number} */
		this.scale = 0;


		this.gameObject = gameObject;
		gameObject["__SceneConfigOptions"] = this;

		/* START-USER-CTR-CODE */
		this.scene.scale = this.scale;
		this.scene.maxVelocity = 17 * this.scene.scale;
		/* END-USER-CTR-CODE */
	}

	/** @returns {SceneConfigOptions} */
	static getComponent(gameObject) {
		return gameObject["__SceneConfigOptions"];
	}


	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
