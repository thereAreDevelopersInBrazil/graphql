
import { ApolloServer } from "apollo-server";
import "reflect-metadata";
import { AppointmentsResolver } from "./resolvers/appointments";
import { buildSchema } from "type-graphql";
import path from "node:path";

async function bootstrap() {
    const schema = await buildSchema(
        {
            resolvers: [
                AppointmentsResolver
            ],
            emitSchemaFile: path.resolve(__dirname, 'schema.gql')
        }
    );
    const server = new ApolloServer({ schema });
    const { url } = await server.listen();

    console.log(`API GraphQL rodando em: ${url}`);

}

bootstrap();