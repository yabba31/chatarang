import React, { Component } from 'react'

import Sidebar from './Sidebar'

import Chat from './Chat' 

class Main extends Component {
   state ={
       room: {
           name:'s2morning',
           description: 'Chattar about the actual class',
       }
   }

   loadRoom =(room => {
       this
   })







    render ()  {
        return (
         <div className= 'Main' style={{styles}}>
         <
            <Sidebar />
            <Chat />
            </div>   
        )
    }
}



const styles = {
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',
}




export default Main