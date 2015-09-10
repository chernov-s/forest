Game.key = {
    up: false,
    right: false,
    down: false,
    left: false,
    arrow: false,
    esc: false
};

Game.mouse = {
    x: 0,
    y: 0,
    angle: 0,
    down: false
};

Game.canvas.addEventListener('mousemove', function(e) {
    var rect = Game.canvas.getBoundingClientRect();

    Game.mouse.x = e.clientX - rect.left;
    Game.mouse.y = e.clientY - rect.top;
});

Game.canvas.addEventListener('mousedown', function(e) {
    Game.mouse.down = true;
});

Game.canvas.addEventListener('mouseup', function(e) {
    Game.mouse.down = false;
});

document.addEventListener('keydown', function(e) {

    if(e.keyCode === 37 || e.keyCode === 65){
        Game.key.left = true;
        Game.key.arrow = true;
    }

    if(e.keyCode === 38 || e.keyCode === 87){
        Game.key.up = true;
        Game.key.arrow = true;
    }

    if(e.keyCode === 39 || e.keyCode === 68){
        Game.key.right = true;
        Game.key.arrow = true;
    }

    if(e.keyCode === 40 || e.keyCode === 83){
        Game.key.down = true;
        Game.key.arrow = true;
    }

    if(e.keyCode === 27){
        Game.key.esc = true;
        Game.key.arrow = true;
    }

});

document.addEventListener('keyup', function(e) {

    if(e.keyCode === 37 || e.keyCode === 65) {
        Game.key.left = false;
    }

    if(e.keyCode === 38 || e.keyCode === 87) {
        Game.key.up = false;
    }

    if(e.keyCode === 39 || e.keyCode === 68) {
        Game.key.right = false;
    }

    if(e.keyCode === 40 || e.keyCode === 83) {
        Game.key.down = false;
    }

    if(e.keyCode === 27){
        Game.key.esc = false;
    }
    Game.key.arrow = false;
});