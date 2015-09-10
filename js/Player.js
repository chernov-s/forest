Game.Player = function(x, y) {
	this.size = 44;
	this.x = x;
	this.y = y;
	this.vx = 0;
	this.vy = 0;
	this.speed = 0.8;
	this.maxSpeed = 20;
	this.nextX = this.x;
	this.nextY = this.y;
	this.currentWeapon = 'machineGun';
    this.sprite = new Sprite('assets/sprites.png', {x: 0, y: 0}, {w: 66, h: 96}, 8, [0], 'x-pos');
};

Game.Player.prototype.update = function() {
	this.vy *= 0.72;
	this.vx *= 0.72;

	this.x = this.nextX;
	this.y = this.nextY;

	if(Game.key.up && this.vy > -this.maxSpeed) this.move(1);

	if(Game.key.down && this.vy < this.maxSpeed) this.move(2);

	if(Game.key.right && this.vx < this.maxSpeed) this.move(3);

	if(Game.key.left && this.vx > -this.maxSpeed) this.move(4);

    if(!Game.key.arrow && this.sprite.maxFrame > 0) {
        this.sprite.setFrames([this.sprite.frames[0]]);
    }

	this.nextX += this.vx;
	this.nextY += this.vy;
    this.sprite.update();
};

Game.Player.prototype.move =  function(dir){
    switch (dir) {
        case 1: //up
            this.vy -= this.speed;
            if(this.sprite.frames[0] == 1)
                this.sprite.setFrames([2, 1]);
            else
                this.sprite.setFrames([3, 4]);
            break;
        case 2: //down
            this.vy += this.speed;
            if(this.sprite.frames[0] == 1)
                this.sprite.setFrames([2, 1]);
            else
                this.sprite.setFrames([3, 4]);
            break;
        case 3: //right
            this.vx += this.speed;
            this.sprite.setFrames([2, 1]);
            break;
        case 4: //left
            this.vx -= this.speed;
            this.sprite.setFrames([3, 4]);
            break;
        default : break;
    }
};


Game.Player.prototype.draw = function(xView, yView) {

    Game.ctx.beginPath();
    Game.ctx.save();
    Game.ctx.shadowBlur=5;
	Game.ctx.shadowColor="#D8FAFF";
	Game.ctx.rect(this.x, this.y, this.size, this.size);
    Game.ctx.fillRect((this.x-this.size/2) - xView, (this.y-this.size/2) - yView, this.size, this.size);
	Game.ctx.fillStyle = "#5AFFFF";
    Game.ctx.restore();
    Game.ctx.closePath();
};