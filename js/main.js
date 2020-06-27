//alert("funcionou");

function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/"+cep+"/json/"
    console.log(url);
    $.ajax({
        url: url,
        type:"GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);//outra forma de fazer no ajax
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP: " + response.cep);
            $(".cep").show();
            $(".barra-progresso").hide();
            //document.getElementById("logradouro").innerHTML = response.logradouro;
        }
    })
}
$(function (){
    $(".cep").hide();
    $(".barra-progresso").hide();
    
});
