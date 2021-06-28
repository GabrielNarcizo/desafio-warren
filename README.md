# Warren investimentos
![LOGO-WARREN](https://user-images.githubusercontent.com/75431544/123664322-9c192480-d80d-11eb-932e-ccd0a96b70cf.jpeg)


#### Aplicação online em: https://desafio-warren.netlify.app/

## Introdução

O desafio será implementar uma tela de lista de transações apresentando os principais dados relacionado a cada uma delas, ao clicar em uma transação será exibido um modal contendo os detalhes desta transação. O desafio deverá conter as seguintes funcionalidades:

## Tecnologias utilizadas
- Reactjs 
- Hooks
- Context api
- styled-components
- Axios

#### Objetivos

- Lista de transações agrupada por data
- Filtro por título
- Filtro por status
- Modal contendo os detalhes da transação
  

## Como rodar o projeto

Tenha em sua máquina:

- Git
- NodeJs ( desenvolvido com node na versão 12+ )
- Yarn
- VsCode (ou algum editor de código de sua preferência)

#### Passos para rodar o projeto

- ️Clone do repositório (ou faça um fork se preferir)

 $ git clone https://github.com/GabrielNarcizo/desafio-warren

- Instale as dependências

Instale todas as dependências do projeto com o comando `yarn install`

- Agora execute a aplicação

Execute o script de start com `yarn start`, caso enfrente algum problema resete o cache `yarn start --reset-cache`

- O servidor será aberto automaticamente na porta:3000, caso não aconteça acesse http://localhost:3000

## Escolha de abordagens

- Inicialmente optei por fazer um consumo de API usando uma função com useCallback e fetch, para na hora de usar os dados colocar a função em um useEffect, porém percebi que estava usando muitas linhas de códigos então mudei e passei a usar o axios já dentro de um useEffect.

- Para a progress bar usei uma abordagem que usei em outro projeto, conforme a etapa de transferência é reconhecida mudasse o width da barra.

- Usei uma função para mudar a linguagem da transferência de ingles para português pois facilita o entendimento do usuário que não tem conhecimento de outra língua.

- As pesquisa foram feitas usando filter, ou seja, faz uma filtragem do valor do título e mostra na tela conforme o que for sendo digitado e o mesmo vale para o status.

- O modal é o mesmo caso da barra de progresso, usei um componente que já uso em outros projetos e nele usei uma função que leva os dados das tabelas para ele(setCurrentContext, usando current como parâmetro).

