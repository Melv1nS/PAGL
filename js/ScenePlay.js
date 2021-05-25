class ScenePlay extends Phaser.Scene {
    constructor() {
        super('ScenePlay');
    }
    preload()
    {
    	//load our images or sounds here
        this.canvas = this.sys.game.canvas;

        this.load.image("block", "./assets/img/square.png");
    }
    create() {
        //defines objects here
        console.log('inside play!')
        let { width, height } = this.sys.game.canvas;

        //back to main menu button
        const mainMenuButton = this.add.text(0, 0, 'Main Menu', { backgroundColor: "blue", fontFamily: 'Times, serif' })
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