
// You can write more code here

/* START OF COMPILED CODE */

class hint extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		/** @type {Phaser.GameObjects.Image} */
		this.gameObject;
		/** @type {string} */
		this.hint = "";


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
		var isInactive = true;
		this.scene.hintMap.setDepth(10);
		this.scene.hintMask.setVisible(false);
		var mask = this.scene.hintMask.createBitmapMask();
		this.scene.hintMap.setMask(mask);
		var hintTween = this.scene.tweens.add({targets: this.scene.hintMask, duration: 2000, x: 0, paused: true});
		if (isInactive) {

		}
		this.gameObject.on("pointerup", () => {
			if (isInactive) {
				try {
					if (hintTween.progress < .01){
						this.scene.sound.play('hint', {duration: 2000});
						hintTween.play();
					}
				} catch {}
				isInactive = false;
			} else {
				hintTween.restart().pause();
				console.log(hintTween.progress)
				isInactive = true;
			}


		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
