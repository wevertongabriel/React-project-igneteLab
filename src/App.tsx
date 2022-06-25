import { useState } from 'react';
import { ApolloProvider, gql, useQuery } from '@apollo/client';
import { Event } from './pages/Event';
import { Router } from './Router';
import { client } from './lib/apollo';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
