$('#button').click(function(){
    let box = $('#box');
    box.animate({height: '100px', width: '100px', left: '100px'}, 3000, function()
    {box.animate({backgroundColor: 'blue'}, 5000, function(){
        const newH2 = $('<h2>Animacja zakończona</h2>');
        box.prepend(newH2);
    });
    });
    
    
})