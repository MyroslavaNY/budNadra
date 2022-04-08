function backToTop() {
    let button = $(`.back_to_top`);

    $(window).on('scroll', ()=>{
        if ($(this).scrollTop() >=50){
            button.fadeIn();
        }
        else {
            button.fadeOut();
        }
    });
    button.on('click', () =>{
        e.preventDefault();
        $('html').animate({scrollTop:e}, 1000);
    })
}
backToTop();
