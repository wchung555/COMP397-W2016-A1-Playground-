/// <reference path = "_reference.ts" />

// global variables
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

// Game Scenes
var intro: scenes.Intro;
var sceneZero: scenes.SceneZero;
var sceneOne: scenes.SceneOne;
var sceneOneA: scenes.SceneOneA;
var sceneOneAI: scenes.SceneOneAI;
var sceneOneAII: scenes.SceneOneAII;
var sceneOneB: scenes.SceneOneB;
var sceneOneBI: scenes.SceneOneBI;
var sceneOneBII: scenes.SceneOneBII;
var sceneTwo: scenes.SceneTwo;
var sceneTwoA: scenes.SceneTwoA;
var sceneTwoAI: scenes.SceneTwoAI;
var sceneTwoAII: scenes.SceneTwoAII;
var sceneTwoB: scenes.SceneTwoB;
var sceneTwoBI: scenes.SceneTwoBI;
var sceneTwoBII: scenes.SceneTwoBII;

function init(): void {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    
    // create our main display list container
    stage = new createjs.Stage(canvas);
    
    // Enable mouse events
    stage.enableMouseOver(20);
    
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    
    // sets up our stats counting workflow
    setupStats(); 
    
    // set initial scene
    scene = config.Scene.INTRO;
    changeScene();
}

// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event: createjs.Event): void {
    // start collecting stats for this frame
    stats.begin(); 
    
    // calling State's update method
    currentScene.update(); 
    
    // redraw/refresh stage every frame
    stage.update();
    
    // stop collecting stats for this frame
    stats.end();
}

// Setup Game Stats
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
    // Launch various scenes
    switch (scene) {
        case config.Scene.INTRO:
            // show the INTRO scene
            stage.removeAllChildren();
            intro = new scenes.Intro();
            currentScene = intro;
            console.log("Starting INTRO Scene");
            break;
        case config.Scene.SCENE_ZERO:
            // show SCENE ZERO
            stage.removeAllChildren();
            sceneZero = new scenes.SceneZero();
            currentScene = sceneZero;
            console.log("Starting SCENE ZERO");
            break;
        case config.Scene.SCENE_ONE:
            // show SCENE ONE
            stage.removeAllChildren();
            sceneOne = new scenes.SceneOne();
            currentScene = sceneOne;
            console.log("Starting SCENE ONE");
            break;
        case config.Scene.SCENE_ONE_A:
            // show SCENE ONE A
            stage.removeAllChildren();
            sceneOneA = new scenes.SceneOneA();
            currentScene = sceneOneA;
            console.log("Starting SCENE ONE A");
            break;
        case config.Scene.SCENE_ONE_A_I:
            // show SCENE ONE A I
            stage.removeAllChildren();
            sceneOneAI = new scenes.SceneOneAI();
            currentScene = sceneOneAI;
            console.log("Starting SCENE ONE A I");
            break;
        case config.Scene.SCENE_ONE_A_II:
            // show SCENE ONE A II
            stage.removeAllChildren();
            sceneOneAII = new scenes.SceneOneAII();
            currentScene = sceneOneAII;
            console.log("Starting SCENE ONE A II");
            break;
        case config.Scene.SCENE_ONE_B:
            // show SCENE ONE B
            stage.removeAllChildren();
            sceneOneB = new scenes.SceneOneB();
            currentScene = sceneOneB;
            console.log("Starting SCENE ONE B");
            break;            
        case config.Scene.SCENE_ONE_B_I:
            // show SCENE ONE B I
            stage.removeAllChildren();
            sceneOneBI = new scenes.SceneOneBI();
            currentScene = sceneOneBI;
            console.log("Starting SCENE ONE B I");
            break;       
        case config.Scene.SCENE_ONE_B_II:
            // show SCENE ONE B II
            stage.removeAllChildren();
            sceneOneBII = new scenes.SceneOneBII();
            currentScene = sceneOneB;
            console.log("Starting SCENE ONE B II");
            break;
        case config.Scene.SCENE_TWO:
            // show SCENE TWO
            stage.removeAllChildren();
            sceneTwo = new scenes.SceneTwo();
            currentScene = sceneTwo;
            console.log("Starting SCENE TWO");
            break;
        case config.Scene.SCENE_TWO_A:
            // show SCENE TWO A
            stage.removeAllChildren();
            sceneTwoA = new scenes.SceneTwoA();
            currentScene = sceneTwoA;
            console.log("Starting SCENE TWO A");
            break;
        case config.Scene.SCENE_TWO_A_I:
            // show SCENE TWO A I
            stage.removeAllChildren();
            sceneTwoAI = new scenes.SceneTwoAI();
            currentScene = sceneTwo;
            console.log("Starting SCENE TWO A I");
            break;
        case config.Scene.SCENE_TWO_A_II:
            // show SCENE TWO A II
            stage.removeAllChildren();
            sceneTwoAII = new scenes.SceneTwoAII();
            currentScene = sceneTwoAII;
            console.log("Starting SCENE TWO A II");
            break;
        case config.Scene.SCENE_TWO_B:
            // show SCENE TWO B
            stage.removeAllChildren();
            sceneTwoB = new scenes.SceneTwoB();
            currentScene = sceneTwoB;
            console.log("Starting SCENE TWO B");
            break;            
        case config.Scene.SCENE_TWO_B_I:
            // show SCENE TWO B I
            stage.removeAllChildren();
            sceneTwoBI = new scenes.SceneTwoBI();
            currentScene = sceneTwoBI;
            console.log("Starting SCENE TWO B I");
            break;       
        case config.Scene.SCENE_TWO_B_II:
            // show SCENE TWO B II
            stage.removeAllChildren();
            sceneTwoBII = new scenes.SceneTwoBII();
            currentScene = sceneTwoBII;
            console.log("Starting SCENE TWO B II");
            break;
    }

    console.log(currentScene.numChildren);
}