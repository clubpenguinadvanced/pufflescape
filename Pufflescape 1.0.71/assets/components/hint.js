
// You can write more code here

/* START OF COMPILED CODE */

class hint extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		/** @type {Phaser.GameObjects.Image} */
		this.gameObject;


		this.gameObject = gameObject;
		gameObject["__hint"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {hint} */
	static getComponent(gameObject) {
		return gameObject["__hint"];
	}


	/* START-USER-CODE */

	start() {
		this.scene.level1Hint.setDepth(19);
		this.scene.hintMask.setVisible(false);
		var mask = this.scene.hintMask.createBitmapMask();
		this.scene.level1Hint.setMask(mask);
		var hintTween = this.scene.tweens.add({targets: this.scene.hintMask, duration: 2000, x: 0, paused: true});
		this.gameObject.on("pointerup", () => {
			try {
				if (hintTween.progress == 0){
					this.scene.sound.play('hint', {duration: 2000});
					hintTween.play();
				}
			} catch {}
			
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
