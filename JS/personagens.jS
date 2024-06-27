var dadosJson = {
    "personagens": [
        {
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1a4cCaMPukriQISeuaaGcLMN9KoGYx5FLQQ&s",
            "nome": "Kenny McCormick",
            "apelido": "Mysterion",
            "idade": "10 anos",
            "personalidade": "Silencioso, muitas vezes incompreensível devido à sua capa laranja que cobre sua boca, mas geralmente gentil e amigável"
        },
        {
            "img": "https://southparkshop.ca/cdn/shop/files/kyleOverlay_256x256_crop_center_d6f44373-a1bf-4678-b36d-1f1ddab805af_1980x.png?v=1630526317",
            "nome": "Kyle Broflovski",
            "apelido": "The Lonely Jew on Christmas",
            "idade": "10 anos",
            "personalidade": "Inteligente, moralista, frequentemente irritado, mas com um grande coração"
        },
        {
            "img": "https://southparkshop.ca/cdn/shop/files/stanOverlay_256x256_crop_center_39b1a5ec-6125-413f-acc0-f73936e9e096_1980x.png?v=1630526586",
            "nome": "Stan Marsh",
            "apelido": "Toolshed",
            "idade": "10 anos",
            "personalidade": "Normalmente o mais sensato do grupo, embora possa ser influenciado pelos caprichos de seus amigos, especialmente de Cartman"
        },
        {
            "img": "https://i0.wp.com/www.adiumxtras.com/images/pictures/eric_cartman_1_15136_5652_image_8141.png",
            "nome": "Eric Cartman",
            "apelido": "The Coon",
            "idade": "10 anos",
            "personalidade": "Manipulador, egocêntrico, preconceituoso e muitas vezes cruel, mas também hilário em sua malícia"
        },
    ]
};

function exibirPersonagens() {
    var container = document.getElementById("personagens-container");

    container.innerHTML = "";
    dadosJson.personagens.forEach(function(personagem) {
        var divPersonagem = document.createElement("div");
        divPersonagem.classList.add("personagem");

        var img = document.createElement("img");
        img.src = personagem.img;

        var nome = document.createElement("h2");
        nome.textContent = personagem.nome;

        var apelido = document.createElement("p");
        apelido.textContent = "Apelido: " + personagem.apelido;

        var idade = document.createElement("p");
        idade.textContent = "Idade: " + personagem.idade;

        var personalidade = document.createElement("p");
        personalidade.textContent = "Personalidade: " + personagem.personalidade;

function redirecionarParaOutraPagina(url) {
window.location.href = url;
}

var verMaisButton = document.createElement("button");
verMaisButton.textContent = "Ver Mais Imagens";

if (personagem.nome === "Kenny McCormick") {
verMaisButton.onclick = function() {
redirecionarParaOutraPagina("html/KennyMcCormick.html");
};
} else if (personagem.nome === "Kyle Broflovski") {
verMaisButton.onclick = function() {
redirecionarParaOutraPagina("html/KyleBroflovski.html");
};
} else if (personagem.nome === "Eric Cartman") {
verMaisButton.onclick = function() {
redirecionarParaOutraPagina("html/EricCartman.html");
};
} else if (personagem.nome === "Stan Marsh") {
verMaisButton.onclick = function() {
redirecionarParaOutraPagina("html/StanMarsh.html");
};
}
        divPersonagem.appendChild(img);
        divPersonagem.appendChild(nome);
        divPersonagem.appendChild(apelido);
        divPersonagem.appendChild(idade);
        divPersonagem.appendChild(personalidade);
        divPersonagem.appendChild(verMaisButton);
        container.appendChild(divPersonagem);
    });
}
window.onload = exibirPersonagens;