import axios from 'axios';

const baseUrl = "http://localhost:4000/";

let data = {
    test1: { username: "test1", pw: "pw", acno: 123456, bal: 5000, history: [] },
    test2: { username: "test2", pw: "pw", acno: 1234567, bal: 6000, history: [] },
    test3: { username: "test3", pw: "pw", acno: 1234568, bal: 7000, history: [] },
    test4: { username: "test4", pw: "pw", acno: 1234569, bal: 8000, history: [] },
}
let newData = localStorage.getItem("data");
if (newData) {
    data = JSON.parse(newData); //convert string to object back

}
// console.log(newData)

export default class Bank {
    state = {
        balance: ""
    }
    static currentuser = "";


    static getAccData() {

        return data
    }
    static addUser(uname, pw, acno) {

        data[uname] = { uname, pw, acno, bal: 0, history: [] }
        Bank.saveData();


    }
    static getHistory() {
        return (data[Bank.getUser()].history);
    }
    static getUser() {
        return (localStorage.getItem("currentuser"))
    }
    static getUsers() {
        return data;
    }
    static deleteUser(uname) {
        delete data[uname]
    }

    static setCurrentuser(uname) {
        localStorage.setItem("currentuser", uname);

    }
    static saveData() {
        localStorage.setItem("data", JSON.stringify(data))
    }
    static login(username, password) {
        return axios.post(baseUrl + "users/login", {
            username,
            password
        }, { withCredentials: true })
    }
    static deposit(username, amount) {
        return axios.post("http://localhost:4000/users/deposit", {
            username,
            amount
        }, { withCredentials: true })
    }
    static withdraw(username, amount) {
        return axios.post("http://localhost:4000/users/withdraw", {
            username,
            amount
        }, { withCredentials: true })
    }
    static history() {
        return axios.get("http://localhost:4000/users/transactionhistory",
            { withCredentials: true })
    }
    static register(username, password, conpass, acntno) {
        return axios.post(baseUrl + "users/register", {
            username,
            password,
            conpass,
            acntno
        })
    }
    // static userData(){
    //
    //     return axios.get("http://localhost:4000/users/userData",
    //     {withCredentials:true})
    // }

}
