var Game = (function() {

  var canvas = document.getElementById('c1'),
      ctx = canvas.getContext('2d');

  return {
    width: 800,
    height: 600,
    delta: 0,
    canvas: canvas,
    ctx: ctx,
  }

}());

function angleCalc(sx, sy, tx, ty) {
  return Math.atan2(ty - sy, tx - sx);
};

function random( min, max ) {
  return Math.round(min + ( Math.random() * ( max - min ) ));
}

function randXY() {
  switch(random( 1, 4 )) {
    case 1: return {x: random(0, Game.width), y: 0}; // Top
    case 2: return {x: Game.width, y: random(0, Game.height)}; // Right
    case 3: return {x: random(0, Game.width), y: Game.height}; // Bottom
    case 4: return {x: 0, y: random(0, Game.height)}; // Left
  }
}

function distance(ax, ay, bx, by) {
  return Math.sqrt(Math.pow( ax - bx, 2) + Math.pow( ay - by, 2));
}
function collisionRect(rect1, rect2) {
  return (rect1.x < rect2.x + rect2.width &&
     rect1.x + rect1.width > rect2.x &&
     rect1.y < rect2.y + rect2.height &&
     rect1.height + rect1.y > rect2.y)
}

function RectsColliding(r1, r2) {
            return !(r1.x > r2.x + r2.w || r1.x + r1.w < r2.x || r1.y > r2.y + r2.h || r1.y + r1.h < r2.y);
        }

function RectCircleColliding(rect,circle){
    var dx=Math.abs(circle.x-(rect.x+rect.w/2));
    var dy=Math.abs(circle.y-(rect.y+rect.y/2));

    if( dx > circle.r+rect.w2 ){ return(false); }
    if( dy > circle.r+rect.h2 ){ return(false); }

    if( dx <= rect.w ){ return(true); }
    if( dy <= rect.h ){ return(true); }

    var dx=dx-rect.w;
    var dy=dy-rect.h
    return(dx*dx+dy*dy<=circle.r*circle.r);
}