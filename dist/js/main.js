console.log("加载成功");

require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "flexslider" : "flexslider",

        //抛物线函数，不遵从AMD
        "parabola": "parabola",
         "index": "index",
         "register":"register",
    },
    //设置模块之间的依赖关系
    shim: {
        "jquery-cookie": ["jquery"],
        "flexslider":["jquery"],
        /*
            定义不遵从AMD规范的js文件
        */
        "parabola": {
            exports: "_"
        }

    }
});


require(['index','register'], function(index,register){
    index.select();
    index.headershow1();
    index.show2();
    index.banner2();
    // index.banner();
    index.add();
    // index.show();
    index.addListItems();
    index.addIconImg();
    index.show3();
    index.show4();
    index.show5();
    index.show6();
    register.register();
    register.login();
    register.addGoods();
    register.goodImgView();
    register.listShow();
    register.amplification();
    register.addshop();
    register.deleteShopGoods();
    register.ceshi();
});