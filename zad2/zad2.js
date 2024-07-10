const paragrafy = $('.paragraf')
const opak = $('#opakowanie');
$('#buttonUp').click(function(){
    const paragrafy = $('.paragraf')
    let goUp = paragrafy.last();
    opak.prepend(goUp);
})
$('#buttonDown').click(function(){
    const paragrafy = $('.paragraf')
    let goDown = paragrafy.first();
    opak.append(goDown);

})