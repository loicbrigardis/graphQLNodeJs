# Project Title

How to use express-graphql with nodeJs

## Getting Started

```
$ npm install
$ nodemon server.js
```
```
Go to http://localhost:8888/graphql
```

### Prerequisites & infos

https://nodejs.org/en/
http://graphql.org/
https://jsonplaceholder.typicode.com/

### Queries examples

```
query {
  users {
    name
  }
}
```
```
query {
  user(id:"9") {
    name,
    address {
      street
      suite
      city
      zipcode
    }
  }
}
```

### Mutations examples

```
mutation {
  addUser(id:"15", name:"John Doe") {
    id,
    name
  }
}
```
```
mutation {
  updateUser(id:"15", name:"Jane Doe", username:"Jane", phone:"154-956") {
    name
  }
}
```

## Database

For persistent data (specially for mutation), use mongodb or whatever.
