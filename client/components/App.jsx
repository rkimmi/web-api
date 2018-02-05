import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import request from 'superagent'

import UserList from './UserList'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

componentDidMount() {
  this.loadUsers()
}

loadUsers() {
  request
  .get('/users')
  .then(res => {
      console.log(res)
      this.setState( {
          users: res.body.users
      })
  })
}

    render() {
        return (
            <Router>
            <div>
             <Route exact path='/' component={UserList} />
            </div>
            </Router>
        )
    }
}

export default App
