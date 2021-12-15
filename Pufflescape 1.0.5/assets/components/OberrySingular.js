
// You can write more code here

/* START OF COMPILED CODE */

class OberrySingular extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		/** @type {Phaser.GameObjects.Rectangle} */
		this.gameObject;


		this.gameObject = gameObject;
		gameObject["__OberrySingular"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {OberrySingular} */
	static getComponent(gameObject) {
		return gameObject["__OberrySingular"];
	}


	/* START-USER-CODE */

	start () {

		var physicsObject = this.scene.matter.add.sprite(this.gameObject.x, this.gameObject.y, 'collectables', 'oberrysingular0001.png', {
			isSensor: true,
			isStatic: true,
			label: this.gameObject["__OberrySingular"]
		}).anims.play('oberrysingular');

		this.scene.matterCollision.addOnCollideStart({
			objectA: ball,
			objectB: physicsObject,
			callback: eventData => {
				this.scene.sound.play('oberrysingular');			
				physicsObject.destroy(true);
				//replace destroy with animation sequence fx 

			}
		});
	};

	awake() {
		this.gameObject.alpha = 0;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
