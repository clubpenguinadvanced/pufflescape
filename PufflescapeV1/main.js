//debug drag
var dragEnable = true;
var col;

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1520,
		height: 960,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
			default: "matter",
			matter: {
				debug: true,
				gravity: {x: 0, y: 0.9},
			},
			arcade: {
				debug: true,
			}
		}
	});
	
	game.scene.add("Boot", Boot, true);

});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.json("collision1", "assets/collision/W1collision.json")
		//this.load.json("collision2", "assets/collision/W2collision.json")
		//this.load.json("collision3", "assets/collision/W3collision.json")
		this.load.pack("pack", "assets/asset-pack.json");
	}

	create() {
		col = this.cache.json.get('collision1');
		this.scene.start("LevelSelect");
	}

}