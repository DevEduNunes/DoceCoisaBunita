//filtro portfolio
$('.filter-btn').on('click', function(){
    let type = $(this).attr('id');
    let boxes = $('.project-box');
    
    $('.main-btn').removeClass('active');
    $(this).addClass('active');

});