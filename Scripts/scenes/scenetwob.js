var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SCENE TWO B
var scenes;
(function (scenes) {
    var SceneTwoB = (function (_super) {
        __extends(SceneTwoB, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SceneTwoB() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SceneTwoB.prototype.start = function () {
            // add Scene0 Image
            this._sceneTwoBImage = new createjs.Bitmap("../../Assets/images/Scene2b.png");
            this.addChild(this._sceneTwoBImage);
            // add BUTTON ONE to the SCENE ZERO
            this._buttonI = new objects.Button("Button2bi", config.Screen.CENTER_X - 120, config.Screen.CENTER_Y + 120);
            this.addChild(this._buttonI);
            // add BUTTON ONE event listener            
            this._buttonI.on("click", this._buttonIClick, this);
            // add BUTTON TWO to the SCENE ZERO
            this._buttonII = new objects.Button("Button2bii", config.Screen.CENTER_X + 120, config.Screen.CENTER_Y + 120);
            this.addChild(this._buttonII);
            // add BUTTON TWO event listener            
            this._buttonII.on("click", this._buttonIIClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        SceneTwoB.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BUTTON I click event handler
        SceneTwoB.prototype._buttonIClick = function (event) {
            // Switch to the SCENE TWO B I
            scene = config.Scene.SCENE_TWO_B_I;
            changeScene();
        };
        // BUTTON II click event handler
        SceneTwoB.prototype._buttonIIClick = function (event) {
            // Switch to the SCENE TWO B II
            scene = config.Scene.SCENE_TWO_B_II;
            changeScene();
        };
        return SceneTwoB;
    })(objects.Scene);
    scenes.SceneTwoB = SceneTwoB;
})(scenes || (scenes = {}));
//# sourceMappingURL=scenetwob.js.map