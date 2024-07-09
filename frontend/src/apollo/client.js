import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	gql,
} from "@apollo/client";

const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
	cache: new InMemoryCache(),
});

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
	})
	.then((result) => console.log(result));

export default client;
