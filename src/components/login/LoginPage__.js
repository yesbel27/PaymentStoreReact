import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {
 


    render() {

        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {

    };
}

function mapDispatchToProps(dispatch){
    return{
        actions:{

        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);