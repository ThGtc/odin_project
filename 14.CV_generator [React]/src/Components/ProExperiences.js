import React from "react";

const Diplomas = (props) => {

    return(
        <div>
            <h3 className="interTitles">Expériences professionnelles :</h3>
            {props.jobs.map((job) => {
                return <li 
                    key={job.id}> {job.companyName} : {job.positionTitle} - {job.hiringDate} 
                    <button className="delBtn" title="Supprimer l'expérience pro" onClick={props.onDeleteWorkElement} id={job.id}>x</button>
                    </li>
            })}
        </div>
    )
}



export default Diplomas;