// First, we set the properties of the game: the width and height of the game area
var properties = {
    width: 640,
    height: 480
};

// Initialize the game as an instance of the Phaser.Game object established in the framework
// Argument 0: Width
// Argument 1: Height
// Argument 2: Renderer - It can be specified to WebGL or Canvas but we'll let the interpreter decide
// Argument 3: DOM element id in our index.html where the game will be displayed
// Argument 4: Game states
var game = new Phaser.Game(properties.width, properties.height, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

// All assets will be loaded in here
function preload() {

}

// Initialization of all the sprites, sounds, levels, text, etc.
function create() {

}

// This is the main game loop. This function is run every frame. (The initial FPS is 60)
function update() {

}