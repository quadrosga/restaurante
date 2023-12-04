$(document).ready(function() {
    $('#tel').mask('(00) 00000-0000');

    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: false,
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: {
                required: 'Por favor, insira seu nome.'
            },
            email: {
                required: 'Por favor insira seu e-mail.',
                email: 'Por favor, insira um e-mail válido'
            },
            tel: {
                
            },
            mensagem: {
                required: 'Por favor, insira sua mensagem.'
            }
        },
        errorElement: 'div',
        errorPlacement: function(error, element) {
            error.addClass('invalid-feedback');
            element.closest('.mb-3').append(error);
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass('is-invalid').removeClass('is-valid');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass('is-invalid').addClass('is-valid');
        }
    });
});
