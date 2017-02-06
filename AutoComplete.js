/**
 * Created by 良敏 on 2017/2/6.
 */
$(document).ready(function () {
    var autotags=["xlm","html","css","javascript"];
    $("#tags").autocomplete({
        source:autotags
    });
});