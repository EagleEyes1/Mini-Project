import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://notable-ape-68.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret": "XiwjP2Xxcut6UXbKj4LhRM0E6vIWRZmSEHdceQ9uALEv2IxKe2mOl5Nj7uAvaGMj"
    }
});

export default client