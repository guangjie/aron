define(['jquery',"jquery-cookie"],function ($) {

    function register() {
        $(function () {

            $("#register-btn").click(function () {
                var str = `username=${$("#iphone").val()}&password=${$("#password1").val()}&repassword=${$("#password2").val()}`;
                console.log($("#password1").val());
                console.log("pppp");

                $.ajax({
                    url:"test.php?type=register",
                    type:"POST",
                    data:str,
                    success:function (res) {
                        alert(res);
                    },
                    error:function (msg) {
                        alert(msg);
                        alert(msg);
                    }
                })
            })
        })
    }

    function login() {
        $(function () {
            $('#login-btn').click(function () {
                var str = `username=${$("#name").val()}&password=${$("#passwordLogin").val()}`;
                $.ajax({
                    url:"test.php?type=login",
                    type:"POST",
                    data:str,
                    success:function (res) {
                        console.log(res);
                        alert(res);
                    },
                    error:function (msg) {
                        alert(msg);
                        alert(msg);
                    }
                })


            })
        })
    }

    function addGoods() {
        $(function () {
            $.ajax({
                url:'/data/data.json',
                type:'get',
                success:function (res) {
                    var html = '';
                    for(var i =0; i<res.length ;i++){
                        html += ` <li>
                <div class="good-img">
                    <span class="add-to-shop" title="${i}">关注</span>
                    <img src=${res[i].img} alt="图片正在加载">
                </div>
                <div class="title">
                        <span class="label">[店铺促销]</span>
                        <span class="label">[团购]</span>
                        ${res[i].title}
                </div>
                <p>${res[i].price}</p>
                <div class="volume">
                    <span>销量数<em>${res[i].num}</em></span>
                    <span class="evaluation">评价数<em>${res[i].comments}</em></span>
                </div>
                <p class="shop-name">
                   ${res[i].shop_name}
                </p>

            </li>`;
                        $("#good-list").html(html);
                    }

                    var xml = '';
                    for(var i =0; i <=5 ;i++){

                        xml += ` <li>
                <div class="good-img">
                    <span>关注</span>
                    <img src=${res[i].img} alt="图片正在加载">
                </div>
                <div class="title">
                        <span class="label">[店铺促销]</span>
                        <span class="label">[团购]</span>
                        ${res[i].title}
                </div>
                <p>${res[i].price}</p>
                <div class="volume">
                    <span>销量数<em>${res[i].num}</em></span>
                    <span class="evaluation">评价数<em>${res[i].comments}</em></span>
                </div>
                <p class="shop-name">
                   ${res[i].shop_name}
                </p>

            </li>`;
                        $("#hot-list-con").html(xml);
                    }
                },
                error:function (re) {
                    console.log("fail");
                }

            });


            $("#good-list").on("click",".add-to-shop",function (event) {
               var id = $(this).attr('title');
               console.log(id);

                var first = $.cookie("goods") == null ? true : false;
                if(first){
                    //第一次添加，直接将cookie存储进去
                    $.cookie("goods", `[{id:${id},num:1}]`, {
                        expires: 7,
                        raw: true
                    });
                }else{
                    //2、判断之前是否添加过商品
                    var cookieStr = $.cookie("goods");
                    var arr = eval(cookieStr);  //eval(必须是外层是数组，元素是对象) 和 JSON.parse()
                    var same = false; //假设没有添加过
                    for(var i = 0; i < arr.length; i++){
                        if(arr[i].id == id){
                            //3、之前存储过数量+1
                            arr[i].num++;
                            same = true;
                            break;
                        }
                    }
                    if(!same){
                        //4、没有相同的
                        var obj = {id: id, num: 1};
                        arr.push(obj);
                    }
                    $.cookie("goods", JSON.stringify(arr), {
                        expires: 7,
                        raw: true
                    });
                }
                sc_car();
            });

            sc_car();
            function sc_car(){
                var sc_str = $.cookie("goods");
                if(sc_str){
                    var sc_arr = eval(sc_str);
                    var sum = 0;
                    for(var i = 0; i < sc_arr.length; i++){
                        sum += sc_arr[i].num;
                    }
                    $("#shop-nums").html(sum);
                }
            }
        })
    }

    function goodImgView() {
        $("#good-list").delegate('li', 'mouseover', function (event) {
            $(this).css({'box-shadow':'0 0 10px rgb(80,80,80)'});
            $(this).find(".add-to-shop").css("display","block");
        });

        $("#good-list").delegate('li', 'mouseout', function (event) {
            $(this).css({'box-shadow':'none',"border":'none'});
            $(this).find(".add-to-shop").css("display","none");
        });
    }
    
    function listShow() {
        $(function () {
            $("#nav-start").mouseover(function () {
                $(".nav-list-21").css("display","block");
            });

            $("#nav-start").mouseout(function () {
                $(".nav-list-21").css("display","none");
            })

            $(".nav-list-21").mouseover(function () {
                $(".nav-list-21").css("display","block");
            });

            $(".nav-list-21").mouseout(function () {
                $(".nav-list-21").css("display","none");
            })
        })
    }

    function amplification() {
        $(function () {
            $(".big-image").mouseover(function (e) {
                $('.block').css("display","block");
                $('.big-img-desc').css("display","block");
            });

            $(".big-image").mousemove(function (e) {
                var x = e.clientX;
                var y = e.clientY;

                var sX=$('.big-image').offset().left;
                var sY=$('.big-image').offset().top;

                var mx=x-sX;
                var my=y-sY;

                // 获取小框框的宽高
                var mw=$('.block').width()/2;
                var mh=$('.block').height()/2;

                $('.block').css({left:mx-mw+'px',top:my-mh+'px'});

                var lw=$('.block').position().left;
                var lh=$('.block').position().top;

                var maxW=$('.big-image').width()-$('.block').width();
                var maxH=$('.big-image').height()-$('.block').height();

                if(lw<=0){$('.block').css('left','0px');}
                // 右边界
                if(lw>=maxW){
                    $('.block').css('left',maxW+'px');
                }
                // 上边界
                if(lh<=0){$('.block').css('top','0px');}
                // 下边界
                if(lh>=maxH){
                    $('.block').css('top',maxH+'px');
                }

                var lw=$('.block').position().left;
                var lh=$('.block').position().top;
                // 计算鼠标在小图里的位置  *2.5计算大图移动的比例
                var newX=lw*2.5;
                var newY=lh*2.5;

                $('.big-img-desc img').css({left:-newX+'px',top:-newY+'px'});

            })

            $(".big-image").mouseout(function (e) {
                $('.block').css("display","none");
                $('.big-img-desc').css("display","none");
            });
        })
    }

    function changeImg() {
        $(function () {
            $(".img-list").delegate('li', 'click', function(event) {
                $(this).css({'box-shadow':'0 0 3px rgb(80,80,80)'});

            });
        })
    }
    
    function addshop() {
        $(function () {
            $.ajax({
                url:'/data/data.json',
                type:'get',
                success:function (res) {
                    var html = '';
                    var arr = [];
                    var totalPrice = 0;
                    var sc_arr = eval($.cookie("goods"));
                    if(sc_arr){
                        for(var i = 0; i < sc_arr.length; i++){
                            var index = sc_arr[i].id;
                            var num = sc_arr[i].num;
                            var nun1 = parseInt(num);
                            var pri = parseFloat(res[sc_arr[i].id].price);
                            var price = Math.floor(pri);
                            var price1 = price*num;
                            totalPrice += price1;
                            html += `<tr rel="goods-order" id="cart_2950277${i}" istuan="0" class="cart" title="${i}">
                            <td colspan="2" class="s-infor">

                                <input name="cartId[]" value="2950277" item="item" rel="foritem" merchantid="194784" checked="" type="checkbox">
                                <!--新增对购物车已下架商品-->
                                <a href="http://www.zol.com/detail/cell_phone/huawei/30708986.html" class="pic" target="_blank"><img src="${res[sc_arr[i].id].img}" alt="【顺丰包邮 送壳膜】华为 nova 2S 全面屏 6GB运行 移动联通电信4G" width="80" height="80"></a>
                                <div class="inforbox">
                                    <h3 class="tit"><a href="http://www.zol.com/detail/cell_phone/huawei/30708986.html" title="【顺丰包邮 送壳膜】华为 nova 2S 全面屏 6GB运行 移动联通电信4G" target="_blank">${res[sc_arr[i].id].title}</a></h3>
                                    <div class="security clearfix">
                                        <a href="http://go.zol.com/topic/3056598.html" title="7天退换货" class="security-a" target="_blank"></a>
                                    </div>

                                    <p>颜色：曜石黑行货64GB</p>
                                    <div class="info-con">
                                        <span>套装：官方标配</span>
                                    </div>

                                </div>
                            </td>
                            <td class="s-price ">
                                <em>${res[sc_arr[i].id].price}</em>

                            </td>
                            <td class="s-amount ">
                                <div class="buy-num">

                                    <a class="minus" id="a${i}" href="#" title="减一" >-</a>
                                    <input autocomplete="off" class="text-amount" value="${num}"   type="text">
                                    <a class="plus" id="b${i}" href="#" title="加一" onclick='var num = $("#a0").val();num = parseInt(num)+1;$('#a0').val(num);'>+</a>
                                    <div class="tips-2" id="#" style="display:none;"></div>

                                    <!--新增对购物车已下架商品-->
                                </div>
                            </td>
                            <td class="s-agio">
                                <div>−−</div>



                            </td>
                            <td class="s-total">
                                <em id="cartGoodsPcie_2950277">1669</em>
                            </td>
                            <td class="s-del">
                                <div class="s-delbox">
                                    <a href="javascript:void(0)" title="移入收藏夹" onclick="$.deleteCart({cartId:'2950277', deleteType:'collect'})">移入收藏夹</a>
                                    <a href="#"  class="de" title="${sc_arr[i].id}">删除</a>
                                
                                </div>
                            </td>
                        </tr>`;

                        }
                        $("#shopcar-list").append(html);

                    }
                    console.log(totalPrice);
                    $(".total-cart-price").html(totalPrice);

                },
                error:function (re) {
                    console.log("fail");
                }

            });

        })
    }

    function deleteShopGoods() {
        $(function () {
            $("body").delegate(".s-del","mouseover",function(){
                $(".de").click(function (event) {
                    var pa = $(this).parent().parent().parent();
                    pa.css('display','none');
                    var id = $(this).attr('title');
                    var cookieStr = $.cookie("goods");
                    var arr = eval(cookieStr);  //eval(必须是外层是数组，元素是对象) 和 JSON.parse()
                    for(var i = 0; i < arr.length; i++){
                        if(arr[i].id == id){
                            //3、之前存储过数量+1a
                            arr.splice(i,1);
                            console.log(i);
                            break;
                        }
                    }
                    $.cookie("goods", JSON.stringify(arr), {
                        expires: 7,
                        raw: true
                    });
                })
            });

            // $("body").delegate(".s-amount","mouseover",function(){
            //
            //     // $('.s-amount').on("click","#minus",function (event) {
            //     //     var num =  $(this).parent().find('.text-amount').val();
            //     //     alert("1");
            //     //     num = parseInt(num)-1;
            //     //     console.log(num);
            //     //     $(this).parent().find('.text-amount').val(num);
            //     // })
            //
            //     $('#01').click(function () {
            //         var num =  $(this).parent().find('.text-amount').val();
            //         $(this).parent().find('.text-amount').val(0);
            //         num = parseInt(num)-1;
            //         console.log(num);
            //         $(this).parent().find('.text-amount').val(num);
            //     });
            //
            //     $('#02').click(function () {
            //
            //         var num =  $(this).parent().find('.text-amount').val();
            //         alert(num);
            //         $(this).parent().find('.text-amount').val(0);
            //         num = parseInt(num)+1;
            //         console.log(num);
            //         $(this).parent().find('.text-amount').val(num);
            //     });
            //
            //
            //
            //
            //
            // });



        })
    }
    
    function ceshi() {
        $(function () {
            console.log("ceshi");
            $(".baidu").click(function () {
                console.log($("#password1").val());
            })

        })
    }
    return {
        register:register,
        login:login,
        addGoods:addGoods,
        goodImgView:goodImgView,
        listShow:listShow,
        amplification:amplification,
        addshop:addshop,
        deleteShopGoods:deleteShopGoods,
        ceshi:ceshi,
    }
});