import { connect } from "react-redux";

export function ManagerProfessorPage({professor,professors}){

}

export function findProfessorById(id){
    return professors.find(professor=>professor.id===id) || null;
}

const mapStateToProps=(state,id)=>{
    const professor=findProfessorById(id);
    return{
        professor:professor,
        professors:state.professors
    };
};

const wrapper=connect(mapStateToProps);
const component=wrapper(ManagerProfessorPage);

export default component;