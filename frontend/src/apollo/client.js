import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
	cache: new InMemoryCache(),
});

// Test whether Client succesfully initialized
client
	.query({
		query: gql`
			query SearchPhonebook($name: String!) {
				searchPhonebook(name: $name) {
					name
					phone
				}
			}
		`,
		variables: { name: "aminah" },
	})
	.then((result) => console.log(result));

export default client;
