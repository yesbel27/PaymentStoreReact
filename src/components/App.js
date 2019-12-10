import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import AccountsPage from "./accounts/AccountsPage"
import BlockAcount from "./accounts/BlockAcount"
import Customer from "./Customer/Customer"
import ListCustomer from "./Customer/ListCustomer"
import ListTransactions from "./Transactions/ListTransactions"

import CoursesPage from "./courses/CoursesPage";
import TransferMoney from "./transfer/TransferMoney"
import Deposit from "./Transactions/Deposit";
import Withdrawal from "./Transactions/Withdrawal";

import ProfessorsPage from "./professors/ProfessorsPage";
import TransactionsPage from "./Transactions/TransactionsPage";
import TransactionList from "./Transactions/TransactionList";
import ManageCoursePage from "./courses/ManageCoursePage"; // eslint-disable-line import/no-named-as-default
//import ManageAccountPage from "./accounts/ManageAccountPage"; // eslint-disable-line import/no-named-as-default
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/accounts" component={AccountsPage} />
        <Route path="/BlockAcount" component={BlockAcount} />
        <Route path="/customer" component={Customer} />
        <Route path="/ListCustomer" component={ListCustomer} />
        <Route path="/ListTransactions" component={ListTransactions} />

        <Route path="/TransferMoney" component={TransferMoney} />
        <Route path="/Deposit" component={Deposit} />
        <Route path="/Withdrawal" component={Withdrawal} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/transactions" component={TransactionsPage} />
        <Route path="/TransactionList" component={TransactionList} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
      
        <Route path="/professors" component={ProfessorsPage} />

        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
