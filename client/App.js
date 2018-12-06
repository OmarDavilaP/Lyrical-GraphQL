import React,{Component} from 'react';
import SongList from './components/SongList';
//third party libraries
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

const client= new ApolloClient({});

const App=()=>{
    return(
        <ApolloProvider client={client}><SongList /></ApolloProvider>
    );
}

export default App;