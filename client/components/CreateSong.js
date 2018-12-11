import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import {Link,hashHistory} from 'react-router';

import gql from 'graphql-tag';
import query from '../queries/querySongs';


class CreateSong extends Component{

    constructor(){
        super();
        this.handleAddSong=this.handleAddSong.bind(this);
        this.state={
            title:''
        }
    
    }

    handleCreate(e){
        e.preventDefault();
        this.props.mutate({ //Add song
            variables:{
                title:this.state.title
            },
            refetchQueries:[{query}] //let to graph to know refetch the query because the are a new member
        }).then(()=>hashHistory.push("/"));
        
    }

    handleAddSong(e){
        this.setState({title:e.target.value});
    }

    render(){
        return(
            <div>
                <Link to="/">Back</Link>
                <h3>Create new path: {this.state.title}</h3>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <input type="text" onChange={this.handleAddSong}  />
                </form>
            </div>
        );
    }
}
//mutation GraphQL
const mutation=gql`
    mutation AddSong($title:String){
        addSong(title:$title){
            id
        }
    }
`;

export default graphql(mutation)(CreateSong) ; //Always passed by props like redux