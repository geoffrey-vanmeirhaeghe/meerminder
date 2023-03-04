import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";
import introspectionResult from "~/fragmentTypes.json";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult,
});

export default ({ req, app }) => {
  const errorLink = onError((res) => {
    const { graphQLErrors, networkError } = res;
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });
  return {
    link: errorLink,
    httpEndpoint: "http://localhost:1337/graphql", // process.env.BACKEND_URL
    cache: new InMemoryCache({ fragmentMatcher }),
  };
};
