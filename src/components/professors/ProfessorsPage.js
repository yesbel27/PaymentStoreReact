import React from "react";
import { connect } from "react-redux";
import * as professorActions from "../../redux/actions/professorActions";
import Spinner from "../common/Spinner";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import ProfessorList from "./ProfessorList";
import { toast } from "react-toastify";
import { bindActionCreators } from "redux";

class ProfessorsPage extends React.Component{
     estate={
         redirectToAddProfessorPage: false
     };

     componentDidMount() {
        const { professors, actions } = this.props;
    
        if (professors.length === 0) {
          actions.getProfessors().catch(error => {
            alert("Loading professors failed" + error);
          });
        }
      }

     handleDeleteProfessor=async professor=>{
        try{
            await this.props.actions.deleteProfessor(professor)
            toast.success("Professor deleted");
        }catch(error){
            toast.error("Delete failed: "+error.message, {autoClose: false});
        }
     }

     render(){
         return(
             <>
                {this.redirectToAddProfessorPage && <Redirect to="/professor"/>}
                <h2>Professors</h2>
                {this.props.loading ?(
                    <Spinner />
                ):(
                    <>
                        <button 
                            style={{marginBottom:20}}
                            className="btn btn-primary add-professor"
                            onClick={()=>this.setState({redirectToAddProfessorPage:true})}
                        >
                            Add Professor
                        </button>
                        <ProfessorList 
                            onDeleteClick={this.handleDeleteProfessor}
                            professors={this.props.professors}
                        />
                    </>
                )}
             </>
         );
     }
}

function mapStateToProps(state){
    return {
        professors:state.professors,
        loading: state.apiCallsInProgress>0
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            getProfessors: bindActionCreators(professorActions.getProfessors,dispatch),
            deleteProfessor: bindActionCreators(professorActions.deleteProfessor,dispatch)
        }
    };
}

ProfessorsPage.propTypes={
    professors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    loading:PropTypes.bool.isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(ProfessorsPage);