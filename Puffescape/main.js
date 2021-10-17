
window.addEventListener('load', function () {
	
	var game = new Phaser.Game({
		width: 1520,
		height: 960,
		type: Phaser.MatterJS,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});
	
	game.scene.add("Boot", Boot, true);
	//game.scene.add("prelod", Prelod);

});

class Boot extends Phaser.Scene {

	preload() {
		//this.scene.launch("prelod");
		this.load.pack("pack", "assets/asset-pack.json");
	}

	create() {
		this.scene.start("lock")
		this.scene.start("lvlSelect");
	}

}