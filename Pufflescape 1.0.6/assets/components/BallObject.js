
// You can write more code here

/* START OF COMPILED CODE */

class BallObject extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		/** @type {Phaser.GameObjects.Image} */
		this.gameObject;


		this.gameObject = gameObject;
		gameObject["__BallObject"] = this;

		/* START-USER-CTR-CODE */


		this.scene.cValue;
		/* END-USER-CTR-CODE */
	}

	/** @returns {BallObject} */
	static getComponent(gameObject) {
		return gameObject["__BallObject"];
	}


	/* START-USER-CODE */
	awake() {

	}

	start() {
		var cValue = 0;

		this.scene.cValue = cValue;
		//ball.setthis.scene.scale(this.scene.scale)
		ball.depth = 1;
		console.log(ball)
		this.scene.matterCollision.addOnCollideActive({
			objectA: ball,
			callback: eventData => {

				if (this.scene.input.keyboard.addKey('LEFT').isDown ) {
					//cValue = 1;
					if (eventData.bodyB.label == 'hitbox' && this.scene.platForceEnable == true) {
						this.scene.cValue = 1;
					}
					if (ball.body.velocity.x < -8) {
						ball.applyForce({ x: -.01, y: 0 });
					}


					console.log(ball.body.velocity.x);
				} else if (this.scene.input.keyboard.addKey('RIGHT').isDown) {
					//cValue = 2
					if (eventData.bodyB.label == 'hitbox' && this.scene.platForceEnable == true) {
						this.scene.cValue = 2
					}
					if (ball.body.velocity.x > 8) {
						ball.applyForce({ x: .01, y: 0 });
					}

					console.log(ball.body.velocity.x);

				} else {
					this.scene.cValue = 0;
				}
			}
		});

	}

	update() {

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
