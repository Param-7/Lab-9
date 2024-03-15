
$(document).ready(function(){
    // Filter images based on category
    $(".btn").click(function(){
        var category = $(this).data('filter');
        if (category === 'all') {
            $("#gallery > div").show();
        } else {
            $("#gallery > div").hide();
            $("#gallery-" + category).show();
        }
    });

    // Lightbox functionality
    $("#gallery").on("click", "img", function(){
        var imgSrc = $(this).attr('src');
        $("#lightbox-overlay").fadeIn();
        $("#lightbox-content img").attr('src', imgSrc);
    });

    $("#lightbox-close").click(function(){
        $("#lightbox-overlay").fadeOut();
    });
});