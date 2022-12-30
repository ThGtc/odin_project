import React from "react";

const EducationalExperience = (props) => {

  return(
      <div>
          <form id='educationalExperience' onSubmit={props.onSubmitTask}>
              <fieldset className="basicForm">
                <legend>Études effectuées</legend>
                <label htmlFor='schoolName'>Nom de l'établissement</label>
                <input onChange={props.handleEducationalExp} type='text' id='schoolName' required/>

                <label htmlFor='graduateCourse'>Matière étudiée</label>
                <input onChange={props.handleEducationalExp} type='text' id='graduateCourse' required/>

                <label htmlFor='dateOfStudy'>Année d'obtention du diplôme</label>
                <input onChange={props.handleEducationalExp} type='date' id='dateOfStudy' required/>

                <button className='submitBtn' type='submit'>Ajouter un diplôme</button>
              </fieldset>
            </form>
      </div>
  )
}


export default EducationalExperience;