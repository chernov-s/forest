(function() {
    function Sprite(url, pos, size, speed, frames, dir, once) {
        this.pos = pos;
        this.size = size;
        this.speed = typeof speed === 'number' ? speed : 0;
        this.frames = frames;
        this.maxFrame = this.frames.length;
        this._index = 0;
        this.url = url;
        this.dir = dir || 'horizontal';
        this.once = once;
        this.tick = 0;
    };

    Sprite.prototype = {
        update: function() {
            if(this.tick >= this.speed) {
                this.tick = 0;
                this._index ++;
            }
            if(this._index >= this.maxFrame) {
                this._index = 0;
            }
            this.tick ++;
        },

        setFrames: function(frames) {
            this.frames = frames;
            this.maxFrame = this.frames.length;
        },

        render: function(ctx) {
            var frame;

            if(this.speed > 0) {
                var idx = Math.floor(this._index);
                frame = this.frames[idx];

                if(this.once) {
                    this.done = true;
                    return;
                }
            }
            else {
                frame = 0;
            }


            var x = this.pos.x;
            var y = this.pos.y;

            if(this.dir == 'vertical') {
                y += frame * this.size.h;
            }
            else {
                x += frame * this.size.w;

                //console.log(frame + " | " + this._index + " | " + this.maxFrame);
            }

            ctx.drawImage(resources.get(this.url),
                x, y,
                this.size.w, this.size.h,
                0, 0,
                this.size.w, this.size.h);
        }
    };

    window.Sprite = Sprite;
})();