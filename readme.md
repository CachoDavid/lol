# League of Legends Application

## Features

- Display all League of Legends Champions
- Filter champions by name and trait(mage/tank...)
- Display Champion details

## Tasks

### Core

- [x] Configure prettier
- [x] Install and configure react-router
- [x] Create pages:
  - [x] Create Home: Static page
  - [x] Create Champion Details Page: Dynamic page by parameter id

### Api

- [-] Install and configure react-query (tanstack)
- [ ] Create Champion Services endpoints:

  http://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/champion.json

  - [ ] Get all champions: GetAll
    - [ ] Map to respective typing
  - [ ] Get champion by id: GetById
    - [ ] Map to respective typing

- [ ] Apply endpoints on routes

### Design

- [ ] Configure shadcn/ui
- [ ] Create base layout for pages:
  - [ ] Home page
  - [ ] Details page
- [ ] Components:
  - [ ] Champion Card
  - [ ] Skin Carrousel
  - [ ] Champion Profile Card....

### Git

-[X] New Git repository

// Comportamento normal das APIs

- Endpoint GET para retornar uma lista, que normalmente tem menos campos que uma detalhes sobre cada item //ex. champions.json
- Endpoint GET para retornar um item que traz normalmente muito mais detalhes sobre o mesmo //Aatrox.json

// Página de listagem: que usa o primeiro endpoint
--> O INPUT QUE TENS NA HOMEPAGE DEVE FILTRAR OS REGISTOS QUE JÁ OBRIVESTE NA PRIMEIRA INVOCÃO
// Página de detalhe: que usa o segundo endpoint
--> Tentamos obter o registo, se não retornar não existe

1. ENTRASTE NA HOME - INVOCASTE A API NUM 1
2. FIZESTE PESQUISA NO INPUT - INVOCASTE A API NUM 1
3. TENS VALIDACAO DE REGISTO NA PAGINA DE DETALHES - INVOCASTE A API NUM 2
