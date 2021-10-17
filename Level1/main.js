//DEBUG DRAG
var dragEnable = true;



window.addEventListener('load', function () {
	//this.plugins.install("matterCcollision", sourceMappingURL=phaser-matter-collision.js.map)
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
				gravity: {x: 0, y: 1.2},
			},
			arcade: {
				debug: true,
			}
		},
		/*plugins: {
    		scene: [
      			{
        			plugin: PhaserMatterCollisionPlugin, // The plugin class
        			key: "matterCollision", // Where to store in Scene.Systems, e.g. scene.sys.matterCollision
        			mapping: "matterCollision" // Where to store in the Scene, e.g. scene.matterCollision
      			}
    		]
  		}*/
		
	});

	
	
	game.scene.add("Boot", Boot, true);

});

class Boot extends Phaser.Scene {
	//import matterCollision from 'phaser-matter-collision.js';

	preload() {
		this.load.json('gfile', 'assets/colide/colide.json');
		this.load.pack("pack", "assets/asset-pack.json");
		
		//this.load.plugin("matterCollision", "phaser-matter-collision.js")
	}

	create() {
		
		this.scene.start("Level");
	}
	
}