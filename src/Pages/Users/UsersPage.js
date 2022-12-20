import React, {Component} from 'react'
import {getUsers, deleteUser} from '../../API/usersModel'
import {Link} from 'react-router-dom'

class UsersPage extends Component{

    state = {
        users: []
    }

    componentDidMount = () => {
        // Get Users From API
        getUsers().then(res => {
            // Store Users in Users Array
            this.setState({
                users: res.data
            })
        // Handling Error
        }) .catch(err => {
            alert('Error accourding Get Users!')
        })
    }

    deleteUser = (user) => {
        // Delete User From API
        deleteUser(user.id).then(() => {
            // Delete User From State
            const users = [...this.state.users]
            const index = users.indexOf(user)
            users.splice(index, 1)
            this.setState({
                users
            })
            alert('User Deleted SuccessFully!')
        // Handling Error
        }).catch(err => {
            alert('Error accourding Delete User!')
        })
    }

    render() {
        return(
            <div>
                <h2 className="display-4">Users Page!</h2>
                <ul>
                    {this.state.users.map(user => 
                    <li key={user.id}>{user.name} {' '}
                    <Link to={'/users/'+user.id}>View</Link> {' '}
                    <Link to={'/users/edit/'+user.id}>Edit</Link> {' '}
                    <button onClick={() => this.deleteUser(user)} className='btn btn-light btn-sm'>Delete</button>
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default UsersPage