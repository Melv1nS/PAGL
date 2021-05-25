class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
    	//load our images or sounds here
        this.canvas = this.sys.game.canvas;
    }
    create() 
    {
        //defines objects here
        console.log('Ready!')

        //canvas width and height
        //TODO: not quite reading it right
        let { width, height } = this.sys.game.canvas;

        //adds main text
        this.add.text(width/2 - width/10, height/2 - height/5, 'Main Menu', { fontFamily: 'Times, serif' });

        //signup button
        const signUpButton = this.add.text(width/2 - width/10 + 8, height/2, 'Sign Up', { backgroundColor: "blue", fontFamily: 'Times, serif' })
            .setInteractive()
            .on('pointerover', () => this.ButtonHover(signUpButton))
            .on('pointerout', () => this.ButtonHoverReset(signUpButton))
            .on('pointerdown', () => this.ButtonPress("SceneSignUp"));

        //play button
        const playButton = this.add.text(width/2 - width/10 + 8, height/2 + 20, 'Play', { backgroundColor: "blue", fontFamily: 'Times, serif' })
            .setInteractive()
            .on('pointerover', () => this.ButtonHover(playButton))
            .on('pointerout', () => this.ButtonHoverReset(playButton))
            .on('pointerdown', () => this.ButtonPress("ScenePlay"));
    }
    update() 
    {
        //constant running loop

    }

    //custom functions here

    ButtonHover(button) {
        button.setStyle({backgroundColor: "green"})
    }

    ButtonHoverReset(button) {
        button.setStyle({backgroundColor: "blue"})
    }

    ButtonPress(scene) {
        this.scene.switch(scene);
        
    }
}