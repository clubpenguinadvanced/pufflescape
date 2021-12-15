
// You can write more code here

/* START OF COMPILED CODE */

class MatterZone extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		/** @type {Phaser.GameObjects.Rectangle} */
		this.gameObject;


		this.gameObject = gameObject;
		gameObject["__MatterZone"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {MatterZone} */
	static getComponent(gameObject) {
		return gameObject["__MatterZone"];
	}


	/* START-USER-CODE */

	start () {
		this.scene.matter.add.rectangle(this.gameObject.x, this.gameObject.y, this.gameObject.width * this.gameObject.scaleX, this.gameObject.height * this.gameObject.scaleY, {
			label: this.gameObject["__MatterZone"],
			isSensor: true,
			isStatic: true
		})

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
