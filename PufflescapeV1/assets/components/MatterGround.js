var matter = Phaser.Physics.Matter.Factory;
/* START OF COMPILED CODE */

class MatterGround extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		/** @type {Phaser.GameObjects.Image} */
		this.gameObject;
		/** @type {string} */
		this.ColKey = "";

		

		this.gameObject = gameObject;
		gameObject["__MatterGround"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {MatterGround} */
	static getComponent(gameObject) {
		return gameObject["__MatterGround"];
	}


	/* START-USER-CODE */

	start() {
		const ground = Phaser.Physics.Matter.Factory.fromPhysicsEditor(this.gameObject.x, this.gameObject.y, col.Level1ReverseGround);
		// const originX = this.gameObject.displayWidth * this.gameObject.originX;
		// const originY = this.gameObject.displayHeight * this.gameObject.originY;
		ground.setOrigin(this.gameObject.originX, this.gameObject.originY);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
