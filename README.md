# Catalogo de filmes com calassificação usando Spring no backend e React no Frontend

> Aplicação desenvolvida como caso de estudos

[Guia de instalação das ferramentas]

Para editar este projeto e facilitar sua utilização siga os passos descritos.

Ferramentas necessárias:

## Confira se você já tem o Node e o Yarn instalados em seu dispositivo use os comandos no terminal.

```bash
node -v
yarn -v
```
### Caso não tenha nem um dos dois instalados pode baixar nos links abaixo.

[Node - baixe diretamente do site a versão LTS clique aqui](https://nodejs.org/en/)
[Yarn  - baixe diretamente do site a versão LTS clique aqui](https://yarnpkg.com/cli/install)

Caso precise instalar o Yarn, também pode ser utilizado o comando:

```
npm install --global yarn
```
#### Design deste projeto esta no Figma para te ajudar.

https://www.figma.com/file/hyovBMIxwrn2Bb5MZLrxHL/DSMovie4

## Estrutura de pastas do projeto

- o projeto esta estruturado na pasta dsmovie temos a pasta que contem o backend e outra que contem o frontend, mas você pode estruturar da maneira que melhor lhe convir. Esta estrutura que apliquei ajuda no entendimento.

## Criando o projeto no frontend

Para criar o projeto do frontend vamos começar dando o comando do yarn para criar o projeto react

```
yarn create react-app frontend --template typescript
```
Caso você prefira pode utilizar o comando do NPM

```
npx create-react-app frontend --template typescript
```
## Criando o projeto no backend usando Spring Boot

[Entre no Link do Spring Boot](https://start.spring.io/) e coloque as dependencias:

  - Web
  - JPA
  - H2
  - Postgres
  - Security

  - Segue imagem para que possa verificar 

  ![DJSoftware](https://github.com/cyberlinkrv/dsmovie/blob/master/doc-files/fig/Spring.png)

A IDE que utilizei para desenvolver o Backend foi [Spring Tool Suite 4](https://spring.io/tools) que pode ser baixada aqui

Após abrir o projeto Backend

- Ajuste no arquivo pom.xml:
```xml
<plugin>
	<groupId>org.apache.maven.plugins</groupId>
	<artifactId>maven-resources-plugin</artifactId>
	<version>3.1.0</version>
</plugin>
```
Faça também a atualização do projeto para que todas as dependências seja baixadas

 - Botão direito no projeto -> Maven -> Update project (force update)

 ## Frontend

 ### "limpar" o projeto ReactJS no Frontend

- Deletar arquivos não usados

### Adicionar Bootstrap e CSS ao projeto frontend

- Bootstrap
```
yarn add bootstrap@5.1.3
```





