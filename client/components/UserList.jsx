import React from 'react'
import request from 'superagent'

import AddDev from './AddDev'

class UserList extends React.Component {
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
  this.setState( {
      users: res.body.users
  })
})
}

render() {
    return (
        <div>
            <h1>Listing Users...</h1>
         {this.state.users.map((user) => {
             return <li key={user.id}>{user.name} <br/>{user.email} </li>
         })}
         <AddDev refresh={this.loadUsers}/>
        </div>
    )
}
}

export default UserList