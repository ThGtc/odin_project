import React from "react";

const WorkExperience = (props) => {

    return(
        <div>
            <form id='workExperience' onSubmit={props.onSubmitTask}>
                <fieldset className="basicForm">
                    <legend>Expérience profesionnelle</legend>
                    <label htmlFor='companyName'>Nom de l'employeur</label>
                    <input onChange={props.handleWorkExperience} type='text' id='companyName' required/>
    
                    <label htmlFor='positionTitle'>Intitulé du poste</label>
                    <input onChange={props.handleWorkExperience} type='text' id='positionTitle' required/>
    
                    <label htmlFor='mainTasks'>Principales missions effectuées</label>
                    <input onChange={props.handleWorkExperience} type='textArea' id='mainTasks' required/>
    
                    <label htmlFor='hiringDate'>Date d'embauche</label>
                    <input onChange={props.handleWorkExperience} type='date' id='hiringDate' required/>
    
                    <label htmlFor='leavingDate'>Date de départ</label>
                    <input onChange={props.handleWorkExperience} type='date' id='leavingDate' required/>
    
                    <button className='submitBtn' type='submit'>Ajouter une expérience profesionnelle</button>          
                </fieldset>
            </form>
        </div>
    )
}

export default WorkExperience;