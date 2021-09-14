$(function () {

    let p = 16;
    let y = 144;
    let isYear = false;
    $('#range').on("input", function() {
        $('.output').val(this.value + "K");
        if ($(".output").val() === "1000K") {
            $('.output').val("1M");
        }
        $("#pageviews").text($('.output').val() + " Pageviews");

        let val = $(".output").val().slice(0,-1);
        if (val >= 10 && val < 50) {
            p = 8; 
        } else if (val >= 50 && val < 100) {
            p = 12;
        } else if (val >= 100 && val < 500) {
            p = 16;
        } else if (val >= 500 && val <= 999) {
            p = 24;
        } else if (val == 1) {
            p = 36;
        }

        y = (p * 12) - ((p * 12) * 0.25);
        if (isYear === false) {
            $("#price").text("$" + p + ".00");
        } else {
            $("#price").text("$" + y + ".00");
        }

        if (val == 1) {
            $("input[type=range]").css({
                "background": "linear-gradient(90deg, #78ebdc 100%, #d0d8ed 0%)",
            });
        } else {
            $("input[type=range]").css({
                "background": "linear-gradient(90deg, #78ebdc " + (val * 0.1) + "%, #d0d8ed 0%)",
            });
        }

    }).trigger("change");

    let switchClicks = 0;
    $("#switch").click(function () {
        if (switchClicks % 2 === 0) {
            isYear = true;
            $("#circle").animate({left: "+=55%"}, 200);
            $("#months").text("/ year");
            $("#price").text("$" + y + ".00");
        } else {
            isYear = false;
            $("#circle").animate({left: "-=55%"}, 200);
            $("#months").text("/ month");
            $("#price").text("$" + p + ".00");
        }

        switchClicks++;
    });

    if (window.matchMedia("(max-width: 772px)").matches) {
        $("#discount").text("-25%");
    }

});