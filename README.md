-----

# 🚀 Praticando OrangeHRM: Automação E2E com Cypress e JavaScript

Este repositório demonstra habilidades em Automação de Testes End-to-End (E2E) utilizando o poderoso framework **Cypress** e **JavaScript**. O foco é na prática e validação de fluxos de trabalho críticos no sistema de Gerenciamento de Recursos Humanos (HRM) **OrangeHRM**.

O objetivo deste projeto é fornecer uma suíte de testes rápida, confiável e com uma estrutura organizada para testar aplicações web dinâmicas.

## ✨ Destaques do Projeto

  * **Cypress.io:** Utilização do framework Cypress para uma experiência de testes fluida e debug visual.
  * **JavaScript/Node.js:** Testes escritos em JavaScript, aproveitando o ecossistema Node.js.
  * **Testes E2E Críticos:** Validação dos principais fluxos de negócio, como Login, Navegação e CRUD (Criação/Leitura/Atualização/Deleção) de dados.
  * **Comandos Customizados:** Criação de comandos customizados do Cypress para reutilização de código (ex: `cy.login()`).

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **Cypress** | Framework de testes End-to-End rápido e confiável. |
| **JavaScript (ES6+)** | Linguagem de programação principal para escrever os testes. |
| **Node.js / npm** | Ambiente de execução e gerenciador de pacotes. |
| **Mocha / Chai** | Estruturas de teste (integradas no Cypress) para escrita de specs e asserções. |

## 🚀 Como Executar os Testes

Estas instruções guiarão você na configuração e execução dos testes em sua máquina local.

### Pré-requisitos

1.  **Node.js** (Versão LTS recomendada)
2.  **npm** (instalado junto com o Node.js)
3.  **Git**

### Instalação

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/Narbona836/Praticando-OrangeHRM.git
    cd Praticando-OrangeHRM
    ```

2.  **Instale as dependências do projeto:**

    ```bash
    npm install
    ```

    *Isso instalará o Cypress e outras dependências listadas no `package.json`.*

### Execução dos Testes

#### 1\. Execução no Modo Interativo (Cypress Test Runner)

Este modo abre a interface gráfica do Cypress, permitindo que você visualize a execução passo a passo no navegador.

```bash
npx cypress open
```

  * **No Cypress Test Runner:** Escolha o tipo de teste (ex: E2E Testing) e clique no arquivo de spec desejado (ex: `login.cy.js` ou `admin.cy.js`).

#### 2\. Execução Headless (Terminal)

Este modo executa os testes diretamente no terminal, sem abrir a interface gráfica, ideal para ambientes de Integração Contínua (CI).

```bash
npx cypress run
```

  * *Para rodar um arquivo de teste específico:*
    ```bash
    npx cypress run --spec "cypress/e2e/login.cy.js"
    ```

## 📋 Casos de Teste Automatizados

A suíte de testes atual cobre os seguintes cenários no OrangeHRM:

| Módulo | Cenário | Status |
| :--- | :--- | :--- |
| **Login** | Validação de credenciais válidas. | ✅ Automatizado |
| **Login** | Validação de credenciais inválidas. | ✅ Automatizado |
| **Navegação** | Acesso rápido ao Dashboard após o login. | ✅ Automatizado |
| **Admin** | Criação de um novo usuário (Admin/ESS). | 🚧 Em Andamento |
| **PIM** | Exclusão de um funcionário. | 🚧 Em Andamento |
| **Logout** | Logout bem-sucedido do sistema. | ✅ Automatizado |

## 🤝 Contribuições

Contribuições são bem-vindas\! Sinta-se à vontade para sugerir novas funcionalidades ou melhorias nos testes existentes:

1.  Faça um **Fork** do projeto.
2.  Crie sua branch (`git checkout -b feature/sua-feature`).
3.  Faça o **Commit** de suas alterações (`git commit -m 'feat: implementa teste de CRUD no PIM'`).
4.  Faça o **Push** para a branch (`git push origin feature/sua-feature`).
5.  Abra um **Pull Request**.

-----

**Desenvolvido por:** [ Willian Narbona Aquino / https://github.com/Narbona836]
