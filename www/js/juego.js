// array con las posiciones de los puntos del dibujo
var figurePoints;

// the variable with json data about figures
var jsonData;

// the position (in array of json) of the current position
var currentFigurePosition;

// Altura y anchura originales de donde se sacaron los puntos
var ORIGINAL_WIDTH = 500;
var ORIGINAL_HEIGTH = 600;

// array con los sprites del dibujo
var spritesDibujo;

// sprite jugador y sprites del dibujo
var player;
var dibujo;
var star;

// primer punto para dibujar las lineas entre puntos
var firstPoint;

// el grafico para pintar la linea entre dos puntos
var graphics;

// variable que indica cual sera, dentro del array de puntos, el siguiente punto valido con el que colisionar
var currentPoint;

// posicion de la estrella
var starPosition;

// puntuacion
var score;
var textScore;
var firstPointHit;

// the name of the properties of json with figures
var FIGURES_JSON_FILENAME = 'assets/figures/figures.json';
var FIGURES_LABEL_JSON = "figures";

// puntuacion minima y puntuaciones a sumar o restar en funcion de si el jugador pinta bien o no cada linea
var MIN_SCORE = 0;
var INITIAL_SCORE = 10;
var SCORE_TO_ADD = 10;
var SCORE_TO_DECREMENT = 1;

// texto puntuacion
var SCORE_LABEL = "Puntos: ";
var LOOSE_MESSAGE = "¡¡¡Oh!!! Perdiste :(";
var WIN_MESSAGE = "¡¡Ganaste!! :)";

// Multiplicador velocidad
var VELOCITY_MULTIPLIER = 100;

// sonidos
var music;
var okSound;
var failSound;
var winSound;
var looseSound;

// phaser game
var game;

var app = {

    // Initialize Firebase
    firebaseConfig: {
        apiKey: "AIzaSyBD-Qx8wtPRO-IIQjxOXk5Esx_AmCen7zM",
        authDomain: "llondria-54d14.firebaseapp.com",
        databaseURL: "https://llondria-54d14.firebaseio.com",
        storageBucket: "llondria-54d14.appspot.com",
        messagingSenderId: "117223410827"
    },

    init: function () {
        height = document.documentElement.clientHeight;
        width = document.documentElement.clientWidth;

        app.vigilaSensores();
        app.startGame();
        app.startFirebase();
    },

    startFirebase: function () {
        firebase.initializeApp(app.firebaseConfig);
    },

    startGame: function () {
        game = new Phaser.Game(width, height, Phaser.AUTO, '', {preload: preload, create: create, update: update});

        function preload() {

            // load figures from json
            game.load.text(FIGURES_LABEL_JSON, FIGURES_JSON_FILENAME);

            // initialize position of current figure in json
            currentFigurePosition = 0;

            game.stage.backgroundColor = '#FFF';

            // cargar sonidos
            app.loadAudios(game);

            // imagenes
            app.loadSprites(game);

            // fuente para la puntuacion
            game.load.bitmapFont('desyrel-pink', 'assets/fonts/desyrel-pink.png', 'assets/fonts/desyrel-pink.xml');

            // sprites del dibujo
            spritesDibujo = [];

            // inicializar el puntero que indicara el siguiente punto a colisionar
            currentPoint = 0;

            // inicializar posicion estrella
            starPosition = 1;

            // score inicial
            score = INITIAL_SCORE;
            firstPointHit = false;
        }

        function create() {
            app.createGame();
        }

        function update() {

            game.physics.arcade.collide(player, dibujo);

            //  mover el jugador con el raton
            player.body.velocity.y = (velocidadY * VELOCITY_MULTIPLIER);
            player.body.velocity.x = (velocidadX * (-1 * VELOCITY_MULTIPLIER));

            //  400 is the speed it will move towards the mouse
            /* game.physics.arcade.moveToPointer(player, 400);
             //  if it's overlapping the mouse, don't move any more
             if (Phaser.Rectangle.contains(player.body, game.input.x, game.input.y))
             {
             player.body.velocity.setTo(0, 0);
             }*/
        }
    },

    createGame: function(){
        // get data from json
        jsonData = JSON.parse(game.cache.getText(FIGURES_LABEL_JSON));

        // posiciones del dibujo
        app.loadFigurePoints();

        // fondo degradado
        app.createBackground(game);

        // iniciar sprite jugador
        app.createPlayerSprite(game);

        // preparar los puntos del dibujo
        app.createPointSprites(game);

        // sonidos
        app.createAudios(game);

        // on collide action
        player.body.onCollide = new Phaser.Signal();
        player.body.onCollide.add(app.drawLine, this);

        dibujo.setAll('body.immovable', true);

        // preparar el grafico para pintar las lineas
        graphics = game.add.graphics(0, 0);
        graphics.lineStyle(3, 0x4C0B5F, 1);

        // puntuacion
        textScore = game.add.bitmapText(10, 10, 'desyrel-pink', SCORE_LABEL + " " + score, 30);
    },

    loadAudios: function (game) {
        game.load.audio('audio', ['assets/audio/background_music.wav']);
        game.load.audio('okSound', ['assets/audio/hit.mp3']);
        game.load.audio('failSound', ['assets/audio/fail.wav']);
        game.load.audio('winSound', ['assets/audio/winning.wav']);
        game.load.audio('looseSound', ['assets/audio/loosing.wav']);
    },

    loadSprites: function (game) {
        game.load.image('player', 'assets/sprites/player.png');
        game.load.atlas('star', 'assets/sprites/star.png', 'assets/sprites/star.json');
        game.load.image('aqua_ball', 'assets/sprites/aqua_ball.png');
        game.load.image('purple_ball', 'assets/sprites/purple_ball.png');
        game.load.image('green_ball', 'assets/sprites/green_ball.png');
    },

    convertPointX: function (originalX) {
        return (originalX * width / ORIGINAL_WIDTH) - 80;
    },

    convertPointY: function (originalY) {
        return originalY * height / ORIGINAL_HEIGTH;
    },

    /**
     * It loads the points of the current figure from the json
     */
    loadFigurePoints: function () {
        var points = jsonData[FIGURES_LABEL_JSON][currentFigurePosition].points;
        figurePoints = [];
        var point
        for (point in points) {
            figurePoints.push({
                "x": app.convertPointX(points[point]["x"]),
                "y": app.convertPointY(points[point]["y"]),
                "sprite": points[point]["sprite"],
                "enable": points[point]["enable"],
                "toEnable": points[point]["toEnable"]
            });
        }
    },

    createBackground: function (game) {
        var bitMap = game.add.bitmapData(game.width, game.height);
        var grd = bitMap.context.createLinearGradient(0, 0, 0, 500);
        grd.addColorStop(0, "#9F81F7");
        grd.addColorStop(1, "#E3CEF6");
        bitMap.context.fillStyle = grd;
        bitMap.context.fillRect(0, 0, game.width, game.height);
        var gradient = game.add.sprite(0, 0, bitMap);
        gradient.alpha = 0;
        game.add.tween(gradient).to({alpha: 1}, 2000).start();
    },

    createPlayerSprite: function (game) {
        player = game.add.sprite(0, height / 2, 'player');
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;
        game.physics.enable(player, Phaser.Physics.ARCADE);
    },

    createPointSprites: function (game) {
        dibujo = game.add.physicsGroup();
        var point
        for (point in figurePoints) {
            var sprite = dibujo.create(figurePoints[point]['x'], figurePoints[point]['y'], figurePoints[point]['sprite']);
            sprite.anchor.setTo(0.5, 0.5);
            game.physics.arcade.enable(sprite);
            sprite.body.enable = figurePoints[point]['enable'];
            sprite.body.collideWorldBounds = true;
            spritesDibujo[point] = sprite;
        }

        star = game.add.sprite(figurePoints[0]['x'], figurePoints[0]['y'], 'star');
        star.animations.add('walk');
        star.animations.play('walk', 10, true);
        star.scale.setTo(0.25, 0.25);
        star.anchor.setTo(0.5, 0.55);
    },

    createAudios: function (game) {
        music = game.add.audio('audio', 0.1, true);
        music.play();
        okSound = game.add.audio('okSound');
        failSound = game.add.audio('failSound');
        winSound = game.add.audio('winSound');
        looseSound = game.add.audio('looseSound');
    },

    drawLine: function (player, point) {

        var correctPoint = false;

        // pintar la linea entre dos puntos, cuando haya colisionado con dos puntos
        if (undefined === firstPoint && figurePoints[currentPoint]['x'] === point.position.x && figurePoints[currentPoint]['y'] === point.position.y) {
            firstPoint = point.position;

            app.moveStar();

            correctPoint = true;
            firstPointHit = true;
        } else if (undefined != firstPoint) {

            if (undefined != figurePoints[currentPoint]['toEnable']) {
                //activar punto desactivado inicialmente
                spritesDibujo[figurePoints[currentPoint]['toEnable']].body.enable = true;
            }
            correctPoint = app.doDrawLine(point);
        }

        // deshabilitar el punto y sumar puntuacion al usuario
        app.manageScore(point, correctPoint);

        // pintar puntuacion
        app.drawScore();
    },

    doDrawLine: function (point) {
        var secondPoint = point.position;
        // si los dos puntos son los correspondientes en la lista de puntos del dibujo, se puede dibujar la linea
        if (spritesDibujo[currentPoint].x === firstPoint.x && spritesDibujo[currentPoint].y === firstPoint.y
            && spritesDibujo[currentPoint + 1].x === secondPoint.x && spritesDibujo[currentPoint + 1].y === secondPoint.y) {
            graphics.moveTo(firstPoint.x, firstPoint.y);
            graphics.lineTo(secondPoint.x, secondPoint.y);
            firstPoint = secondPoint;
            currentPoint++;

            app.moveStar();
            return true;
        } else {
            return false;
        }
    },

    manageScore: function (point, correctPoint) {
        if (correctPoint) {
            point.body.enable = false;
            score += SCORE_TO_ADD;
            // sonar acierto
            okSound.play();
        } else if (firstPointHit) {
            console.log("Quitando puntos " + point + " " + correctPoint);
            score -= SCORE_TO_DECREMENT;
            // sonar fallo
            failSound.play();
        }
    },

    drawScore: function () {
        // Pintar puntuacion
        if (score < MIN_SCORE) {// si perdio, se notifica y se deshabilitan todos los puntos restantes
            textScore.setText(LOOSE_MESSAGE);
            music.stop();
            looseSound.play();
            for (var i in spritesDibujo) {
                spritesDibujo[i].body.enable = false;
            }
        } else if (currentPoint === (figurePoints.length - 1)) {//termino el juego
            textScore.setText(WIN_MESSAGE + "\n" + SCORE_LABEL + " " + score);
            music.stop();
            winSound.play();
            currentFigurePosition++;
            app.createGame();
        } else {
            textScore.setText(SCORE_LABEL + " " + score);
        }
    },

    moveStar: function () {
        if (starPosition < (spritesDibujo.length)) {
            star.x = figurePoints[starPosition]['x'];
            star.y = figurePoints[starPosition]['y'];
            starPosition++;
        }
    },

    vigilaSensores: function () {
        function onError() {
            console.log('onError!');
        }

        function onSuccess(datosAceleracion) {
            app.detectaAgitacion(datosAceleracion);
            app.registraDireccion(datosAceleracion);
        }

        navigator.accelerometer.watchAcceleration(onSuccess, onError, {frequency: 10});
    },

    detectaAgitacion: function (datosAceleracion) {
        var agitacionX = datosAceleracion.x > 10;
        var agitacionY = datosAceleracion.y > 10;

        if (agitacionX || agitacionY) {
            setTimeout(app.recomienza, 1000);
        }
    },

    recomienza: function () {
        document.location.reload(true);
    },

    registraDireccion: function (datosAceleracion) {
        velocidadX = datosAceleracion.x;
        velocidadY = datosAceleracion.y;
    }

};

if ('addEventListener' in document) {
    document.addEventListener('deviceready', function () {
        app.init();
    }, false);
}