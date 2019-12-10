import React from "react";
import { connect } from "react-redux";
import * as transactionActions from "../../redux/actions/transactionActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import TransactionList from "./TransactionList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";

class TransactionsPage extends React.Component {
  state = {
    redirectToAddCoursePage: false
  };

  componentDidMount() {
    const { transactions, actions } = this.props;
    if (transactions.length === 0) {
      actions.getTransactions().catch(error => {
        alert("Loading transactions failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/account" />}
        <h2>Transactions</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
            <>
            <hr/>
            <div className="row">
              <div className="col-md-4">
                <label >Account</label>
                <select className="form-control" name="accountId">
                  <option value="d585fecc-4985-48a6-b20d-507e113255d0">d585fecc-4985-48a6-b20d-507e113255d0</option>
                </select>
              </div>
              <div className="col-md-3">
               <label >Start date</label>
                <input type="date" className="form-control"/>
              </div>
              <div className="col-md-3">
              <label >End date</label>
                <input type="date" className="form-control"/>
              </div> 
              <div className="col-md-2">
                <button
                  style={{ marginBottom: 20 }}
                  className="btn btn-primary add-course"
                  onClick={() => this.setState({ redirectToAddCoursePage: true })}
                >
                  Search
              </button>
              </div>
            </div>
            <hr/>
              <TransactionList
                transactions={this.props.transactions}
              />
            </>
          )}
      </>
    );
  }
}

TransactionsPage.propTypes = {
  transactions: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    transactions: state.transactions,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getTransactions: bindActionCreators(transactionActions.getTransactions, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsPage);
