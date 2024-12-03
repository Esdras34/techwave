
document.getElementById("login-btn").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    
    errorMessage.style.display = "none";
    errorMessage.textContent = "";

    
    if (!email || !password) {
        errorMessage.textContent = "Por favor, preencha todos os campos.";
        errorMessage.style.display = "block";
        return;
    }

    
    if (email === "esdras@fatec.com" && password === "victor123") {
        alert("Login bem-sucedido!");
    
        window.location.href = "index.html";
    } else {
        errorMessage.textContent = "Email ou senha incorretos.";
        errorMessage.style.display = "block";
    }

     
    

});
$(document).ready(function () {
    $('#sair').click(function (event) {
      event.preventDefault(); // Impede o envio do formulário
      alert("Compra Finalizada");

        window.location.href = "produtos.html"; // Redireciona para outra página
   
    });
  });
  function limpa_formulário_cep() {
    document.getElementById('rua').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('uf').value = "";
    document.getElementById('ibge').value = "";
  }

  function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
      document.getElementById('rua').value = conteudo.logradouro;
      document.getElementById('bairro').value = conteudo.bairro;
      document.getElementById('cidade').value = conteudo.localidade;
      document.getElementById('uf').value = conteudo.uf;
      document.getElementById('ibge').value = conteudo.ibge;
    } else {
      limpa_formulário_cep();
      alert("CEP não encontrado.");
    }
  }

  function pesquisacep(valor) {
    var cep = valor.replace(/\D/g, '');
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        document.getElementById('rua').value = "...";
        document.getElementById('bairro').value = "...";
        document.getElementById('cidade').value = "...";
        document.getElementById('uf').value = "...";
        var script = document.createElement('script');
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
        document.body.appendChild(script);
      } else {
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
      }
    } else {
      limpa_formulário_cep();
    }
  }

