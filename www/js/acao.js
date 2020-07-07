// This is a JavaScript file

$(function(){
  $("#buscar").click(function(){
    var cep = $("#cep").val();
    $.ajax({
      type: "POST",
      url: `https://viacep.com.br/ws/${cep}/json/`,
      success: function(retorno){
        var conteudo = `\
        <p><b>Logradouro: </b>${retorno.logradouro}</p>
        <p><b>Bairro: </b>${retorno.bairro}</p>
        <p><b>Cidade: </b>${retorno.localidade}</p>
        <p><b>Estado: </b>${retorno.uf}</p>`;
        $("#dados").append(conteudo);
      },
      error: function(){
        alert("Deu ruim!");
      }
    })
  })
})
