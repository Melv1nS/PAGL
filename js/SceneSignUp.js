class SceneSignUp extends Phaser.Scene {
    constructor() {
        super('SceneSignUp');
    }
    preload()
    {
    	//load our images or sounds here
        this.canvas = this.sys.game.canvas;
    }
    create() {
        //defines objects here
        console.log('inside Sign Up!')
        let { width, height } = this.sys.game.canvas;

        this.add.text(width/2 - width/10, height/2 - height/5, 'Sign Up', { fontFamily: 'Times, serif' });


    }
    update() 
    {
        //constant running loop

    }
}