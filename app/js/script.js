$(document).ready(function() {

// custom select >> manual >> https://formstone.it/components/dropdown/
    $( '#slider_dropdown' ).dropdown({
        label: 'select one',
        customClass: 'slider_desc_buttons_dropdown'
    });


// slider
    $('.slider_img_box').owlCarousel({
        items: 1,
        // loop: true,
        margin: 10,
        nav: false,
        URLhashListener: true,
        startPosition: 'URLHash',
        // autoHeight: true,
        // autoWidth:true,
        responsive: false
    })

// mobile menu
     $('.top_menu_button').on('click', function() {
         $('.top_menu_mobile').show();
     });
     $('.top_menu_close').on('click', function() {
         $('.top_menu_mobile').hide();
     });

});
