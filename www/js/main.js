/**
 * This file will handle the start point of the game.
 *
 * It will add states for menus, the game, game over screen, etc.
 *
 * Created by Alvaro on 11/03/2017.
 */

var game;

var main = {

    // Initialize Firebase
    firebaseConfig: {
        apiKey: "AIzaSyBD-Qx8wtPRO-IIQjxOXk5Esx_AmCen7zM",
        authDomain: "llondria-54d14.firebaseapp.com",
        databaseURL: "https://llondria-54d14.firebaseio.com",
        storageBucket: "llondria-54d14.appspot.com",
        messagingSenderId: "117223410827"
    },

    init: function(){
        height  = document.documentElement.clientHeight;
        width = document.documentElement.clientWidth;

        main.startGame();
        //app.startFirebase(); TODO make it work
    },

    startFirebase: function() {
        firebase.initializeApp(app.firebaseConfig);
    },

    startGame: function(){
        game = new Phaser.Game(width, height, Phaser.AUTO, 'game');

        main = {

            preload: function () {
                game.load.bitmapFont('desyrel-pink', 'assets/fonts/desyrel-pink.png', 'assets/fonts/desyrel-pink.xml');
            },

            create: function () {
                game.state.add('GameMenu', GameMenu);
                game.state.add('Game', app);
                game.state.start('GameMenu');
            }

        };

        game.state.add('Main', main);
        game.state.start('Main');
    }

};

if ('addEventListener' in document) {
    document.addEventListener('deviceready', function() {
        main.init();
    }, false);
}