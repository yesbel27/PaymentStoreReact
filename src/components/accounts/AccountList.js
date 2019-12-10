import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AccountList = ({ accounts}) => (
  <table className="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Balance</th>
        <th>Overdraft Limit</th>
        <th>State</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {accounts.map(account => {
        return (
          <tr key={account.accountId}>
            <td>
              <Link to={"/account/" + account.accountId}>{account.accountId}</Link>
            </td>
            <td>{account.balance}</td>
            <td>{account.overdraftLimit}</td>
            <td>{account.accountState}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

AccountList.propTypes = {
  accounts: PropTypes.array.isRequired,
  
};

export default AccountList;
