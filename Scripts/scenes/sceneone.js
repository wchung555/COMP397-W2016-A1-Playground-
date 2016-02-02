var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SCENE ONE
var scenes;
(function (scenes) {
    var SceneOne = (function (_super) {
        __extends(SceneOne, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SceneOne() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SceneOne.prototype.start = function () {
            // add Scene0 Image
            this._sceneOneImage = new createjs.Bitmap("../../Assets/images/Scene1.png");
            this.addChild(this._sceneOneImage);
            // add BUTTON ONE to the SCENE ZERO
            this._buttonA = new objects.Button("Button1a", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 120);
            this.addChild(this._buttonA);
            // add BUTTON ONE event listener            
            //this._buttonA.on("click", this._buttonAClick, this);
            // add BUTTON TWO to the SCENE ZERO
            this._buttonB = new objects.Button("Button1b", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 120);
            this.addChild(this._buttonB);
            // add BUTTON TWO event listener            
            //this._buttonTwo.on("click", this._buttonBClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        SceneOne.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BUTTON ONE click event handler
        SceneOne.prototype._buttonAClick = function (event) {
            // Switch to the FIRST_DECISION Scene
            scene = config.Scene.SCENE_ONE_A;
            changeScene();
        };
        // BUTTON TWO click event handler
        SceneOne.prototype._buttonBClick = function (event) {
            // Switch to the FIRST_DECISION Scene
            scene = config.Scene.SCENE_ONE_B;
            changeScene();
        };
        return SceneOne;
    })(objects.Scene);
    scenes.SceneOne = SceneOne;
})(scenes || (scenes = {}));
//# sourceMappingURL=sceneone.js.map