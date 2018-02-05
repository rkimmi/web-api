import React from 'react'
import request from 'superagent'


class UserProfile extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
           user:  {} // just one
       }
    }

componentDidMount() {
    this.showUser()
}

showUser() {
    request 
    .get(`/users/${this.props.match.params.id}`)
    .then(res => {
        this.setState = {
            user: res.body.user
        }
    })
}

    render () {
        return (
            <div>
                <h2>Name:</h2><h3>{this.state.user.name}</h3>
                <h2>Email:</h2><h3>{this.state.user.email}</h3>
            </div>
        ) 
    }

}

export default UserProfile