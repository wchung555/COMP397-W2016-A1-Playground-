var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SCENE ONE B I
var scenes;
(function (scenes) {
    var SceneOneBI = (function (_super) {
        __extends(SceneOneBI, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SceneOneBI() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SceneOneBI.prototype.start = function () {
            // add Intro Image
            this._sceneOneBIImage = new createjs.Bitmap("../../Assets/images/Scene1bi.png");
            this.addChild(this._sceneOneBIImage);
            // add the START OVER button to the SCENE 1 A
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 120);
            this.addChild(this._startOverButton);
            // add START button event listener            
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        SceneOneBI.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START Button click event handler
        SceneOneBI.prototype._startOverButtonClick = function (event) {
            // Switch to SCENE ZERO
            scene = config.Scene.SCENE_ZERO;
            changeScene();
        };
        return SceneOneBI;
    })(objects.Scene);
    scenes.SceneOneBI = SceneOneBI;
})(scenes || (scenes = {}));
//# sourceMappingURL=sceneonebi.js.map