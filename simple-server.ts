import { ApolloServer, gql } from "apollo-server";
import { randomUUID } from "node:crypto";

const typeDefs = gql`
    type UsersShape {
        id: String!,
        name: String!
    }
    type Query {
        helloWorld: String!
        getAllUsers: [UsersShape!]!
    }

    type Mutation {
        createUser(name: String!): UsersShape!
    }
`;

type UsersShape = {
    id: string,
    name: string
}

const users:UsersShape[] = [];

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query: {
            helloWorld: () => {
                return 'Helloowwww Woorllllddd!!'
            },
            getAllUsers: () => {
                console.log(users);
                return users;
            }
        },
        Mutation: {
            createUser(_, args) {
                const newUser:UsersShape = {
                    id: randomUUID(),
                    name: args.name
                }
                users.push(newUser);
                console.log(users);
                return newUser;
            }
        }
    }
});

server.listen().then(({ url }) => {
    console.log(`HTTP server runnin on ${url}`);
});