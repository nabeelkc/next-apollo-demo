import Head from "next/head";
import styles from "./page.module.scss";
import fetch from 'cross-fetch';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetUsers from "../components/Persons";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      console.log(`Graphql error ${message}`);
    });
  }
});

const port = process.env.PORT || 5000;

const link = from([
  errorLink,
  new HttpLink({ uri: `http://localhost:${port}/graphql`, fetch }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function Home() {
  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <Head>
          <title>People Data List App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className={styles.description}>
            <h1 data-testid='title'>People Data List</h1>
          </div>
          <GetUsers />
        </main>
      </div>
    </ApolloProvider>
  );
}

export default Home;
