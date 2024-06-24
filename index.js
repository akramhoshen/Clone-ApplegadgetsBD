// $(document).ready(function () {
var carouselWidth = $('.carousel-inner')[0].scrollWidth;
var cardWidth = $('.carousel-item').width();

var scrollPosition = 0;
$('carousel-control-next').on('click', function(){
    console.log('next');
    scrollPosition = scrollPosition + cardWidth;
        $('carousel-inner').animate({scrollLeft: scrollPosition}, 600)
    // if(scrollPosition < (carouselWidth - (cardWidth * 7))){
        
    // }
})

let x=0;
for(let i=0;i<3;i++){
    x+=1;
}
console.log(x);

