$('.accordion-item').on('click', function(e){
    const children = e.currentTarget.children;
    $(children[1]).slideToggle(500);
 })    