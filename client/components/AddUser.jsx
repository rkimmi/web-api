import React from 'react'
import request from 'superagent'

class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
     this.setState({
       [e.target.name]: e.target.value // used on event handlers 
     })
    }

    handleClick(e) {
        request 
        .post('/api/v1/users')
        .set('Content-Type', 'application/json')
        .send(this.state)
        .then(() => {
            this.props.refresh()
        })
    }

    render() {
        return (
            <form>
                <div>
                    <input name='name' onChange={this.handleChange}/>
                    <button type='button' onClick={this.handleClick}> Add user </button>
                </div>
            </form>
        )
    }
}

export default AddUser