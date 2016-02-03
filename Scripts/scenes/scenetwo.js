var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SCENE TWO
var scenes;
(function (scenes) {
    var SceneTwo = (function (_super) {
        __extends(SceneTwo, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SceneTwo() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SceneTwo.prototype.start = function () {
            // add Scene0 Image
            this._sceneTwoImage = new createjs.Bitmap("../../Assets/images/Scene2.png");
            this.addChild(this._sceneTwoImage);
            // add BUTTON A to the SCENE ZERO
            this._buttonA = new objects.Button("Button1a", config.Screen.CENTER_X - 120, config.Screen.CENTER_Y + 120);
            this.addChild(this._buttonA);
            // add BUTTON A event listener            
            this._buttonA.on("click", this._buttonAClick, this);
            // add BUTTON B to the SCENE ZERO
            this._buttonB = new objects.Button("Button1b", config.Screen.CENTER_X + 120, config.Screen.CENTER_Y + 120);
            this.addChild(this._buttonB);
            // add BUTTON B event listener            
            this._buttonB.on("click", this._buttonBClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        SceneTwo.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BUTTON A click event handler
        SceneTwo.prototype._buttonAClick = function (event) {
            // Switch to the SCENE TWO A
            scene = config.Scene.SCENE_TWO_A;
            changeScene();
        };
        // BUTTON B click event handler
        SceneTwo.prototype._buttonBClick = function (event) {
            // Switch to the SCENE TWO B
            scene = config.Scene.SCENE_TWO_B;
            changeScene();
        };
        return SceneTwo;
    })(objects.Scene);
    scenes.SceneTwo = SceneTwo;
})(scenes || (scenes = {}));
//# sourceMappingURL=scenetwo.js.map