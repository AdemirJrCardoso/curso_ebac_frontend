$(document).ready(function() {
  $('#telefone').mask('(00) 00000-0000',{
    placeholder: '(00) 00000-0000'
  })
  $('#CPF').mask('000.000.000-00',{
    placeholder: '___.___.___-__'
  })
  $('#CEP').mask('00000-000',{
    placeholder: '00000-000'
  })

  $('form').validate({
    rules: {
      nome: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true
      },
      CPF: {
        required: true
      },
      endereco: {
        required: true
      },
      CEP: {
        required: true
      }
    },
    messages: {
      nome: 'Campo Obrigatório',
      email: 'Campo Obrigatório',
      telefone: 'Campo Obrigatório',
      CPF: 'Campo Obrigatório',
      endereco: 'Campo Obrigatório',
      CEP: 'Campo Obrigatório'
    }
  })
})