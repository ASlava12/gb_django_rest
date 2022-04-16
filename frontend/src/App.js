import React from 'react';
import './App.css';
import UserList from './components/User.js'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': [
        {
          "username": "test",
          "first_name": "Pert",
          "last_name": "Petrovich",
          "email": "test@aaa.ru"
        }
      ]
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users')
      .then(response => {
        const users = response.data
        this.setState({
          'users': users
        })
      }).catch(error => console.log(error))
  }

  render () {
    return (
      <div>
        <UserList users={this.state.users} />
      </div>
    )
  }
}

export default App;
