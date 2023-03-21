import React from 'react';
//import { withRouter } from 'react-router-dom';
import Bank from './Bank';


class Transaction extends React.Component {
  state={
    history: []
  }

    render() {

        //let history = Bank.getHistory();

        return (
            <div>
                <h2>Transaction History</h2>

                <table className="table" >
                    <tr>
                        <th>Type Of Transaction</th>
                        <th>Amount</th>
                    </tr>
                    {
                    this.state.history.length===0?
                    <tr><td>No Data</td></tr>:null
                    }
                    {
                        this.state.history.map(h => <tr>
                            <td>{h.typeOfTransaction}</td>
                            <td>{h.amount}</td>
                        </tr>)

                    }


                </table>

            </div>
        );
    }
    componentDidMount(){
      Bank.history()
      .then(response=>{
        this.setState({history:response.data.history})
      })
      .catch(err=>{
        console.log(err);
      })

    }
}

export default Transaction;
