var $grid = $(".grid").isotope({
    itemSelector: ".grid-item",
    percentPosition: !0,
    masonry: {
        columnWidth: ".grid-sizer"
    }
});

$grid.imagesLoaded().progress(function() {
    $grid.isotope("layout")
}), $(".filter-button-group").on("click", "button", function() {
    var i = $(this).attr("data-filter");
    $grid.isotope({
        filter: i
    })
});

$(function() {
    $(".grid-item").unveil(100)
});
 
