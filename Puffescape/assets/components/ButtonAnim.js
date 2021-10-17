
// You can write more code here

/* START OF COMPILED CODE */

class ButtonAnim {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__ButtonAnim"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {ButtonAnim} */
	static getComponent(gameObject) {
		return gameObject["__ButtonAnim"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	new Animation(Phaser.GameObjects.GameObject) {

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
