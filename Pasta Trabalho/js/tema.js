
const botaoTema = document.createElement("button");

botaoTema.id = "botao-tema";
botaoTema.type = "button";
botaoTema.classList.add("botao-tema");

const temaSalvo = localStorage.getItem("tema");
const temaInicial = temaSalvo === "escuro" ? "escuro" : "claro";

document.documentElement.setAttribute("data-tema", temaInicial);

function atualizarBotaoTema() {
    const temaAtual = document.documentElement.getAttribute("data-tema");

    if (temaAtual === "escuro") {
        botaoTema.textContent = "Tema claro";
        botaoTema.setAttribute("aria-label", "Ativar tema claro");
        botaoTema.setAttribute("aria-pressed", "true");
    } else {
        botaoTema.textContent = "Tema escuro";
        botaoTema.setAttribute("aria-label", "Ativar tema escuro");
        botaoTema.setAttribute("aria-pressed", "false");
    }
}

atualizarBotaoTema();

botaoTema.addEventListener("click", () => {
    const temaAtual = document.documentElement.getAttribute("data-tema");

    const novoTema = temaAtual === "escuro" ? "claro" : "escuro";

    document.documentElement.setAttribute("data-tema", novoTema);

    localStorage.setItem("tema", novoTema);

    atualizarBotaoTema();
});

const menuLinks = document.getElementById("menu-links");

if (menuLinks) {
    menuLinks.appendChild(botaoTema);
}
/* O css deve conter os seguintes elementos para que esse arquivo funcione:
/* PALETA DE CORES — TEMA CLARO */
/*:root {
    color-scheme: light;

    --fundo: #FFFFFF;
    --card: #EEF9F9;
    --texto: #132442;
    --texto-secundario: #3551A4;
    --links: #3551A4;
    --borda: #8AD6D6;
    --destaque: #D6E264;
    --hover: #132442;

    --branco: #FFFFFF;
}

/* PALETA DE CORES — TEMA ESCURO
[data-tema="escuro"] {
    color-scheme: dark;

    --fundo: #132442;
    --card: #1B3159;
    --texto: #F4FAFA;
    --texto-secundario: #8AD6D6;
    --links: #80A1F8;
    --borda: #3551A4;
    --destaque: #D6E264;
    --hover: #8AD6D6;

    --branco: #1B3159;
}
.botao-tema {
    background-color: var(--destaque);
    color: var(--texto);
    border: 1px solid var(--borda);
    padding: 8px 14px;
    border-radius: 6px;
    cursor: pointer;
    font: inherit;
}

.botao-tema:hover {
    background-color: var(--hover);
    color: var(--fundo);
}*/
/*Além do import <script src="js/tema.js" defer></script>, no menu, é claro*/