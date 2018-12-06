import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import query from '../queries/querySongs';

class SongList extends Component{
    
    render(){
        if(!this.props.data.songs) return <div>...Loading</div>
        return(
            <ul>
                {this.props.data.songs.map(res=> <li key={res.id}>{res.title}</li>)}
            </ul>
        );
    }

}

export default graphql(query)(SongList);
