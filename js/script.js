    let offset = 0;
const sliderTrack = document.querySelector('.sliderTrack');

document.querySelector('.btnNext').addEventListener('click', function () {
    offset = offset + 400;
    if (offset > 1200){
        offset = 0;
    }
    sliderTrack.style.left = -offset + 'px';
});
    document.querySelector('.btnPrev').addEventListener('click', function () {
        offset = offset - 400;
        if (offset < 0){
            offset = 1200;
        }
        sliderTrack.style.left = -offset + 'px';
    })



