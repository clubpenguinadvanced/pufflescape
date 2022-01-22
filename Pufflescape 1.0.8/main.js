//debug drag
var dragEnable = true;
globalThis.color = 'purple';

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
				debug: false,
				gravity: {x: 0, y: 0.9},
			},
			arcade: {
				debug: true,
			}
		},
		plugins: {
    		scene: [
      			{
       			 plugin: PhaserMatterCollisionPlugin.default, // The plugin class
       			 key: "matterCollision", // Where to store in Scene.Systems, e.g. scene.sys.matterCollision
       			 mapping: "matterCollision" // Where to store in the Scene, e.g. scene.matterCollision

      			  // Note! If you are including the library via the CDN script tag, the plugin 
      			  // line should be:
       			 // plugin: PhaserMatterCollisionPlugin.default
      			}
    		]
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
		//this.sound.decodeAudio("gameplayLoop")
	}

	create() {
		var intro = this.sound.add('intro');
		var gameplayLoop = this.sound.add('gameplayLoop', {loop: true});
	
		intro.on('complete', () => {gameplayLoop.play()});
		intro.play();
		this.scene.start("LevelSelect");
	}

}