// First, we set the properties of the game: the width and height of the game area
var properties = {
    width: 640,
    height: 480
};

// Initialize the game as an instance of the Phaser.Game object established in the framework
var game = new Phaser.Game(properties.width, properties.height, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

//Initialization of global variables
var player = {
	y: 240,
	height: 80,
	score: 0
}

// All assets will be loaded in here
function preload() {

}

// Initialization of all the sprites, sounds, levels, text, etc.
function create() {

}

// This is the main game loop. This function is run every frame. (The initial FPS is 60)
function update() {
	graphics = game.add.graphics(0, 0);

	graphics.lineStyle(0);
	graphics.beginFill(0xFFFFFF);
	graphics.drawRect(4, player.y, 24, 24);
	graphics.endFill();

	window.graphics = graphics;
}