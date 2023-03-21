import React from 'react';
import Bank from './Bank'
import "./Home.css";


export default class Home extends React.Component {

    state = {
        wusername: "",
        wamt: "",
        dusername: "",
        damt: "",
        balance:""
    }
    ondUnamechange = (event) => {
        this.setState({ dusername: event.target.value })

    }
    ondAmtchange = (event) => {
        this.setState({ damt: event.target.value })

    }
    onwUnamechange = (event) => {
        this.setState({ wusername: event.target.value })

    }
    onwAmtchange = (event) => {
        this.setState({ wamt: event.target.value })

    }
    deposit = (event) => {
        event.preventDefault();
        let uname = this.state.dusername
        let amt = Number(this.state.damt)
        //let data = Bank.getAccData();
        Bank.deposit(uname,amt)
        .then(response=>{
          console.log(response);
          this.setState({balance:response.data.balance})
          alert(response.data.message)
        })
        .catch(err=>{
          console.log(err);
          alert(err.response.data.message)
        })
        // if (uname in data) {
        //     data[uname]["bal"] += amt
        //     alert(`Deposit successfull. Balance=${data[uname]["bal"]}`)
        //
        //     data[uname]["history"].push({
        //         typeofTransaction: "debit",
        //         amount: amt
        //     })
        //     Bank.saveData()
        //     this.setState({ balance: data[uname]["bal"] })
        //
        //
        // }
        // else
        //     alert("invalid username")
    }

    withdraw = (event) => {
        event.preventDefault();

        let uname = this.state.wusername;
        let amt = Number(this.state.wamt);
        Bank.withdraw(uname,amt)
        .then(response=>{
          console.log(response);
          this.setState({balance:response.data.balance})
          alert(response.data.message)
        })
        .catch(err=>{
          console.log(err);
          alert(err.response.data.message)
        })
        // let data = Bank.getAccData();
        // if (uname in data) {
        //     if (data[uname]["bal"] < amt) {
        //         alert("Low Balance")
        //
        //     }
        //     else {
        //         data[uname]["bal"] -= amt
        //         alert("withdraw Successfull. current balance=" + data[uname]["bal"])
        //
        //         data[uname]["history"].push({
        //             typeofTransaction: "withdraw",
        //             amount: amt
        //         });
        //         Bank.saveData();
        //         this.setState({ balance: data[uname]["bal"] })
        //
        //     }
        //
        //
        // }
        // else
        //     alert("invalid username")

    }


    render() {
        return (
            <div>
                <div className="container">


                    <div classNameName="card-header">
                        <h5>Balance:{this.state.balance}</h5>
                    </div>
                    <div className="row">

                        <div className="col-4 box-form" >
                            <h3>Withdraw</h3>
                            <form onSubmit={this.withdraw}>
                                <div className="input-group mb-3">

                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Username:</span>
                                    </div>
                                    <input type="text" value={this.state.wusername} onChange={this.onwUnamechange} className="form-control" placeholder="" aria-label="Username"
                                        aria-describedby="basic-addon1" id="uname2" />
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Amount:</span>
                                    </div>
                                    <input type="number" value={this.state.wamt} onChange={this.onwAmtchange} className="form-control" placeholder="" aria-label="Recipient's username"
                                        aria-describedby="basic-addon2" id="am2" />

                                </div>
                                <button type="submit" className="btn btn-primary" >Withdraw</button>
                            </form>

                        </div>
                        <div className="col-4"></div>
                        <div className="col-4 box-form" >
                            <h3>Deposit</h3>
                            <form onSubmit={this.deposit}>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Username:</span>
                                    </div>
                                    <input type="text" value={this.state.dusername} onChange={this.ondUnamechange} className="form-control" placeholder="" aria-label="Username"
                                        aria-describedby="basic-addon1" id="uname1" />
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Amount:</span>
                                    </div>
                                    <input type="number" value={this.state.damt} onChange={this.ondAmtchange} className="form-control" placeholder="" aria-label="Recipient's username"
                                        aria-describedby="basic-addon2" id="am1" />

                                </div>
                                <button type="submit" className="btn btn-primary" >Deposit</button>
                            </form>
                        </div>



                    </div>


                </div>
            </div>
        )
    }
    // componentDidMount(){
    //   alert("rr")
    //   Bank.userData(response=>{
    //     console.log("dey");
    //     this.setState({username:response.data.username,
    //     balance:response.data.balance})
    //   })
    // }
}
