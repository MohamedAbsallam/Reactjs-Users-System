import React, {Component} from 'react'
import {getUser} from '../../API/usersModel'
import ViewUser from '../../Components/ViewUser'


class UserPage extends Component{
    
    state = {
        user: {}
    }

    componentDidMount = () => {
        // @todo: replace this code to useParams()
        // if react-router-dom > 5.0 
        const userID = this.props.match.params.id
        getUser(userID).then(res => {
            this.setState({
                user: res.data
            })
        }).catch(err => {
            alert('Error accourding Get User!')
        })
    }  
    
    render() {
        return(
            <div>
                <h2 className="display-4">User Page!</h2>
                    <ViewUser user={this.state.user}/>
            </div>
        )
    }
}

export default UserPage
