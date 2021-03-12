jQuery(document).ready(function ($) {

    // APP NAME
    console.log('%c Slider Navigation Menu', 'font-size: 14px;');



    // SLIDER FULL SCREEN
    $("#fullScreenSlider").owlCarousel({
        items: 1,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        responsiveClass: true,
        dots: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn"
    });

    var owl = $(".owl-carousel");
    owl.owlCarousel();

    // Go to the next item
    $(".has-children-slider").children("a").on("click", function (event) {
        owl.trigger("next.owl.carousel");
    });

    // Go to the previous item
    $(".go-back-slider").children("a").on("click", function () {
        owl.trigger("prev.owl.carousel");
    });


    
    // SLIDER MENU
    $(".has-children-slider").children("a").on("click", function (event) {

        event.preventDefault();

        const hem = $(this);

        if (hem.next("ul").hasClass("sub-menu")) {
            hem
                .addClass("selected")
                .next("ul")
                .removeClass("sub-menu")
                .end()
                .parent(".has-children-slider")
                .parent("ul")
                .addClass("moves-out");
            hem
                .parent(".has-children-slider")
                .siblings(".has-children-slider")
                .children("ul")
                .addClass("sub-menu")
                .end()
                .children("a")
                .removeClass("selected");
        } else {
            hem
                .removeClass("selected")
                .next("ul")
                .addClass("sub-menu")
                .end()
                .parent(".has-children-slider")
                .parent("ul")
                .removeClass("moves-out");
        }
    });

    // Submenu items - go back url/link
    $(".go-back-slider").on("click", function () {
        $(this)
            .parent("ul")
            .addClass("sub-menu")
            .parent(".has-children-slider")
            .parent("ul")
            .removeClass("moves-out");
    });

}); // END JQ Ready