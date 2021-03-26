// create your App component here
import React, { Component } from 'react'

class App extends Component {

  state = {
      peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(({people}) => this.setState({ peopleInSpace: people }))

  }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((person, id) => 
        <h3 key={id}>Name: {person.name}, Craft: {person.craft}</h3>)}
      </div>
    )
  }



}

export default App