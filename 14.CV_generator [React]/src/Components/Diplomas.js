import React from "react";

const Diplomas = (props) => {

    return(
        <div>
            <h3 className="interTitles">Formations :</h3>
            {props.diplomas.map((diploma) => {
                return <li 
                    id={diploma.id} key={diploma.id}> {diploma.schoolName} : {diploma.degreeName} - {diploma.yearGraduated}  
                    <button className="delBtn" title="Supprimer le diplôme" onClick={props.onDeleteElement} id={diploma.id}>x</button>
                    {/* <button onClick={this.props.onEditEducationElement} id={diploma.id}>Edit</button> */}
                    </li>
            })}
        </div>
    )
}

export default Diplomas;