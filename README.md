## 🚀 Teste de API REST 🚀

Projeto para estudo sobre testes de REST API em [Cypress](https://www.cypress.io/). O material disponível neste repositório foi desenvolvido durante a aula [Testes de API com Cypress](https://www.youtube.com/watch?v=rbObfNh2bno&t=1949s), disponibilizado pelo canal [Agilizei](https://www.youtube.com/channel/UCI_m5uwJjfD7trqcwAB8E3w).

O objetivo deste projeto é compreender sobre como fazer testes de REST API utilizando cypress, os tipos de requisições e suas validações. Para tanto, foi utilizado a [FakeRESTApi](https://fakerestapi.azurewebsites.net/index.html) como objeto de testes. 

Os testes englobaram os serviços Authors e Books para os métodos DELETE, GET, POST e PUT.


### 💡 Conceitos abordados
-----------------------
- Tipos de requisições;
- Validação de requisições;
- Conceitos sobre testes de api utilizando cypress;
- Documentação da API no Swagger;

### ⚠️ Instalação e uso do projeto
-----------------------
- Instale o [Node.js](https://nodejs.org/en/download/);
- Abra o diretório do projeto e execute o comando:
    - `npm init`
    - `npm i cypress --save-dev` (para instalar o cypress)
- Para abrir a interface de execução do Cypress, execute no diretório do projeto:
    - `npx cypress open`


### ⚙️ Arquitetura do projeto
-----------------------

```
FakeRESTApi-cypress/
  ├─  cypress/
  │        ├── fixtures/
  │        │   └── *usuarios*.json       
  │        │
  │        ├── integration/
  │        │   └── services/
  │        │       ├── Authors/
  │        │       |   ├── payloads/
  │        │       |   |   ├── add-author.json
  │        │       |   |   └── change-author.json
  │        │       |   ├── requests/
  │        │       |   |   ├── DELETEAuthors.request.js
  │        │       |   |   ├── GETAuthors.request.js
  │        │       |   |   ├── POSTAuthors.request.js
  │        │       |   |   └── PUTAuthors.request.js
  │        │       |   └── tests/
  │        │       |       ├── DELETEAuthors.spec.js
  │        │       |       ├── GETAuthors.spec.js
  │        │       |       ├── POSTAuthors.spec.js
  │        │       |       └── PUTAuthors.spec.js
  │        │       └── Books/
  │        │           ├── payloads/
  │        │           |   ├── add-book.json
  │        │           |   └── change-book.json
  │        │           ├── requests/
  │        │           |   ├── DELETEBooks.request.js
  │        │           |   ├── GETBooks.request.js
  │        │           |   ├── POSTBooks.request.js
  │        │           |   └── PUTBooks.request.js
  │        │           └── tests/
  │        │               ├── DELETEBooks.spec.js
  │        │               ├── GETBooks.spec.js
  │        │               ├── POSTBooks.spec.js
  │        │               └── PUTBooks.spec.js
  │        │
  │        ├── plugins/
  │        │   └── index.js
  │        │
  │        └── support/
  │            ├── commands.js
  │            └── index.js
  │ 
  ├── node_modules/
  ├── cypress.json
  ├── package-lock.json
  ├── package.json
  └── README.md
```


## 🔍 Camadas do projeto
-----------------------

 - **integration:** arquivos de testes separados em categorias a organização. Extensão *.spec.js;
    - **services:** testes são separados de acordo com o serviço (autor ou livro);
    - **payloads:** arquivos para massa de dados estática para os testes (*.json);
    - **requests:** contém as requisições de cada um dos métodos (delete, get, post, put);
    - **tests:** contém os casos de testes para cadaa um dos métodos (delete, get, post, put);
 - **plugins:** plugins que são utilizados na solução ficam dentro do arquivo "plugins/index.js";
 - **support:** camada com comandos Cypress customizados e sobrescritas globais:
    - Arquivo commands.js responsável de receber os comandos globais no cypress;
    - Arquivo index.js responsável de receber as importações dos comandos cypress;
 - **node_modules:** arquivos ou diretórios que podem ser carregados pelo Node.js;
 - **cypress.json:** arquivo de configuração do Cypress;
 - **package-lock.json:** gerado automaticamente com as instalações e atualizações de pacotes;


