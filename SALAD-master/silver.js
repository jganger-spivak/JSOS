//Sprite class and functions
function makesprite() {
  var body = document.getElementsByTagName("body");
  var id = Math.random();
  body[0].innerHTML += "<div id='" + id + "'></div>";
  var obj = document.getElementById(id);
  var imgid = Math.random();
  var clickid = Math.random();
  obj.innerHTML = "<a id='" + clickid + "' border='0'></a>";
  obj.clickable = document.getElementById(clickid);
  obj.clickable.innerHTML = "<img id='" + imgid + "'>";
  obj.image = document.getElementById(imgid);
  obj.style.position = "absolute";
  obj.setX = setX;
  obj.moveLeft = moveLeft;
  obj.moveRight = moveRight;
  obj.moveUp = moveUp;
  obj.moveDown = moveDown;
  obj.setY = setY;
  obj.setImage = setImage;
  obj.radiusX = 0;
  obj.radiusY = 0;
  obj.isCollidingX = isCollidingX;
  obj.isCollidingY = isCollidingY;
  
  return obj;
}

function setX(pixels) {
  this.style.left = pixels + "px";
}

function setImage(filename) {
  this.image.src = filename;
}

function setY(pixels) {
  this.style.top = pixels + "px";
}

function moveRight(pixels) {
  var currentX = parseInt(this.style.left) || 0;
  this.style.left = (currentX + pixels) + "px";
}

function moveLeft(pixels) {
  var currentX = parseInt(this.style.left) || 0;
  this.style.left = (currentX - pixels) + "px";
}

function moveDown(pixels) {
  var currentY = parseInt(this.style.top) || 0;
  this.style.top = (currentY + pixels) + "px";
}

function moveUp(pixels) {
  var currentY = parseInt(this.style.top) || 0;
  this.style.top = (currentY - pixels) + "px";
}

function isCollidingX(sprite2) {
    var x1 = parseInt(this.style.left) || 0;
    var x2 = parseInt(sprite2.style.left) || 0;
    var distance = x1 - x2;
    console.log(distance);
    distance = Math.abs(distance);
    console.log(distance);
    if ((this.radiusX + sprite2.radiusX) >= distance) {
        return true;
    } else { return false; }
}

function isCollidingY(sprite2) {
    var y1 = parseInt(this.style.top) || 0;
    var y2 = parseInt(sprite2.style.top) || 0;
    var distance = y1 - y2;
    console.log(distance);
    distance = Math.abs(distance);
    console.log(distance);
    if ((this.radiusY + sprite2.radiusY) >= distance) {
        return true;
    } else { return false; }
}
//End Sprite

function SilverCanvas() {
  this.c = null;
  this.ctx = null;
  this.sprites = [];
  this.count = 1;
  
  this.setup = function(canvas) {
    this.c = document.getElementById(canvas);
    this.ctx = this.c.getContext("2d");
  }
  
  this.update = function() {
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.fillRect(0, 0, this.c.width, this.c.height);
    this.render();
    this.count++;
    window.setTimeout(this.update, 10);
  }
  
  this.render = function() {
    
  }
  
  this.addSprite = function(sprite) {
    this.sprites[this.sprites.length] = sprite;
  }
  
  this.rect = function(color, x, y, width, height) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, width, height);
  }
  
  this.circle = function(color, x, y, radius) { 
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, 2*Math.PI);
    this.ctx.fill();
  }
  
  this.img = function(img, x, y) {
	  var image = document.getElementById(img);
	  this.ctx.drawImage(img, x, y);
  }
  
  this.line = function(color, x1, y1, x2, y2) {
		this.ctx.strokeStyle = color;
		this.ctx.moveTo(x1, y1);
		this.ctx.lineTo(x2, y2);
		this.ctx.stroke();
  }
  return this;
}