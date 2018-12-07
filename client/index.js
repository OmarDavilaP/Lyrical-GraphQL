import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SongList from './components/SongList';
import CreateSong from './components/CreateSong';
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
                  <Route path="/new/song" component={CreateSong}/>
              </Route>
          </Router>
      </ApolloProvider>
  );
}

ReactDOM.render(
 <Root />,
  document.querySelector('#root')
);
