// SCENE ONE B II
module scenes {
    export class SceneOneBII extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sceneOneBIIImage: createjs.Bitmap;
        private _startOverButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._sceneOneBIIImage = new createjs.Bitmap("../../Assets/images/Scene1bii.png");
            this.addChild(this._sceneOneBIIImage);
            
            // add the START OVER button to the SCENE 1 A
            this._startOverButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 120);
            this.addChild(this._startOverButton);
            
            // add START button event listener            
            this._startOverButton.on("click", this._startOverButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START Button click event handler
        private _startOverButtonClick(event: createjs.MouseEvent) {
            // Switch to SCENE ZERO
            scene = config.Scene.SCENE_ZERO;
            changeScene();
        }
    }
}