import React from 'react';
import { withRouter } from 'react-router-dom';
import Bank from './Bank';


class Users extends React.Component {
    deleteUser=(username)=>{
        Bank.deleteUser(username)
        this.setState({})
    }

    render() {

        let users = Bank.getUsers();
        
        return (
            <div>
                <h2>Users</h2>

                <table className="table" >
                    <tr>
                        <th>Users</th>
                        <th>balance</th>
                    </tr>

                    {
                        Object.keys(users).map(key => <tr>
                            <td>{users[key].username}</td>
                            <td>{users[key].bal}</td>
                            <td onClick={()=>{this.deleteUser(key)}}>Delete</td>
                        </tr>)

                    }

                </table>

            </div>
        );
    }
}

export default withRouter(Users);