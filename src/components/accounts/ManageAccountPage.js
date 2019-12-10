import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAccounts, saveAccount } from "../../redux/actions/accountActions";
import PropTypes from "prop-types";
import AccountForm from "./AccountForm";
import { newAccount } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

export function ManageAccountPage({
  account,
  accounts,
  getAccounts,
  saveAccount,
  history,
  ...props
}) {
  const [account, setAccount] = useState({ ...props.account });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (accounts.length === 0) {
      getAccounts().catch(error => {
        alert("Loading accounts failed" + error);
      });
    } else {
      setAccount({ ...props.account });
    }

    if (professors.length === 0) {
      getProfessors().catch(error => {
        alert("Loading professors failed" + error);
      });
    }
  }, [props.account]);

  function handleChange(event) {
    const { name, value } = event.target;
    setAccount(prevAccount => ({
      ...prevAccount,
      [name]: name === "professorId" ? parseInt(value, 10) : value
    }));
  }

  function formIsValid() {
    const { title, professorId, category } = account;
    const errors = {};

    if (!title) errors.title = "Title is required.";
    if (!professorId) errors.professor = "Professor is required";
    if (!category) errors.category = "Category is required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveAccount(account)
      .then(() => {
        toast.success("Account saved.");
        history.push("/accounts");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return professors.length === 0 || accounts.length === 0 ? (
    <Spinner />
  ) : (
      <AccountForm
        account={account}
        errors={errors}
        professors={professors}
        onChange={handleChange}
        onSave={handleSave}
        saving={saving}
      />
    );
}

ManageAccountPage.propTypes = {
  account: PropTypes.object.isRequired,
  accounts: PropTypes.array.isRequired,
  getAccounts: PropTypes.func.isRequired,
  saveAccount: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getAccountBySlug(accounts, slug) {
  return accounts.find(account => account.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const account =
    slug && state.accounts.length > 0
      ? getAccountBySlug(state.accounts, slug)
      : newAccount;
  return {
    account,
    accounts: state.accounts,
    professors: state.professors
  };
}

const mapDispatchToProps = {
  getAccounts,
  saveAccount
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageAccountPage);
