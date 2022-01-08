
// You can write more code here

/* START OF COMPILED CODE */

class JumpZone extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		/** @type {Phaser.GameObjects.Image} */
		this.gameObject;


		this.gameObject = gameObject;
		gameObject["__JumpZone"] = this;

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	/** @returns {JumpZone} */
	static getComponent(gameObject) {
		return gameObject["__JumpZone"];
	}


	/* START-USER-CODE */

	start() {
		var zone = this.scene.matter.add.rectangle(this.gameObject.x, this.gameObject.y, this.gameObject.width * this.gameObject.scaleX, this.gameObject.height * this.gameObject.scaleY, {
			isSensor: true,
			isStatic: true,
			label: this
		});
		this.scene.zone;
		this.scene.zone = zone;
	}
	awake() {
		this.gameObject.alpha = 0;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
