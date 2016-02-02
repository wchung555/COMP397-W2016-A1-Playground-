var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SCENE ZERO
var scenes;
(function (scenes) {
    var SceneZero = (function (_super) {
        __extends(SceneZero, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SceneZero() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SceneZero.prototype.start = function () {
            // add Intro Image
            this._sceneZeroImage = new createjs.Bitmap("../../Assets/images/Scene0.png");
            this.addChild(this._sceneZeroImage);
            // add BUTTON ONE to the SCENE ZERO
            this._buttonOne = new objects.Button("Button1", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 120);
            this.addChild(this._buttonOne);
            // add BUTTON ONE event listener            
            this._buttonOne.on("click", this._buttonOneClick, this);
            // add BUTTON TWO to the SCENE ZERO
            this._buttonTwo = new objects.Button("Button2", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 120);
            this.addChild(this._buttonOne);
            // add BUTTON TWO event listener            
            this._buttonTwo.on("click", this._buttonTwoClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        SceneZero.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BUTTON ONE click event handler
        SceneZero.prototype._buttonOneClick = function (event) {
            // Switch to the FIRST_DECISION Scene
            scene = config.Scene.SCENE_ONE;
            changeScene();
        };
        // BUTTON TWO click event handler
        SceneZero.prototype._buttonTwoClick = function (event) {
            // Switch to the FIRST_DECISION Scene
            scene = config.Scene.SCENE_TWO;
            changeScene();
        };
        return SceneZero;
    })(objects.Scene);
    scenes.SceneZero = SceneZero;
})(scenes || (scenes = {}));
//# sourceMappingURL=scenezero.js.map