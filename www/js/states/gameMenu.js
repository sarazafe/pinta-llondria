/**
 * This will show a menu for the game with different options.
 *
 * Created by Alvaro on 11/03/2017.
 */

GameMenu = {

    titleText: null,

    startGameText: null,

    optionStyle: { font: '30pt TheMinion', fill: 'white', align: 'left' },

    init: function () {
        this.titleText = game.make.text(game.world.centerX, 100, "Game Title", {
            font: 'bold 60pt desyrel-pink',
            fill: '#FDFFB5',
            align: 'center'
        });
        this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
        this.titleText.anchor.set(0.5);
    },

    preload: function () {
        //NOOP
        console.log("preload game menu");
    },

    create: function () {
        console.log("create game menu");
        game.add.existing(this.titleText);

        // the text for start
        this.startGameText = game.add.text(30, 280, 'Start', this.optionStyle);
        // so how do we make it clickable?  We have to use .inputEnabled!
        this.startGameText.inputEnabled = true;
        // Now every time we click on it, it says "You did it!" in the console!
        this.startGameText.events.onInputUp.add(function () { game.state.start('Game'); });
    }

};