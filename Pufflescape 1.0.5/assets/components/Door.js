
// You can write more code here

/* START OF COMPILED CODE */

class Door extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		/** @type {Phaser.GameObjects.Image} */
		this.gameObject;


		this.gameObject = gameObject;
		gameObject["__Door"] = this;

		/* START-USER-CTR-CODE */
		this.scene.door;
		/* END-USER-CTR-CODE */
	}

	/** @returns {Door} */
	static getComponent(gameObject) {
		return gameObject["__Door"];
	}


	/* START-USER-CODE */
	start() {
		door = this.scene.matter.add.rectangle(
			this.gameObject.x, 
			this.gameObject.y, 
			this.gameObject.width * this.gameObject.scaleX, 
			this.gameObject.height * this.gameObject.scaleY, 
			{	
				isStatic: true, 
				collisionFilter: {group :-3},
				label: this.gameObject["__Door"]
			}
		);
	}

	awake() {
		this.gameObject.alpha = 0;
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
