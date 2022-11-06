import { ApolloClient, InMemoryCache } from '@apollo/client';
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
    uri: "https://notable-ape-68.hasura.app/v1/graphql",
    headers: {
        "x-hasura-admin-secret": "XiwjP2Xxcut6UXbKj4LhRM0E6vIWRZmSEHdceQ9uALEv2IxKe2mOl5Nj7uAvaGMj",
    },
});

const wsLink = new GraphQLWsLink(
    createClient({
        url: "ws://notable-ape-68.hasura.app/v1/graphql",
        connectionParams: {
            headers: {
                "x-hasura-admin-secret": "XiwjP2Xxcut6UXbKj4LhRM0E6vIWRZmSEHdceQ9uALEv2IxKe2mOl5Nj7uAvaGMj",
            },
        },
    })
);

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === "OperationDefinition" && definition.operation === "subscription";
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

export default client;