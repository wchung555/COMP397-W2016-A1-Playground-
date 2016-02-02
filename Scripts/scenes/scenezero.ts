// SCENE ZERO
module scenes {
    export class SceneZero extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sceneZeroImage: createjs.Bitmap;
        private _buttonOne: objects.Button;
        private _buttonTwo: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._sceneZeroImage = new createjs.Bitmap("../../Assets/images/Scene0.png");
            this.addChild(this._sceneZeroImage);
            
            // add BUTTON ONE to the SCENE ZERO
            this._buttonOne = new objects.Button(
                "Button1",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._buttonOne);
            
            // add BUTTON ONE event listener            
            this._buttonOne.on("click", this._buttonOneClick, this);
            
            // add BUTTON TWO to the SCENE ZERO
            this._buttonTwo = new objects.Button(
                "Button2",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._buttonOne);
            
            // add BUTTON TWO event listener            
            this._buttonTwo.on("click", this._buttonTwoClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // // BUTTON ONE click event handler
        // private _buttonOneClick(event: createjs.MouseEvent) {
        //     // Switch to the FIRST_DECISION Scene
        //     scene = config.Scene.SCENE_ONE;
        //     changeScene();
        // }
        // 
        // // BUTTON TWO click event handler
        // private _buttonTwoClick(event: createjs.MouseEvent) {
        //     // Switch to the FIRST_DECISION Scene
        //     scene = config.Scene.SCENE_TWO;
        //     changeScene();
        // }
    }
}