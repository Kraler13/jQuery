const wyplaty = $('.salary');
const sumaTxt = $('#sum');
const button = $('#count-sum');
$('#count-sum').click(function(){
    let suma = 0;
    wyplaty.each(function() {
        suma += parseFloat($(this).text());
    });
    sumaTxt.text(suma)
})
