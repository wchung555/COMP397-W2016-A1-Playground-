var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SCENE ONE B II
var scenes;
(function (scenes) {
    var SceneOneBII = (function (_super) {
        __extends(SceneOneBII, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SceneOneBII() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SceneOneBII.prototype.start = function () {
            // add Intro Image
            this._sceneOneBIIImage = new createjs.Bitmap("../../Assets/images/Scene1bii.png");
            this.addChild(this._sceneOneBIIImage);
            // add the START OVER button to the SCENE 1 A
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 120);
            this.addChild(this._startOverButton);
            // add START button event listener            
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        SceneOneBII.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START Button click event handler
        SceneOneBII.prototype._startOverButtonClick = function (event) {
            // Switch to SCENE ZERO
            scene = config.Scene.SCENE_ZERO;
            changeScene();
        };
        return SceneOneBII;
    })(objects.Scene);
    scenes.SceneOneBII = SceneOneBII;
})(scenes || (scenes = {}));
//# sourceMappingURL=sceneonebii.js.map