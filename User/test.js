var o = {
    x : 1,
    func : function() { console.log(this.x) },
    test : function() {
    	// const _this = this;
        // setTimeout(function() {

        //     _this.func();
        // }, 100);
        setTimeout(()=>this.func(),100)
    }
};

o.test(); 