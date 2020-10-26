import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter
} from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import appLogic from "./appLogic"
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
  split
} from '@apollo/client';
import {
  setContext
} from '@apollo/client/link/context';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

// const wsLink = new WebSocketLink({
//   uri: `ws://192.168.1.117:3001/graphql`,
//   options: {
//     reconnect: true
//   }
// });
// const httpLink = createHttpLink({
//   uri: 'http://192.168.1.117:3001/graphql',
// });
      const wsLink = new WebSocketLink({
        uri: `wss://hussleserver.herokuapp.com/graphql`,
        options: {
          reconnect: true
        }
      });
const httpLink = createHttpLink({
  uri: 'https://hussleserver.herokuapp.com/graphql',
});
const authLink = setContext((_, {
  headers
}) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink),
);
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});
ReactDOM.render( <
  ApolloProvider client = {
    client
  } >
  <
  BrowserRouter >
  <
  App / >
  </BrowserRouter> 
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export {
  client,
  appLogic
}
export { apolloHelper } from "./apolloHelper";
export  {Unavaliable}  from "./Unavaliable"
export { MultiSelect } from "./Components/SIdeHussleComponents/customMultiSelect"
