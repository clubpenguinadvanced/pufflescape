
// You can write more code here

/* START OF COMPILED CODE */

class Exit extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		/** @type {Phaser.GameObjects.Image} */
		this.gameObject;


		this.gameObject = gameObject;
		gameObject["__Exit"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {Exit} */
	static getComponent(gameObject) {
		return gameObject["__Exit"];
	}


	/* START-USER-CODE */

	start() {
		var exit = this.scene.matter.add.rectangle(
			this.gameObject.x, 
			this.gameObject.y, 
			this.gameObject.width * this.gameObject.scaleX, 
			this.gameObject.height * this.gameObject.scaleY, 
			{	
				isStatic: true, 
				isSensor: true,
				label: this.gameObject["__Exit"]
			}
		);

		this.scene.matterCollision.addOnCollideStart({
			objectA: ball,
			objectB: exit,
			callback: eventData => {
				this.scene.matter.world.destroy;

				ball.body.isStatic = true;
				this.scene.anims.pauseAll();
				this.scene.menuFade.x = -760;
				this.scene.endScreen.setPosition(1520, 0);
				this.scene.endScreen.setDepth(20);
				var menutween = this.scene.tweens.add({targets: this.scene.menuFade, duration: 200, alpha: .5, paused: true});
				menutween.play();
				//this.scene.scene.start('LevelSelect');
			}
		});
	}

	awake() {
		this.gameObject.alpha = 0;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
