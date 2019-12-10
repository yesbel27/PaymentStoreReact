import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";


const AccountForm = ({
    account,
    onSave,
    onChange,
    saving = false,
    errors = {}
}) => {
    return (
        <form onSubmit={onSave}>
            <h2>{account.id ? "Edit" : "Add"} account</h2>
            {errors.onSave && (
                <div className="alert alert-danger" role="alert">
                    {errors.onSave}
                </div>
            )}
            <TextInput
                name="customerId"
                label="customerId"
                value={account.customerId}
                onChange={onChange}
                error={errors.customerId}
            />

            <TextInput
                name="firstName"
                label="firstName"
                value={account.firstName}
                onChange={onChange}
                error={errors.firstName}
            />

            <TextInput
                name="lastName"
                label="lastName"
                value={account.lastName}
                onChange={onChange}
                error={errors.lastName}
            />

            <TextInput
                name="identityDocumentNumber"
                label="identityDocumentNumber"
                value={account.identityDocumentNumber}
                onChange={onChange}
                error={errors.identityDocumentNumber}
            />

            <button type="submit" disabled={saving} className="btn btn-primary">
                {saving ? "Saving..." : "Save"}
            </button>
        </form>
    );
};

AccountForm.propTypes = {
    account: PropTypes.object.isRequired,
    errors: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool
};

export default AccountForm;