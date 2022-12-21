import React, {Component} from 'react'
import {createUser} from '../../API/usersModel'
import UsersForm from '../../Components/UsersForm'

class CreatePage extends Component{

    state = {
        user: {
            name: '',
            email: ''
        }
    }

    createUser = (values) => {
        createUser(values).then(() => {
            this.setState({
                user: {
                    name: '',
                    email: ''
                }
            })
            alert('User Created SuccessFully!')
        // @todo: replace this code to useNavigate()
        // if react-router-dom > 5.0
        this.props.history.push('/users') 
        }).catch(err => {
            alert('Error accourding Create User!')
        })
    }

    render() {
        return(
            <div>
                <h2 className="display-4">Create Page..</h2>
                <UsersForm values={this.state.user} onSubmit={this.createUser}/>
            </div>
        )
    }
}

export default CreatePage
