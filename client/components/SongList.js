import React, {Component} from 'react';
import query from '../queries/querySongs';
//Third party libraries
import {Link} from 'react-router';
//GraphQL
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';


class SongList extends Component{

    constructor(){
        super();
        this.handleDeleteSong=this.handleDeleteSong.bind(this);
    }

    handleDeleteSong(id){
        this.props.mutate({
            variables:{
                id
            },
            refetchQueries:[{query}]
        }).then(()=>this.props.data.refetch());
    }
    
    render(){
        if(!this.props.data.songs) return <div>...Loading</div>
        return(
            <div>
            <ul >
                {this.props.data.songs.map(res=> <li className="collection-item" key={res.id}>{res.title}<i className="material-icons" onClick={()=>this.handleDeleteSong(res.id)}>delete</i></li>)}                
            </ul>
            <Link to="songs/new" className="btn-floating btn-large red right">
            <i className="material-icons">add</i> 
            </Link>
            </div> 
        );
    }

}

const mutation=gql`
    mutation DeleteSong($id:ID){
        deleteSong(id:$id){
            id
        }
    }
`;

export default graphql (mutation)(graphql(query)(SongList));
