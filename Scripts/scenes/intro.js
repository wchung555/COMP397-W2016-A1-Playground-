var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var Intro = (function (_super) {
        __extends(Intro, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Intro() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Intro.prototype.start = function () {
            // add Intro Image
            this._introImage = new createjs.Bitmap("../../Assets/images/IntroScreen.png");
            this.addChild(this._introImage);
            // add the START button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startButton);
            // add START button event listener            
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Intro.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START Button click event handler
        Intro.prototype._startButtonClick = function (event) {
            // Switch to SCENE ZERO
            scene = config.Scene.SCENE_ZERO;
            changeScene();
        };
        return Intro;
    })(objects.Scene);
    scenes.Intro = Intro;
})(scenes || (scenes = {}));
//# sourceMappingURL=intro.js.map