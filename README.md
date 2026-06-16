# Agência Alfa | Criatividade Digital

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

## 📝 Descrição

A **Agência Alfa** é uma landing page fictícia de agência digital, criada para demonstrar habilidades em desenvolvimento front-end e compor o portfólio profissional. Desenvolvida com **HTML5**, **CSS3** e **JavaScript**, a página apresenta um layout limpo e responsivo, adaptando-se a diferentes tamanhos de tela. Seu objetivo principal é ilustrar conhecimentos em design de interfaces, estruturas semânticas e interações dinâmicas, servindo como exemplo prático para candidaturas na área de desenvolvimento web.

[🔗 Clique aqui para visualizar o projeto online](https://ciaolasse.github.io/Landing-Page-Ficticia-Agencia-Alfa/)
---

## 🚀 Demonstração

A página inicial da Agência Alfa exibe um cabeçalho com o logo da agência e um menu de navegação que se adapta para dispositivos móveis. Logo abaixo, uma seção *hero* apresenta um destaque com título, descrição breve e botão de contato. As seções seguintes evidenciam as especialidades da agência em cards ilustrativos e incluem um formulário de contato funcional. O rodapé contém ícones de redes sociais e informações de contato, mantendo um design consistente em todo o layout.

> **Figura:** Exemplo de visualização da landing page “Agência Alfa” em tela de desktop.
> ![Preview da Agência Alfa](https://ciaolasse.github.io/Landing-Page-Ficticia-Agencia-Alfa/images/pessoa.png) *(Ou use o print real do site)*

---

## 🛠 Tecnologias Utilizadas

* **HTML5:** Estrutura semântica para todo o conteúdo, utilizando tags como `<header>`, `<nav>`, `<section>` e `<footer>`.
* **CSS3:** Estilos modernos com Flexbox, variáveis CSS (*custom properties*) e *media queries* para garantir responsividade. Animações suaves foram aplicadas com `@keyframes` e efeitos de *hover*.
* **JavaScript (ES6):** Manipulação do DOM para funcionalidades interativas, como o menu móvel (abrir/fechar). O código em `menu.js` controla a classe CSS do menu para ativar o efeito de abrir/fechar e o *overlay*.
* **Google Fonts:** Fonte “DM Serif Text” para tipografia elegante no cabeçalho e títulos, adicionando sofisticação visual.
* **Bootstrap Icons:** Ícones modernos utilizados no menu (ícone de lista) e no rodapé (Instagram, YouTube, LinkedIn).

---

## ✨ Funcionalidades

* **Layout Responsivo:** Ajuste dinâmico a diferentes larguras de tela via *media queries*. A versão mobile apresenta um menu “hamburger”.
* **Menu de Navegação Interativo:** Menu principal fixo no topo que, em telas menores, transforma-se em um ícone de menu. Ao clicar, exibe o menu móvel em *overlay*.
* **Seções Temáticas:** Divisão em seções claras: *Início*, *Especialidades*, *Contato*, além de rodapé informativo.
* **Formulário de Contato:** Inclui campos de nome, e-mail e mensagem com validação básica no front-end (`required`).
* **Animações e Efeitos:** Imagem principal com efeito de flutuação e cards de serviços com efeito de elevação e sombra no *hover*.
* **Ícones Sociais no Rodapé:** Botões circulares em destaque dourado que simulam links para perfis sociais.

---

## 📂 Estrutura de Pastas

```text
Agencia-Alfa/
├── index.html        # Página principal da landing page
├── style.css         # Arquivo de estilos CSS
├── menu.js           # Script JavaScript do menu móvel
└── images/           # Imagens utilizadas no site
    ├── logo.png      # Logo da Agência Alfa
    └── pessoa.png    # Imagem ilustrativa do cabeçalho
