var G_gift=0;G_gift=3;var Animation=function(){this.i=0,this.t=0,this.startTime=0,this.o=0,this.h=!1,window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.mozRequestAnimationFrame||function(i){setTimeout(i,1e3/60)}};function runGame(){(new Animation).start()}Animation.prototype.u=new QuaySo(G_gift),Animation.prototype.m=function(i){this.A=i},Animation.prototype.start=function(){this.h=!0;var i=new Date;this.startTime=i.getTime(),this.o=this.startTime,this.G()},Animation.prototype.G=function(){var i=this,n=(new Date).getTime();this.t=n-this.o,this.i+=this.t,this.u.start(this.t),this.o=n,this.h&&requestAnimFrame((function(){i.G()}))},Animation.prototype.stop=function(){this.h=!1},window.onload=function(){runGame()};