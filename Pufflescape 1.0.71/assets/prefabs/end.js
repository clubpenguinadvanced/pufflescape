
// You can write more code here

/* START OF COMPILED CODE */

class end extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// menuFade
		const menuFade = scene.add.rectangle(-760, 480, 1520, 960);
		menuFade.alpha = 0;
		menuFade.isFilled = true;
		menuFade.fillColor = 0;
		this.add(menuFade);

		// w1
		const w1 = scene.add.image(-734, 498, "w1");
		this.add(w1);

		// text
		const text = scene.add.text(-1136, 457, "", {});
		text.text = "Level Complete";
		text.setStyle({"color":"#000000ff","fontSize":"100px"});
		this.add(text);

		// buttonFinal1_png
		const buttonFinal1_png = scene.add.image(-770, 650, "buttons", "buttonFinal1.png");
		this.add(buttonFinal1_png);

		// text_1
		const text_1 = scene.add.text(-969, 622, "", {});
		text_1.text = "Return to Menu";
		text_1.setStyle({"color":"#43566fff","fontSize":"50px"});
		this.add(text_1);

		// buttonFinal1_png (components)
		new InteractiveObject(buttonFinal1_png);
		const buttonFinal1_pnggoToLevel = new goToLevel(buttonFinal1_png);
		buttonFinal1_pnggoToLevel.sceneKey = "LevelSelect";
		const buttonFinal1_pngPointerHandler = new PointerHandler(buttonFinal1_png);
		buttonFinal1_pngPointerHandler.texOver = "buttonFinal2.png";
		buttonFinal1_pngPointerHandler.texOut = "buttonFinal1.png";
		buttonFinal1_pngPointerHandler.texOn = "buttonFinal3.png";

		this.menuFade = menuFade;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	menuFade;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
