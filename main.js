$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()
        const listadetarefa = $('#nometarefa').val()
        const novoitem = $('<li></li>')
        $(`<li>${listadetarefa}</li>`).appendTo(novoitem)
        $(novoitem).appendTo('ul')
        $("li").click(function(){
            $(this).addClass("risco")
        })
        $('#nometarefa').val("")
    })
    
})