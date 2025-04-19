# InlineProjectCRUD

## 📋 Descrição
Este é um projeto Blazor que implementa um CRUD (Create, Read, Update, Delete) para gerenciar usuários. Ele utiliza uma interface interativa com tabelas editáveis e suporte a operações de adição e remoção de registros.

<img src="wwwroot/img/video.gif" width=700px>

## 🚀 Tecnologias Utilizadas
- **Blazor**: Framework para construção de interfaces web interativas.
- **.NET 9**: Plataforma para desenvolvimento do backend.
- **C# 13.0**: Linguagem de programação principal.
- **JavaScript**: Para manipulação de eventos e interatividade no frontend.
- **HTML/CSS**: Para estruturação e estilização da interface.

## 📂 Estrutura do Projeto
- **`Views/Usuario/Index.cshtml`**: Página principal que exibe a lista de usuários em uma tabela editável.
- **`wwwroot/js/site.js`**: Contém a lógica JavaScript para manipulação de eventos, como edição e atualização de dados.
- **Modelos**: Representação dos dados do usuário.
- **Controladores**: Gerenciam a lógica de negócios e fornecem os dados para a interface.

## 🛠️ Funcionalidades
- Listar usuários em uma tabela.
- Editar campos diretamente na tabela.
- Adicionar novos usuários.
- Remover usuários existentes.
- Atualizar dados no backend via requisições AJAX.

## 📦 Instalação
1. Clone o repositório:
`git clone https://github.com/seu-usuario/InlineProjectCRUD.git`
2. Navegue até o diretório do projeto:
`cd InlineProjectCRUD`
3. Restaure os pacotes NuGet:
`dotnet restore`
4. Execute o projeto:
`dotnet run`


## 🖥️ Como Usar
1. Acesse a aplicação no navegador em `http://localhost:5000`.
2. Edite os campos diretamente na tabela.
3. Clique em "Adicionar" para incluir novos usuários.
4. Clique em "Remover" para excluir um usuário.

## 🐛 Debugging
### Depuração do JavaScript
- Use o comando `debugger;` no arquivo `wwwroot/js/site.js` para pausar a execução no navegador.
- Abra o DevTools no Microsoft Edge (`F12`) e vá para a aba **Sources** para inspecionar o código.

### Depuração do Blazor
- Utilize breakpoints no Visual Studio 2022 para depurar o código C#.

## Créditos

Este projeto foi inspirado pelo tutorial de Crislaine D´Paula disponível no canal do YouTube. Agradecimentos especiais a Crislaine por compartilhar seu conhecimento e ajudar a comunidade de desenvolvedores.
   
   