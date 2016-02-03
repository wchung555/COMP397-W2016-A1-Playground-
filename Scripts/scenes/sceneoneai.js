var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SCENE ONE A I
var scenes;
(function (scenes) {
    var SceneOneAI = (function (_super) {
        __extends(SceneOneAI, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SceneOneAI() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SceneOneAI.prototype.start = function () {
            // add Intro Image
            this._sceneOneAIImage = new createjs.Bitmap("../../Assets/images/Scene1ai.png");
            this.addChild(this._sceneOneAIImage);
            // add the START OVER button to the SCENE 1 A
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 120);
            this.addChild(this._startOverButton);
            // add START button event listener            
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        SceneOneAI.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START Button click event handler
        SceneOneAI.prototype._startOverButtonClick = function (event) {
            // Switch to SCENE ZERO
            scene = config.Scene.SCENE_ZERO;
            changeScene();
        };
        return SceneOneAI;
    })(objects.Scene);
    scenes.SceneOneAI = SceneOneAI;
})(scenes || (scenes = {}));
//# sourceMappingURL=sceneoneai.js.map