
// You can write more code here

/* START OF COMPILED CODE */

class endUI extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		/** @type {Phaser.GameObjects.Image} */
		this.finish;
		/** @type {Phaser.GameObjects.Image} */
		this.color;
		/** @type {Phaser.GameObjects.Text} */
		this.textName;
		/** @type {Phaser.GameObjects.Image} */
		this.nextGoTo;
		/** @type {Phaser.GameObjects.Image} */
		this.restartOut_png;
		/** @type {Phaser.GameObjects.Image} */
		this.menuOut_png;


		// finish
		const finish = scene.add.image(-9, 2, "finish");
		this.add(finish);

		// color
		const color = scene.add.image(-278, -311, "colorSplashArt", "purpleFinish.png");
		this.add(color);

		// oberrysingular0001_png
		const oberrysingular0001_png = scene.add.image(-103, 11, "collectables", "oberrysingular0001.png");
		this.add(oberrysingular0001_png);

		// oberrysingular0001_png_1
		const oberrysingular0001_png_1 = scene.add.image(-17, 11, "collectables", "oberrysingular0001.png");
		this.add(oberrysingular0001_png_1);

		// oberrysingular0001_png_2
		const oberrysingular0001_png_2 = scene.add.image(66, 11, "collectables", "oberrysingular0001.png");
		this.add(oberrysingular0001_png_2);

		// oberrysingular0001_png_3
		const oberrysingular0001_png_3 = scene.add.image(87, 11, "collectables", "oberrysingular0001.png");
		this.add(oberrysingular0001_png_3);

		// oberrysingular0001_png_4
		const oberrysingular0001_png_4 = scene.add.image(108, 11, "collectables", "oberrysingular0001.png");
		this.add(oberrysingular0001_png_4);

		// text_1
		const text_1 = scene.add.text(-319, -104, "", {});
		text_1.text = "Extreme levels coming soon!\n";
		text_1.setStyle({"color":"#000000ff","fontFamily":"Brush Script MT","fontSize":"50px","fontStyle":"bold","shadow.offsetX":2,"shadow.offsetY":1,"shadow.color":"#8a8a8aff","shadow.blur":2,"shadow.stroke":true,"shadow.fill":true});
		this.add(text_1);

		// textName
		const textName = scene.add.text(-296, -184, "", {});
		textName.text = "Level # Complete!";
		textName.setStyle({"color":"#000000ff","fontFamily":"Brush Script MT","fontSize":"70px","fontStyle":"bold","stroke":"#ffffffff","shadow.offsetX":2,"shadow.offsetY":1,"shadow.color":"#696969ff","shadow.blur":2,"shadow.stroke":true,"shadow.fill":true});
		this.add(textName);

		// nextGoTo
		const nextGoTo = scene.add.image(157, 124, "pauseMenu", "nextOut.png");
		this.add(nextGoTo);

		// restartOut_png
		const restartOut_png = scene.add.image(-39, 124, "pauseMenu", "restartOut.png");
		this.add(restartOut_png);

		// menuOut_png
		const menuOut_png = scene.add.image(-198, 124, "pauseMenu", "menuOut.png");
		this.add(menuOut_png);

		// nextGoTo (components)
		new InteractiveObject(nextGoTo);
		const nextGoToPointerHandler = new PointerHandler(nextGoTo);
		nextGoToPointerHandler.texOver = "nextOver.png";
		nextGoToPointerHandler.texOut = "nextOut.png";
		nextGoToPointerHandler.texOn = "nextOn.png";

		// restartOut_png (components)
		new InteractiveObject(restartOut_png);
		const restartOut_pngPointerHandler = new PointerHandler(restartOut_png);
		restartOut_pngPointerHandler.texOver = "restartOver.png";
		restartOut_pngPointerHandler.texOut = "restartOut.png";
		restartOut_pngPointerHandler.texOn = "restartOn.png";
		new restart(restartOut_png);

		// menuOut_png (components)
		new InteractiveObject(menuOut_png);
		const menuOut_pngPointerHandler = new PointerHandler(menuOut_png);
		menuOut_pngPointerHandler.texOver = "menuOver.png";
		menuOut_pngPointerHandler.texOut = "menuOut.png";
		menuOut_pngPointerHandler.texOn = "menuOn.png";
		const menuOut_pnggoToLevel = new goToLevel(menuOut_png);
		menuOut_pnggoToLevel.sceneKey = "LevelSelect";

		this.finish = finish;
		this.color = color;
		this.textName = textName;
		this.nextGoTo = nextGoTo;
		this.restartOut_png = restartOut_png;
		this.menuOut_png = menuOut_png;

		/* START-USER-CTR-CODE */



		this.color.setTexture('colorSplashArt', globalThis.color.concat('Finish.png'));
		this.scene.events.emit('scene-awake');
		/* END-USER-CTR-CODE */

		// custom definition props
		this.nextLevel = "";
		this.levelName = "";
	}


	/* START-USER-CODE */
	set levelName(levelName) {
		this.textName.text = levelName.concat(' Complete!');
	}
	set nextLevel(nextLevel) {
		this.nextGoTo.on("pointerup", () => {
			this.scene.scene.start(nextLevel);
		});
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
