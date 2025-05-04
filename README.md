# FuriaChat: O Web Chat Inteligente para Fanáticos da FURIA! 🚀

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://pt-br.react.dev/)
[![Google Gemini AI](https://img.shields.io/badge/Google_Gemini_AI-4285F4?style=for-the-badge&logoColor=white)](https://ai.google.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) **Desenvolvido para o verdadeiro entusiasta da FURIA!** 🖤🧡 Mergulhe na paixão a cada mensagem e interação, aproximando você ainda mais do seu time favorito.

## 🏆 Visão Geral do Projeto: Caso de Uso Conversacional para a FURIA
FuriaChat é um aplicativo web de chat inteligente criado especialmente para a comunidade apaixonada pela FURIA Esports. Desenvolvido como uma solução conversacional para fãs, o projeto utiliza Google Gemini AI com engenharia de prompt personalizada, garantindo respostas relevantes e contextuais exclusivamente sobre a organização FURIA.

## ✨ Funcionalidades Principais

* **Acessibilidade Multiplataforma:** Conecte-se perfeitamente com a comunidade FURIA via desktop ou celular, mantendo a emoção no seu bolso.
* **Chat Inteligente com Gemini AI:** Obtenha respostas rápidas e precisas para todas as suas perguntas relacionadas à FURIA.
* **Interação de Alta Performance:** Experimente tempos de resposta quase instantâneos, espelhando a intensidade dos momentos mais emocionantes do esports.
* **Design Centrado no Usuário:** Uma interface limpa e intuitiva projetada para facilidade de uso, garantindo que você nunca perca nenhum detalhe da ação da FURIA.

## 🚀 Primeiros Passos

Siga estas instruções para configurar e executar o FuriaChat localmente:

### Pré-requisitos

* **Node.js** (última versão LTS recomendada - [https://nodejs.org/pt-br/](https://nodejs.org/pt-br/))
* **npm** (vem com o Node.js) ou **yarn** ([https://yarnpkg.com/lang/pt-br/](https://yarnpkg.com/lang/pt-br/))

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/luscas18/fan-chatbot.git
    cd fan-chatbot
    ```

2.  **Instale as Dependências:**
    Este projeto utiliza o Yarn para gerenciamento de dependências. Certifique-se de ter o Yarn instalado globalmente. Caso contrário, você pode instalá-lo via npm:
    ```bash
    npm install --global yarn
    ```
    Em seguida, instale as dependências do projeto:
    ```bash
    yarn install
    ```

3.  **Configuração do Ambiente:**
    Crie um arquivo `.env.local` no diretório raiz do seu projeto e adicione sua chave de API do Google Gemini AI:
    ```
    GEMINI_API_KEY=SUA_CHAVE_DE_API_AQUI
    ```
    **Importante:** Trate sua chave de API como informação confidencial e evite commitar este arquivo em repositórios públicos.

### Executando o Servidor de Desenvolvimento

Execute o seguinte comando para iniciar o servidor de desenvolvimento:

```bash
yarn dev