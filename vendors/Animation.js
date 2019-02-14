var G_gift = 0;
G_gift=3;
var Animation = function() {
    this.t = 0;
    this.timeInterval = 0;
    this.startTime = 0;
    this.lastTime = 0;
    this.animating = false;
    window.requestAnimFrame = function(callback) {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(callback) { setTimeout(callback, 1000 / 60); };
    }();
}
Animation.prototype.ObjQuaySo = new QuaySo(G_gift);
Animation.prototype.setStage = function(func) {
    this.stage = func;
};
Animation.prototype.start = function() {
    this.animating = true;
    var date = new Date();
    this.startTime = date.getTime();
    this.lastTime = this.startTime;
    this.animationLoop();
};
Animation.prototype.animationLoop = function() {
    var that = this;
    var date = new Date();
    var thisTime = date.getTime();
    this.timeInterval = thisTime - this.lastTime;
    this.t += this.timeInterval;
    //console.log(this.timeInterval);
    this.ObjQuaySo.start(this.timeInterval);
    this.lastTime = thisTime;
    if (this.animating)
        requestAnimFrame(function() {
            that.animationLoop();
        });
};
Animation.prototype.stop = function() {
    this.animating = false;
};
function runGame(){
    var g = new Animation();
    g.start();
}
window.onload = function() {
    runGame();
}