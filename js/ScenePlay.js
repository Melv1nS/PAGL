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


        //back to main menu button
        const mainMenuButton = this.add.text(width/2 - width/10 + 8, height/2, 'Main Menu', { backgroundColor: "blue", fontFamily: 'Times, serif' })
            .setInteractive()
            .on('pointerover', () => this.scene.get('SceneMain').ButtonHover(mainMenuButton))
            .on('pointerout', () => this.scene.get('SceneMain').ButtonHoverReset(mainMenuButton))
            .on('pointerdown', () => this.scene.switch('SceneMain'));


    }
    update() 
    {
        //constant running loop

    }
}