// SCENE TWO
module scenes {
    export class SceneTwo extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sceneTwoImage: createjs.Bitmap;
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
            this._sceneTwoImage = new createjs.Bitmap("../../Assets/images/Scene2.png");
            this.addChild(this._sceneTwoImage);
            
            // add BUTTON A to the SCENE ZERO
            this._buttonA = new objects.Button(
                "Button2a",
                config.Screen.CENTER_X - 120,
                config.Screen.CENTER_Y + 120);
            this.addChild(this._buttonA);
            
            // add BUTTON A event listener            
            this._buttonA.on("click", this._buttonAClick, this);
            
            // add BUTTON B to the SCENE ZERO
            this._buttonB = new objects.Button(
                "Button2b",
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
            // Switch to the SCENE TWO A
            scene = config.Scene.SCENE_TWO_A;
            changeScene();
        }
        
        // BUTTON B click event handler
        private _buttonBClick(event: createjs.MouseEvent) {
            // Switch to the SCENE TWO B
            scene = config.Scene.SCENE_TWO_B;
            changeScene();
        }
    }
}