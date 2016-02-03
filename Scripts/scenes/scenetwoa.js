var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SCENE TWO A
var scenes;
(function (scenes) {
    var SceneTwoA = (function (_super) {
        __extends(SceneTwoA, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SceneTwoA() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SceneTwoA.prototype.start = function () {
            // add Scene0 Image
            this._sceneTwoAImage = new createjs.Bitmap("../../Assets/images/Scene2a.png");
            this.addChild(this._sceneTwoAImage);
            // add BUTTON ONE to the SCENE ZERO
            this._buttonI = new objects.Button("Button2ai", config.Screen.CENTER_X - 120, config.Screen.CENTER_Y + 120);
            this.addChild(this._buttonI);
            // add BUTTON ONE event listener            
            this._buttonI.on("click", this._buttonIClick, this);
            // add BUTTON TWO to the SCENE ZERO
            this._buttonII = new objects.Button("Button2aii", config.Screen.CENTER_X + 120, config.Screen.CENTER_Y + 120);
            this.addChild(this._buttonII);
            // add BUTTON TWO event listener            
            this._buttonII.on("click", this._buttonIIClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        SceneTwoA.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BUTTON I click event handler
        SceneTwoA.prototype._buttonIClick = function (event) {
            // Switch to the SCENE TWO A I
            scene = config.Scene.SCENE_TWO_A_I;
            changeScene();
        };
        // BUTTON II click event handler
        SceneTwoA.prototype._buttonIIClick = function (event) {
            // Switch to the SCENE TWO A II
            scene = config.Scene.SCENE_TWO_A_II;
            changeScene();
        };
        return SceneTwoA;
    })(objects.Scene);
    scenes.SceneTwoA = SceneTwoA;
})(scenes || (scenes = {}));
//# sourceMappingURL=scenetwoa.js.map