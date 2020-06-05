import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Kurt', age: 21 },
      { name: 'Gene', age: 19 },
      { name: 'Max', age: 28 }
    ]
  })

  const [otherState, someOtherState] = useState('some other value')

  console.log(personsState, otherState)

  const switchNameHandler = (newName) => {
    // DON'T DO THIS > personsState.persons[1].name = 'Alyssa'
    setPersonsState( { 
      persons: [
        { name: newName, age: 21 },
        { name: 'Alyssa', age: 19 },
        { name: 'Max', age: 28 }
      ]
    } )
  }

  const nameChangeHandler = (event) => {
    setPersonsState( { 
      persons: [
        { name: 'Kurt', age: 21 },
        { name: event.target.value, age: 19 },
        { name: 'Max', age: 28 }
      ]
    } )
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App!!!</h1>
      <p>this is really working</p> 
      <button 
        style={style}
        onClick={() => switchNameHandler('Kado')}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} 
      />
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age} 
      click={switchNameHandler.bind(this, '121231')}
      changed={nameChangeHandler}>
        My Hobbies: Racing
      </Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} 
      />
    </div>
  )
  // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App'))
}

export default app;

