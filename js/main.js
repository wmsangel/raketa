$(document).ready(function(){

    // Main slider
    if ($('.main-slider').length) {
        $('.main-slider').slick({
            infinite: true,
            dots: true,
            speed: 300,
            autoplay: true,
            arrows: false
        });
    }


    // Brands slider

    if ($('.brands-list').length) {
        $('.brands-list').slick({
            infinite: true,
            speed: 600,
            autoplay: true,
            arrows: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            nextArrow: '<div class="brands-list__arrow next"></div>',
            prevArrow: '<div class="brands-list__arrow prev"></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]

        });
    }


    // Open MAIN catalog menu
    $('.catalog-menu-js').on('click', function(){
        $(this).find('.icon-arrow').toggleClass('down up');
        $(this).toggleClass('active');
        $('.catalog-menu-list').toggleClass('active');
    });


    // Mobile menu
    $('.mobile-menu').on('click', function(){
        $('.overlay, .mobile-menu__close').toggle();
        $('body').toggleClass('fixed');
        $('nav').toggleClass('active');
    });


    // Mobile menu close
    $('.mobile-menu__close, .overlay').on('click', function(){
        $('.overlay, .mobile-menu__close').toggle();
        $('body').toggleClass('fixed');
        $('nav').toggleClass('active');
    });


    // Price range
    if ($('#price-range').length) {
        $(function() {
            $('#price-range').slider({
                range: true,
                min: 0,
                max: 30000,
                values: [ 3000, 10000 ],
                slide: function( event, ui ) {
                    $('#amount').val("от  " + ui.values[ 0 ] + "  до  " + ui.values[ 1 ] );
                }
            });
            $('#amount').val("от  " + $('#price-range').slider('values', 0 ) +
                '  до  ' + $('#price-range').slider('values', 1 ));
        });
    }


    // Accordion Category
    if ($('#category-list').length) {
        $(function () {
            $('#category-list').accordion({
                collapsible: true
            });
        });
    }


    // Accordion Category
    if ($('#faq-list').length) {
        $(function () {
            $('#faq-list').accordion({
                collapsible: true
            });
        });
    }


    // Tabs on product page
    if ($('#product-page-tabs').length) {
        $( function() {
            $('#product-page-tabs').tabs();
        } );
    }


    // QTY
    var qty;
    $('.qty-plus').on('click', function(){
        qty = $(this).prev('input.qty-value').val();
        qty++;
        $(this).prev('input.qty-value').val(qty);
    });
    $('.qty-minus').on('click', function(){
        qty = $(this).next('input.qty-value').val();
        if (qty != '1') {
            qty--;
            $(this).next('input.qty-value').val(qty);
        }
    });


    // Cart remove
    $('.cart-page__table-action--remove').on('click', function () {
        $(this).parents('.cart-page__table-list').remove();

        if ($('.cart-page__table-list').length == '1') {
            $('.cart-page__empty').show();
            $('.cart-page__table').hide();
        }
    });


    // Change view mode
    $('.js__products-view-tile').on('click', function(){
        if (!$(this).parent('li').hasClass('active')) {
            $('li.active').removeClass('active');
            $(this).parent('li').addClass('active');
            $('.products-list').removeClass('products-list--list').addClass('products-list--tile')
        }
    });
    $('.js__products-view-list').on('click', function(){
        if (!$(this).parent('li').hasClass('active')) {
            $('li.active').removeClass('active');
            $(this).parent('li').addClass('active');
            $('.products-list').removeClass('products-list--tile').addClass('products-list--list')
        }
    });


    // Change sort
    if ($(window).width() < 769) {
        $('.js__change-sort a').on('click', function(e){
            e.preventDefault();
        });

        $('.js__change-sort').on('click', function(){
            $('.products-sort__mobile').toggle();
        })
    }


    // Open Filter
    $('.js__product-filter').on('click', function(){
        $('.product-list-page__left').toggle();
    })





});
