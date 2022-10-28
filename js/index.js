$(function () {
    //生成器 //目标地址 
    function spanSheng(origin, father) {
        var len = origin.length / 3,
            arr = [];
        for (var i = 0; i < len; i++) {
            (function (i) {
                var span = document.createElement("span");
                arr.push(span)
            }(i))
        }
        $(arr[0]).addClass("active")
        father.append(arr)

    }
    spanSheng($(".peoplelunbox"), $(".lunboanniu"))


    $(function (anniu, lun, active) {
        var len = anniu.length,
            index = 0;
        var timer = setInterval(function () {
            index++;
            anniu.removeClass();
            $(anniu[index]).addClass(active);
            lun.css({ marginLeft: - index * 1300 + "px" });
            if (index >= len) {
                index = 0;
                anniu.removeClass();
                $(anniu[index]).addClass(active)
                lun.css({ marginLeft: - index * 1300 + "px" });
            }
        }, 5000)
        for (var i = 0; i < len; i++) {
            (function (i) {
                $(anniu[i]).on("click", function () {
                    anniu.removeClass();
                    $(this).addClass("active");
                    lun.css({ marginLeft: - i * 1300 + "px" });
                    index = i;
                })
            }(i))
        }
    }($(".lunboanniu span"), $(".peoplelun"), ("active")))


    $(function (Node,father) {

            Node.on("click", function () {
                $(this.children).css({ display: "block" });
    }).on(" mouseleave",function(){
        $(this.children).css({ display: "none" });
    })
   
    }($('.xiala'),$(".contbox")))
})