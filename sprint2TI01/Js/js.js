
const formulario = document.getElementById("formulario-produto");

if (formulario){
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const titulo = document.getElementById("titulo_produto").value;
        const descricao = document.getElementById("descricao_produto").value;
        
        const produto = {
            titulo : titulo,
            descricao : descricao
        };
        
        // Armazena os dados do formulário no localStorage
        localStorage.setItem("dadosFormulario", JSON.stringify(produto));
        
        // Limpa os campos do formulário
        formulario.reset();
        
        alert("Dados do formulário foram salvos com sucesso!");
        window.location.href = "produtoArtista.html";
    });
}

function pegaValor(){
    var dadosProduto = JSON.parse(localStorage.getItem("dadosFormulario")); // Recupera o valor do localStorage

    if (dadosProduto) {
        document.getElementById("titulo_pagina_produto").textContent =  dadosProduto.titulo;
        document.getElementById("descricao_pagina_produto").textContent = dadosProduto.descricao;
    } else {
        document.getElementById("nameDisplay").textContent = "Nenhum nome encontrado.";
    }

}

function criaCategoria(){
    const formulario = document.getElementById("formulario-categoria");

    if (formulario){
        formulario.addEventListener("submit", function(e) {
            e.preventDefault();
        
            const nome = document.getElementById("nome_categoria").value;
        
            const categoria = {
                nome : nome
            };
        
            localStorage.setItem("dadosFormulario", JSON.stringify(categoria));
        
        
            formulario.reset();
        
            alert("Dados do formulário foram salvos com sucesso!");


            var divOriginal = document.getElementById("botao_og");
            var divClonada = divOriginal.cloneNode(true);
      
            var textoLocalStorage = localStorage.getItem("dadosFormulario"); 
      
            divClonada.textContent = textoLocalStorage;
      
            document.body.appendChild(divClonada);
    });
}
}