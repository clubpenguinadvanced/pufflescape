
// You can write more code here

/* START OF COMPILED CODE */

class Key extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		/** @type {Phaser.GameObjects.Image} */
		this.gameObject;


		this.gameObject = gameObject;
		gameObject["__Key"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {Key} */
	static getComponent(gameObject) {
		return gameObject["__Key"];
	}


	/* START-USER-CODE */

	start () {

		var physicsObject = this.scene.matter.add.sprite(this.gameObject.x, this.gameObject.y, 'collectables', 'key0001.png', {
			isSensor: true,
			isStatic: true,
			label: this.gameObject["__Key"]
		}).anims.play('key');

		this.scene.matterCollision.addOnCollideStart({
			objectA: ball,
			objectB: physicsObject,
			callback: eventData => {
				try {
					if (this.scene.door.isSensor != true){
						this.scene.sound.play('key');
						this.scene.door.isSensor = true;				
						physicsObject.destroy(true);
						//replace destroy with animation sequence fx 
					}
				} catch {console.error('door DNE')}

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
