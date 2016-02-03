// SCENE ONE
module scenes {
    export class SceneOne extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sceneOneImage: createjs.Bitmap;
        private _buttonA: objects.Button;
        private _buttonB: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Scene0 Image
            this._sceneOneImage = new createjs.Bitmap("../../Assets/images/Scene1.png");
            this.addChild(this._sceneOneImage);
            
            // add BUTTON A to the SCENE ZERO
            this._buttonA = new objects.Button(
                "Button1a",
                config.Screen.CENTER_X - 120,
                config.Screen.CENTER_Y + 120);
            this.addChild(this._buttonA);
            
            // add BUTTON A event listener            
            this._buttonA.on("click", this._buttonAClick, this);
            
            // add BUTTON B to the SCENE ZERO
            this._buttonB = new objects.Button(
                "Button1b",
                config.Screen.CENTER_X + 120,
                config.Screen.CENTER_Y + 120);
            this.addChild(this._buttonB);
            
            // add BUTTON B event listener            
            this._buttonB.on("click", this._buttonBClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // BUTTON A click event handler
        private _buttonAClick(event: createjs.MouseEvent) {
            // Switch to the FIRST_DECISION Scene
            scene = config.Scene.SCENE_ONE_A;
            changeScene();
        }
        
        // BUTTON B click event handler
        private _buttonBClick(event: createjs.MouseEvent) {
            // Switch to the FIRST_DECISION Scene
            scene = config.Scene.SCENE_ONE_B;
            changeScene();
        }
    }
}