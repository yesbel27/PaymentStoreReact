import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TransactionList = ({ transactions}) => (
  <table className="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Source Account</th>
        <th>Destination Account</th>
        <th>Amount</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {transactions.map(transaction => {
        return (
          <tr key={transaction.transactionId}>
            <td>
              <Link to={"/transaction/" + transaction.transactionId}>{transaction.transactionId}</Link>
            </td>
            <td>{transaction.sourceAaccount}</td>
            <td>{transaction.destinationAccount}</td>
            <td>{transaction.amount}</td>
            <td>
              {transaction.transactionType}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired,
  
};

export default TransactionList;
