# GraphQL Samples

Basic GraphQL API's for practice purposes but fully functional
For this project I've used:
- Apollo Server
- GraphQL
- Type-GraphQL
- GraphQL-Scalars
- Reflect-Metadata

## API 1 - Schema-first aproach

- Basic API of users pushing and retrieving using schema-first aproach
- Schema-first aproach: Write the desired schemas (inputs and outputs) and code to fullfill it!
- In memory storage
- Just 1 query: getAllUsers -> Retrieve all users, available fields for selection: id, name
- Just 1 mutation: createUser -> Expect a name as parameter, returns the created user, available fields for selection: id, name

## API 2 - Code-first aproach

- Basic API of appointsment creation pushing and retrieving appointments with a mocked "related" customer in code-first aproach
- Code-first aproach: Write the desired code in a way that type-graphql with scalars and metadata can infer all the types of your inputs and outputs (Thanks to decorators in your code) and create the schema dynamically
- In memory storage
- Just 1 query: getAllAppointments -> Retrieve all appointments objects, available fields for selection: Appointment Start date and time, Appointment End date of time, and Customer id and name
- Just 1 mutation: CreateAppointment -> Expect a customer ID, start date and end date as parameter, returns the created appointment, available fields for selection: Appointment Start date and time, Appointment End date of time, and Customer id and name. **Obs: Start date and End date shoud be in ISO 8601 format, for sample "2025-05-22T18:31:00Z"**

# Run Instructions

- For running the API 1 developed using schema-first aproach, do the following:
```
npm install
npm run dev:simple
```

- For running the API 2 developed using code-first aproach, do the following:
```
npm install
npm run dev:pro
```
