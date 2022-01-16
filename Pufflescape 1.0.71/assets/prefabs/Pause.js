
// You can write more code here

/* START OF COMPILED CODE */

class Pause extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// pause
		const pause = scene.add.image(36, 18, "pause");
		this.add(pause);

		// menu
		const menu = scene.add.image(-168, 101, "pauseMenu", "menuOut.png");
		this.add(menu);

		// restart
		const restart = scene.add.image(-17, 101, "pauseMenu", "restartOut.png");
		this.add(restart);

		// resume
		const resume = scene.add.image(171, 101, "pauseMenu", "resumeOut.png");
		this.add(resume);

		// menu (components)
		new InteractiveObject(menu);
		const menuPointerHandler = new PointerHandler(menu);
		menuPointerHandler.texOver = "menuOver.png";
		menuPointerHandler.texOut = "menuOut.png";
		menuPointerHandler.texOn = "menuOn.png";
		const menugoToLevel = new goToLevel(menu);
		menugoToLevel.sceneKey = "LevelSelect";

		// restart (components)
		new InteractiveObject(restart);
		const restartPointerHandler = new PointerHandler(restart);
		restartPointerHandler.texOver = "restartOver.png";
		restartPointerHandler.texOut = "restartOut.png";
		restartPointerHandler.texOn = "restartOn.png";

		// resume (components)
		new InteractiveObject(resume);
		const resumePointerHandler = new PointerHandler(resume);
		resumePointerHandler.texOver = "resumeOver.png";
		resumePointerHandler.texOut = "resumeOut.png";
		resumePointerHandler.texOn = "resumeOn.png";

		this.menu = menu;
		this.restart = restart;
		this.resume = resume;

		/* START-USER-CTR-CODE */
		this.setDepth(15);


		var resumeTween = this.scene.tweens.add({
			targets: this,
			duration: 750,
			scale: .5,
			x: 2280,
			ease: 'Back.easeIn',
			paused: true
		});

		this.resume.on("pointerup", () => {
			var menutween = this.scene.tweens.add({targets: this.scene.menuFade, duration: 200, alpha: -.5, paused: false});
			resumeTween.play();
			this.scene.sound.setVolume(1)
			ball.body.isStatic = false;
			this.scene.anims.resumeAll();

		});
		this.restart.on("pointerup", () => {
			this.scene.scene.restart();
		});
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	menu;
	/** @type {Phaser.GameObjects.Image} */
	restart;
	/** @type {Phaser.GameObjects.Image} */
	resume;

	/* START-USER-CODE */



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
