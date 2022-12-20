import React, {Component} from 'react'
import {getUser, updateUser} from '../../API/usersModel'
import UsersForm from '../../Components/UsersForm'

class EditPage extends Component{

    state = {
        user: {
            name: '',
            email: ''
        }
    }

    componentDidMount = () => {
        // @todo: replace this code to useParams()
        // if react-router-dom > 0.5
        const userID = this.props.match.params.id
        getUser(userID).then(res => {
            this.setState({
                user: res.data
            })
        }).catch(err => {
            alert('Error accourding Get User!')
        })
    }

    updateUser = (values) => {
        const userID = this.state.user.id
        updateUser(userID, values).then(() => {
            alert('User Updated SuccessFully!')
        // @todo: replace this code to useNavigate()
        // if react-router-dom > 0.5 
            this.props.history.push('/users')
        }).catch(err => {
            alert('Error accourding Update User!')
        })
    }

    render() {
        return(
            <div>
                <h2 className="display-4">Edit Page..</h2>
                <UsersForm values={this.state.user} onSubmit={this.updateUser}/>
            </div>
        )
    }
}

export default EditPage
