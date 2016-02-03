var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SCENE ONE B
var scenes;
(function (scenes) {
    var SceneOneB = (function (_super) {
        __extends(SceneOneB, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SceneOneB() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SceneOneB.prototype.start = function () {
            // add Scene0 Image
            this._sceneOneBmage = new createjs.Bitmap("../../Assets/images/Scene1b.png");
            this.addChild(this._sceneOneBmage);
            // add BUTTON ONE to the SCENE ZERO
            this._buttonI = new objects.Button("Button1bi", config.Screen.CENTER_X - 120, config.Screen.CENTER_Y + 120);
            this.addChild(this._buttonI);
            // add BUTTON ONE event listener            
            this._buttonI.on("click", this._buttonIClick, this);
            // add BUTTON TWO to the SCENE ZERO
            this._buttonII = new objects.Button("Button1bii", config.Screen.CENTER_X + 120, config.Screen.CENTER_Y + 120);
            this.addChild(this._buttonII);
            // add BUTTON TWO event listener            
            this._buttonII.on("click", this._buttonIIClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        SceneOneB.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BUTTON I click event handler
        SceneOneB.prototype._buttonIClick = function (event) {
            // Switch to the SCENE ONE B I
            scene = config.Scene.SCENE_ONE_B_I;
            changeScene();
        };
        // BUTTON II click event handler
        SceneOneB.prototype._buttonIIClick = function (event) {
            // Switch to the SCENE ONE B II
            scene = config.Scene.SCENE_ONE_B_II;
            changeScene();
        };
        return SceneOneB;
    })(objects.Scene);
    scenes.SceneOneB = SceneOneB;
})(scenes || (scenes = {}));
//# sourceMappingURL=sceneoneb.js.map