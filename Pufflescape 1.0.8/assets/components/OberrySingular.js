
// You can write more code here

/* START OF COMPILED CODE */

class OberrySingular extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		/** @type {Phaser.GameObjects.Rectangle} */
		this.gameObject;
		/** @type {string} */
		this.color = "Purple";
		/** @type {number} */
		this.scale = 1;


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
		const bling = this.scene.add.sprite(this.gameObject.x, this.gameObject.y, "Bling", "Bling0001.png");
		bling.scale = 2;
		bling.alpha = 0;
		bling.scale = this.scale;

		this.scene.matterCollision.addOnCollideStart({
			objectA: ball,
			objectB: physicsObject,
			callback: eventData => {
				this.scene.sound.play('oberrysingular');
				bling.alpha = 1;
				bling.anims.play("Bling");
				physicsObject.destroy(true);
				this.scene.puffleAnims.stop();
				this.scene.puffleAnims.play(this.color + "_Shiny");
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
