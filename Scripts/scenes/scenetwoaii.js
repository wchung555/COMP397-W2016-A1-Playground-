var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SCENE TWO A II
var scenes;
(function (scenes) {
    var SceneTwoAII = (function (_super) {
        __extends(SceneTwoAII, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SceneTwoAII() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SceneTwoAII.prototype.start = function () {
            // add Intro Image
            this._sceneTwoAIIImage = new createjs.Bitmap("../../Assets/images/Scene2aii.png");
            this.addChild(this._sceneTwoAIIImage);
            // add the START OVER button to the SCENE 1 A
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 120);
            this.addChild(this._startOverButton);
            // add START button event listener            
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        SceneTwoAII.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START Button click event handler
        SceneTwoAII.prototype._startOverButtonClick = function (event) {
            // Switch to SCENE ZERO
            scene = config.Scene.SCENE_ZERO;
            changeScene();
        };
        return SceneTwoAII;
    })(objects.Scene);
    scenes.SceneTwoAII = SceneTwoAII;
})(scenes || (scenes = {}));
//# sourceMappingURL=scenetwoaii.js.map