// SCENE ONE A
module scenes {
    export class SceneOneA extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sceneOneAImage: createjs.Bitmap;
        private _buttonI: objects.Button;
        private _buttonII: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Scene0 Image
            this._sceneOneAImage = new createjs.Bitmap("../../Assets/images/Scene1a.png");
            this.addChild(this._sceneOneAImage);
            
            // add BUTTON ONE to the SCENE ZERO
            this._buttonI = new objects.Button(
                "Button1ai",
                config.Screen.CENTER_X - 120,
                config.Screen.CENTER_Y + 120);
            this.addChild(this._buttonI);
            
            // add BUTTON ONE event listener            
            this._buttonI.on("click", this._buttonIClick, this);
            
            // add BUTTON TWO to the SCENE ZERO
            this._buttonII = new objects.Button(
                "Button1aii",
                config.Screen.CENTER_X + 120,
                config.Screen.CENTER_Y + 120);
            this.addChild(this._buttonII);
            
            // add BUTTON TWO event listener            
            this._buttonII.on("click", this._buttonIIClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // BUTTON I click event handler
        private _buttonIClick(event: createjs.MouseEvent) {
            // Switch to the SCENE ONE A I
            scene = config.Scene.SCENE_ONE_A_I;
            changeScene();
        }
        
        // BUTTON II click event handler
        private _buttonIIClick(event: createjs.MouseEvent) {
            // Switch to the SCENE ONE A II
            scene = config.Scene.SCENE_ONE_A_II;
            changeScene();
        }
    }
}