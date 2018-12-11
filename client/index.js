//CSS
import './style/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SongList from './components/SongList';
import CreateSong from './components/CreateSong';
import SongDetail from './components/SongDetails';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
//third party libraries
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({});

const Root=()=>{
  return(
      <ApolloProvider client={client}>
          <Router history={hashHistory}>
              <Route path="/" component={App}>
                  <IndexRoute component={SongList}/>
                  <Route path="/songs/new" component={CreateSong}/>
                  <Route path="/songs/:id" component={SongDetail}/>
              </Route>
          </Router>
      </ApolloProvider>
  );
}

ReactDOM.render(
 <Root />,
  document.querySelector('#root')
);
