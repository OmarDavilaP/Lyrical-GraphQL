import React, {Component} from 'react';

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
        
    }

    handleAddSong(e){
        this.setState({title:e.target.value});
    }

    render(){
        return(
            <div>
                <h3>Create new path: {this.state.title}</h3>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <input type="text" onChange={this.handleAddSong}  />
                </form>
            </div>
        );
    }
}

export default CreateSong;