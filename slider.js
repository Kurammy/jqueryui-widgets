/**
 * Created by 良敏 on 2017/2/6.
 */

var valueSpan,slider;
$(document).ready(function () {
    // $("#slider").slider();
    slider = $("#slider");
    valueSpan = $("#span");

    // slider.slider({
    //     change:function (event,ui) {
    //         valueSpan.text(slider.slider("option","value"));
    //     }
    // })
    
    slider.slider({
        slide:function (event,ui) {
            valueSpan.text(slider.slider("option","value"));
        }
        })
});