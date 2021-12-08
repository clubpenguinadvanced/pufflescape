
// You can write more code here

/* START OF COMPILED CODE */

class goToLevel extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		/** @type {Phaser.GameObjects.Image} */
		this.gameObject;
		/** @type {string} */
		this.sceneKey = "";


		this.gameObject = gameObject;
		gameObject["__goToLevel"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {goToLevel} */
	static getComponent(gameObject) {
		return gameObject["__goToLevel"];
	}


	/* START-USER-CODE */

	start() {		

		this.gameObject.on("pointerup", () => {
			this.scene.scene.start(this.sceneKey);
		});
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
