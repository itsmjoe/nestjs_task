# Run
**
"start": "nest start",
"start:dev": "nest start --watch",
"start:debug": "nest start --debug --watch"
**

` npm run start `

# Test

## Create company
` mutation {
  createCompany(name: "Company1") {
    id
    name
  }
}`

## Get compnay
`query {
  getCompanies{
    id
    name
  }
}`

## Create user

`mutation {
  createUser(name:"Jhon", last_name:"Doe", companyId:1){
    id
    name
    last_name
  }
}`

## Get user
`query {
  getUsers(companyId:3){
    name
    last_name
  }
}

query {
  getUsers{
    name
    last_name
  }
}`