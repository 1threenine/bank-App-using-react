import React from 'react';
import Bank from './Bank'
import {
    withRouter
} from 'react-router-dom'

class Reg extends React.Component {

    state = {
        username: "",
        pw: "",
        cpw: "",
        acno: ""
    }
    onUnamechange = (event) => {
        this.setState({ username: event.target.value })

    }
    onPwchange = (event) => {
        this.setState({ pw: event.target.value })

    }
    onCpwchange = (event) => {
        this.setState({ cpw: event.target.value })

    }
    onAcnochange = (event) => {
        this.setState({ acno: event.target.value })

    }
    onSub = () => {
        let uname = this.state.username
        let pw = this.state.pw;
        let cpw = this.state.cpw;
        let acno = Number(this.state.acno);
        Bank.login(uname,pw,cpw,acno)
        .then(response=>{
            console.log(response)
            alert(response.data.message)
            this.props.history.push("/Home")

        })
        .catch(function (err) {
    console.log(err);
    alert(err.response.data.message)


        })
        // let data = Bank.getAccData();
        // if (uname in data) {
        //     alert("username Exist")
        //
        // }
        // else if (pw !== cpw) {
        //     alert("cpw wrong ")
        // }
        //
        //
        // else{
        //     Bank.addUser(uname,pw,acno);
        //     alert("Accont created")
        //     this.props.history.push("/")
        //     Bank.saveData()
        //
        // }
    }

    render() {
        return (

            <div className="container">

                <div className="row">

                    <div className="card box-form" >
                        <form onSubmit={this.onSub}>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Username:</span>
                                </div>
                                <input type="text" value={this.state.username} onChange={this.onUnamechange} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" id="uname" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Acc No:</span>
                                </div>
                                <input type="number" value={this.state.acno} onChange={this.onAcnochange} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" id="uname" />
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Password:</span>
                                </div>
                                <input type="password" value={this.state.pw} onChange={this.onPwchange} className="form-control" placeholder="Password" id="pw" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Confirm Password:</span>
                                </div>
                                <input type="password" value={this.state.cpw} onChange={this.onCpwchange} className="form-control" placeholder="Password" id="pw" />
                            </div>

                            <button type="submit" className="btn btn-primary" >Login</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }

}
export default withRouter(Reg);
