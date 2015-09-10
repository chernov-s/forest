Game.Map = function(w, h) {
    this.w = w;
    this.h = h;
    this.image = null;
    this.rows = ~~(w / Game.player.size) + 1;
    this.collums = ~~(h / Game.player.size) + 1;
};

Game.Map.prototype.generate = function() {
    var ctx = document.createElement("canvas").getContext("2d");
    ctx.canvas.width = this.w;
    ctx.canvas.height = this.h;
    var color = "#80BE1F";
    ctx.save();
    ctx.fillStyle = "80BE1F";
    for(var x = 0, i = 0; i < this.rows; x += Game.player.size + 1, i++) {
        ctx.beginPath();
        for(var y = 0, j = 0; j < this.collums; y += Game.player.size + 1, j++) {
            ctx.rect(x, y, Game.player.size, Game.player.size);
        }
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }
    ctx.restore();

    this.image = new Image();
    this.image.src = ctx.canvas.toDataURL("image/png");

    ctx = null;
}

Game.Map.prototype.draw = function( xView, yView) {
    var sx, sy, dx, dy;
    var sWidth, sHeight, dWidth, dHeight;

    // offset point to crop the image
    sx = xView;
    sy = yView;

    // dimensions of cropped image
    sWidth =  Game.width;
    sHeight = Game.height;

    // if cropped image is smaller than canvas we need to change the source dimensions
    if(this.image.width - sx < sWidth){
        sWidth = this.image.width - sx;
    }
    if(this.image.height - sy < sHeight){
        sHeight = this.image.height - sy;
    }

    // location on canvas to draw the croped image
    dx = 0;
    dy = 0;
    // match destination with source to not scale the image
    dWidth = sWidth;
    dHeight = sHeight;

    Game.ctx.drawImage(this.image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
}