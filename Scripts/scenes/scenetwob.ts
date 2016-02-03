// SCENE TWO B
module scenes {
    export class SceneTwoB extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sceneTwoBImage: createjs.Bitmap;
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
            this._sceneTwoBImage = new createjs.Bitmap("../../Assets/images/Scene2b.png");
            this.addChild(this._sceneTwoBImage);
            
            // add BUTTON ONE to the SCENE ZERO
            this._buttonI = new objects.Button(
                "Button2bi",
                config.Screen.CENTER_X - 120,
                config.Screen.CENTER_Y + 120);
            this.addChild(this._buttonI);
            
            // add BUTTON ONE event listener            
            this._buttonI.on("click", this._buttonIClick, this);
            
            // add BUTTON TWO to the SCENE ZERO
            this._buttonII = new objects.Button(
                "Button2bii",
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
            // Switch to the SCENE TWO B I
            scene = config.Scene.SCENE_TWO_B_I;
            changeScene();
        }
        
        // BUTTON II click event handler
        private _buttonIIClick(event: createjs.MouseEvent) {
            // Switch to the SCENE TWO B II
            scene = config.Scene.SCENE_TWO_B_II;
            changeScene();
        }
    }
}