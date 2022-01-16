
// You can write more code here

/* START OF COMPILED CODE */

class pause extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		/** @type {Phaser.GameObjects.Image} */
		this.gameObject;


		this.gameObject = gameObject;
		gameObject["__pause"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {pause} */
	static getComponent(gameObject) {
		return gameObject["__pause"];
	}


	/* START-USER-CODE */

	start() {
		var menutween = this.scene.tweens.add({targets: this.scene.menuFade, duration: 200, alpha: .5, paused: true});
		var pauseTween = this.scene.tweens.add({
			targets: this.scene.pauseScreen,
			duration: 750,
			scale: 1,
			x: 760,
			y: 480,
			ease: 'Back.easeOut',
			paused: true
		});
		this.gameObject.on("pointerup", () => {
			this.scene.anims.pauseAll();
			this.scene.sound.setVolume(.5);
			ball.body.isStatic = true;
			this.scene.menuFade.x = 760;
			console.log(this.scene.children.list)
			menutween.play();
			this.scene.pauseScreen.setScale(.5);
			this.scene.pauseScreen.setPosition(-760,480);
			pauseTween.play()
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
