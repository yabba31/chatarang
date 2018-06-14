import React, {Component } from 'react'


class Chat extends Component {
    render() {
        return (
            <div className="Chat">
                Chat
                </div>
        ) 
    }
}





componentWillMount(){
    this.syncMessages()
}

componentDidUpdate(prevProps) {
    if (preProps.room.name !== this.props.room.name){
        this.syncsMessages()
    }
}

}
syncMessages =()=> {
    base.syncState( '${this.props.room.name}/messages')
}





addMessage = (body) => {
    const messages = [... this.state.messages]
    messages
}





export default Chat