var game;
window.onload = function()
{
    var isMobile = navigator.userAgent.indexOf("Mobile");
    if (isMobile == -1) {
        isMobile = navigator.userAgent.indexOf("Tablet");
    }
    if (isMobile == -1) {
        var config = {
            type: Phaser.AUTO,
            width: 640,
            height: 480,
            backgroundColor: 'rgba(191,191,191,1)',
            parent: 'phaser-game',
            scene: [SceneMain, SceneSignUp, ScenePlay]
        };
    } else {
        var config = {
            type: Phaser.AUTO,
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 'rgba(191,191,191,1)',
            parent: 'phaser-game',
            scene: [SceneMain, SceneSignUp, ScenePlay]
        };
    }
    var game = new Phaser.Game(config);
}