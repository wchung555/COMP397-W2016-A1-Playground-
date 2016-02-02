var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.INTRO = 0;
        Scene.SCENE_ZERO = 1;
        Scene.SCENE_ONE = 2;
        Scene.SCENE_ONE_A = 3;
        Scene.SCENE_ONE_A_I = 4;
        Scene.SCENE_ONE_A_II = 5;
        Scene.SCENE_ONE_B = 6;
        Scene.SCENE_ONE_B_I = 7;
        Scene.SCENE_ONE_B_II = 8;
        Scene.SCENE_TWO = 9;
        Scene.SCENE_TWO_A = 10;
        Scene.SCENE_TWO_A_I = 11;
        Scene.SCENE_TWO_A_II = 12;
        Scene.SCENE_TWO_B = 13;
        Scene.SCENE_TWO_B_I = 14;
        Scene.SCENE_TWO_B_II = 15;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map