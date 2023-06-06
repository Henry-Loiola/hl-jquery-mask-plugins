$(document).ready(function() {

    $('#telefone').mask('(00) 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');


    $('#cadastroForm').submit(function(event) {
        event.preventDefault();

    var nomeCompleto = $('#nomeCompleto').val();
    var email = $('#email').val();
    var telefone = $('#telefone').val();
    var cpf = $('#cpf').val();
    var endereco = $('#endereco').val();
    var cep = $('#cep').val();


    $('#nomeCompleto').val('');
    $('#email').val('');
    $('#telefone').val('');
    $('#cpf').val('');
    $('#endereco').val('');
    $('#cep').val('');
    });
});
