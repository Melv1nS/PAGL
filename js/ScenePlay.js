class ScenePlay extends Phaser.Scene {
    constructor() {
        super('ScenePlay');
    }
    preload()
    {
    	//load our images or sounds here
        this.canvas = this.sys.game.canvas;

        this.load.image("block", "./assets/img/BlackBox.png");
        this.load.image("ground", "./assets/img/ground.png");
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

        //text
        this.add.text(width/2 - width/10, height/2 - height/5, 'Space to Jump', { fontFamily: 'Times, serif' });

        //make sprites for the ground and the box
        this.box = this.physics.add.sprite(16, height/2, "block");

        //add gravity to box
        this.box.setGravityY(100);

        console.log(this)

        //creates the ground for the game
        let groundX=this.sys.game.config.width/2;
        let groundY=this.sys.game.config.height - 5;
        let ground=this.physics.add.sprite(groundX,groundY,"ground");

        //set the display width
        ground.displayWidth = this.sys.game.config.width * 1.1;

        //make the ground immovable
        ground.setImmovable();

        //add a collider for the box and the ground
        this.physics.add.collider(this.box, ground);

        //adding a keyboard listener for jump for the box
        this.input.keyboard.on('keydown-SPACE', this.jump) //gets the key object

    }

    update() 
    {
        //constant running loop
        
    }

    jump() 
    {
        this.scene.box.setVelocityY(-100);
    }
    
}