import React, {Component} from 'react';

class CreateSong extends Component{

    constructor(){
        super();
        this.handleAddSong=this.handleAddSong.bind(this);
        console.log("this",this)
    }

    handleCreate(e){
        e.preventDefault();
        
    }

    handleAddSong(e){
        console.log("this",this);
    }

    render(){
        return(
            <div>
                <h3>Create new path</h3>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <input type="text" onChange={this.handleAddSong}  />
                </form>
            </div>
        );
    }
}

export default CreateSong;