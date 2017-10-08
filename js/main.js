$(function(){
    $("#icon-resume div").addClass("div-hover");
    $("#icon-resume").addClass("li-hover");
    $("#icon-resume").click(function(){
        $("#content-works").css({display:"none"});
        $("#content-skill").css({display:"none"});
        $("#content-resume").css({display:"block"});
        $("#icon-works").removeClass("li-hover");
        $("#icon-skill").removeClass("li-hover");
        $("#icon-works div").removeClass("div-hover");
        $("#icon-skill div").removeClass("div-hover")});
    $("#icon-works").click(function(){
        $("#content-resume").css({display:"none"});
        $("#content-skill").css({display:"none"});
        $("#content-works").css({display:"block"});
        $("#icon-resume").removeClass("li-hover");
        $("#icon-skill").removeClass("li-hover");
        $("#icon-resume div").removeClass("div-hover");
        $("#icon-skill div").removeClass("div-hover")});
    $("#icon-skill").click(function(){
        $("#content-resume").css({display:"none"});
        $("#content-works").css({display:"none"});
        $("#content-skill").css({display:"block"});
        $("#icon-works").removeClass("li-hover");
        $("#icon-resume").removeClass("li-hover");
        $("#icon-works div").removeClass("div-hover");
        $("#icon-resume div").removeClass("div-hover")});
    $("#icon-resume").hover(function(){
        $(this).addClass("li-hover");
        $("#icon-resume div").addClass("div-hover")
    },function(){
        if($("#content-resume").css("display")=="none"){
            $(this).removeClass("li-hover");
            $("#icon-resume div").removeClass("div-hover")}});
    $("#icon-works").hover(function(){
        $(this).addClass("li-hover");
        $("#icon-works div").addClass("div-hover")
    },function(){
        if($("#content-works").css("display")=="none"){
            $(this).removeClass("li-hover");
            $("#icon-works div").removeClass("div-hover")
        }
    });
    $("#icon-skill").hover(function(){
        $(this).addClass("li-hover");
        $("#icon-skill div").addClass("div-hover")
    },function(){
        if($("#content-skill").css("display")=="none"){
            $(this).removeClass("li-hover");
            $("#icon-skill div").removeClass("div-hover")
        }
    });
    function c(){}
    function d(){}
    $("#jd").mouseenter(function(){
            $(".jd-mark").animate({top:13,height:500},300,function(){
                $(".jd-mark h4").html("仿京东2016新年首页");
                $(".jd-mark p").html("原生JS，DIV+CSS布局")
            })
    });
    $("#jd").mouseleave(function(){
        $(".jd-mark").animate({top:513,height:0},300,function(){
            $(".jd-mark h4").html("");
            $(".jd-mark p").html("")})
    });
    $("#intel").mouseenter(
        function(){$(".intel-mark").animate({top:13,height:500},300,function(){
            $(".intel-mark h4").html("仿因特尔官网首页");
            $(".intel-mark p").html("BootStrap,响应式布局")
        })
    });
    $("#intel").mouseleave(function(){
        $(".intel-mark").animate({top:513,height:0},300,function(){
            $(".intel-mark h4").html("");
            $(".intel-mark p").html("")})
    });
    $("#game").mouseenter(function(){
        $(".game-mark").animate({top:529,height:500},300,function(){
            $(".game-mark h4").html("仿2048游戏");
            $(".game-mark p").html("原生JS,面向对象编程")
        })
    });$("#game").mouseleave(function(){
        $(".game-mark").animate({top:1029,height:0},300,function(){
            $(".intel-mark h4").html("");
            $(".intel-mark p").html("")})
    });
    $("#p360").mouseenter(function(){
        $(".p360-mark").animate({top:529,height:500},300,function(){
            $(".p360-mark h4").html("仿360防丢卫士专题页");
            $(".p360-mark p").html("原生JS，DIV+CSS布局")
        })
    });
    $("#p360").mouseleave(function(){
        $(".p360-mark").animate({top:1029,height:0},300,function(){
            $(".p360-mark h4").html("");
            $(".p360-mark p").html("")
        })
    });
    $(".jd-mark").click(function(){
        window.open("works/jd/index.html")
    });
    $(".intel-mark").click(function(){
        window.open("works/intel/index.html")
    });
    $(".p360-mark").click(function(){
        window.open("works/p360/index.html")
    });
    $(".game-mark").click(function(){
        window.open("works/game/2048.html")
    })
});
$(function(){
    var d=document.querySelector("#bg-image");
    d.style.transition="transform 6s linear";
    d.style.transform="scale(1.2)rotate(3deg)";
    var c=["images/bg/1.jpg","images/bg/2.jpg","images/bg/3.jpg","images/bg/4.jpg","images/bg/5.jpg","images/bg/6.jpg","images/bg/home-bg.jpg"];
    var a=1;
    var e;
    function b(){
        var f=document.querySelector("#bg-image img");
        d.style.transform="scale(1)rotate(0deg)";
        d.style.transition="transform 5s linear";
        $(f).fadeOut(5000,function(){
            f.src=c[a];
            $(f).fadeIn(3000,function(){
                d.style.transition="transform 6s linear";
                d.style.transform="scale(1.2)rotate(3deg)"
            });
            d.style.transition="transform 5s linear";
            d.style.transform="scale(1)rotate(0deg)";
            if(a==c.length-1){
                a=0
            }
            else{
                a++
            }
        })
    }
    e=window.setInterval(b,15000)
});