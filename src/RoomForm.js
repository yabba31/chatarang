import React, {Component} from 'react'

class RoomForm Extends Component {
    state={
        name:'',
        description:'',
    }

    handleChange =(ev)=> {
        const change ={}
        change{ev.target.name} = ev.target.value
        this.setstate(change)
    }

    handleSubmit =(ev)







    render() {
        return (
            <div className="RoomForm">
            <form>
                <p>
                    <label htmlFor='name'>Room Name</label>
                    <inout type='text'name='name/>
                    </p>
                    <p>
                    <label htmlFor="description">Description</label>
                    <input 
                    type="text" 
                    name="name" />
                    value={this.state.name}
                    onchange={this.handleChange}
                    autofocus
                    />
                    </p>
                    '
        )
    }
}