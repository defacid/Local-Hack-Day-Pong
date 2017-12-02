// First, we set the properties of the game: the width and height of the game area
var properties = {
    width: 640,
    height: 480
};

// Initialize the game as an instance of the Phaser.Game object established in the framework
var game = new Phaser.Game(properties.width, properties.height, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });


// All assets will be loaded in here
function preload() {

}

var oneUpKey;
var oneDownKey;
var twoUpKey;
var twoDownKey;

// Initialization of all the sprites, sounds, levels, text, etc.
function create() {
	//Initialize the graphics
	graphics = game.add.graphics(0, 0);

	//Initialize the controls
	oneUpKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    oneDownKey = game.input.keyboard.addKey(Phaser.Keyboard.Z);
    twoUpKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    twoDownKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

	//Initialize the players
	playerOne = {
		x: 32,
		y: 240,
		height: 64,
		score: 0,
	}

	playerTwo = {
		x: 608,
		y: 240,
		height: 64,
		score: 0,
	}

}

// This is the main game loop. This function is run every frame. (The initial FPS is 60)
function update() {
	//Clear the graphics
	graphics.clear();

	//Player Controls
	if (oneUpKey.isDown) playerOne.y -= 4;
	if (oneDownKey.isDown) playerOne.y += 4;
	if (twoUpKey.isDown) playerTwo.y -= 4;
	if (twoDownKey.isDown) playerTwo.y += 4;

	//Draw Player One
	graphics.lineStyle(12, 0xFFFFFF);
	graphics.moveTo(playerOne.x, playerOne.y - playerOne.height/2);
	graphics.lineTo(playerOne.x, playerOne.y + playerOne.height/2);

	//Draw Player Two
	graphics.moveTo(playerTwo.x, playerTwo.y - playerTwo.height/2);
	graphics.lineTo(playerTwo.x, playerTwo.y + playerTwo.height/2);

	//Set the game window to our view
	window.graphics = graphics;
}