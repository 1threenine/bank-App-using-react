import React from 'react';
import Bank from './Bank'
import './Login.css';
import {
    withRouter
} from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'

const loginValidations = Yup.object().shape({
    username: Yup.string()
    .min(2, "username should be greater than 2")
    .max(20,'too long')
    .required("required"),
    password: Yup.string()
    .min(2, "pw should be greater than 2")
    .required("required")
});



class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }
    onUnamechange = (event) => {
        this.setState({ username: event.target.value })

    }
    onPwchange = (event) => {
        this.setState({ password: event.target.value })

    }
    onSub = (values) => {
        //event.preventDefault();

        let uname = values.username
        let pw = values.password

        Bank.login(uname, pw)
            .then(response => {
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
        //     let pws = data[uname]["pw"]
        //     if (pw === pws) {
        //         console.log("dey")
        //         alert("Succsess")
        //         localStorage.setItem("currentuser",uname)
        //        this.props.history.push("/Home")

        //     }
        //     else {
        //         alert("wrong pw")
        //     }

        // }
        // else
        //     alert("invalid username")
    }

    render() {
        return (

            <div className="container">

                <div className="row">

                    <div className="card box-form" >
                        <Formik initialValues={{
                            username: '',
                            password: ''
                        }} 
                        validationSchema={loginValidations} onSubmit={this.onSub}>
                            {({ errors, touched }) => (
                                <Form >
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Username:</span>
                                        </div>
                                        <Field name="username" />
                                        {errors.username?<span>{errors.username}</span>:null}
                                    </div>

                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Password:</span>
                                        </div>
                                        <Field name="password" type="password" />
                            {errors.password?<span>{errors.password}</span>:null}
                                    </div>

                                    <button type="submit" className="btn btn-primary" >Login</button>
                                </Form>)}

                        </Formik>
                    </div>
                </div>
            </div>

        );
    }
}

export default withRouter(Login);
