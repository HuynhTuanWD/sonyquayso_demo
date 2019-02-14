/*
    @number
    1: tainghe
    2: bikip
    3: 50mb
*/
var QuaySo = function(i_gift) {
    this.$vongquay = document.getElementById('vongquay');
    this.$nhanqua = document.getElementById('nhanqua');
    this.$bg_nhanqua = document.getElementById('bg_nhanqua');
    this.$l_qua = document.getElementsByClassName('qua');
    this.$btn_batdau = document.getElementById('btn_batdau');
    this.$bg_batdau = document.getElementById('bg_batdau');
    this.gift = i_gift;
    this.scene = 1;
    this.deg = 5;
    this.cur_deg = 1;
    this.count_delay = 0;
    this.delay = 10;
    this.count_loop = 0;
    this.loop = 0;
    this.enabled = true;
    this.flag = true;
};
QuaySo.prototype.init = function() {
    //console.log(this.gift);
    if (this.flag) {
        if (this.gift == 1) {
            this.loop = 288;
        } else if (this.gift == 2) {
            this.loop = 311;
        } else {
            this.loop = 335;
        }
        this.listen();
        this.flag = false;
    }
}
QuaySo.prototype.listen = function() {
    var that = this;
    this.$btn_batdau.onclick = function() {
        that.scene = 2;
    }
}
QuaySo.prototype.plusDeg = function() {
    //console.log(this);
    this.cur_deg += this.deg;
    this.$vongquay.style.transform = 'translate(-49%, 0) rotate(' + this.cur_deg + 'deg)';
};
QuaySo.prototype.start = function(timeInterval) {
    this.init();
    if (this.scene == 1) {
        this.scene1();
    }
    if (this.scene == 2) {
        this.scene2(timeInterval);
    }
    if (this.scene == 3) {
        this.scene3();
    }
}
QuaySo.prototype.rotate = function(timeInterval) {
    if (this.enabled) {
        this.count_delay += timeInterval;
        if (this.count_delay >= this.delay) {
            this.count_delay = 0;
            this.count_loop++;
            this.plusDeg();
            if (this.count_loop == this.loop) {
                this.enabled = false;
                this.scene3();
            }
        }
    }
}
QuaySo.prototype.scene1 = function() {
    this.$l_qua[0].style.display = "none";
    this.$l_qua[1].style.display = "none";
    this.$l_qua[2].style.display = "none";
    this.$nhanqua.style.display = "none";
}
QuaySo.prototype.scene2 = function(timeInterval) {
    this.$btn_batdau.style.display = "none";
    this.$bg_batdau.style.display = "none";
    this.rotate(timeInterval);
}
QuaySo.prototype.scene3 = function() {
    if (this.gift == 1) {
        this.$l_qua[0].style.display = "block";
    } else if (this.gift == 2) {
        this.$l_qua[1].style.display = "block";
    } else {
        this.$l_qua[2].style.display = "block";
    }
    this.$nhanqua.style.display = "block";
    this.$bg_nhanqua.style.display = "block";
}