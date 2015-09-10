Game.init = function() {

	Game.currentWave = 0; 

	Game.currentState = 'play';	

	Game.player = new Game.Player(4*32,4*32);

    Game.room = {
        w: 1000, h: 1000, map: new Game.Map(1000, 1000)
    };

    Game.room.map.generate();

    Game.camera = new Game.Camera(0, 0, Game.width, Game.height, Game.room.w, Game.room.h);

    Game.camera.follow(Game.player, Game.width / 2.5, Game.height / 2.5);

	Game.loop();

}

Game.state = [];

Game.state['play'] = {
	update: function() {

		Game.player.update();

        Game.camera.update();

		//Game.mouse.angle = angleCalc( Game.player.x, Game.player.y, Game.mouse.x, Game.mouse.y);

	},

	draw: function() {
        Game.room.map.draw(Game.camera.x, Game.camera.y);
        this.spriteRender(Game.player);
	},

    spriteRender: function(entity) {
        Game.ctx.save();
        Game.ctx.translate(entity.x, entity.y);
        entity.sprite.render(Game.ctx);
        Game.ctx.restore();
    }

}

Game.loop = function(timestamp) {
	Game.ctx.clearRect(0,0,Game.width,Game.height);
	Game.ctx.fillStyle = '#93DB24';
  	Game.ctx.fillRect(0,0,Game.width,Game.height);

	Game.delta = timestamp - Game.last;
	Game.state[Game.currentState].update();

	Game.state[Game.currentState].draw();

	Game.last = timestamp - (Game.delta % 1000 / 30);

	requestAnimationFrame(Game.loop);

};

window.addEventListener('load', function() {

    resources.load([
        'assets/sprites.png'
    ]);
    resources.onReady(Game.init);
});