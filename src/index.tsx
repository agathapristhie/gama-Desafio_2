import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './globalStyle';
import {QueryClient, QueryClientProvider} from 'react-query';

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client = {client}>
    <App />
    <GlobalStyle/>
    </QueryClientProvider>,
   document.getElementById('root')
);
