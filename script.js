async function buscaEndereco(cep) { 
    var mensagemErro = document.getElementById ('erro')
    mensagemErro.innerHTML = "";
    try{
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConversao = await consultaCep.json();

        if (consultaCepConversao.erro){
            throw Error ('CEP não encontrado!');
        }
            var cidade = document.getElementById ('cidade');
            var logradouro = document.getElementById ('endereco')
            var estado = document.getElementById ('estado')

            cidade.value = consultaCepConversao.localidade;
            logradouro.value = consultaCepConversao.logradouro;
            estado.value = consultaCepConversao.uf;

        console.log(consultaCepConversao);
        return consultaCepConversao;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!`
        console.log(erro);
    }
}
 
var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

