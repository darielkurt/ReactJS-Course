import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

const app = props => {

    const [state, setState] = useState({
      username: 'Kobe'
    })
  
    const usernameChangeHandler = (event) => {
      setState({username: event.target.value})
    }
  
    return(
      <div>
        <UserInput changed={usernameChangeHandler} currentName={state.username} />
        <UserOutput userName="Kurt" />
        <UserOutput userName={state.username} />
        <UserOutput userName={state.username} />
      </div>
    )
  }
  