import React, {Component} from 'react';
import { gql } from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongDetail extends Component{

    render(){
        console.log("this props",this.props);
        return <div><h3>Song Detail</h3></div>

    }
}

const query2=gql`
query SongQuery($id:ID!){
  
    song(id:$id){
      title
    }
    
  }
`;

export default graphql(query2)(SongDetail);