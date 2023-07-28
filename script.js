$(document).ready(function() {
    $('form').on('submit', function (e) {
        e.preventDefault()
        const listaTarefas = $('ul')
        const novaTarefa = $('#tarefa').val()
        const addTarefa = $(`<li>${novaTarefa}</li>`)
        addTarefa.appendTo(listaTarefas)
        $('#tarefa').val('')

        $('li').click(function(){
            $(this).addClass('riscado')
        })
    })

})