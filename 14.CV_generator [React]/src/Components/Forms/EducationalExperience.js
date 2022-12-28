import React, { Component } from "react";

class EducationalExperience extends Component {

    constructor(props){
      super(props)
    }

    render(){
        return(
            <div>
               <form id='educationalExperience' onSubmit={this.props.onSubmitTask}>
                    <fieldset className="basicForm">
                      <legend>Études effectuées</legend>
                      <label htmlFor='schoolName'>Nom de l'établissement</label>
                      <input onChange={this.props.handleEducationalExp} type='text' id='schoolName' required/>
      
                      <label htmlFor='graduateCourse'>Matière étudiée</label>
                      <input onChange={this.props.handleEducationalExp} type='text' id='graduateCourse' required/>
      
                      <label htmlFor='dateOfStudy'>Année d'obtention du diplôme</label>
                      <input onChange={this.props.handleEducationalExp} type='date' id='dateOfStudy' required/>
      
                      <button className='submitBtn' type='submit'>Ajouter un diplôme</button>
                    </fieldset>
                  </form>
            </div>
        )
    }
}

export default EducationalExperience;