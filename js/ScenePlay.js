class ScenePlay extends Phaser.Scene {
    constructor() {
        super('ScenePlay');
    }
    preload()
    {
    	//load our images or sounds here
        this.canvas = this.sys.game.canvas;
    }
    create() {
        //defines objects here
        console.log('inside \play!')
        let { width, height } = this.sys.game.canvas;

        this.add.text(width/2 - width/10, height/2 - height/5, 'Play', { fontFamily: 'Times, serif' });


    }
    update() 
    {
        //constant running loop

    }
}