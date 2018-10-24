define(['jquery'],function ($) {
    function select(){
        $(function () {
            $('#map-index').mouseover(function () {
                $('#map-index').css("border-bottom",'0');
                $(".city-list").css('display','block');
                $(".space").css("display","block")
            });

            $('.city-list').mouseover(function () {
                $('#map-index').css("border-bottom",'0');
                $(".city-list").css('display','block');
                $(".space").css("display","block")
            });

            $('.space').mouseover(function () {
                $('#map-index').css("border-bottom",'0');
                $(".city-list").css('display','block');
                $(".space").css("display","block")
            });

            $('#map-index').mouseout(function () {
                $('#map-index').css("border-bottom",'1px solid #e6e6e6');
                $(".city-list").css('display','none');
                $(".space").css("display","none");
            });

            $('.city-list').mouseout(function () {
                $('#map-index').css("border-bottom",'1px solid #e6e6e6');
                $(".city-list").css('display','none');
                $(".space").css("display","none");
            });

            $('.space').mouseout(function () {
                $('#map-index').css("border-bottom",'1px solid #e6e6e6');
                $(".city-list").css('display','none');
                $(".space").css("display","none");
            })
        })
    }
    function headershow1() {
        $(function () {


            $('#buyer-center').mouseover(function () {
                $('#buyer-center').css("background-color",'#fff');
                $("#buyer-center-con").css("display","block");

                $("#buyer-center-con").delegate('li','mouseover',function (event) {
                    $(this).css('color', 'red');
                });

                $("#buyer-center-con").delegate('li','mouseout',function (event) {
                    $(this).css('color', '#333');
                });
            });

            $('#buyer-center').mouseout(function(){
                $('#buyer-center').css("background-color",'#f5f5f5');
                $("#buyer-center-con").css("display","none");
            });

            $('#buyer-center-con').mouseover(function () {

                $("#buyer-center-con").delegate('li','mouseover',function (event) {
                    $(this).css('color', 'red');
                });

                $("#buyer-center-con").delegate('li','mouseout',function (event) {
                    $(this).css('color', '#333');
                });

                $('#buyer-center').css("background-color",'#fff');
                $("#buyer-center-con").css("display","block");
            });

            $('#buyer-center-con').mouseout(function(){
                $('#buyer-center').css("background-color",'#f5f5f5');
                $("#buyer-center-con").css("display","none");
            });
        })
    }
    function show2() {
        $(function () {
            $('#iphone1').mouseover(function () {
                $('#iphone1').css("background-color",'#fff');
                $("#mobile-bd").css("display","block");
            });

            $('#iphone1').mouseout(function(){
                $('#iphone1').css("background-color",'#f5f5f5');
                $("#mobile-bd").css("display","none");
            });

            $('#mobile-bd').mouseover(function () {
                $('#iphone1').css("background-color",'#fff');
                $("#mobile-bd").css("display","block");
            });

            $('#mobile-bd').mouseout(function(){
                $('#iphone1').css("background-color",'#f5f5f5');
                $("#mobile-bd").css("display","none");

            });
        })
    }
    // function banner() {
    //     $(document).ready(function(){  
    //         $('.flexslider').flexslider({  
    //             directionNav: true,  
    //             pauseOnAction: false  
    //      });  
    // });  
    // }
    function banner2() {
        $(function () {
            var timer = null;
            var iNow = 0;

            timer = setInterval(function () {
                iNow++;
                $("#img-list").animate({left: iNow * -594},function () {
                    if(iNow >= 2){
                        iNow = 0;
                        $("#img-list").css('left','0');
                    }
                });
            },2000)
        })
    }
    function add() {
        $(function () {
            var data = {};
            data.img = "https://mercrt-fd.zol-img.com.cn/g5/M00/0D/04/ChMkJ1u7FnSIRiN1AABmRFP64MEAAsWFQN29MgAAGZc175.jpg";
            data.name = "华为 P20 64GB";
            data.price = "2008";
            data.time = "11天13小时57分10秒";
            data.shopprice = "2099.00";
            var html = "";
            for(var i=0;i<6;i++) {

                html +=`<li>
                           <div class="img-item">
                               <a>
                                   <img src="${data.img}">
                               </a>
                               <div class="img-desc">
                                   <p>${data.shopprice}</p>
                                   <div class="item-list">
                                       <a class="img-i" href="#">测评</a><span>|</span>
                                       <a class="img-i" href="#">视频</a><span>|</span>
                                       <a class="img-i" href="#">点评</a>
                                   </div>
    
                               </div>
                           </div>
                           <div class="item-desc">
                               <h1>${data.name}</h1>
                               <h2>￥${data.price}</h2>
                               <p>剩余：${data.time}</p>
                           </div>
                       </li>`;
            }
    
            $('.turn_ware-list').html(html);
        })
    }
    function show() {
        $(function () {
            $(".img-item").hover(function(){
                $(".img-desc").animate({"top":"128px"});
            },function(){
                $(".img-desc").animate({"top":"180px"});
            });
        })
    }
    function show3() {
        $(function () {
            $(window).scroll(function () {
               if($(window).scrollTop() >=600){
                   $("#con-nav-index").css("display","block")
               }else {
                   $("#con-nav-index").css("display","none")
               }
            })
        })
    }
    function show4() {
        $(function () {
            var index = null;
            $(".zc-toolbar-tabbar").delegate('i', 'mouseover', function(event) {
                $(this).css('backgroundColor','#ec3639');
                index = parseInt($(this).index())+1;
                $(`.p${index}`).stop().animate({'right':"37px"})

            });

            $(".zc-toolbar-tabbar").delegate('i', 'mouseout', function(event) {
                $(this).css('backgroundColor','#2d2d2d');
                $(`.p${index}`).stop().animate({'right':"-70px"});
            });
        })
    }
    function addListItems() {
        $(function () {
            var data = {};
            var arrImg = [
                "https://mercrt-fd.zol-img.com.cn/g5/M00/04/0A/ChMkJlngYZiIViJ_AABfbfycT5IAAhNigCrnVgAAF-F050.jpg",
                "https://mercrt-fd.zol-img.com.cn/g5/M00/0C/05/ChMkJ1p5VryIBoQ7AABckDBEB1sAAksGAAXwLIAAFyo173.jpg",
                "https://mercrt-fd.zol-img.com.cn/g5/M00/05/0F/ChMkJlpmo2eIUBQ1AAB5VQgAneUAAkShAJEIfMAAHlt073.jpg",
                "https://mercrt-fd.zol-img.com.cn/g5/M00/04/0A/ChMkJlngYZiIViJ_AABfbfycT5IAAhNigCrnVgAAF-F050.jpg",
                "https://mercrt-fd.zol-img.com.cn/g5/M00/0C/05/ChMkJ1p5VryIBoQ7AABckDBEB1sAAksGAAXwLIAAFyo173.jpg",
                "https://mercrt-fd.zol-img.com.cn/g5/M00/05/0F/ChMkJlpmo2eIUBQ1AAB5VQgAneUAAkShAJEIfMAAHlt073.jpg",
            ];

            data.img = "https://mercrt-fd.zol-img.com.cn/g5/M00/04/0A/ChMkJlngYZiIViJ_AABfbfycT5IAAhNigCrnVgAAF-F050.jpg",
            data.arr = ['手机', '移动电源', '蓝牙耳机', '手机贴膜', '保护套', '数据线', '充电器', '手机维修'];
            var index = 0;
            $("#nav-list5").delegate('li', 'mouseover', function (event) {
                $(this).css({'backgroundColor':'#fff',"color":'#333'});
                $("#nav-list-desc").css("display","block");
                index = $(this).index();
                var html = '';
                for(var i=0;i<data.arr.length;i++){
                    html +=`<li>${data.arr[i]}</li>`
                }
                $("#list-items").html(html);
                var image =`<img src='${arrImg[index]}'>` ;
                if($("#nav-list-desc img").length <= 0){
                    $("#nav-list-desc").append(image);
                }

            });

            $("#nav-list5").delegate('li', 'mouseout', function (event) {
                $(this).css({'backgroundColor':'#454545',"color":'#fff'});
                $("#nav-list-desc").css("display","none");
                $("#nav-list-desc").find("img").remove();

            });

            $("#nav-list-desc").mouseover(function () {
                $("#nav-list-desc").css("display","block");
                var image =`<img src='${arrImg[index]}'>` ;
                if($("#nav-list-desc img").length <= 0){
                    $("#nav-list-desc").append(image);

                }
                $("#nav-list5").find("li").css({'backgroundColor':'#454545',"color":'#fff'});
                $("#nav-list5").find("li").eq(index).css({'backgroundColor':'#fff',"color":'#333'})

            })

            $("#nav-list-desc").mouseout(function () {
                $("#nav-list-desc").css("display","none");
                $("#nav-list5").find("li").css({'backgroundColor':'#454545',"color":'#fff'});

            })
        })
    }
    function addIconImg() {
        $(function () {
            arr=[
                "https://mercrt-fd.zol-img.com.cn/g5/M00/06/0A/ChMkJ1rEMWeIM-CvAAAJAPAL8JMAAnVRgF9U78AAAkY401.jpg",
                "https://mercrt-fd.zol-img.com.cn/g5/M00/06/0A/ChMkJ1rEMZGIccKEAAAGPaa-qUkAAnVRgLOLd4AAAZV657.jpg",
                "https://mercrt-fd.zol-img.com.cn/g5/M00/06/0A/ChMkJ1rEMdKIfrYnAAAIyarug4YAAnVQwO-H8gAAAjh260.jpg",
                "https://mercrt-fd.zol-img.com.cn/g5/M00/06/0A/ChMkJ1rEMfGIetyiAAAJCt3hn6sAAnVRQI3EMQAAAki940.jpg",
                "https://mercrt-fd.zol-img.com.cn/g5/M00/06/0A/ChMkJ1rEMWeIM-CvAAAJAPAL8JMAAnVRgF9U78AAAkY401.jpg",
                "https://mercrt-fd.zol-img.com.cn/g5/M00/06/0A/ChMkJ1rEMZGIccKEAAAGPaa-qUkAAnVRgLOLd4AAAZV657.jpg",
                "https://mercrt-fd.zol-img.com.cn/g5/M00/06/0A/ChMkJ1rEMdKIfrYnAAAIyarug4YAAnVQwO-H8gAAAjh260.jpg",
                "https://mercrt-fd.zol-img.com.cn/g5/M00/06/0A/ChMkJ1rEMfGIetyiAAAJCt3hn6sAAnVRQI3EMQAAAki940.jpg"
            ]
            var html = '';
            for(var i=0;i<arr.length;i++){
                html += `<li><img src="${arr[i]}"></li>`;
                
            }
            $(".icon-list").html(html);
        })
    }
    function show5() {
        $(function () {
            $(function () {
                var timer = null;
                var iNow = 0;
                var oBtns = $("#flex-list").find("li");

                oBtns.click(function(){
                    iNow = $(this).index();
                    tab();
                });
                timer  = setInterval(timerInner,2000);


                function timerInner(){
                    iNow++;
                    tab();
                }

                function tab(){
                    //1、先让当前被点击的按钮active
                    $(".flex-list").find('li').css("backgroundColor","#fff");
                    var index = null;
                    if(iNow >=3){
                        index = 0;
                        $(".flex-list").find('li').eq(index).css("backgroundColor","#333");
                    }else {
                        index = iNow;
                        $(".flex-list").find('li').eq(index).css("backgroundColor","#333");
                    }

                    //最后一张图片，active的按钮也是下标0

                    //2、切换图片
                    $(".slides").animate({left: iNow * -1445},function () {

                        if(iNow >= 3){
                            iNow = 0;
                            $(".slides").css('left','0');
                        }
                    });

                }

            })
        })

    }
    function show6() {
        $(function () {
            var index = 0;
            $("#header-list").delegate('li', 'click', function(event) {
                $("#header-list").find('li').css('borderBottom', '0');
                console.log($(this).index());
                index = parseInt($(this).index());
                $(".noopsyche-right-con").find('ul').css("display","none");
                $(".noopsyche-right-con").find('ul').eq(index).css("display","block");
                $(this).css('borderBottom', '3px solid #fff');
            });
        })
    }
    
    return {
        select:select,
        show2:show2,
        show4:show4,
        banner2:banner2,
        // banner:banner,
        add:add,
        show:show,
        addIconImg:addIconImg,
        headershow1:headershow1,
        addListItems:addListItems,
        show3:show3,
        show5:show5,
        show6:show6,
    }
});