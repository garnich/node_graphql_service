# node_graphql_service
NODEJS2022Q2

# Precondition
## You should have working instance of microservices from https://github.com/rolling-scopes-school/node-graphql-service

## Installation
- run `microservices` from https://github.com/rolling-scopes-school/node-graphql-service
- rename `.env.example => .env`
- run `npm insatall`
- run `npm run start:dev`
- open in browser `http://localhost:4000/graphql` you will see
![image](https://user-images.githubusercontent.com/33061150/177980662-b5241576-e70d-424d-8658-f1034e4da705.png)

## Using App
- for using all `mutations` (exept `register`) and `favourites queri` user should be reistered and have `JWT` token
- start from `register` mutation

`
{
  "firstName": "Jhon",
  "lastName": "Smith",
  "password": "123456789",
  "email": "JS@test.test"
 }
`
![image](https://user-images.githubusercontent.com/33061150/177982497-3b4f807e-3a88-4b87-9af2-be6eec0b1e9e.png)
- after that you able to use `login` query and get `JWT` token

`
{
  "password": "123456789",
  "email": "JS@test.test"
 }
`
![image](https://user-images.githubusercontent.com/33061150/177982601-e633ae0d-ac2a-4138-99f8-c6fb64f46b22.png)

- when you recieve `JWT` you can add token to header (but it also saved in app memory) 
![image](https://user-images.githubusercontent.com/33061150/177983068-64f2606b-9188-4d1f-9159-0cbf21f9e5dc.png)

- after that you able to use all `queries` and `mutations`


# NOTE!!!
If you receive the next mistake during work with `getFavourites` query. Please do `getJWT` query and try `getFavourites` again.
![image](https://user-images.githubusercontent.com/33061150/178155243-b481ebb9-d631-4c4f-a165-fdfe7d5c12bf.png)
