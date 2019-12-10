import React from "react";
import { connect } from "react-redux";
import * as accountActions from "../../redux/actions/accountActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import AccountList from "./AccountList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";

class AccountsPage extends React.Component {
  state = {
    redirectToAddAccountPage: false
  };

  componentDidMount() {
    const { accounts, actions } = this.props;
    if (accounts.length === 0) {
      actions.getAccounts().catch(error => {
        alert("Loading accounts failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        {this.state.redirectToAddAccountPage && <Redirect to="/account" />}
        <h2>Accounts</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
            <>
              <button
                style={{ marginBottom: 20 }}
                className="btn btn-primary add-account"
                onClick={() => this.setState({ redirectToAddAccountPage: true })}
              >
                Add Account
            </button>

              <AccountList
                accounts={this.props.accounts}
              />
            </>
          )}
      </>
    );
  }
}

AccountsPage.propTypes = {
  accounts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    accounts: state.accounts,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getAccounts: bindActionCreators(accountActions.getAccounts, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsPage);
