$(document).ready(function(){
    $(".btn").click(function(){
        var filter = $(this).data("filter");
        $(".gallery > div").hide();
        if (filter === "all") {
            $(".gallery > div").show();
        } else {
            $("#gallery-nature" + filter).hide();
        }
    });
});
