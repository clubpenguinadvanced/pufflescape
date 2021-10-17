
// You can write more code here

/* START OF COMPILED CODE */

class lvlSelect extends Phaser.GameObjects.Scene {

	constructor() {
		super("lvlSelect");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// menubkgr
		const menubkgr = this.add.image(0, 0, "menubkgr");
		menubkgr.setOrigin(0.02755141400274461, 0.005467512304157473);

		// w3
		this.add.image(1180, 721, "w3");

		// w2
		this.add.image(759, 604, "w2");

		// w1
		this.add.image(798, 604, "w1");

		// pufflescape_Logo
		const pufflescape_Logo = this.add.image(760, 149, "Pufflescape_Logo");
		pufflescape_Logo.scaleX = 0.8447858075531121;
		pufflescape_Logo.scaleY = 0.8447858075531121;

		// sprite
		const sprite = new lock(this, 296, 532);
		this.add.existing(sprite);

		// lock
		const lock = new lock(this, 595, 536);
		this.add.existing(lock);

		// lock_1
		const lock_1 = new lock(this, 909, 537);
		this.add.existing(lock_1);

		// lock_2
		const lock_2 = new lock(this, 1211, 535);
		this.add.existing(lock_2);

		// lock_3
		const lock_3 = new lock(this, 286, 744);
		this.add.existing(lock_3);

		// lock_4
		const lock_4 = new lock(this, 597, 738);
		this.add.existing(lock_4);

		// lock_5
		const lock_5 = new lock(this, 906, 732);
		this.add.existing(lock_5);

		// lock_6
		const lock_6 = new lock(this, 1216, 732);
		this.add.existing(lock_6);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
