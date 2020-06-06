// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person'

// const app = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Kurt', age: 21 },
//       { name: 'Gene', age: 19 },
//       { name: 'Max', age: 28 }
//     ],
//     showPersons: false
//   })

//   const [otherState, someOtherState] = useState('some other value')

//   console.log(personsState, otherState)

//   const switchNameHandler = (newName) => {
//     // DON'T DO THIS > personsState.persons[1].name = 'Alyssa'
//     setPersonsState( { 
//       persons: [
//         { name: newName, age: 21 },
//         { name: 'Alyssa', age: 19 },
//         { name: 'Max', age: 28 }
//       ]
//     } )
//   }

//   const nameChangeHandler = (event) => {
//     setPersonsState( { 
//       persons: [
//         { name: 'Kurt', age: 21 },
//         { name: event.target.value, age: 19 },
//         { name: 'Max', age: 28 }
//       ]
//     } )
//   }

//   const togglePersonsHandler = () => {
//     const doesShow = setPersonsState.showPersons
//     setPersonsState({ showPersons: !doesShow })
//   }


//   const style = {
//     backgroundColor: 'white',
//     font: 'inherit',
//     border: '1px solid blue',
//     padding: '8px',
//     cursor: 'pointer'
//   }

//   let persons = null

//   if ( setPersonsState.showPersons ) {
//     persons = (
//       <div>
//       <Person 
//         name={personsState.persons[0].name} 
//         age={personsState.persons[0].age} 
//       />
//       <Person 
//         name={personsState.persons[1].name} 
//         age={personsState.persons[1].age} 
//       click={switchNameHandler.bind(this, '121231')}
//       changed={nameChangeHandler}>
//         My Hobbies: Racing
//       </Person>
//       <Person 
//         name={personsState.persons[2].name} 
//         age={personsState.persons[2].age} 
//       />
//     </div>
//     )
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App!!!</h1>
//       <p>this is really working</p> 
//       <button 
//         style={style}
//         onClick={() => togglePersonsHandler}>Switch Name
//       </button>
//       {persons}
//     </div>
//   )
  // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App'))
// }

// export default app;


// import React, { Component } from 'react';
// import './App.css';
// import Validation from './Validation/Validation'
// import Char from './Char/Char'

// class App extends Component {
//   state = {
//     userInput: ''
//   }

//   inputChangeHandler = (event) => {
//     this.setState({userInput: event.target.value})
//   }

//   deleteCharHandler = (index) => {
//     const text = this.state.userInput.split('')
//     text.splice(index, 1)
//     const updatedText = text.join('')
//     this.setState({userInput: updatedText})
//   }

//   render() {
//     const charList = this.state.userInput.split('').map((ch, index) => {
//       return <Char 
//                 character={ch} 
//                 key={index}
//                 clicked={() => this.deleteCharHandler(index)} />
//     })
    
//     return (
//       <div className="App">
//         <input 
//           type="text" 
//           onChange={this.inputChangeHandler} 
//           value={this.state.userInput} />
//           <p>{this.state.userInput}</p>
//           <Validation inputLength={this.state.userInput.length} />
//           {charList}
//       </div>
//     )
//   }
// }

// export default App;


import React, { Component } from 'react'

import './App.css'
import Person from './Persons/Person/Person'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {
  state = {
    persons: [
      { id: 't5gge5' ,name: 'Max', age: 28 },
      { id: '33t23g' ,name: 'Manu', age: 29 },
      { id: 'ag4erg' ,name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState( {persons: persons} )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState( { showPersons: !doesShow } )
  }

  render () {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )
      
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App
