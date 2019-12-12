import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
//import ProductPage from "./products/ProductsPage";

import Header from "./common/Header";

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
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductsPage from "./products/ProductsPage";


function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={ProductsPage} /> 
        <Route path="/about" component={AboutPage} />     
        <Route path="/course" component={ManageCoursePage} />

        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
