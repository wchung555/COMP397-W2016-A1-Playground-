var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SCENE ONE A
var scenes;
(function (scenes) {
    var SceneOneA = (function (_super) {
        __extends(SceneOneA, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SceneOneA() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SceneOneA.prototype.start = function () {
            // add Scene0 Image
            this._sceneOneAImage = new createjs.Bitmap("../../Assets/images/Scene1a.png");
            this.addChild(this._sceneOneAImage);
            // add BUTTON ONE to the SCENE ZERO
            this._buttonI = new objects.Button("Button1ai", config.Screen.CENTER_X - 120, config.Screen.CENTER_Y + 120);
            this.addChild(this._buttonI);
            // add BUTTON ONE event listener            
            this._buttonI.on("click", this._buttonIClick, this);
            // add BUTTON TWO to the SCENE ZERO
            this._buttonII = new objects.Button("Button1aii", config.Screen.CENTER_X + 120, config.Screen.CENTER_Y + 120);
            this.addChild(this._buttonII);
            // add BUTTON TWO event listener            
            this._buttonII.on("click", this._buttonIIClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        SceneOneA.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BUTTON I click event handler
        SceneOneA.prototype._buttonIClick = function (event) {
            // Switch to the SCENE ONE A I
            scene = config.Scene.SCENE_ONE_A_I;
            changeScene();
        };
        // BUTTON II click event handler
        SceneOneA.prototype._buttonIIClick = function (event) {
            // Switch to the SCENE ONE A II
            scene = config.Scene.SCENE_ONE_A_II;
            changeScene();
        };
        return SceneOneA;
    })(objects.Scene);
    scenes.SceneOneA = SceneOneA;
})(scenes || (scenes = {}));
//# sourceMappingURL=sceneonea.js.map